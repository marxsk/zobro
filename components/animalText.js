import React from 'react';
import {
  View,
  Text,
} from 'react-native';
const styles = require('../styles/styles');

export default class AnimalText extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <Text style={styles.ctext}>
        {this.props.children}
        </Text>
      );
    }
};
