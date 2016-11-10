import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles.ios';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/lachtanMedvedi/01.jpg'),
  require('../../images/animals/lachtanMedvedi/02.jpg'),
// @todo: broken JPG
//  require('../../images/animals/lachtanMedvedi/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/lachtanMedvedi/01-thumb.jpg'),
  require('../../images/animals/lachtanMedvedi/02-thumb.jpg'),
//  require('../../images/animals/lachtanMedvedi/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
          <AnimalText>
            Zdravím, člověčí mládě!
          </AnimalText>
          <AnimalText>
            Jsem Sema, lachtan medvědí, nechceš si hrát s balonem? Nemusíš se bát, že jsme tu na tebe dva, já i moje kamarádka Vafla jsme hodní. Jestli se ti zdá, že máme zvláštní jména, tak je to tím, že jsme je dostali v zoo v ruském Rostově, odkud jsme do brněnské zoo přijeli jako vánoční dárek 20. 12. 2013. Musím se pochlubit, že narazit na nás v zoo je celkem vzácnost! Další lachtany medvědí, jako jsme my, bys našel až daleko v Berlíně či Hannoveru, což je v Německu.
          </AnimalText>
          <AnimalText>
            Od ostatních druhů lachtanů mě můžeš rozeznat díky mým velkým očím a uším. Velká ouška mám proto, aby mi do nich nezatekla voda, když plavu. Taky mám velkou zadní ploutev, která mi pomáhá při plavání. Schválně, jak dlouho vydržíš pod vodou? Já až sedm minut! Ale to dělám, jenom když si hraju s kamarády, normálně se pod vodou schovávám kolem dvou a půl minuty.
          </AnimalText>
          <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Kluky od holek lachtanů medvědích rozeznáš celkem snadno. V dospělosti mají holky okolo 150 cm, což je asi jako celá tvoje postýlka, a váží kolem 50 kg. To je o něco míň, než kolik váží dospělá člověčí holka, nebo si to můžeš představit jako obrovský pytel brambor. Zato já budu větší! Až budu dospělý, budu vážit až 270 kg, to je jako tři a půl průměrných dospělých pánů dohromady!
          </AnimalText>
          <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Abych pořádně vyrostl, musím hodně jíst. Denně zvládnu spořádat až 5 kg ryb. Každý den dostávám sledě, makrely a jako pochoutku kalamáry.
          </AnimalText>
          <AnimalText>
            Tak ahoj, zamávám ti na rozloučenou!
          </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
