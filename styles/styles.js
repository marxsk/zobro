import {
  StyleSheet,
} from 'react-native';

import Dimensions from 'Dimensions';

const WIDTH = Dimensions.get('window').width;
const ANIMAL_RIGHT_BORDER = 12;

const backgroundColors = [
      '#37af54',
      '#2d9946',
      '#267f3b',
      '#20642f',
      '#267f3b',
      '#2d9946',
];

const styles = StyleSheet.create({
  navigationBar: {
  },
  navigator: {
    paddingTop: 64,
    backgroundColor: '#f6f6f6',
  },
  mainMenuItem: {
    height: 80,
    width: WIDTH,
    justifyContent: 'center',
  },
  mainMenuItemText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#e6e5eb',
  },
  eventItem: {
    height: 80,
    width: WIDTH,
  },
  eventItemText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#e6e5eb',
  },
  eventItemTextTime: {
    fontSize: 22,
    color: '#e6e5eb',
  },
  scrollView: {
    backgroundColor: '#0b2611',
    borderRightWidth: ANIMAL_RIGHT_BORDER,
    borderColor: '#3CAC54',
    paddingRight: 5,
    paddingLeft: ANIMAL_RIGHT_BORDER + 5,
  },
  ctext: {
    fontSize: 18,
    color: 'white',
    paddingTop: 5,
    paddingBottom: 5,
  },
  ctextItalic: {
    fontSize: 18,
    color: 'white',
    fontStyle: 'italic',
  },
  italic: {
    fontSize: 18,
    color: 'white',
    fontStyle: 'italic',
  },
  inPageSingleThumbnail: {
    height: 100,
    width: (WIDTH - ANIMAL_RIGHT_BORDER - 5 - ANIMAL_RIGHT_BORDER),
  },
  inPageDuoThumbnailLeft: {
    height: 100,
    width: (WIDTH - ANIMAL_RIGHT_BORDER - 10)/ 2,
    marginRight: 10,
  },
  inPageDuoThumbnailRight: {
    height: 100,
    width: (WIDTH - ANIMAL_RIGHT_BORDER - 10) / 2,
    marginRight: 12,
  },
  otherFontNavBar: {
    color: '#e6e5eb',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mainMenuFontNavBar: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#e69d37',
    fontWeight: 'bold',
    fontSize: 44,
  }

});

module.exports = styles;
