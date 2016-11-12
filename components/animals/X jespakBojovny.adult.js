import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles.ios';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/jespakBojovny/01.jpg'),
  require('../../images/animals/jespakBojovny/02.jpg'),
  require('../../images/animals/jespakBojovny/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/jespakBojovny/01-thumb.jpg'),
  require('../../images/animals/jespakBojovny/02-thumb.jpg'),
  require('../../images/animals/jespakBojovny/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
          <AnimalText>
            Jespáci bojovní (<Text style={styles.ctextItalic}>Philomachus pugnax</Text>) jsou pěkní ptáčci. Žijí si na vysoké noze, a když je to na severu Evropy nebo Asie přestane bavit (komu by se chtělo zůstávat celý rok v takové zimě), táhnou na jih, nejlépe do subsaharské Afriky, někdy však také do Indie nebo Arábie, a to v hejnech, která mohou čítat až tisíce jedinců. Když jsou právě na tahu, můžete je zahlédnout i v České republice.
          </AnimalText>
          <AnimalText>
            Zbožňují vodu, a tak nejraději pobývají na březích jezer a mokřadů, kde se s oblibou brodí bahnem (ne nadarmo se řadí mezi bahňáky) a čas od času odchytí i nějakou tu rybku, jinak ale vezmou zavděk hmyzem a drobnými živočichy, nepohrdnou však ani vodními rostlinami nebo semeny.
          </AnimalText>
          <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Samci samicím přerůstají přes hlavu, obvykle o nějakých 5 až 8 centimetrů, jinak se však za normálních okolností příliš neliší. Všichni mají hnědé peří s černými skvrnami, bílé bříško a dlouhý špičatý zobák. Když ovšem chtějí samci v období páření (květen až červen) zapůsobit na samice, to pak hrají všemi barvami. Tedy všemi ne, ale naroste jim pestrý vztyčitelný límec (hnědý, žlutý až bílý), tváře si napudrují červenožlutou pudřenkou a tou dobou mají za ušima (kudrnaté chocholky). Sem tam připojí i nějakou tu poklonu. Chtějí za každou cenu ubránit svou pozici na tokaništi, a tak vám v tomto období nabídnou náramnou podívanou v podobě soubojů.
          </AnimalText>
          <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Jespáci, které můžete vidět zde v expozici Beringie, pocházejí z německé NaturZoo Rheine a většina z nich sem přišla v roce 2010. Společnost jim dělají kulíci píseční, tenkozobci opační a ústřičník velký.
          </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
