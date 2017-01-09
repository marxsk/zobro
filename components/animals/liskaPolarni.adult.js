import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/liskaPolarni/01.jpg'),
  require('../../images/animals/liskaPolarni/02.jpg'),
  require('../../images/animals/liskaPolarni/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/liskaPolarni/01-thumb.jpg'),
  require('../../images/animals/liskaPolarni/02-thumb.jpg'),
  require('../../images/animals/liskaPolarni/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
          <AnimalText>
            Lišky polární, latinsky <Text style={styles.italic}>Vulpes lagopus</Text> patří k&nbspobyvatelům tundry. Kromě takových míst, jako je Sibiř, Kanada nebo Aljaška, obývají i&nbspřadu ostrovů. Samozřejmě Island, kde jsou jediný původní suchozemský savec, a Grónsko, ale i&nbspspoustu menších ostrovů. Na některých byly v&nbspdevatenáctém století vysazovány obchodníky s&nbspkožešinami. Liška polární má totiž tak teplý kožich, že vydrží i&nbspteploty klesající pod –&nbsp50&nbsp°C. (A&nbspkdo by z&nbspněčeho takového nechtěl fešný kabátek.) 
          </AnimalText>
          <AnimalText>
            S&nbspudržením tělesné teploty v&nbspprostředí tak nízko pod bodem mrazu jim pomáhá i&nbspto, že mají krátké uši i&nbspčenich. Uzpůsobeny jsou k&nbsppobytu na sněhu a ledu, tlapy mají zespoda porostlé hustou srstí, což pomáhá jak proti promrznutí, tak i&nbspproti klouzání na ledu. Lišky polární jsou v&nbsppodstatě hobiti – jsou malé a mají chlupaté nohy. Polární lišky totiž měří (včetně ocasu) kolem 90&nbspcentimetrů, zatímco ty naše, lišky obecné, mohou mít centimetrů i&nbsp140. (Ve výšce v&nbspkohoutku se liší přibližně o&nbspdeset centimetrů, polární mají 30, obecné asi 40&nbspcentimetrů.)
          </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Jako správné šelmy se polární lišky živí lovem, a to lumíků, různých ptáků (a jejich vajec) a ryb. Když se naskytne příležitost, vezmou zavděk mršinou, někdy i&nbsptakovou, kterou ulovil jiný predátor – lední medvěd, vlk, nebo dokonce rosomák. Tihle predátoři ovšem můžou být nebezpeční i&nbsppro lišky. Pokud se lišky nedostanou ani k&nbspmršinám, chytají i&nbsprůzné bezobratlé, včetně mořských. Když už nejsou ani bezobratlí, pustí se lišky i&nbspdo bobulí – technicky vzato jsou to takoví oportunisté.
          </AnimalText>
          <AnimalText>
            Pokud zrovna někomu nekradou kořist (za tímto účelem občas následují lední medvědy), loví tak, že se prodírají sněhem (a pod sněhem) za svou obětí – a pak na ni znenadání skočí.
          </AnimalText>
      <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>    
            V&nbsprodičovství jsou polární lišky velice zodpovědné, na výchově mláďat se podílí i&nbspotec. Liščí monogamní páry pečují o&nbspmláďata ve spletitých tunelech své nory, odkud mladí vykouknou poprvé ve věku zhruba měsíce. V&nbspnorách ovšem lišky pobývají jen v&nbsplétě, kdy prohrabávají další a další tunely (a vytváří epickou podzemní pevnost). V&nbspzimě se ale stahují k pobřeží a spávají zahrabané do sněhu.
          </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
