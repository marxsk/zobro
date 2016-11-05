import React from 'react';
import {TabBarIOS, ScrollView} from 'react-native';

import AnimalNeighbourScene from '../components/animalNeighbourScene';
import animals from '../animals';
import * as scenes from '../scenes';

import {TouchableHighlight, View, Text, Navigator, TouchableOpacity, Alert} from 'react-native';
import QrScene from './qrScene';

class AnimalScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'textTab'
    }
  }

  componentWillMount() {
    this.props.bg();
    this.props.setLastAnimal(this.props.animal);

    this.setState({selectedTab: 'textTab'});
  }

  render() {
    const AnimalDetailAdult = animals[this.props.animal].contentAdult;
    const AnimalDetailChild = animals[this.props.animal].contentChild;

    const adultSelected = ((this.state.selectedTab === 'textTab') && (this.props.readerLevel === 'adult'));
    const childSelected = ((this.state.selectedTab === 'textTab') && (this.props.readerLevel === 'child'));

    let AnimalDetail = adultSelected ? AnimalDetailAdult : AnimalDetailChild;

/*    return (
      <View>
        <AnimalDetail />
      </View>
    )
*/
    // @fix: styles should be defined elsewhere
    return (
      <TabBarIOS
          unselectedTintColor="#888888"
          tintColor="#3c3c3b"
          barTintColor="white">
        <TabBarIOS.Item
          title="Text"
          icon={require('../images/icon/t.png')}
          selected={this.state.selectedTab === 'textTab'}
          onPress={() => {
            this.setState({selectedTab: 'textTab'});
          }}
        >
        <ScrollView>
          <AnimalDetail bg={this.props.bg}/>
        </ScrollView>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="QR kód"
          icon={require('../images/icon/qr.png')}
          selected={this.state.selectedTab === 'qrTab'}
          onPress={() => { this.setState({selectedTab: 'qrTab'})}}
        >
          <QrScene cancelButtonVisible={false} navigator={this.props.navigator} bg={this.props.bg}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Sousedi"
          icon={require('../images/icon/neighb.png')}
          selected={this.state.selectedTab === 'neighbourTab'}
          onPress={() => {this.setState({selectedTab: 'neighbourTab'});}}
        >
          <AnimalNeighbourScene navigator={this.props.navigator} animal={this.props.animal} bg={this.props.bg}/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
};

module.exports = AnimalScene;
