import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
} from 'react-native';

const styles = require('../../styles/styles.ios');

var Dimensions = require('Dimensions');
var WINDOW_WIDTH = Dimensions.get('window').width;
var WINDOW_HEIGHT = Dimensions.get('window').height;

const IMG_01 = require('../../images/animals/medvedKamcatsky/image00.png');
const IMG_02 = require('../../images/animals/medvedKamcatsky/image01.png');
const IMG_03 = require('../../images/animals/medvedKamcatsky/image02.png');

var AnimalDetail = React.createClass({
  renderCarousel: function() {
    return (
      // initialPage parameter
      <Swiper showsButtons={true} style={{ width: WINDOW_WIDTH, height: WINDOW_WIDTH }}>
      <View style={{backgroundColor:'#6C7A89',flex: 1}}>
        <Image
          style={{flex: 1, width: WINDOW_WIDTH, height: WINDOW_HEIGHT}}
          resizeMode="contain"
          source={IMG_01}
        />
      </View>
      <View style={{backgroundColor:'yellow',flex: 1}}>
        <Image
          style={{flex: 1, width: WINDOW_WIDTH, height: WINDOW_HEIGHT}}
          resizeMode="contain"
          source={IMG_02}
        />
      </View>
      <View style={{backgroundColor:'green',flex: 1}}>
        <Image
          style={{flex: 1, width: WINDOW_WIDTH, height: WINDOW_HEIGHT}}
          resizeMode="contain"
          source={IMG_03}
        />
      </View>
      </Swiper>
    );
  },

  render() {
    return (
  <View style={styles.vcontainer}>
  <ScrollView
    style={styles.scrollView}
  >
  <Text style={styles.ctext}>
  Medvěd kamčatský (lat. Ursus arctos beringianus) je největší euroasijská suchozemská šelma, a jak už sám název napovídá, pochází z Kamčatky, poloostrova na Dálném východě v Rusku. Vyskytuje se také na přilehlých ostrovech a poloostrovech (Sachalin, Mandžusko). V České republice ho můžeme najít jen v naší zoo. Příroda, ze které k nám přicestoval, je skutečně krásná – většinu jejího povrchu tvoří vulkány, sopky, gejzíry a rozsáhlé lesy.
  </Text>
  <Image
    source={IMG_01}
    resizeMode='contain'
    style={{
      height: 100,
      width: 300,
    }}
  />
  <Text style={styles.ctext}>
  Medvěd kamčatský, extrémně silný a odolný poddruh medvěda hnědého, dorůstá výšky až 130 cm v kohoutku a délky až 280 cm. Vážit může až 750 kg. Má rychlé reakce a je mrštný, jeho zuby dokážou překousnout jakoukoli kost, svými tlapami zvládá valit balvany, vyšplhá téměř na jakkoli kolmý svah i do koruny silného stromu a vydrží dlouhé hodiny sedět v ledové vodě. Je také vynikajícím plavcem a potápěčem. Na krátké vzdálenosti dosahuje v běhu rychlosti až 45–60 km/h a za den dokáže ujít 100 kilometrů. Fascinující je i jeho orientační smysl – za potravou putuje stovky kilometrů a pak se bez jediného zaváhání vrátí zpět do své domovské oblasti.  Je tedy pochopitelné, že na souši nemá kromě člověka přirozeného nepřítele. Ve volné přírodě se medvěd kamčatský dožívá 20 až 30 let, v lidské péči až 50 let.
  </Text>
  <Image
    source={IMG_02}
    resizeMode='contain'
    style={{
      height: 100,
      width: 300,
    }}
  />
  <Text style={styles.ctext}>
  Jelikož je medvěd kamčatský všežravec, jeho strava je pestrá – má rád borůvky, brusinky, semena jasanu a borovice a díky svým schopnostem uloví i velkou rybu. Při nedostatku potravy však nepohrdne ani mršinami či trávou. V krajních případech se dokáže uchýlit i ke kanibalismu.
  </Text>
  <Text style={styles.ctext}>
  Co se týče povahy tohoto na první pohled nepřemožitelného zvířete, medvěd kamčatský je samotář. Společnost vyhledává pouze v období páření. Délka březosti samice medvěda kamčatského se pohybuje v rozmezí od 6 do 8 měsíců v závislosti na podmínkách pro přežití mláďat.
  </Text>
  <Image
    source={IMG_03}
    resizeMode='contain'
    style={{
      height: 100,
      width: 300,
    }}
  />
  <Text style={styles.ctext}>
  Zoo Brno chová v současnosti samce Jelizara a samici Kamčatku, kteří spolu zplodili již tři mláďata. Samečci Kuba a Toby se narodili 30. ledna 2012 a v prosinci roku 2014 odcestovali do soukromé ukrajinské zoo. V současné době se svými rodiči sdílí výběh i sameček Bruno, který se narodil 29. ledna 2016.
  </Text>
  </ScrollView>
  </View>
);
}
});

module.exports = AnimalDetail;
