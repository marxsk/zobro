import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/jerabMandzusky/01.jpg'),
  require('../../images/animals/jerabMandzusky/02.jpg'),
  require('../../images/animals/jerabMandzusky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/jerabMandzusky/01-thumb.jpg'),
  require('../../images/animals/jerabMandzusky/02-thumb.jpg'),
  require('../../images/animals/jerabMandzusky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
          <AnimalText>
            Jeřáb mandžuský (latinsky <Text style={styles.ctextItalic}>Grus japonensis</Text>) je druhým největším žijícím druhem jeřába. Dospělí jedinci mohou být až 150 cm vysocí s rozpětím křídel 220 až 250 cm. Jejich průměrná váha se pohybuje kolem 7 až 10 kg, nejtěžší jedinci mohou vážit až 15 kg. Dospělci mají bílé peří, pouze na krku a na části křídel je černě zbarveno. Na hlavě si můžete všimnout červené lysinky, která se s přibývajícím věkem zvětšuje. Své typické zbarvení získají dospívající jedinci ve věku přibližně dvou let, mláďata mohou do té doby připomínat čápa.
          </AnimalText>
          <AnimalText>
Jeřábi většinou hnízdí v mokřadech a močálech na Dálném východě a Japonském souostroví. Jejich přirozených hnízdišť však ubývá, a proto jsou jeřábi mandžuští zapsáni na červeném seznamu IUCN jako ohrožený druh. Živí se zejména bezobratlými, drobnými obratlovci a vodními rostlinami, v zimě ale nepohrdnou ani zrním. Jako většina jeřábů jsou i jeřábi mandžuští tažným druhem, který se na zimu stěhuje na jih Asie.
          </AnimalText>
          <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
          Tito elegantní ptáci spolu žijí v monogamním svazku, který vzájemně utužují společným troubením a tancem, při kterém roztahují křídla, uklánějí se a vyskakují. Jejich troubení je nezaměnitelné. Jeřábi mají kostěnou část průdušnice, což rezonanci ještě zesiluje. Jejich volání se může ozývat i na několik kilometrů. V přírodě se dožívají věku kolem 30 let, v lidské péči až 65 let. Na Dálném východě jsou jeřábi považováni za posvátný symbol dlouhověkosti a manželského štěstí.
          </AnimalText>
          <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
Naše samice jeřába mandžuského se narodila v roce 2002 v moskevské zoo a zde žije od roku 2005. Samec se narodil roku 2005 v Zoo Schönbrunn a k nám přijel o rok později.
          </AnimalText>
          <AnimalText>
          Jedinci opačného pohlaví jsou schopni spolu léta setrvávat společně v jedné expozici, aniž by měli mláďata. O to hodnotnější je pro nás fakt, že brněnští jeřábi tvoří harmonický pár, kterému se v roce 2014 podařilo zplodit první potomky. Další úspěch náš pár čekal hned následující rok, kdy se podíleli na vzniku Evropského záchovného programu. První dvě oplozená vajíčka byla transportována v květnu 2015 do Amurské oblasti (Rusko), kde se z jednoho z nich v biologické stanici úspěšně vyklubalo mládě. Malý jeřáb se poté zapojil do procesu adaptace na okolní prostředí, aby mohl být vypuštěn do volné přírody.
          </AnimalText>
        </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
