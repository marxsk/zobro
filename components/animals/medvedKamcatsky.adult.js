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
  require('../../images/animals/medvedKamcatsky/image00.png'),
  require('../../images/animals/medvedKamcatsky/image01.png'),
  require('../../images/animals/medvedKamcatsky/image02.png'),
];

const THUMBNAILS = [
  require('../../images/animals/medvedKamcatsky/image00.png'),
  require('../../images/animals/medvedKamcatsky/image01.png'),
  require('../../images/animals/medvedKamcatsky/image02.png'),
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
            Medvěd kamčatský (lat. Ursus arctos beringianus) je největší euroasijská suchozemská šelma, a jak už sám název napovídá, pochází z Kamčatky, poloostrova na Dálném východě v Rusku. Vyskytuje se také na přilehlých ostrovech a poloostrovech (Sachalin, Mandžusko). V České republice ho můžeme najít jen v naší zoo. Příroda, ze které k nám přicestoval, je skutečně krásná – většinu jejího povrchu tvoří vulkány, sopky, gejzíry a rozsáhlé lesy.
          </AnimalText>
          <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Medvěd kamčatský, extrémně silný a odolný poddruh medvěda hnědého, dorůstá výšky až 130 cm v kohoutku a délky až 280 cm. Vážit může až 750 kg. Má rychlé reakce a je mrštný, jeho zuby dokážou překousnout jakoukoli kost, svými tlapami zvládá valit balvany, vyšplhá téměř na jakkoli kolmý svah i do koruny silného stromu a vydrží dlouhé hodiny sedět v ledové vodě. Je také vynikajícím plavcem a potápěčem. Na krátké vzdálenosti dosahuje v běhu rychlosti až 45–60 km/h a za den dokáže ujít 100 kilometrů. Fascinující je i jeho orientační smysl – za potravou putuje stovky kilometrů a pak se bez jediného zaváhání vrátí zpět do své domovské oblasti.  Je tedy pochopitelné, že na souši nemá kromě člověka přirozeného nepřítele. Ve volné přírodě se medvěd kamčatský dožívá 20 až 30 let, v lidské péči až 50 let.
          </AnimalText>
          <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Jelikož je medvěd kamčatský všežravec, jeho strava je pestrá – má rád borůvky, brusinky, semena jasanu a borovice a díky svým schopnostem uloví i velkou rybu. Při nedostatku potravy však nepohrdne ani mršinami či trávou. V krajních případech se dokáže uchýlit i ke kanibalismu.
          </AnimalText>
          <AnimalText>
            Co se týče povahy tohoto na první pohled nepřemožitelného zvířete, medvěd kamčatský je samotář. Společnost vyhledává pouze v období páření. Délka březosti samice medvěda kamčatského se pohybuje v rozmezí od 6 do 8 měsíců v závislosti na podmínkách pro přežití mláďat.
          </AnimalText>
          <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Zoo Brno chová v současnosti samce Jelizara a samici Kamčatku, kteří spolu zplodili již tři mláďata. Samečci Kuba a Toby se narodili 30. ledna 2012 a v prosinci roku 2014 odcestovali do soukromé ukrajinské zoo. V současné době se svými rodiči sdílí výběh i sameček Bruno, který se narodil 29. ledna 2016.
          </AnimalText>
        </View>
      </ScrollView>
    );
  }
});

module.exports = AnimalDetail;
