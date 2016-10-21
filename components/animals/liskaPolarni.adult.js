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
            Lišky polární, latinsky <Text style={styles.ctextItalic}>Alopex</Text> (nebo <Text style={styles.ctextItalic}>Vulpes</Text>) lagopus patří k obyvatelům tundry. Kromě takových míst jako je Sibiř, Kanada nebo Aljaška obývají i řadu ostrovů. Samozřejmě Island, kde jsou jediný původní suchozemský savec, a Grónsko, ale i spoustu menších ostrovů. Na některých byly v devatenáctém století vysazovány obchodníky s kožešinami. Liška polární má totiž tak teplý kožich, že vydrží i teploty klesající pod – 50 °C. (A kdo by z něčeho takového nechtěl fešný kabátek.)
          </AnimalText>
          <AnimalText>
          S udržením tělesné teploty v prostředí tak nízko pod bodem mrazu jim pomáhá i to, že mají krátké uši i čenich. Uzpůsobeny jsou k pobytu na sněhu a ledu, tlapy mají zespoda porostlé hustou srstí, což pomáhá jak proti promrznutí, tak i proti klouzání na ledu. Lišky polární jsou v podstatě hobiti – jsou malé a mají chlupaté nohy. Polární lišky totiž měří (včetně ocasu) kolem 90 centimetrů, zatímco ty naše, lišky obecné, mohou mít centimetrů i 140. (Ve výšce v kohoutku se liší přibližně o deset centimetrů, polární mají 30, obecné asi 40 centimetrů.)
          </AnimalText>
          <AnimalText>
            Jako správné šelmy se polární lišky živí lovem, a to lumíků, různých ptáků (a jejich vajec), ryb a čas od času i nějakého toho soba. Když je nouze, vezmou zavděk i mršinou, někdy i takovou, kterou ulovil jiný predátor – lední medvěd, vlk, nebo dokonce rosomák. Tihle predátoři ovšem můžou být nebezpeční i pro lišky. Pokud se lišky nedostanou ani k mršinám, chytají i různé bezobratlé, včetně mořských. Když už nejsou ani bezobratlí, pustí se lišky i do bobulí – technicky vzato jsou tedy všežravci.
          </AnimalText>
          <AnimalText>
            Pokud zrovna někomu nekradou kořist (za tímto účelem občas následují lední medvědy), loví tak, že se prodírají sněhem (a pod sněhem) za svou obětí – a pak na ni znenadání skočí.
          </AnimalText>
          <AnimalText>
            V rodičovství jsou polární lišky velice zodpovědné, na výchově mláďat se podílí i otec. Liščí monogamní páry pečují o mláďata ve spletitých tunelech své nory, odkud mladí vykouknou poprvé ve věku zhruba měsíce. V norách ovšem lišky pobývají jen v létě, kdy prohrabávají další a další tunely (a vytváří epickou podzemní pevnost). V zimě se ale stahují k pobřeží a spávají zahrabané do sněhu.
          </AnimalText>
        </View>
      </ScrollView>
    );
  }
});

module.exports = AnimalDetail;
