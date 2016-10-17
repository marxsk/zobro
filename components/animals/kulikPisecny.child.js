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
  require('../../images/animals/kulikPisecny/01.jpg'),
  require('../../images/animals/kulikPisecny/02.jpg'),
  require('../../images/animals/kulikPisecny/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/kulikPisecny/01-thumb.jpg'),
  require('../../images/animals/kulikPisecny/02-thumb.jpg'),
  require('../../images/animals/kulikPisecny/03-thumb.jpg'),
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
            Ahoj kluci a holky,
          </AnimalText>
          <AnimalText>
            jsme kulíci píseční a do Brna jsme se už jako malí dostali v roce 2014 z německé zoo. Původně ale pocházíme ze severnějších krajů, máme totiž rádi příjemný chládek.
          </AnimalText>
          <AnimalText>
            Vypadáme podobně jako vrabčáci, ty jste už určitě někdy viděli, ale naše peří je hnědé bez tmavších proužků a bříška máme zářivě bílá. Navíc si, stejně jako vlaštovky, každý rok rádi zaletíme na jih do teplých krajin.
          </AnimalText>
          <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Jsme starostliví rodiče, a tak jsme si na hladovce, kteří mají spadeno na naše krásná puntíkatá vajíčka, vymysleli fintu. Když se takový hamoun přiblíží k našemu hnízdu, jeden z nás začne předstírat, že ho něco bolí. Když si hladovec všimne, že by mohl mít sousto větší než vajíčko, rozběhne se za námi, a když už je dost daleko od našeho hnízdečka, prostě mu frkneme. To je hezká finta, viďte, děti? Na nás si totiž žádný hamoun jen tak nepřijde.
          </AnimalText>
          <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Kluky a holky od sebe na první nerozeznáte, jen my kluci občas vystavujeme své bílé peří, to když na ně chceme udělat dojem. Ale nakonec si stejně vybere toho s nejčervenějším zobáčkem, ty se totiž kulíčím slečnám tuze líbí!
          </AnimalText>
          <AnimalText>
            Ve výběhu nejsme sami, jsou tu s námi jespáci, tenkozobci, a dokonce jeden ústřičník. Máme totiž něco společného – všichni jsme bahňáci. Tak se nám říká, protože máme moc rádi bahnité břehy. Dokonce společně i obědváme, ale nebojte se, jídla je dost a dostane se na všechny. Chovatel nám dává moc dobré granule, ve kterých je všechno, co potřebujeme, abychom byli zdraví, a když je mezi nimi i červík nebo malá krevetka, to je teprve bašta!
          </AnimalText>
          <AnimalText>
            Ale teď už budeme muset běžet, běháme totiž rádi a stát na místě dlouho nevydržíme.
          </AnimalText>
        </View>
      </ScrollView>
    );
  }
});

module.exports = AnimalDetail;
