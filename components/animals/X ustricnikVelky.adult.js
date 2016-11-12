import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles.ios';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/ustricnikVelky/01.jpg'),
  require('../../images/animals/ustricnikVelky/02.jpg'),
  require('../../images/animals/ustricnikVelky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/ustricnikVelky/01-thumb.jpg'),
  require('../../images/animals/ustricnikVelky/02-thumb.jpg'),
  require('../../images/animals/ustricnikVelky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
          <AnimalText>
Zdravím tě, bezkřídlý, dvounohý, tvore! Já jsem ústřičník velký, latinsky <Text style={styles.ctextItalic}>Haematopus ostralegus</Text>. Těší mě. Pocházím z pražské zoo, zde v brněnské jsem asi šest let a létám si tu spolu s ostatními bahňáky. Říká se nám bahňáci, protože se vyskytujeme v mokřadních a pobřežních oblastech.
          </AnimalText>
          <AnimalText>
          Velký jsem přibližně jako vrána obecná a stejně tak černý, jen mám bílé břicho. Zdobí mne svítivě oranžový zobák, který je silný, jelikož ho využívám k otevírání ulit měkkýšů. Používám ho také, když bráním své malé potomstvo před vylupovači hnízd – například před racky nebo vránami. Mám dobře vyvinuté solné žlázy pod očima, jimiž se separuje přebytečná sůl, které je někdy moc z pití mořské vody a ulovené kořisti. Když roztáhnu svá křídla, zabral bych celou šíři postele – rozpětí křídel mám až 83 cm.
          </AnimalText>
          <AnimalText>
Vylíhl jsem se z vejce, které je velké jako slepičí a které je kropenaté, aby splynulo s přírodou. Do 24 hodin jsem již dokázal čile běhat a brzy i létat, avšak rodiče mne ještě 2 měsíce krmili a já se od nich pozorováním učil techniku lovu. Krmili mě různými měkkýši, červy, hmyzem a ostatními drobnými živočichy.
          </AnimalText>
          <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
          Když jsem dospěl, začal jsem vytvářet vlastní hnízda. A to jako mělký důlek v zemi, který jsem vystlal tím, co jsem měl při křídle. Různými listy, trusem savců, často jsem též použil nějaké kamínky či lastury. Ve svém hnízdě odpočívám, ale abych měl změnu, klidně si někdy spím jen tak vestoje na jedné noze.
          </AnimalText>
          <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
          Když jsem dospěl, začal jsem vytvářet vlastní hnízda. A to jako mělký důlek v zemi, který jsem vystlal tím, co jsem měl při křídle. Různými listy, trusem savců, často jsem též použil nějaké kamínky či lastury. Ve svém hnízdě odpočívám, ale abych měl změnu, klidně si někdy spím jen tak vestoje na jedné noze.
          </AnimalText>
          <AnimalText>
          Když se vyskytuji u moře, není žádnou výjimkou, že má mnoho ústřičníků hodně poškozené nohy, nebo dokonce amputované některé prsty. Je to způsobeno pohybem na ostrých útesech a polámaných lasturách. Přesto se dožívám průměrně až 40 let.
          </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
