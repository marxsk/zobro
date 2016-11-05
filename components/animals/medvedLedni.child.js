import React, { Component } from 'react';
import { Text } from 'react-native';

const styles = require('../../styles/styles.ios');
const InPageImage = require('../inPageImage');
const AnimalText = require('../animalText');
const AnimalTemplate = require('../animalTemplate');

const IMAGES = [
  require('../../images/animals/medvedLedni/01.jpg'),
  require('../../images/animals/medvedLedni/02.jpg'),
  require('../../images/animals/medvedLedni/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/medvedLedni/01-thumb.jpg'),
  require('../../images/animals/medvedLedni/02-thumb.jpg'),
  require('../../images/animals/medvedLedni/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
          <AnimalText>
            Drazí návštěvníci, dovolte mi, abych se vám představila. Jmenuji se Cora a jsem máma rodiny ledních medvědů. Do brněnské zoo jsem přijela v roce 2000 z evropské části Ruska, přesněji z Petrohradu. Tady v Brně už na mě tou dobou čekal samec Umca, který pochází z Kazachstánu. (Kazachstán sice sousedí s Ruskem, ale Umca se narodil na jeho druhém konci, u hranic s Čínou.)
          </AnimalText>
          <AnimalText>
            Chvíli nám trvalo, než jsme se skamarádili, ale teď už spolu máme páté mládě –  Noria se nám narodila 21. listopadu 2015. Předtím jsme měli vždy dvojčata: v roce 2007 Billa a Toma a v roce 2012 Nanuka a Kometu. Nezůstali jsme tu však všichni pohromadě, Tom je v Praze, Bill v Německu, Kometa v Rusku a Nanuk na Ukrajině.
          </AnimalText>
          <AnimalText>
            Mít mladé pro nás ale není jen tak. My samice totiž rodíme v zimě, zalezlé ve svém brlohu pod sněhem. Když se medvíďata narodí, váží o něco víc než půl pytlíku mouky, a první měsíc po narození jsou navíc slepá a hluchá. Proto je necháváme u sebe na břiše, aby byla v teple a mohla se najíst, kdykoli potřebují. Když mláďata sají mléko, vydávají zvuk podobný tomu, jako kdyby startoval traktor.
          </AnimalText>
          <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Ven z brlohu mláďata pouštíme, když jim je necelého půl roku. Chodí všude s námi a zkouší nás napodobovat například při lovu. Učí se, jak se o sebe v dospělosti postarat. Protože v přírodě žijeme v Arktidě (daleko na severu), kde není moc co jíst, lovíme hlavně tuleně. Tady v zoo ale dostáváme různé maso a ryby, ovoce, zeleninu, a dokonce i chleba a jogurt.
          </AnimalText>
          <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Většinou jsme samotářská zvířata, medvíďata s námi matkami však zůstávají asi dva a půl roku. Pak od nás odcházejí, protože jsou už dost velká. V tom věku váží samice průměrně tolik jako polovina koně, zatímco samci jsou těžcí jako celý kůň. A do dospělosti, která u ledních medvědů nastává mezi třetím a pátým rokem, ještě poporostou.
          </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
