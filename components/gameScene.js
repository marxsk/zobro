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
          <Text style={[styles.ctext, {color: 'black'}]}>
          Čeká na vás spousta zábavy, cesta kolem světa, 10 stanovišť a 1 lamí píseň.
          </Text><Text style={[styles.ctext, {color: 'black'}]}>
          Šifrovací hra je zdarma, platí se jen vstupné do zoo. Potřebujete s sebou dobře nabitý chytrý telefon/tablet s připojením na internet a tužku.
          </Text><Text style={[styles.ctext, {color: 'black'}]}>
          Start hry je na konci vstupního esíčka před Tygřími skalami.
          </Text><Text style={[styles.ctext, {color: 'black'}]}>
          Více se o šifrovací hře Dotkni se evoluce dozvíte na <Text style={[styles.ctext, {color: 'blue'}]}>www.dotkni-se-evoluce.cz</Text>.
          </Text><Text style={[styles.ctext, {color: 'black'}]}>
          P.S.: Je to opravdu pecka! A jsme první gamifikovaná zoo v ČR.
          </Text>
          <Image source={require('../images/cryptomania.jpg')} style={{width: WIDTH, height: 500, marginRight: 0, marginLeft: 5}} resizeMode='contain'/>
        </ScrollView>
      );
    }
};

GameScene.propTypes = {
    bg: React.PropTypes.func.isRequired,
    navigator: React.PropTypes.object.isRequired,
};
