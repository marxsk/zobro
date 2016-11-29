import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/pavKorunkaty/01.jpg'),
  require('../../images/animals/pavKorunkaty/02.jpg'),
  require('../../images/animals/pavKorunkaty/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/pavKorunkaty/01-thumb.jpg'),
  require('../../images/animals/pavKorunkaty/02-thumb.jpg'),
  require('../../images/animals/pavKorunkaty/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
        <Text style={styles.italic}>blabla</Text> 
        </AnimalText>
        <AnimalText>
        
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        </AnimalText>
        <AnimalText>
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        </AnimalText>
        <AnimalText>
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
