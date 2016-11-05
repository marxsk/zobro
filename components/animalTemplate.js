import React from 'react';
import { View } from 'react-native';

const styles = require('../styles/styles.ios');
const InPageImage = require('./inPageImage');

class AnimalTemplate extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <View>
          <View>
            <InPageImage firstImage={true} indexes={this.props.firstIndex} thumbnails={this.props.thumbnails} images={this.props.images} navigator={this.props.navigator} />
          </View>
          <View style={styles.scrollView}>
            {this.props.children}
          </View>
        </View>
      );
    }
};

module.exports = AnimalTemplate;
