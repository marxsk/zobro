import React from 'react';
import Dimensions from 'Dimensions';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableHighlight, Alert
} from 'react-native';
import { connect } from 'react-redux'

import styles from '../styles/styles.ios';
import * as scenes from '../scenes';

class MainMenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight
        underlayColor='#aaaaaa'
        onPress={() => scenes.navigatePush(this.props.navigator, this.props.scene, this.props.sceneProps)}
        >
          <View style={[styles.mainMenuItem, {backgroundColor: this.props.backgroundColor}]}>
            <Text style={[styles.mainMenuItemText, {
              textAlign: this.props.alignText,
              paddingRight: 32,
              paddingLeft: 32,
            }]}>{this.props.title}</Text>
          </View>
        </TouchableHighlight>
    );
  }
}

MainMenuItem.propTypes = {
  title: React.PropTypes.string,
  alignText: React.PropTypes.oneOf(['left', 'right']),
  backgroundColor: React.PropTypes.string,
  scene: React.PropTypes.string,
  sceneProps: React.PropTypes.object,
}

MainMenuItem.defaultProps = {
  sceneProps: {},
}

class mainMenuScene extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.bg) {
      Alert.alert('11');
      this.props.bg();
    }
  }

  render() {
    const lastAnimalItem = (this.props.lastAnimal === undefined) ? null : (
      <MainMenuItem navigator={this.props.navigator}
        alignText='right'
        title={this.props.lastAnimal}
        backgroundColor='gray'
        scene={scenes.ANIMAL_DETAIL}
        sceneProps={{animal: this.props.lastAnimal}}
      />);

    return (
      <ScrollView style={localStyles.container} contentContainerStyle={localStyles.scrollItems}>
        { lastAnimalItem }

        <MainMenuItem navigator={this.props.navigator}
          alignText='right'
          title='Kontakty'
          backgroundColor='#0083B5'
          scene={scenes.CONTACTS}
        />

        <MainMenuItem navigator={this.props.navigator}
          alignText='left'
          title='Seznam zvířat'
          backgroundColor='#CF2B2D'
          scene={scenes.ANIMAL_LIST}
        />

        <MainMenuItem navigator={this.props.navigator}
          alignText='right'
          title='Události'
          backgroundColor='#9545A8'
          scene={scenes.EVENTS}
        />

        <MainMenuItem navigator={this.props.navigator}
          alignText='left'
          title='Načíst QR kód'
          backgroundColor='#0ECD7C'
          scene={scenes.QR_READER}
        />
      </ScrollView>
    );
  }
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 0,
  },
  scrollItems: {
    alignItems: 'center',
  },
  menuItemView: {
    width: Dimensions.get('window').width,
    height: 50,
  }
});

module.exports = mainMenuScene;
