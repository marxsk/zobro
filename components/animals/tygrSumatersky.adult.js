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
  require('../../images/animals/tygrSumatersky/01.jpg'),
  require('../../images/animals/tygrSumatersky/02.jpg'),
  require('../../images/animals/tygrSumatersky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/tygrSumatersky/01-thumb.jpg'),
  require('../../images/animals/tygrSumatersky/02-thumb.jpg'),
  require('../../images/animals/tygrSumatersky/03-thumb.jpg'),
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
  Když se podíváte do výběhu na naše tygry, určitě by vás nenapadlo, že patří mezi zástupce nejmenšího z pěti tygřích poddruhů. Vypadají nebezpečně – a nepopírám, že nejsou – a když je náhodou nachytáte ve chvíli, kdy zívají a přitom odhalují své veliké špičáky, rozhodně musíte být rádi, že nestojíte přímo vedle nich.
  </AnimalText>
  <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
  <AnimalText>
  Ačkoliv dospělí samci dosahují váhy pouhých 100 až 150 kilogramů a samice ještě méně, nelze tyto šelmy podceňovat. Tygři sumaterští – stejně jako všichni ostatní – jsou velmi hbití a silní. Vždyť ročně musí ulovit kolem 50 kusů preferované kořisti, kam patří například divoká prasata, jelenovití, někteří primáti, ale i ptáci, ryby, hlodavci a plazi.
  </AnimalText>
  <InPageImage indexes={[1,2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
  <AnimalText>
  Tygři sumaterští – jak už jejich jméno napovídá – pocházejí ze Sumatry, což je ostrov v Indonésii. Obývají lesnaté oblasti, kterých však kvůli palmovým a akáciovým plantážím rychle ubývá. Proto – a taky kvůli obchodu s kůžemi a kostmi – se v současné době řadí tygři sumaterští mezi kriticky ohrožený druh a jejich populace na ostrově je odhadována na pouhých několik stovek. A z toho důvodu je pro zoologické zahrady tolik důležité tato zvířata rozmnožit.
  </AnimalText>
  <AnimalText>
  Naše tygřice se jmenuje Satu. Narodila se 27. března 2004 v Dublinu a do Brna dorazila v říjnu 2005. Od té doby se v jejím výběhu vystřídalo už pět tygrů – Dick, Kampar, Dustin, Dua a Dandys. Poslední zmíněný se narodil 18. února 2012, do Brna přijel v březnu 2014 a je zde stále k vidění. Ale ani on zatím nebyl úspěšný v rozmnožení svého druhu. Že by za to mohlo jméno naší tygřice? Vždyť Satu znamená v indonéštině jeden – a tak i Satu nadále zůstává jen jedna.
  </AnimalText>
  <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
</View>
</ScrollView>
    );
  }
});

module.exports = AnimalDetail;
