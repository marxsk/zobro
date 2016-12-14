import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import Dimensions from 'Dimensions';
import styles from '../styles/styles';

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

        <Text style={[styles.ctext, {color: 'white', backgroundColor: 'green', fontWeight: 'bold'}]}>Restaurace U Tygra</Text>
        <Text style={[styles.ctext, {color: 'black'}]}>
Nachází se v přízemí Centra služeb.
        </Text>

        <Text style={[styles.ctext, {color: 'white', backgroundColor: 'green', fontWeight: 'bold'}]}>Občerstvení</Text>
        <Text style={[styles.ctext, {color: 'black'}]}>
Občerstvení Africká vesnice Samburu
        </Text>

        <Text style={[styles.ctext, {color: 'white', backgroundColor: 'green', fontWeight: 'bold'}]}>Prodejna suvenýrů a dárkových předmětů</Text>
        <Text style={[styles.ctext, {color: 'black'}]}>
        Nachází se v 1. patře Centra služeb.
        Provozní doba: denně dle otevírací doby Zoo Brno.
        </Text>

        <Text style={[styles.ctext, {color: 'white', backgroundColor: 'green', fontWeight: 'bold'}]}>Toalety a přebalovací pulty</Text>
        <Text style={[styles.ctext, {color: 'black'}]}>
        správní budova
        </Text><Text style={[styles.ctext, {color: 'black'}]}>
        Centrum služeb (prodejna suvenýrů a dárkových předmětů)
        </Text><Text style={[styles.ctext, {color: 'black'}]}>
        Beringie (naproti Kamčatské chalupě), včetně přebalovacího pultu
        </Text><Text style={[styles.ctext, {color: 'black'}]}>
        u stánku U Krokodýla
        </Text><Text style={[styles.ctext, {color: 'black'}]}>
        Africká vesnice Samburu, včetně přebalovacího pultu
        </Text><Text style={[styles.ctext, {color: 'black'}]}>
        Restaurace U Tygra (přebalovací pult)
        </Text>

        <Text style={[styles.ctext, {color: 'white', backgroundColor: 'green', fontWeight: 'bold'}]}>Jízda na ponících v Dětské zoo</Text>
        <Text style={[styles.ctext, {color: 'black'}]}>
        duben–září denně od 10.00 do 17.30 h (kromě dní s nepříznivým počasím)
        říjen–březen denně od 10.00 do 15.30 h (kromě dní s nepříznivým počasím)
        jedna jízda stojí 25,– Kč
        </Text>

        <Text style={[styles.ctext, {color: 'white', backgroundColor: 'green', fontWeight: 'bold'}]}>Jízda vláčkem</Text>
        <Text style={[styles.ctext, {color: 'black'}]}>
        Od 1. 4. do 30. 4. provoz vláčku pouze o víkendech a svátcích.
        Od 1. 5. do 15. 9. provoz vláčku denně.
        Od 16. 9. do 31. 10. provoz vláčku pouze o víkendech a svátcích.
        Od 1. 11. do 31. 3. vláček mimo provoz.
        Jedna jízda – dítě (3–15 let): 10,– Kč, ostatní: 20,– Kč.
        Prodej jízdenek na místech označených piktogramem: vstupní pokladny, stánek Upomínkové předměty, obchod s upomínkovými předměty v Centru služeb, stánek u horní točny vláčku.
        V případě špatných povětrnostních a klimatických podmínek si Zoo Brno a stanice zájmových činností, příspěvková organizace vyhrazuje právo na úpravu provozu vláčku. Děkujeme za pochopení.
        </Text>

        <Text style={[styles.ctext, {color: 'white', backgroundColor: 'green', fontWeight: 'bold'}]}>Půjčovna dětských vozíků</Text>
        <Text style={[styles.ctext, {color: 'black'}]}>
Stanoviště před restaurací U Tygra. Pro děti do 30 kg. Půjčení vozíku je zdarma.
        </Text>

          <Image source={require('../images/vlacek.jpg')} style={{width: WIDTH, height: 500, marginRight: 0, marginLeft: 5}} resizeMode='contain'/>
        </ScrollView>
      );
    }
};

GameScene.propTypes = {
    bg: React.PropTypes.func.isRequired,
    navigator: React.PropTypes.object.isRequired,
};
