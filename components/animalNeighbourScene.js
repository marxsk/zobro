import React from 'react';
import {
  View,
  Text,
  ListView,
  TouchableHighlight,
} from 'react-native';

import * as scenes from '../scenes';

var animals = require('../animals').default;
var navigator;

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
      <View style={{height:30}}>
        <Text>{this.props.item.name}</Text>
      </View>
      </TouchableHighlight>
    );
  }
}

class AnimalNeighbourScene extends React.Component {
  constructor(props) {
    super(props);
    navigator = this.props.navigator;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
        dataSource: ds.cloneWithRows(
          animals[this.props.animal].neighbours.map(function(v) { return animals[v] })
      )};
  }

  componentWillMount() {
    this.props.bg();
  }

  render() {
    return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(data) => <Cell item={data} />}
        />
    );
  }
}

module.exports = AnimalNeighbourScene;
