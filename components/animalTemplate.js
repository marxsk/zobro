import React from 'react';
import {
  View,
  ScrollView,
  Text,
} from 'react-native';

const styles = require('../styles/styles.ios');
const InPageImage = require('./inPageImage');

class AnimalTemplate extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <ScrollView>
          <View>
            <InPageImage firstImage={true} indexes={this.props.firstIndex} thumbnails={this.props.thumbnails} images={this.props.images} navigator={this.props.navigator} />
          </View>
          <View style={styles.scrollView}>
            {this.props.children}
          </View>
        </ScrollView>
      );
    }
};

module.exports = AnimalTemplate;
