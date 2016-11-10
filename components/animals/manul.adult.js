import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles.ios';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/manul/01.jpg'),
  require('../../images/animals/manul/02.jpg'),
  require('../../images/animals/manul/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/manul/01-thumb.jpg'),
  require('../../images/animals/manul/02-thumb.jpg'),
  require('../../images/animals/manul/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
          <AnimalText>
            Stojíte před výběhem manula (<Text style={styles.ctextItalic}>Otocolobus manul</Text>). Kdo se skrývá pod tímto tajemným jménem?
          </AnimalText>
          <AnimalText>
            Manul je kočkovitá šelma pocházející z centrální Asie, kde se vyskytuje na území od Kaspického moře po Čínu a Mongolsko. Je velký asi jako kočka domácí, ale hustá a dlouhá srst jej činí mohutnějším. Srst manula také chrání před chladem, když se pohybuje v zasněžené a zmrzlé krajině, která je jeho přirozeným působištěm. Barva kožichu se během roku mění ze zimní jednotnější šedé barvy na jarní šedookrovou s tmavšími proužky na ocasu a na tvářích. Na rozdíl od domácích koček má manul kruhovité zorničky, kratší nohy, kvůli kterým běhá pomaleji, a taky vydává zvuk, který se podobá štěkotu malého psa, tedy žádné mňoukání.
          </AnimalText>
          <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Je to samotář. Žije izolovaně ve svém teritoriu, které dosahuje 3–5 kilometrů. Většinu dne tráví v jeskyních, norách jiných zvířat či jiných úkrytech a za soumraku vyráží na lov. Svou kořist sleduje schovaný za porost a kamenitý terén. Někdy také číhá před vchodem do nory a čeká, až se její obyvatel vydá ven. V maskování mu pomáhá sezónně se měnící barva srsti. Živí se především drobnými savci, například pišťuchami (menší příbuzný zajíce, který se podobá spíš morčeti), hraboši, také menšími druhy ptáků a plazů či hmyzem. Když je manul pronásledován, snaží se uniknout mezi balvany a skrýt se v úzkých puklinách.
          </AnimalText>
          <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Naši manulové, Manu a Rosa, jsou samotáři stejně jako jejich příbuzní z Asie, a proto žijí v oddělených výbězích a pohromadě jsou jen krátce, především v období páření, které probíhá v únoru a v květnu. Manu se do naší zoo přistěhoval z Jihlavy v roce 2012 a Rosa přijela v roce 2015 až z Velké Británie. V dubnu 2016 se jim narodila 4 mláďata.
          </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
