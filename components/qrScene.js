'use strict';

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  VibrationIOS,
  Alert,
} from 'react-native';

import Camera from 'react-native-camera';
import animalDb from '../animals';
import * as scenes from '../scenes';
import Dimensions from 'Dimensions';

var WINDOW_WIDTH = Dimensions.get('window').width;
var WINDOW_HEIGHT = Dimensions.get('window').height;

class QRCodeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { qrCodeAlreadyRead: false };
  }

  componentWillMount() {
    this.props.bg();
  }

  _onPressCancel() {
//    Alert.alert('-' + JSON.stringify(this.props));
    var $this = this;
    requestAnimationFrame(function() {
      $this.props.navigator.pop();
      if ($this.props.onCancel) {
        $this.props.onCancel();
      }
    });
  }

  _onBarCodeReadOnce(result, navigator) {
    var $this = this;
    this.setState({qrCodeAlreadyRead: true});
    scenes.navigatePush(navigator, scenes.ANIMAL_DETAIL, {animal: result.data});
  }

  render() {
    this.barCodeFlag = true;
    this._onBarCodeRead = (result) => {
      return this._onBarCodeReadOnce(result, this.props.navigator);
    };

//         <CancelButton onPress={this._onPressCancel} title={this.props.cancelButtonTitle} />

    if (this.state.qrCodeAlreadyRead) {
      return (
        <Camera style={styles.camera}>
          <View style={styles.rectangleContainer}>
            <View style={styles.rectangle}/>
          </View>
        </Camera>
      );
    } else {
    return (
      <Camera onBarCodeRead={this._onBarCodeRead} style={styles.camera}>
        <View style={styles.rectangleContainer}>
          <View style={styles.rectangle}/>
        </View>
      </Camera>
    );
  }
  }
}

QRCodeScreen.propTypes = {
    cancelButtonVisible: React.PropTypes.bool,
    cancelButtonTitle: React.PropTypes.string,
    onSucess: React.PropTypes.func,
    onCancel: React.PropTypes.func,
};

QRCodeScreen.defaultProps = {
  cancelButtonVisible: false,
  cancelButtonTitle: 'Zrušit',
}

class CancelButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.cancelButton}>
        <TouchableOpacity onPress={this.props.onPress}>
          <Text style={styles.cancelButtonText}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  camera: {
    height: WINDOW_HEIGHT,
    alignItems: 'center',
  },

  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  rectangle: {
    height: 2*WINDOW_WIDTH/4,
    width: 2*WINDOW_WIDTH/4,
    borderWidth: 2,
    borderColor: '#00FF00',
    backgroundColor: 'transparent',
  },

  cancelButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 3,
    padding: 15,
    width: 100,
    bottom: 1*WINDOW_HEIGHT/5,
  },

  cancelButtonText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#0097CE',
  },
});

module.exports = QRCodeScreen;
