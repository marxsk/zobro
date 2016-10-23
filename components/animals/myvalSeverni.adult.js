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
  require('../../images/animals/myvalSeverni/01.jpg'),
  require('../../images/animals/myvalSeverni/02.jpg'),
  require('../../images/animals/myvalSeverni/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/myvalSeverni/01-thumb.jpg'),
  require('../../images/animals/myvalSeverni/02-thumb.jpg'),
  require('../../images/animals/myvalSeverni/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  componentWillMount() {
    this.props.bg();
  },

  render() {
    return (
      <ScrollView>
        <View>
          <InPageImage firstImage={true} indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        </View>
        <View style={styles.scrollView}>
          <AnimalText>
            Nejsem jen tak ledajaká medvídkovitá šelma. Jsem mýval severní, tajemná tvář. Maskou jsem se pyšnil ještě před Banderasem. Chcete vědět, co je za ní?
          </AnimalText>
          <AnimalText>
            Přišel jsem do Evropy ze Severní a Střední Ameriky v první polovině 20. století. Ve třicátých letech pár z nás vypustili do volné přírody v Německu a odtamtud jsme se rozšířili všemi směry, i k vám do České republiky. V Evropě je to pohoda. Jasně, jsou tu nějací vlci, rysové a tak, ale kojoti a pumy zůstali hezky v Americe, takže mi tu moc nebezpečí nehrozí.
          </AnimalText>
          <AnimalText>
            Jsem velmi přizpůsobivé zvíře, dejte mi zdroj vody, jezero či vodní tok – zabydlím se všude. V jídle vybíravý nejsem. Dávám sice přednost masu drobných savců, ptáků a ryb, ale sbírám také různé plody, bobule a ořechy. Poradím si i v okolí lidských obydlí. Klidně si zapytlačím na domácí drůbeži a z odpadků taky něco vyhrabu.
          </AnimalText>
          <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Umím skvěle plavat i šplhat, mám na to šikovné tlapky. Rád si hovím ve větvích stromů. Když u toho narazím na něčí hnízdo, pro mě jen dobře – mám to i se svačinkou. Horší je to pro vzácné druhy ptáků a hadů. Mně je to jedno, ale ochranáře to žere, hehe. Jsem medvídek mazaný a nemají to se mnou jednoduché.
          </AnimalText>
          <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Přes den se schovávám a aktivní jsem především v podvečer a v noci. Na zimu se dobře vykrmím, pospím si nepravým zimním spánkem a do jara většinu ze zásob strávím. My mývalové jsme ve volné přírodě samotáři – až na matky s mláďaty. Já jsem se do Brna přistěhoval v roce 2015 se dvěma sličnými slečnami, a ačkoliv nemám ve výběhu soukromí, takto mi to taky vyhovuje. Ale dost bylo řečí, nemůžu vám na sebe odkrýt všechno!
          </AnimalText>
        </View>
      </ScrollView>
    );
  }
});

module.exports = AnimalDetail;
