import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {TouchableHighlight, View, Text, Navigator, TouchableOpacity, Alert, Image, BackAndroid} from 'react-native';
import styles from '../styles/styles';

import AboutScene from '../components/aboutScene';
import MainMenuScene from '../containers/mainMenuScene';
import AnimalListScene from '../components/animalListScene';
import EventScene from '../containers/eventsScene';
import AnimalNeighbourScene from '../components/animalNeighbourScene';
import AnimalScene from '../containers/animalScene';
import QrScene from '../components/qrScene';
import GameScene from '../components/gameScene';
import VisitorsScene from '../components/visitorsScene';
import ServicesScene from '../components/servicesScene';

import * as scenes from '../scenes';
import {setLastAnimal, setReaderLevel} from '../actions'

var bgMainMenu;
var toggleReader;
var navig;

var NavigationBarRouteMapper = (props) => ({
  LeftButton(route, navigator, index, navState) {
    if (route.id === scenes.MAIN_MENU) {
      return null;
    } else {
      const navBar = styles.otherFontNavBar;
      return (
        <TouchableHighlight style={{justifyContent: 'center', alignItems: 'center', paddingLeft: 10, paddingRight: 20, height: 35}} onPress={() => {
          bgMainMenu();
          navigator.replace({
            id: scenes.MAIN_MENU,
            title: 'Zoo Brno',
          })
        }}>
        <Text style={navBar}>MENU</Text>
        </TouchableHighlight>
      );
    }
  },

  RightButton: function(route, navigator, index, navState) {
    if (route.id === scenes.ANIMAL_DETAIL) {
      let content = null;

      if (props.state.readerLevel === 'adult') {
        content = require('../images/icon/adult.png');
      } else {
        content = require('../images/icon/child.png');
      }

    return (
      <TouchableHighlight onPress={() => {
        toggleReader(props.state.readerLevel);
      }}>
      <Image source={content} resizeMode='cover'/>
      </TouchableHighlight>
    );
    }
  },

  Title: function(route, navigator, index, navState) {
    let navBar = styles.otherFontNavBar;
    if (route.id === scenes.MAIN_MENU) {
      navBar = styles.mainMenuFontNavBar;
    }
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', height: 35}}>
        <Text style={navBar}>{route.title}</Text>
      </View>
    );
  },
});

class ZooApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: scenes.sceneTitles[scenes.MAIN_MENU].bgColor,
    }

    bgMainMenu = () => {this.changeColor(scenes.sceneTitles[scenes.MAIN_MENU].bgColor)};
    toggleReader = (reader) => {this.changeReader(reader)};
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
        if (navig && navig.getCurrentRoutes().length > 1) {
            navig.pop();
            return true;
        }
        // return false = end application on main menu, what is standard?
        // return true = do nothing
        return true;
    });
  }

  renderScene(route, navigator) {
    let bgColor = 'black';
    if (route.id in scenes.sceneTitles) {
      bgColor = scenes.sceneTitles[route.id].barColor;
    };


    switch (route.id) {
      case scenes.MAIN_MENU:
        return (<MainMenuScene navigator={navigator} bg={() => {this.changeColor(bgColor)}} />);
      case scenes.ANIMAL_DETAIL:
        return (<AnimalScene animal={route.animal} navigator={navigator} bg={() => {this.changeColor(bgColor)}}/>);
      case scenes.ABOUT:
          return (<AboutScene navigator={navigator} bg={() => {this.changeColor(bgColor)}}/>);
      case scenes.ANIMAL_LIST:
        return (<AnimalListScene navigator={navigator} bg={() => {this.changeColor(bgColor)}}/>);
      case scenes.EVENTS:
        return (<EventScene navigator={navigator} bg={() => {this.changeColor(bgColor)}}/>);
      case scenes.QR_READER:
        return (<QrScene cancelButtonVisible={false} navigator={navigator} bg={() => {this.changeColor(bgColor)}}/>);
      case scenes.GAME:
        return (<GameScene navigator={navigator} bg={() => {this.changeColor(bgColor)}}/>);
      case scenes.VISITORS:
        return (<VisitorsScene navigator={navigator} bg={() => {this.changeColor(bgColor)}}/>);
      case scenes.SERVICES:
        return (<ServicesScene navigator={navigator} bg={() => {this.changeColor(bgColor)}}/>);
    }
  }

  changeColor(color) {
    this.setState({backgroundColor: color});
  }

  changeReader(reader) {
    if (reader === 'adult') {
      this.props.setReaderLevel('child');
    } else {
      this.props.setReaderLevel('adult');
    }
  }

  render() {
    return (
      <Navigator
        ref={(nav) => { navig = nav; }}
        initialRoute={{ title: 'Zoo Brno', id: scenes.MAIN_MENU }}
        renderScene={(route, navigator) => {
          return this.renderScene(route, navigator);
        }}
        navigationBar={
           <Navigator.NavigationBar
             routeMapper={NavigationBarRouteMapper(this.props)}
             style={[styles.navigationBar, {backgroundColor: this.state.backgroundColor}]}
           />
        }
        style={styles.navigator}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setReaderLevel,
  }, dispatch);
}

export default connect(
  state => ({
    state: state.configuration
  }), mapDispatchToProps)(ZooApp);
