import React from 'react';
import {View, Image} from 'react-native';

const Lightbox = require('react-native-lightbox');
const Dimensions = require('Dimensions');
const Swiper = require('react-native-swiper');

class AnimalImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <Lightbox
          navigator={this.props.navigator}
          swipeToDismiss={false}
          renderContent={this.renderModal}
          activeProps={this.props}
        >
          <Image
            source={this.props.images[this.props.index]}
            resizeMode='cover'
            style={this.props.thumbnailStyle}
          />
        </Lightbox>
      );
  }

  renderModal(props) {
    const WINDOW_WIDTH = Dimensions.get('window').width;
    const WINDOW_HEIGHT = Dimensions.get('window').height;

    return (
      <Swiper showsButtons={true} index={props.index}>
        {props.images.map((image, index) => (
            <View key={index} style={{flex: 1}}>
              <Image
                source={image}
                resizeMode='contain'
                style={{width: WINDOW_WIDTH, height: WINDOW_HEIGHT}}
              />
            </View>
        ))}
      </Swiper>
    );
  }
};

AnimalImage.propTypes = {
    images: React.PropTypes.array.isRequired,
    index: React.PropTypes.number.isRequired,
    thumbnailStyle: React.PropTypes.number.isRequired,
//@fix    navigator: React.PropTypes.object.isRequired,
};

module.exports = AnimalImage;
