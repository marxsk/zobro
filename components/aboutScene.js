import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import Dimensions from 'Dimensions';
import styles from '../styles/styles.ios';

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
        <ScrollView style={{flex: 1, backgroundColor: '#3c3c3b'}}>
          <Text style={styles.ctext}>
            Aplikace vznikla ve spolupráci Zoo Brno a Masarykovy univerzity. Na projektu se podíleli studenti oboru Český jazyk se specializací počítačová lingvistika (PLIN) a pracovníci Ústavu českého jazyka Filozofické fakulty MU. Nasazení aplikace do praxe bylo finančně podpořeno Centrem pro transfer technologií MU.
          </Text>
          <View style={{height: 100, backgroundColor: 'white', marginTop: 10}}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('../images/logo/logo-zoo.png')} style={{width: WIDTH/3, height: 90, marginRight: 5}} resizeMode='contain'/>
              <Image source={require('../images/logo/logo-ctt.png')} style={{width: WIDTH/3, height: 90, marginRight: 5}} resizeMode='contain'/>
              <Image source={require('../images/logo/logo-plin.jpg')} style={{width: WIDTH/3, height: 90}} resizeMode='contain'/>
          </View>
          </View>
          <View style={{height: 100, backgroundColor: 'white', marginTop: 10}}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../images/logo/logo-ff.png')} style={{width: WIDTH/3, height: 90}} resizeMode='contain'/>
            <Image source={require('../images/logo/logo-mu.png')} style={{width: WIDTH/3, height: 90}} resizeMode='contain'/>
            <Image source={require('../images/logo/logo-kevin.png')} style={{width: WIDTH/3, height: 90}} resizeMode='contain'/>
          </View>
          </View>
          <Text style={[styles.ctext, {paddingTop: 10}]}>
          Koordinace projektu: Dana Hlaváčková
          </Text><Text style={[styles.ctext, {paddingTop: 10}]}>
          Programování aplikace: Marek Grác
          </Text><Text style={[styles.ctext, {paddingTop: 10}]}>
          Dizajn: Kevin Scherrer
          </Text><Text style={[styles.ctext, {paddingTop: 10}]}>
          Závěrečné korektury v češtině: Hana Žižková
          </Text><Text style={[styles.ctext, {paddingTop: 10}]}>
          Příprava textů, korektury, překlady do angličtiny a všechny další pomocné práce:
          Babincová Adriana,
          Bendáková Eliška,
          Findejsová Lucie,
          Geržová Helena,
          Holaj Richard,
          Jančová Nikola,
          Kachlířová Miroslava,
          Klement David,
          Konečný Jakub,
          Koníková Michaela,
          Kubešová Nikola,
          Kunovský Adam,
          Masopustová Markéta,
          Novotná Marie,
          Obluková Barbora,
          Paulíčková Lucie,
          Petříková Nikola,
          Plocková Anna,
          Procházková Jana,
          Stará Marie,
          Šebestová Běla,
          Tomečková Kateřina,
          Vacíková Michala,
          Vostřelová Klára
          </Text>
        </ScrollView>
      );
    }
};
