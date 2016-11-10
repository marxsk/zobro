import React from 'react';

import {TabBarIOS} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import AnimalNeighbourScene from '../components/animalNeighbourScene';
import animals from '../animals';
import * as scenes from '../scenes';

import {ScrollView, TouchableHighlight, View, Text, Navigator, TouchableOpacity, Alert} from 'react-native';
import QrScene from './qrScene';
import {Platform} from 'react-native';

export default class AnimalScene extends React.Component {
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

    if (Platform.OS === 'android') {
      return (
      <ScrollableTabView>
        <ScrollView tabLabel='Text'>
          <AnimalDetail bg={this.props.bg}/>
        </ScrollView>
        <AnimalNeighbourScene tabLabel='Sousedi' navigator={this.props.navigator} animal={this.props.animal} bg={this.props.bg}/>
        <QrScene tabLabel='QR kód' cancelButtonVisible={false} navigator={this.props.navigator} bg={this.props.bg}/>
      </ScrollableTabView>
      )
    } else if (Platform.OS === 'ios') {
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
  }
};

AnimalScene.propTypes = {
    bg: React.PropTypes.func.isRequired,
    animal: React.PropTypes.string.isRequired,
//@fix    navigator: React.PropTypes.func.isRequired,
};
