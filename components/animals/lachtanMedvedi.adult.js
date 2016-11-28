import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/lachtanMedvedi/01.jpg'),
  require('../../images/animals/lachtanMedvedi/02.jpg'),
// @todo: broken JPG
//  require('../../images/animals/lachtanMedvedi/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/lachtanMedvedi/01-thumb.jpg'),
  require('../../images/animals/lachtanMedvedi/02-thumb.jpg'),
//  require('../../images/animals/lachtanMedvedi/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
          <AnimalText>
          Seznamte se, zde bydlí <Text style={styles.ctextItalic}>Callorhinus ursinus</Text>, ploutvonožci z čeledi lachtanovitých. Momentálně zde žijí dva, konkrétně samec Sema a samička Vafla. Zdají se vám ta jména zvláštní? Právem, oba lachtani dostali jméno v Rusku, odkud jsme si je přivezli. Z Rostova na Donu k nám dorazili v noci z 19. na 20. prosince 2013. 
          </AnimalText>
          <AnimalText>
            Lachtani patří mezi nejoblíbenější zvířata chovaná v zoologických zahradách. Proč? Nelze se nepozastavit nad jejich tak trochu komickým vzhledem, který jen podtrhuje velmi hravá povaha. Jsou navíc velice inteligentní a i díky tomu je lze srovnávat například se psem. Nesnášejí nudu a baví se třeba i tím, že pod vodou vypouštějí bublinky, kolem kterých pak krouží. Taky vynášejí ze dna kameny, jež následně nechávají klesat zpět. Vzhledem k tomu, že se moc rádi předvádějí a milují publikum, pořádáme tady v zoo pravidelná komentovaná krmení, při nichž lachtani vykonávají jednoduché cviky. Cvičení a hra s chovatelem je pro ně velmi důležitá. Zachovává jejich bystrost, přináší jim radost ze života a udržuje dobrý psychický i fyzický stav.
          </AnimalText>
          <AnimalText>
            U tohoto druhu je hodně výrazný pohlavní dimorfismus. To znamená, že se samec a samice liší, a to v tomto případě nejen velikostí. Samci mají načervenalou až zcela černou barvu, mohou dosahovat váhy až 270 kg a jsou 4,5krát těžší než samice, které jsou stříbřitě šedé nebo hnědé se světlou skvrnou na hrudi. Mladí lachtani pak bývají černí se světlým značením kolem nosu a tlamy.
          </AnimalText>
          <AnimalText>
            Lachtanovití obecně jsou dokonale přizpůsobeni životu pod vodou. Dokážou se ponořit až do hloubky 200 metrů a pod hladinou vydrží i 7 minut. Jejich tělo je proti chladu chráněno hustou mastnou srstí, přes kterou nepronikne voda. Předními ploutvemi veslují a extrémně dlouhými zadními ploutvemi kormidlují. Dokonce se poměrně rychle pohybují i po pevnině. Většinu života však tráví právě ve vodě, kde dokonce i spí, a to na hladině, na které přes den plavou na zádech nebo na boku.
          </AnimalText>
          <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
          Domovem lachtanů medvědích je severní část Tichého oceánu, od Beringova moře po jižní Japonsko na západě a pobřeží Kalifornie na východě Pacifiku. Moře a oceán protkávají dlouhými migračními cestami za potravou, kterou tvoří převážně ryby, hlavonožci a korýši.
          Na pevninu vystupují jen v době rozmnožování, k němuž dochází v početných koloniích. Na konci května samci soupeří o teritoria na skalnatých či písčitých pobřežích ostrovů. Takové boje mohou být velmi násilné a jen největší a nejsilnější z nich se mohou stát vládci harému. Mladší a slabší jedinci obsazují okraje teritorií.
          </AnimalText>
          <AnimalText>
          Během června se na ostrovech postupně objevují samice oplodněné z minulé sezony. Za jeden nebo dva dny každá porodí jedno mládě, které následně tři až čtyři měsíce kojí. Už týden po porodu je však schopna se znovu pářit. Dominantní samec jich v harému může mít až padesát. Kolonie bývají velmi přeplněné a často se stává, že některé potulné samice občas zabloudí na území jiného samce. Takových příležitostí pak využívají někteří slabší jedinci, kteří se jinak páří výjimečně. Vládci harémů tak nemají klid ani v období páření, své samice si musí hlídat, případně se o ně dohadovat s ostatními samci, a to i přes to, že si prve vybojovali své území. A aby měli větší jistotu, že jejich partnerky nebudou sváděni jinými samci, nejedí a jsou tak schopni ztratit až 20 % své tělesné hmotnosti.
          </AnimalText>
          <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
          Dospělí samci pak opouštějí skalnaté ostrovy přibližně od konce srpna, samice odstavují mláďata na konci října. Na stejné místo se vracejí i několik let po sobě.
          </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
