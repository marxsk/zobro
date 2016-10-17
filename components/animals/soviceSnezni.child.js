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
  require('../../images/animals/soviceSnezni/01.jpg'),
  require('../../images/animals/soviceSnezni/02.jpg'),
  require('../../images/animals/soviceSnezni/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/soviceSnezni/01-thumb.jpg'),
  require('../../images/animals/soviceSnezni/02-thumb.jpg'),
  require('../../images/animals/soviceSnezni/03-thumb.jpg'),
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
            Ahoj, jmenujeme se Helga a Hugo a jsme sovice sněžní. Jsme velké sovy, největší z nás sovic mají rozpětí křídel až 150 centimetrů. Naše křídla by tedy mohla v pohodě jezdit v autě na předním sedadle. Na výšku ale máme jen něco přes půl metru.
          </AnimalText>
          <AnimalText>
            U vás lidí je běžné, že kluci jsou větší. U nás sov je to ale naopak, větší bývají holky. To ale není jediné, čím se od sebe navzájem lišíme. Hugo je jako všichni samečci bílý, jen s několika černými skvrnami; Helga je tmavší, kropenatá. (Pokud si opravdu dobře pamatujete Harryho Pottera, poznáte podle zbarvení, že ve filmu měl Harry spíš než sovu Hedviku sováka Hedvika.)
          </AnimalText>
          <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            I když asi víte, že sovy loví v noci, my jsme výjimka, běžně lovíme i ve dne. Nejraději se živíme lumíky, což jsou hlodavci – takové větší myši s krátkým ocasem. Ale když je lumíků málo, lovíme i jiná zvířata.
          </AnimalText>
          <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Žijeme na severu, v tundrách, kde je zem pořád zmrzlá a nerostou tam žádné stromy. Proto někdy létáme za polárními liškami, a když něco uloví, obereme je o jejich kořist. Říká se sice „mazaný jako liška“, ale na nás si jen tak nepřijdou! I když občas nás lišky pozlobí taky. Stavíme si totiž hnízda buď ve skalách, nebo přímo na zemi. A z nich nám pak kradou vejce.
          </AnimalText>
          <AnimalText>
            Vajíček klademe zhruba pět. Trvá asi měsíc, než se malá sovátka vyklubou. Další tři týdny nejsou ještě dost velká na to, aby opustila teplo peřím vystlaného hnízda. I pak se o ně ale ještě chvíli staráme, sama totiž dokážou naše mláďata lovit až v šesti týdnech.
          </AnimalText>
        </View>
      </ScrollView>
    );
  }
});

module.exports = AnimalDetail;
