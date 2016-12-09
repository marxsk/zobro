import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  StyleSheet, Alert
} from 'react-native';
import * as scenes from '../scenes';

import AlphabetListView from 'react-native-alphabetlistview';
import animalDb from '../animals';

var navigator;
var bg;

class Cell extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight
        onPress={() => scenes.navigatePush(navigator, scenes.ANIMAL_DETAIL, {animal: this.props.item.animal})}
        underlayColor='#bbbbbb'
      >
      <View style={{height:30, paddingLeft: 5}}>
        <Text style={{color: 'white'}}>{this.props.item.name}</Text>
      </View>
      </TouchableHighlight>
    );
  }
}
class SectionItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={{
          backgroundColor: this.props.bgColor,
          width: 30,
          height: 30,
          borderLeftWidth: 1,
          borderColor: 'white',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white', textAlign: 'center', fontWeight: '700'}}>{this.props.title}</Text>
        </View>
    );
  }
}
class SectionHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // inline styles used for brevity, use a stylesheet when possible
    var textStyle = {
      textAlign:'center',
      color:'#fff',
      fontWeight:'700',
      fontSize:24
    };

    var viewStyle = {
      backgroundColor: '#104f1f'
    };
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{this.props.title}</Text>
      </View>
    );
  }
}

export default class AnimalListScene extends React.Component {
  constructor(props) {
    super(props);

    navigator = this.props.navigator;
    bg = this.props.bg;
    this.state = this.prepareSortedStructure(animalDb);
  }

  componentWillMount() {
    bg();
  }

  prepareSortedStructure(animals) {
    let state = {
      fullData: {}
    };

    for (let animalID in animals) {
      let animal = animals[animalID];
      let firstLetter = animal.name.charAt(0).toUpperCase();

      if ((firstLetter === 'C') && (animal.name.charAt(1) === 'h')) {
        firstLetter = 'Ch';
      }

      if (!(firstLetter in state.fullData)) {
        state.fullData[firstLetter] = [];
      }

      state.fullData[firstLetter].push(animal);
    };

    for (let letter in state.fullData) {
      state.fullData[letter].sort(function(a, b) {
        return a.name.localeCompare(b.name);
      })
    };

    state['data'] = state.fullData;

    return state;
  }

  setFilter(text) {
    this.setState({
      text: text.text,
      data: this.filter(text.text.toUpperCase()),
    })
  }

  filter(text) {
    let data = {};
    for (let letter in this.state.fullData) {
      for (let idx in this.state.fullData[letter]) {
        if (this.state.fullData[letter][idx].name.toUpperCase().includes(text)) {
          if (!(letter in data)) {
            data[letter] = [];
          }
          data[letter].push(this.state.fullData[letter][idx]);
        }
      }
    }

    if (Object.keys(data).length === 0) {
      data['*'] = [{name: 'Zvíře s požadovaným jménem v zoo chybí'}];
    }
    return data;
  }

  render() {
    return (
      <View style={{flex: 1}}>
      <TextInput
        style={{height: 40, textAlign: 'center', borderColor: 'gray', borderWidth: 1, backgroundColor: 'white'}}
        onChangeText={(text) => this.setFilter({text})}
        value={this.state.text}
        placeholder='Hledat'
        autoCorrect={false}
      />
        <AlphabetListView
          data={this.state.data}
          cell={Cell}
          cellHeight={30}
          sectionListItem={SectionItem}
          sectionHeader={SectionHeader}
          sectionHeaderHeight={22.5}
          compareFunction={(a,b) => {return a.localeCompare(b); }}
          style={{
            backgroundColor: '#104f1f',
          }}
        />
      </View>
    );
  }
}

AnimalListScene.propTypes = {
    bg: React.PropTypes.func.isRequired,
    navigator: React.PropTypes.object.isRequired,
};
