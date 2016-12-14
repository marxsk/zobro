import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import Dimensions from 'Dimensions';
import styles from '../styles/styles';

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

          <Text style={[styles.ctext, {color: 'white', backgroundColor: 'green', fontWeight: 'bold'}]}>Kudy k nám</Text>
          <Text style={[styles.ctext, {color: 'black'}]}>
          Zoo Brno a stanice zájmových činností, příspěvková organizace
          </Text><Text style={[styles.ctext, {color: 'black'}]}>
          U Zoologické zahrady 46
          </Text><Text style={[styles.ctext, {color: 'black'}]}>
          635 00 Brno
          </Text><Text style={[styles.ctext, {color: 'black'}]}>
          Telefon: 546 432 311
          </Text><Text style={[styles.ctext, {color: 'black'}]}>
          Fax: 546 210 000
          </Text><Text style={[styles.ctext, {color: 'black'}]}>
          E-mail: zoo@zoobrno.cz
          </Text><Text style={[styles.ctext, {color: 'black'}]}>
          GPS: 49° 13' 49,6'' N; 16° 31' 59,9'' E
          </Text>

          <Text style={[styles.ctext, {color: 'white', backgroundColor: 'green', fontWeight: 'bold'}]}>Autobusy, trolejbusy a tramvaje</Text>
          <Text style={[styles.ctext, {color: 'black'}]}>
          Tramvaje
          č. 1 (směr Bystrc)
          č. 3 (směr Rakovecká)
          č. 11 (směr Rakovecká)
          Autobusy
          č. 50, 52, 54
          Trolejbusy
          č. 30 (ze zastávky Královo Pole, nádraží směr Bystrc)
          </Text>

          <Text style={[styles.ctext, {color: 'white', backgroundColor: 'green', fontWeight: 'bold'}]}>Otevírací doba</Text>
          <Text style={[styles.ctext, {color: 'black'}]}>
          listopad–únor: 9.00–16.00 h
          </Text><Text style={[styles.ctext, {color: 'black'}]}>
          březen, říjen: 9.00–17.00 h
          </Text><Text style={[styles.ctext, {color: 'black'}]}>
          duben–září 9.00–18.00 h
          </Text><Text style={[styles.ctext, {color: 'black'}]}>
          Vstupní pokladny zoo se uzavírají 1 hodinu před koncem návštěvní doby.
          Je povolen vstup se psy.
          Není povolen vstup s kolem, koloběžkou, skateboardem, odrážedlem a na kolečkových bruslích.
          </Text>

          <Text style={[styles.ctext, {color: 'white', backgroundColor: 'green', fontWeight: 'bold'}]}>Pokrytí Wi-Fi signálem</Text>
          <Text style={[styles.ctext, {color: 'black'}]}>
            Všechny hlavní expozice a jejich blízké okolí je pokryto bezplatným Wi-Fi signálem.
          </Text>
        </ScrollView>
      );
    }
};

AboutScene.propTypes = {
    bg: React.PropTypes.func.isRequired,
    navigator: React.PropTypes.object.isRequired,
};
