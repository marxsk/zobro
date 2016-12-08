import React from 'react';
import Dimensions from 'Dimensions';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableHighlight, Alert
} from 'react-native';

import styles from '../styles/styles';
import * as scenes from '../scenes';

class MainMenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const bgColor = scenes.sceneTitles[this.props.scene].bgColor;
    const title = scenes.sceneTitles[this.props.scene].title;
    return (
      <TouchableHighlight
        underlayColor='#aaaaaa'
        onPress={() => scenes.navigatePush(this.props.navigator, this.props.scene, this.props.sceneProps)}
        >
          <View style={[styles.mainMenuItem, {backgroundColor: bgColor}]}>
            <Text style={[styles.mainMenuItemText, {
              textAlign: this.props.alignText,
              paddingRight: 32,
              paddingLeft: 32,
            }]}>{title}</Text>
          </View>
        </TouchableHighlight>
    );
  }
}

MainMenuItem.propTypes = {
  alignText: React.PropTypes.oneOf(['left', 'right']),
  scene: React.PropTypes.string,
  sceneProps: React.PropTypes.object,
}

MainMenuItem.defaultProps = {
  sceneProps: {},
}

export default class mainMenuScene extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.bg) {
      this.props.bg();
    }
  }

  render() {
    const menuItems = [scenes.QR_READER, scenes.ANIMAL_LIST, scenes.EVENTS, scenes.ABOUT];

    return (
      <ScrollView style={localStyles.container} contentContainerStyle={localStyles.scrollItems}>
        {
          menuItems.map((itemInMenu, index) => (
            <MainMenuItem navigator={this.props.navigator}
              key={index}
              alignText={index % 2 ? 'left' : 'right'}
              // @todo: backgroundColors to styles and then use index%length to get right color
              scene={itemInMenu}
            />
          ))
        }
      </ScrollView>
    );
  }
}

mainMenuScene.propTypes = {
    bg: React.PropTypes.func.isRequired,
    navigator: React.PropTypes.object.isRequired,
};

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
