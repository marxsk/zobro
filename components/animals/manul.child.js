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
          <AnimalText>Spát a spát, to já mám rád.</AnimalText>
          <AnimalText>Když si sklopím uši, nic mě nevyruší.</AnimalText>
          <AnimalText>Zbožňuju spánek. Mrúú.</AnimalText>
          <AnimalText>Počkat, kdo to tu klábosí?</AnimalText>
          <AnimalText>Kdo si zase umanul mě jen tak bez ohlášení navštívit?</AnimalText>
          <AnimalText>Abyste věděli, tady platí jen to, co si umanu já, protože jen já se jmenuju manul.</AnimalText>
          <AnimalText>Teď si chci jít trochu schrupnout, takže mě přestaňte otravovat a…</AnimalText>
          <AnimalText>… jejda, to jste vy, přátelé! Pardon, nepoznal jsem vás!</AnimalText>
          <AnimalText>Přišli jste se podívat na můj huňatý kožich, viďte?</AnimalText>

          <AnimalText>
            Jojo, já vím, že mi sluší. Zároveň je dost praktický. V zimě hřeje, v létě chladí, a tak se v něm cítím vždycky příjemně. Pocházím ze stepí ve střední Asii, kde se během dne hodně mění teploty. Kdyby byly takové teploty v Brně, odpoledne byste chodili v plavkách a večer byste se oblékli jako na severní pól.
          </AnimalText>
          <AnimalText>
            Kdo že to jsem? Garfield? Nic takového! Říkají mi Manu, jsem míň oranžový a nejsem tlusťoch. To dělá jenom ten kožich, jasné?
          </AnimalText>
          <AnimalText>
            Vybrala mi ho moje manulí kamarádka Rosa, protože ta se v módě vyzná nejlíp. Sice spolu nebydlíme, ale jednou za čas se setkáme a popovídáme si. Kdyby tu se mnou byla pořád, užírala by mi z misky a rozčileně bychom pak na sebe štěkali. Mňoukat totiž moc neumíme. A navíc teď má jiné starosti – pečuje o naše čtyři koťátka.
          </AnimalText>
          <AnimalText>
            Stejně je ale Rosa neobyčejná kočka s krásnýma očima. Černé oční panenky má zrovna tak kulaté jako vy. Až se budete mazlit s nějakou kočkou, všimněte si, že její panenky jsou spíš takové podlouhlé.
          </AnimalText>
          <AnimalText>
            Chcete toho o mně vědět víc? Řeknu vám to takhle, kamarádi. Nejsem moc akční. Nejraději se sluním na svém pařezu nebo lovím myši. Běhám zatraceně pomalu, ale když si lehnu k myší díře, vždycky nějaká kořist vyleze a já ji skokem přepadnu. Chce to jen trochu cviku. Nejlepší je lovit ráno a večer, odpoledne se dá tak akorát spát.
          </AnimalText>
          <AnimalText>
            Mrúú. Myslím, že už jsem vám toho pověděl dost.
          </AnimalText>
          <AnimalText>
            Bylo mi ctí se s vámi setkat.
          </AnimalText>
        </View>
      </ScrollView>
    );
  }
});

module.exports = AnimalDetail;
