import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles.ios';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/levhartCejlonsky/01.jpg'),
  require('../../images/animals/levhartCejlonsky/02.jpg'),
  require('../../images/animals/levhartCejlonsky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/levhartCejlonsky/01-thumb.jpg'),
  require('../../images/animals/levhartCejlonsky/02-thumb.jpg'),
  require('../../images/animals/levhartCejlonsky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Levhart cejlonský (<Text style={styles.italic}>Panthera pardus kotiya</Text>) patří k&nbsp;největším poddruhům levharta. Žije pouze na Srí Lance. Má černé skvrny na žlutohnědém kožichu. V kohoutku měří 50–70&nbsp;cm, ocas je dlouhý 60–100&nbsp;cm. Samci jsou o 30&nbsp;% větší než samice. Stejně jako jiné kočky má zatažitelné drápy. Při běhu dosahuje rychlosti až 58&nbsp;km/h, skáče dobře do dálky i&nbsp;do výšky a velmi dobře plave. Skvěle se přizpůsobuje prostředí a je nenáročný na potravu. Živí se velkými&nbsp;i malými savci, ptáky či plazy, ale je schopen ulovit i&nbsp;zvíře ve velikosti dospělého buvola. Na kořist číhá (proto to maskovací zbarvení), a když je vhodný okamžik, zaútočí. Svou oběť neštve, naopak se snaží ji překvapit a zaútočit ze zálohy. Ulovené zvíře pak skrývá pod listím a větvemi, nebo ho vytáhne na strom, kde se mu dobře brání před jinými zájemci. Pokud je úlovek velký, konzumuje ho i&nbsp;několik dní.
        </AnimalText>
      <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />        
        <AnimalText>
          Většinu dne tráví levhart odpočinkem, nejaktivnější je v&nbsp;noci, kdy loví. Levhart je spíše samotář, přítomnost opačného pohlaví vyhledává pouze v&nbsp;období námluv. Má 2–3&nbsp;mláďata a samice je březí přibližně 100&nbsp;dní. Kožich mláďat je hustší a delší s&nbsp;méně viditelnými skvrnami. Když se setkají dva samci, často dochází k&nbsp;agresi, někdy až k&nbsp;zabití jednoho z&nbsp;nich. Mezi levharty probíhá komunikace pomocí hlasových signálů (mručení, předení, řvaní), také díky pachovým stopám (výměšky a pachové žlázy na ocase) a v&nbsp;neposlední řadě se dorozumívají mimikou (výrazy obličeje, postavení těla) a vizuálním značením (poškrábané stromy).
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />        
        <AnimalText>
          Levhart má vynikající čich, zrak a sluch. Je to ohrožený druh, dožívá se 10&nbsp;let, v&nbsp;lidské péči až 23&nbsp;let. V&nbsp;zoologických zahradách po celém světě je asi jen 60&nbsp;jedinců. Naše zoologická zahrada se může pochlubit samcem Daanem, který se narodil 19.&nbsp;9. 2011 v&nbsp;Nizozemsku a k&nbsp;nám dorazil 25.&nbsp;2. 2013 z&nbsp;Arnhemu. Samice Nayana se narodila 24.&nbsp;6. 2011 v&nbsp;Bratislavě, odkud dorazila 20.&nbsp;2. 2013 do naší zoo.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
