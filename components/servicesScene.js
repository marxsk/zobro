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

export default class GameScene extends React.Component {
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
        <Text style={[styles.ctext, {color: 'black', textAlignVertical: 'center', paddingLeft: 10, fontWeight: 'bold'}]}>Co u nás najdete:</Text>

        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', paddingTop: 10, justifyContent: 'center'}}>
          <Image source={require('../images/icons/restaurace.png')} style={{width: ICONSIZE, height: ICONSIZE}} />
          <Image source={require('../images/icons/obcerstveni.png')} style={{width: ICONSIZE, height: ICONSIZE, marginLeft: 10}} />
          <Image source={require('../images/icons/obchod.png')} style={{width: ICONSIZE, height: ICONSIZE, marginLeft: 10}} />
        </View>

        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', paddingTop: 10, justifyContent: 'center'}}>
          <Image source={require('../images/icons/toalety.png')} style={{width: ICONSIZE, height: ICONSIZE}} />
          <Image source={require('../images/icons/wifi.png')} style={{width: ICONSIZE, height: ICONSIZE, marginLeft: 10}} />
          <Image source={require('../images/icons/pes.png')} style={{width: ICONSIZE, height: ICONSIZE, marginLeft: 10}} />
        </View>

        <Image source={require('../images/icons/vozicek.png')} style={{width: ICONSIZE, height: ICONSIZE, marginTop: 15}} />
        <Text style={[styles.ctext, {color: 'black', textAlignVertical: 'center', paddingLeft: 10, fontWeight: 'bold'}]}>Půjčování dětských vozíků</Text>
        <Text style={[styles.ctext, {color: 'black'}]}>
          Půjčování zdarma pro děti do 30&nbsp;kg.
        </Text>

        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('../images/icons/ponici.png')} style={{width: ICONSIZE, height: ICONSIZE}} />
          <Text style={[styles.ctext, {color: 'black', textAlignVertical: 'center', paddingLeft: 10, fontWeight: 'bold'}]}>Jízda na ponících v Dětské zoo</Text>
        </View>
        <Text style={[styles.ctext, {color: 'black'}]}>
        duben–září denně od 10.00 do 17.30&nbsp;h
        </Text><Text style={[styles.ctext, {color: 'black'}]}>
        říjen–březen denně od 10.00 do 15.30&nbsp;h
        </Text><Text style={[styles.ctext, {color: 'black'}]}>
        Platí mimo dny s&nbsp;nepříznivým počasím.
        Jedna jízda stojí 25&nbsp;Kč.
        </Text>

        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('../images/icons/vlacek.png')} style={{width: ICONSIZE, height: ICONSIZE}} />
          <Text style={[styles.ctext, {color: 'black', textAlignVertical: 'center', paddingLeft: 10, fontWeight: 'bold'}]}>Jízda vláčkem</Text>
        </View>
        <Text style={[styles.ctext, {color: 'black'}]}>
        Od 1.&nbsp;4. do 30.&nbsp;4. provoz vláčku pouze o&nbsp;víkendech a svátcích.
        </Text><Text style={[styles.ctext, {color: 'black'}]}>
        Od 1.&nbsp;5. do 15.&nbsp;9. provoz vláčku denně.
        </Text><Text style={[styles.ctext, {color: 'black'}]}>
        Od 16.&nbsp;9. do 31.&nbsp;10. provoz vláčku pouze o&nbsp;víkendech a svátcích.
        </Text><Text style={[styles.ctext, {color: 'black'}]}>
        Od 1.&nbsp;11. do 31.&nbsp;3. vláček mimo provoz.
        </Text>

        <Text style={[styles.ctext, {color: 'black', fontWeight: 'bold'}]}>Tohle prosím nedělejte:</Text>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', paddingTop: 10, justifyContent: 'center'}}>
          <Image source={require('../images/icons/brusle_zakaz.png')} style={{width: ICONSIZE, height: ICONSIZE}} />
          <Image source={require('../images/icons/kolo_zakaz.png')} style={{width: ICONSIZE, height: ICONSIZE, marginLeft: 10}} />
          <Image source={require('../images/icons/kolobezka_zakaz.png')} style={{width: ICONSIZE, height: ICONSIZE, marginLeft: 10}} />
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingBottom: 25, justifyContent: 'center'}}>
          <Image source={require('../images/icons/odrazedlo_zakaz.png')} style={{width: ICONSIZE, height: ICONSIZE}} />
          <Image source={require('../images/icons/skateboard_zakaz.png')} style={{width: ICONSIZE, height: ICONSIZE, marginLeft: 10}} />
        </View>

        </ScrollView>
      );
    }
};

GameScene.propTypes = {
    bg: React.PropTypes.func.isRequired,
    navigator: React.PropTypes.object.isRequired,
};
