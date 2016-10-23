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
            Zdravím tě, človíčku!
          </AnimalText>
          <AnimalText>
            Já jsem ústřičník velký a přišel jsem sem z pražské zoo. Létám si tu s ostatními kamarády bahňáky už asi šest let. Moc se mi tu s nimi líbí. Dělím se s nimi o potravu a všichni společně prozkoumáváme náš malý rybníček.
          </AnimalText>
          <AnimalText>
            Říká se mi bahňák, protože mám rád prostředí bahna. V bahně si vždy najdu spoustu vhodné potravy a užiju si v něm s ostatními mnoho legrace.
          </AnimalText>
          <AnimalText>
            Jsem velký asi jako dospělá vrána. Jsem stejně tak černý jako vrána, až na to, že mám bílé bříško. Vážně, vypadám, jako bych si lehl na bříško do bílé barvy. Když roztáhnu křídla, zabírám celou šíři tvé postele. Mám svítivě oranžový dlouhý a silný zobák. Dokážu s ním rozevřít ústřice a jiné mořské měkkýše a korýše. Zobákem lovím také v zemi červíky a žížalky, které jsou pro mě velikou delikatesou! Říkám si, že se trochu podobám čápovi. Mám stejný zobák, podobné zabarvení těla a stejně jako čáp velmi rád odpočívám na jedné noze. Čáp je oproti mně však o dost větší a má bílou hlavu.
          </AnimalText>
          <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Zajímá vás, jak jsem přišel na svět? Vylíhl jsem se z vejce, které bylo pěkně kropenaté a velké asi jako vajíčko od slepičky. Do druhého dne jsem dokázal čile běhat a po dvou měsících jsem si již sám obstarával jídlo.
          </AnimalText>
          <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Víte, co všechno takový ústřičník jako já dokáže? Umím nejen létat, chodit a běhat, ale také plavat, a dokonce se i potápět! To koukáte, co? Jsem prostě všestranně nadaný ústřičník.
          </AnimalText>
          <AnimalText>
            Když se cítím unavený a chce se mi spát, zalezu si do svého hnízda, které mám v mělkém důlku v zemi. Mám ho vystlané různými kamínky či listy. Tam je moje království.
          </AnimalText>
        </View>
      </ScrollView>
    );
  }
});

module.exports = AnimalDetail;
