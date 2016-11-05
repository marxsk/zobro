import React, { Component } from 'react';
import { Text } from 'react-native';

const styles = require('../../styles/styles.ios');
const InPageImage = require('../inPageImage');
const AnimalText = require('../animalText');
const AnimalTemplate = require('../animalTemplate');

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
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
  <AnimalText>
  Ahoj! Jmenuji se Satu a v Brně žiji od roku 2005. Narodila jsem se v zoo v Dublinu, což je město v Irsku. Nejsem jen tak obyčejná tygřice, můj druh pochází se Sumatry. To je ostrov mezi Asií a Austrálií.
  </AnimalText>
  <AnimalText>
  My tygři sumaterští žijeme obvykle v lesích, rašeliništích a bažinách. Už nás ale není moc. Míst, kde se nám dobře žije, totiž ubývá. Z lesů se stávají plantáže a my nemáme kde žít a lovit. Aby toho nebylo málo, najdou se i lidé, kteří nás zabíjejí kvůli kůži a drápům.
  </AnimalText>
  <AnimalText>
  Ačkoliv dospělí samci dosahují váhy pouhých 100 až 150 kilogramů a samice ještě méně, nelze tyto šelmy podceňovat. Tygři sumaterští – stejně jako všichni ostatní – jsou velmi hbití a silní. Vždyť ročně musí ulovit kolem 50 kusů preferované kořisti, kam patří například divoká prasata, jelenovití, někteří primáti, ale i ptáci, ryby, hlodavci a plazi.
  </AnimalText>
  <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
  <AnimalText>
  Každý z nás potřebuje své vlastní území, kde žije dostatek jiných zvířat. Jako všichni tygři i my se živíme lovem. Nejradši máme divoká prasata a jeleny, ale pochutnáme si i na ptácích a rybách. Umíme běhat mnohem rychleji než vy lidé, zvládneme i rychlost vyšší než 50 km/h – takže bychom dokázali předhonit například auto v obci. I když jsme menší než ostatní tygři, musíme každý rok doběhnout a ulovit alespoň 50 zvířat, abychom neměli hlad a mohli uživit mláďata.
  </AnimalText>
  <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
  <AnimalText>
  O malá tygřata se staráme my samice. Když naše děti vyrostou a jsou jim přibližně dva roky, odcházejí od nás a hledají si svá vlastní území.
  </AnimalText>
  <AnimalText>
  Tady v zoo nejsem sama. Sousední výběh obývá Dandys, který za mnou přijel z Varšavy. Moji chovatelé stejně jako já doufají, že s Dandysem budu mít malá tygřátka. Tak nám držte palce!
  </AnimalText>
</AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
