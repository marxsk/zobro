import React from 'react';
import {Text, View, Image} from 'react-native';
import Lightbox from 'react-native-lightbox';
import Dimensions from 'Dimensions';
import Swiper from 'react-native-swiper';
import styles from '../styles/styles.ios';

export default class AnimalImage extends React.Component {
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
          style={this.props.lightboxStyle}
        >
          <Image
            source={this.props.thumbnails[this.props.index]}
            resizeMode='cover'
            style={this.props.thumbnailStyle}
          />
        </Lightbox>
      );
  }

  renderModal(props) {
    const WINDOW_WIDTH = Dimensions.get('window').width;
    const WINDOW_HEIGHT = Dimensions.get('window').height;

    const rightArrow = (<Text style={styles.buttonText}>›</Text>);
    const leftArrow = (<Text style={styles.buttonText}>‹</Text>);
    const dot = (<View style={{backgroundColor:'#e69d3755', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />);
    const activeDot = (<View style={{backgroundColor: '#e69d37', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />);

    return (
      <Swiper showsButtons={true} index={props.index} prevButton={leftArrow} nextButton={rightArrow} dot={dot} activeDot={activeDot}>
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
//    thumbnailStyle: React.PropTypes.number.isRequired,
//    lightboxStyle
//@fix    navigator: React.PropTypes.object.isRequired,
};
