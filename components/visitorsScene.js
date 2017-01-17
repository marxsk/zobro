import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import Dimensions from 'Dimensions';
import styles from '../styles/styles';

const ICONSIZE = 64;

export default class AboutScene extends React.Component {
    constructor(props) {
      super(props);
    }

    componentWillMount() {
      this.props.bg();
    }

    render() {
      const WIDTH = Dimensions.get('window').width - 20;
      return (
        <ScrollView style={{flex: 1, backgroundColor: 'white', paddingRight: 5, paddingLeft: 5,}}>
          <Image source={require('../images/zoo-afrika.jpg')} style={{width: WIDTH, height: 300, marginRight: 0, marginLeft: 5}} resizeMode='contain'/>

          <Text style={[styles.ctext, {color: 'black'}]}>
          Zoo Brno a stanice zájmových činností, příspěvková organizace
          </Text><Text style={[styles.ctext, {color: 'black'}]}>
          U Zoologické zahrady 46
          </Text><Text style={[styles.ctext, {color: 'black'}]}>
          635 00  Brno
          </Text>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../images/icons/telefon.png')} style={{width: ICONSIZE, height: ICONSIZE}} />
            <Text style={[styles.ctext, {color: 'black', textAlignVertical: 'center', paddingLeft: 10}]}>546 432 311</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../images/icons/fax.png')} style={{width: ICONSIZE, height: ICONSIZE}} />
            <Text style={[styles.ctext, {color: 'black', textAlignVertical: 'center', paddingLeft: 10}]}>546 210 000</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../images/icons/email.png')} style={{width: ICONSIZE, height: ICONSIZE}} />
            <Text style={[styles.ctext, {color: 'black', textAlignVertical: 'center', paddingLeft: 10}]}>zoo@zoobrno.cz</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../images/icons/gps.png')} style={{width: ICONSIZE, height: ICONSIZE}} />
            <Text style={[styles.ctext, {color: 'black', textAlignVertical: 'center', paddingLeft: 10}]}>49° 13' 49,6'' N;{"\n"}16° 31' 59,9'' E</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../images/icons/tramvaj.png')} style={{width: ICONSIZE, height: ICONSIZE}} />
            <Text style={[styles.ctext, {color: 'black', textAlignVertical: 'center', paddingLeft: 10}]}>č. 1, 3, 11</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../images/icons/autobus.png')} style={{width: ICONSIZE, height: ICONSIZE}} />
            <Text style={[styles.ctext, {color: 'black', textAlignVertical: 'center', paddingLeft: 10}]}>č. 50, 52, 54</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../images/icons/trolejbus.png')} style={{width: ICONSIZE, height: ICONSIZE}} />
            <Text style={[styles.ctext, {color: 'black', textAlignVertical: 'center', paddingLeft: 10}]}>č. 30</Text>
          </View>
          <Image source={require('../images/icons/doba.png')} style={{width: ICONSIZE, height: ICONSIZE, marginTop: 15}} />
          <Text style={[styles.ctext, {color: 'black', textAlignVertical: 'center', paddingLeft: 10}]}>listopad–únor: 9.00–16.00 h</Text>
          <Text style={[styles.ctext, {color: 'black', textAlignVertical: 'center', paddingLeft: 10}]}>březen, říjen: 9.00–17.00 h</Text>
          <Text style={[styles.ctext, {color: 'black', textAlignVertical: 'center', paddingLeft: 10}]}>duben–září: 9.00–18.00 h</Text>
        </ScrollView>
      );
    }
};

AboutScene.propTypes = {
    bg: React.PropTypes.func.isRequired,
    navigator: React.PropTypes.object.isRequired,
};
