import React from 'react';
import {View} from 'react-native';
import styles from '../styles/styles.ios';
import InPageImage from './inPageImage';

export default class AnimalTemplate extends React.Component {
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
