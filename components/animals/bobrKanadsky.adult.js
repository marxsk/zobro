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
  require('../../images/animals/medvedKamcatsky/image00.png'),
  require('../../images/animals/medvedKamcatsky/image01.png'),
  require('../../images/animals/medvedKamcatsky/image02.png'),
];

const THUMBNAILS = [
  require('../../images/animals/medvedKamcatsky/image00.png'),
  require('../../images/animals/medvedKamcatsky/image01.png'),
  require('../../images/animals/medvedKamcatsky/image02.png'),
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
        Bobr kanadský, latinsky Castor canadensis, anglicky American Beaver, je největším severoamerickým hlodavcem. Vyskytuje se převážně v rybnících, jezerech a pomalých tocích Severní Ameriky. Uměle byl nasazen také do Finska, Argentiny a Ruska.
        Jejich chov v naší zoologické zahradě započal v roce 2003, když jsme si jich pět přivezli ze Zooparku Chomutov. Měli jsme pro ně připravený zbrusu nový výběh s jezírkem, z něhož vede nora přímo do bobřího hradu.
        </AnimalText>
        <AnimalText>
        Jsou to opravdu zajímavá zvířata, která mají spoustu vlastností společných s lidmi. Ptáte se, co mohou mít bobři společného s člověkem? Tak například je pro ně velmi důležitý tělesný kontakt. Často se něžně dotýkají a pečují o sebe, což se projevuje třeba tím, že si vzájemně pročesávají srst. Navíc spí pevně přitisknuti k sobě. Jsou věrní a vytvářejí monogamní páry na celý život, a to je mezi hlodavci unikátní. Také mají velmi silné rodinné vazby a v jejich noře je důležitá především všeobecná pohoda. To ale neznamená, že se nehádají. Své případné konflikty řeší tak, že spolu prostě nemluví. Navenek se to projevuje tím, že se momentálně odstrčené zvíře drží nějaký čas stranou. Jejich potřeba tělesného kontaktu je však mnohem silnější, a tak je večer zase vídáme spát společně v hromadě těl.
        </AnimalText>
        <AnimalText>
        Mláďata bývají velmi roztomilá. Pokud se jim však něco nelíbí, dokážou naříkat skoro stejně jako ta lidská. V bobří rodině hrají důležitou roli. Do jejich péče se zapojují všichni, především však pomáhají mladí. To je praktické, vyzkouší si totiž výchovu ještě předtím, než opustí rodinu, aby si založili svou vlastní.
        </AnimalText>
        <AnimalText>
          Bobři jsou převážně vodní zvířata. Mají až 120 cm dlouhé svalnaté tělo podobné spíše suchozemským savcům. Před chladem je chrání hustý, jemný, lesklý kožich kaštanové až téměř černé barvy. Podsada, obvykle zabarvená do tmavě šeda, má mezi chlupy vzduch, a tak udržuje tělesné teplo. Díky ní zůstává kůže stále suchá, a to i při pobytu ve vodě.  Pozoruhodným orgánem je však bobří ocas, který je zploštělý a šupinatý. Slouží jako kormidlo při plavání a bobři se o něj také opírají, když se chystají pokácet strom za pomoci robustních předních zubů. V nose a v uších mají klapky, které mohou být pod vodou uzavřeny. Malé oči mají transparentní víčko, tzv. mžurku. Velké drápy na předních nohách bobrům umožňují dobrou manipulaci s potravou. Umějí plavat ihned po narození, ale kvůli provzdušněné kožešině se zpočátku neumějí potápět. Než se to naučí, pohybují se po hladině jako kus korku s větší částí těla vynořenou. Jejich pohyb kormidluje pouze maličký ocas.
        </AnimalText>
        <AnimalText>
          A co bobrům stačí ke spokojenosti? Vodní nádrž na plavání, z ní nora vedoucí do doupěte a samozřejmě také potrava. Nejraději mají kůru a pupeny vrb, ale nepohrdnou ani kořeny, dřevem a některými bylinami.
        </AnimalText>
        <AnimalText>
        Všichni je známe jako mistrné budovatele rozsáhlých přehrad. Jsou totiž velmi cílevědomí a pracovití. Mají velkou sílu, dokážou si poradit i s těžkými kusy dřeva a zvládnou také přemístit obrovské množství hlíny. Mnozí lidé si myslí, že jejich činnost v přírodě je destruktivní. Opak je ale pravdou, bobři mají prostě jen odlišný názor na to, jak by měla krajina vypadat. Navíc například v Kanadě regulují vodní toky a to má pozitivní vliv na přítomnost vody v krajině. Dále mokří biotopy, kterým by jinak chyběla vláha, zpomalením toku také zmírňují erozi půdy a v neposlední řadě přednostně kácejí rychle rostoucí stromy a keře. Tím vytvářejí prostor pro pomaleji rostoucí dřeviny a zabezpečují větší druhovou pestrost, kterou ocení jiní živočichové.
        </AnimalText>
        </View>
      </ScrollView>
    );
  }
});

module.exports = AnimalDetail;
