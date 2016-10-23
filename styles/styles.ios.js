import {
  StyleSheet,
} from 'react-native';

import Dimensions from 'Dimensions';

const WIDTH = Dimensions.get('window').width;
const ANIMAL_RIGHT_BORDER = 12;

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
  },
  eventItem: {
    height: 80,
    width: WIDTH,
  },
  eventItemText: {
    fontSize: 22,
    color: '#e6e5eb',
  },
  scrollView: {
    backgroundColor: '#23190B',
    borderRightWidth: ANIMAL_RIGHT_BORDER,
    borderColor: 'orange',
    paddingRight: 5,
    paddingLeft: 5,
  },
  ctext: {
    fontSize: 18,
    color: 'white',
  },
  ctextItalic: {
    fontSize: 18,
    color: 'white',
    fontStyle: 'italic',
  },
  inPageSingleThumbnail: {
    height: 100,
    width: (WIDTH - ANIMAL_RIGHT_BORDER),
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

})

module.exports = styles;
