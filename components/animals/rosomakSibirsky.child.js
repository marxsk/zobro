import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';

const styles = require('../../styles/styles.ios');
const InPageImage = require('../inPageImage');
const AnimalText = require('../animalText');

const IMAGES = [
  require('../../images/animals/tygrSumatersky/image01.png'),
  require('../../images/animals/tygrSumatersky/image02.png'),
  require('../../images/animals/tygrSumatersky/image04.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/tygrSumatersky/image04.jpg'),
  require('../../images/animals/tygrSumatersky/image01.png'),
  require('../../images/animals/tygrSumatersky/image02.png'),
];

var AnimalDetail = React.createClass({
  componentWillMount() {
    this.props.bg();
  },

  render() {
    return (
<ScrollView>
<View>
  <InPageImage firstImage={true} indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
</View>
<View style={styles.scrollView}>
  <AnimalText>
    Pššt! Dobře se rozhlédněte, jestli poblíž nestojí ošetřovatel Milan. Jste svědky tajné mise!
  </AnimalText>
  <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
  <AnimalText>
    Jmenuji se Ivan a jsem rosomák. Ve výběhu je tu se mnou ještě rosomačice Nataša. Právě ona mě pověřila důležitým úkolem: ráda by si vyšla na procházku po zoo. Musím nás oba dostat ven z výběhu.
  </AnimalText>
  <InPageImage indexes={[1,2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
  <AnimalText>
    Představte si tu svobodu! Prošmejdíme každý kout v zoo. Vytvoříme si nový úkryt. Budeme lidem krást klobásky z talířů a v noci ulovíme velikého jelena. To dělají naši přátelé v divočině celkem často.
  </AnimalText>
  <AnimalText>
    Že chcete znát můj plán? No dobrá, ale opravdu se ujistěte, že nás neposlouchají pracovníci zoo.
  </AnimalText>
  <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
  <AnimalText>
    Prvně jsem si říkal, že prchneme raz dva. Pocházíme z dalekého severu, kde se lidé rosomáků báli od nepaměti. Dali nám dokonce přezdívky jako hyeny severu nebo lesní duchové. V Brně je ale všechno jiné. Akce „Hlasitě zavrč a uteč!“ se nám nevydařila a ošetřovatelé se nám akorát smáli. Ach jo!
  </AnimalText>
  <AnimalText>
    Musel jsem přistoupit k náhradnímu plánu. Vykopu tunel. Nejsem sice o moc větší než Jonatán paní Kadrnožkové, mám ale obří tlapy s ostrými drápy. Hrabu ve dne v noci, samozřejmě v největším utajení. Vidíte ty díry v zemi? Ošetřovatelé si myslí, že to jsou naše doupata. Chachá! Však oni jednou poznají, co všechno my rosomáci dokážeme.
  </AnimalText>
</View>
</ScrollView>
    );
  }
});

module.exports = AnimalDetail;
