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
  require('../../images/animals/bobrKanadsky/01.jpg'),
  require('../../images/animals/bobrKanadsky/02.jpg'),
  require('../../images/animals/bobrKanadsky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/bobrKanadsky/01-thumb.jpg'),
  require('../../images/animals/bobrKanadsky/02-thumb.jpg'),
  require('../../images/animals/bobrKanadsky/03-thumb.jpg'),
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
        Ahoj kamarádi,
        </AnimalText>
        <AnimalText>
        my jsme bobři kanadští a tady v Bystrci bydlíme od roku 2003. Přivezli nás sem ze Zooparku v Chomutově a celkově nás přijelo pět. Pocházíme až ze Severní Ameriky, což je odsud hodně daleko, až za oceánem.
        </AnimalText>
        <AnimalText>
        Naše tělo je pokryto hnědým až černým kožichem a je včetně ocásku dlouhé zhruba jako tělo malého koníka. Tak možná proto se o nás říká, že jsme třetí největší hlodavci na světě, což taky jsme!
        </AnimalText>
        <AnimalText>
        Nejraději plaveme ve vodě. A víte, proč se nikdy z máčení ve vodě nenachladíme? To díky tomu, že naše srst nepropouští vodu. Při plavání si pomáháme ocasem, který nám slouží jako pádlo, a na zadních nohách máme navíc plovací blány. Jsme hlodavci, jako je například křeček nebo veverka, ale ve vodě si chvilkami připadáme spíše jako rybičky.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Proč rybičky? Nejraději ze všeho totiž plaveme. Z dlouhého máčení se ve vodě však nikdy nenachladneme. To díky tomu, že naše srst nepropouští vodu. Při plavání si pomáháme ocasem, který nám slouží jako pádlo, a na zadních nohách máme plovací blány.
        </AnimalText>
        <AnimalText>
        Kromě plavání také rádi skotačíme v proudu řek, brousíme si zuby o dřevo,  stavíme hráze ze stromů anebo si hrajeme v našem bobřím hradě.  Říkáte si, bobři mají hrad? Ano, z větviček a hlíny.
        </AnimalText>
        <AnimalText>
        A zajímá vás, jestli míváme také bobří mláďátka? Samozřejmě, každý rok se nám narodí zhruba pět miminek (naposledy to byla 4 mláďata na konci června 2016), která si buď odvezou do jiných zoologických zahrad, anebo zůstávají tady s námi. Jednou si naše mláďátko odvezli dokonce až do Jižní Koreje!
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Rádi mlsáme kůru a pupeny vrby, mňam, jen jak to říkáme, hned bychom si nějaký ten pupen dali!
        </AnimalText>
        <AnimalText>
        Tak se mějte krásně a zase nás přijďte navštívit,
        </AnimalText>
        <AnimalText>
        pac a bobří pusu.
        </AnimalText>
        </View>
      </ScrollView>
    );
  }
});

module.exports = AnimalDetail;
