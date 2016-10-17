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
            Kulík písečný (pro latiníky a milovníky lehkých jazykolamů Charadrius hiaticula) je pták dorůstající velikosti značně podprůměrné slepice, tedy zhruba 20 centimetrů. Rozpětím křídel svou velikost efektivně dvojnásobí, neboť se tak blíží ke 40 centimetrům. K ještě větším číslům dosahují hmotností, jež se pohybuje v intervalu 50–70 gramů. (To znamená, že dva ptáci mohou vážit stejně jako pytlík oříšků. Jejich hustota je ovšem výrazně menší než hustota ořechů.) Vzhledem připomíná kulík kuličku, je tedy postavy spíše zavalité. Na zádech a temeni jsou kulíci zbarveni hnědošedě, zatímco bříško mají bílé. Bílý je i límec, který kulíkům zdobí krk.
          </AnimalText>
          <AnimalText>
            Kulíci jsou tažní ptáci. Obvykle hnízdí na severních pobřežích Evropy a Asie, objevují se také v Grónsku a v Kanadě. Na přelomu srpna a září migrují na jih, někteří mohou doletět až na jih Afriky. Občas táhnou kulíci i přes Českou republiku, někdy tu i zahnízdí. Jejich obvyklé cesty ale vedou jinudy.
          </AnimalText>
          <AnimalText>
            Jídelníček průměrného kulíka tvoří hmyz, korýši a červi. Potravu loví na březích všemožných vod, z písku a bahna. Podle toho se kulík písečný řadí mezi bahňáky, což je různorodá skupina ptáků, jejichž společným poznávacím znakem je vazba na vodu.
          </AnimalText>
          <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Hnízda si kulíci staví na písečném nebo bahenním podkladě. Snáší 3–5 vajec, ze kterých se vylíhnou mláďata po přibližně pětadvaceti dnech. Pokud je hnízdo s mláďaty (v libovolné fázi vývoje) ohroženo, vyběhne jeden z rodičů co nejdál od hnízda a zatímco vyluzuje hlasité zvuky, simuluje, že nemůže létat. Když predátor nemá oči pro nic jiného než rádoby-letu-neschopného kulíka (a zároveň je dostatečně daleko od hnízda), kulík uletí. A když nebezpečí pomine, vrátí se k hnízdu, kde by se, kdyby nebyl ptákem, mohl smát pod vousy.
          </AnimalText>
        </View>
      </ScrollView>
    );
  }
});

module.exports = AnimalDetail;
