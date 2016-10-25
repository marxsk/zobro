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
  require('../../images/animals/rosomakSibirsky/01.jpg'),
  require('../../images/animals/rosomakSibirsky/02.jpg'),
  require('../../images/animals/rosomakSibirsky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/rosomakSibirsky/01-thumb.jpg'),
  require('../../images/animals/rosomakSibirsky/02-thumb.jpg'),
  require('../../images/animals/rosomakSibirsky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  componentWillMount() {
    this.props.bg();
  },

  render() {
    return (
<ScrollView>
<View>
  <InPageImage firstImage={true} indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
</View>
<View style={styles.scrollView}>
  <AnimalText>
    Ahoj, jmenuji se Ivan a jsem rosomák. Narodil jsem se v roce 2008 v Norsku a do brněnské zoo jsem přicestoval ve dvou letech. Nataša – to je ta rosomačice, která se mnou obývá výběh – je o 2 roky mladší než já a sem do Beringie přijela jen krátce po mně. Aby nenastala nějaká mýlka, já jsem z nás dvou ten menší. Nataša sice pochází až z Ruska, ale mezi námi rosomáky nebývají jazykové bariéry, takže jsme se rychle skamarádili. Dokonce natolik, že se nám 2. března 2016 narodil syn Vasil.
  </AnimalText>
  <AnimalText>
    Rádi bychom se vám představili – jsme rosomáci sibiřští. Máme také mnoho jiných jmen a přezdívek, mnohé z nich jsou docela zábavné: tak například zoologové nám latinsky říkají <Text style={styles.ctextItalic}>Gulo gulo gulo</Text>, indiáni nás nazývají <Text style={styles.ctextItalic}>carcajou</Text> [karkažu:], což znamená <Text style={styles.ctextItalic}>zlý duch</Text> nebo <Text style={styles.ctextItalic}>horský ďábel</Text>. Jinak se nám také říká <Text style={styles.ctextItalic}>lesní duchové</Text> nebo <Text style={styles.ctextItalic}>hyeny severu</Text>. Ze severu sice opravdu pocházíme, ale k hyenám máme docela daleko, přestože jsme také šelmy. Jsme největšími suchozemskými členy čeledi lasicovitých, velikostně se nejvíce podobáme jezevcům.
    </AnimalText>
  <AnimalText>
    Čím jsme si tedy zasloužili takové přezdívky? K nám dvěma se moc nehodí, spíš byste nám mohli říkat <Text style={styles.ctextItalic}>šikovní bordeláři</Text>, protože rádi hrabeme doupata všude, kde se dá, a všechny úkryty z větví, které nám sem nanosili pracovníci zoo, jsme rozebrali a rozprostřeli po celém svém výběhu.
  </AnimalText>
  <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
  <AnimalText>
    Jsme divocí. Ve volné přírodě žijeme převážně sami, svá teritoria o velikosti až 500 km2 si značkujeme jako skunkové. Potkáváme se jen v létě, když chceme zakládat rodiny. Devět měsíců nato se samičkám narodí 1–5 mláďat. Dříve se věřilo, že se rodíme jako medvíďata, a to tak, že pokud se medvědici narodí čtyři mláďata, z toho čtvrtého vyroste rosomák. Ale tak to rozhodně není. I když se o nás povídá, že kdybychom dorostli velikosti medvěda, byli bychom nejsilnějšími zvířaty na světě.
  </AnimalText>
  <AnimalText>
    Jsme vynikající lovci a stopaři. Díky svým širokým tlapám se umíme lehce pohybovat po sněhu. Této dovednosti využíváme například při lovu losů  – velké zvíře tak dlouho naháníme ve vysokém sněhu, až se los unaví a my ho zakousneme. Běžně však dáváme přednost menším úlovkům a mršinám, ale neodmítneme ani vejce či různé plody. Potravu umíme vyčichat i pod hlubokým sněhem nebo zvládneme podle pastí dojít až k lidskému obydlí, tam sníst a posbírat, co se dá, a zase se tiše vykrást, aniž bychom se do pastí chytili. Cestou nás nezastaví ani slabší kovové oplocení – s tím si poradí naše silné čelisti plné velmi ostrých zubů.
  </AnimalText>
  <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
  <AnimalText>
    My rosomáci nemáme příliš přirozených nepřátel – bojíme se snad jen lidí nebo smečky vlků. I když už jsem taky slyšel, že rosomáci dokázali takovou smečku vlků zahnat. Nevím, co je na tom pravdy, ale třeba s pumou, s tou si poradíme. Když vyceníme zuby, naježíme hřbet a začneme temně vrčet, vyděsíme ji natolik, že nechá svou kořist kořistí a zbaběle uteče.
  </AnimalText>
  <AnimalText>
    Uznávám, že tady v zoo žádné nepřátele nemáme a lovit taky nemusíme, protože dostáváme pravidelně najíst od ošetřovatele Milana. Ale když se nám něco nelíbí, to je pak podívaná! V tu chvíli jsou z nás opět ta nejdivočejší zvířata, která se ani jediným chloupkem neliší od rosomáka bojujícího o kořist, nebo dokonce o holý život.
  </AnimalText>
  <AnimalText>
    Tak to jsme my. Teď už o nás víte mnohem více než na začátku. A když nad tím tak přemýšlím, ony se k nám některé ty přezdívky, třeba <Text style={styles.ctextItalic}>lesní duchové</Text>, možná přece jenom hodí.
  </AnimalText>
</View>
</ScrollView>
    );
  }
});

module.exports = AnimalDetail;
