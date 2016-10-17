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
            Zdravím, člověčí mládě!
          </AnimalText>
          <AnimalText>
            Jsem Sema, lachtan medvědí, nechceš si hrát s balonem? Nemusíš se bát, že jsme tu na tebe tři, já i moje dvě kamarádky Vafla a Čeburaška jsme hodní. Jestli se ti zdá, že máme zvláštní jména, tak je to tím, že jsme se narodili v zoo v ruském Rostově. Do brněnské zoo jsme přijeli jako vánoční dárek 20. 12. 2013. Musím se pochlubit, že narazit na nás v zoo je celkem vzácnost! Další lachtany, jako jsme my, bys našel až daleko v Berlíně či Hannoveru, což je v Německu.
          </AnimalText>
          <AnimalText>
            Od ostatních druhů lachtanů mě můžeš rozeznat díky mým velkým očím a uším. Velká ouška mám proto, aby mi do nich nezatekla voda, když plavu. Taky mám velkou zadní ploutev, která mi pomáhá při plavání. Schválně, jak dlouho vydržíš pod vodou? Já až sedm minut! Ale to dělám, jenom když si hraju s kamarády, normálně se pod vodou schovávám kolem dvou a půl minuty.
          </AnimalText>
          <AnimalText>
            Kluky od holek lachtanů medvědích rozeznáš celkem snadno. V dospělosti mají holky okolo 150 cm, což je asi jako celá tvoje postýlka, a váží kolem 50 kg. To je o něco míň, než kolik váží dospělá člověčí holka, nebo si to můžeš představit jako obrovský pytel brambor. Zato já budu větší! Až budu dospělý, budu vážit až 270 kg, to je jako tři a půl průměrných dospělých pánů dohromady!
          </AnimalText>
          <AnimalText>
            Abych pořádně vyrostl, musím hodně jíst. Denně zvládnu spořádat až 5 kg ryb. Každý den dostávám sledě, makrely a jako pochoutku kalamáry.
          </AnimalText>
          <AnimalText>
            Tak ahoj, zamávám ti na rozloučenou!
          </AnimalText>
        </View>
      </ScrollView>
    );
  }
});

module.exports = AnimalDetail;
