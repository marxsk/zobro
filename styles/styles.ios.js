import {
  StyleSheet,
} from 'react-native';

import Dimensions from 'Dimensions';

var WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  navigationBar: {
  },
  navigator: {
    paddingTop: 64,
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
  },
  scrollView: {
    backgroundColor: '#23190B',
  },
  ctext: {
    fontSize: 18,
    color: 'white',
  },

  inPageSingleThumbnail: {
    height: 100,
    width: WIDTH,
  },
  inPageDuoThumbnailLeft: {
    height: 100,
    width: WIDTH / 2,
    marginRight: 10,
  },
  inPageDuoThumbnailRight: {
    height: 100,
    width: WIDTH / 2,
  }
})

module.exports = styles;
