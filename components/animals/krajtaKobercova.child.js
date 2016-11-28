// je potřeba zarovnat na střed

import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/krajtaKobercova/01.jpg'),
  require('../../images/animals/krajtaKobercova/02.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/krajtaKobercova/01-thumb.jpg'),
  require('../../images/animals/krajtaKobercova/02-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
        <Text style={styles.strong}>s              s</Text>
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>s     s</Text>
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>ss</Text>
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>ss</Text>
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>ss</Text>
        </AnimalText>
        <AnimalText>
        Sssssssssss!
        </AnimalText>
        <AnimalText>
        Někdo nás sleduje!
        </AnimalText>
        <AnimalText>
        …Sympaťák…
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>ssss</Text> Asi nás slyší přes sklo. <Text style={styles.strong}>ssss</Text>
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>ssss</Text> On se snad o nás zajímá?! <Text style={styles.strong}>ssss</Text>
        </AnimalText>        
        <AnimalText>
        Tak to se mu s radostí představíme:
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>JSME KRAJTY KOBERCOVÉ.</Text>
        </AnimalText>        
        <AnimalText>
        Sameček a samička.
        </AnimalText>        
        <AnimalText>
        <Text style={styles.strong}>SSSSssssSSSS!</Text>
        </AnimalText>
        <AnimalText>
        Neštiť se nás.
        </AnimalText>        
        <AnimalText>
        Nejsme slizké.
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>SSSSssssSSSS!</Text>
        </AnimalText>        
        <AnimalText>
        Pyšníme se
        </AnimalText>        
        <AnimalText>
        hnědým zbarvením.
        </AnimalText>        
        <AnimalText>
        Kůži nám zdobí
        </AnimalText>        
        <AnimalText>
        zubaté tmavé pásky.
        </AnimalText>   
        <AnimalText>
        Když se smotáme,
        </AnimalText>
        <AnimalText>
        vypadáme trochu jako
        </AnimalText>
        <AnimalText>
        orientální koberce.
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>SSSSSssssssssSSSSS!</Text>
        </AnimalText>
        <AnimalText>
        Máme dokonce i kostru.
        </AnimalText>
        <AnimalText>
        Žádné žížaly, jasné?
        </AnimalText>
        <AnimalText>
        Jsme dlouzí plazi.
        </AnimalText>
        <AnimalText>
        Dorůstáme
        </AnimalText>
        <AnimalText>
        do více než dvou metrů!
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>SSSSSssssssssSSSSS!</Text>
        </AnimalText>        
        <AnimalText>
        Často lezeme
        </AnimalText>
        <AnimalText>
        na stromy.
        </AnimalText>
        <AnimalText>
        Sluníme se.
        </AnimalText>
        <AnimalText>
        Lenošíme.
        </AnimalText>
        <AnimalText>
        Dokud ovšem
        </AnimalText>
        <AnimalText>
        nedostaneme hlad.
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>SSSSsssssssSSSS!</Text>
        </AnimalText>
        <AnimalText>
        Žereme maso.
        </AnimalText>
        <AnimalText>
        Smlsneme si
        </AnimalText>
        <AnimalText>
        na menších
        </AnimalText>
        <AnimalText>
        savcích,
        </AnimalText>        
        <AnimalText>
        ptácích.
        </AnimalText>        
        <AnimalText>
        <Text style={styles.strong}>SSSsssSSS!</Text>
        </AnimalText>        
        <AnimalText>
        Jsme škrtiči.
        </AnimalText>        
        <AnimalText>
        Neusmrcujeme jedem.
        </AnimalText>        
        <AnimalText>
        Vyčkáváme v záloze na oběť.
        </AnimalText>        
        <AnimalText>
        V pravý čas se na ni rychle vymrštíme.
        </AnimalText>        
        <AnimalText>
        Obtočíme ji smyčkami svalnatého těla a škrtíme. 
        </AnimalText>        
        <AnimalText>
        <Text style={styles.strong}>Umíš rozevřít ústa tak, že by se ti tam vlezlo celé kuře?</Text>
        </AnimalText>        
        <AnimalText>
        My to dokážeme díky pružně propojeným čelistem.
        </AnimalText>        
        <AnimalText>
        <Text style={styles.strong}>KDYŽ SEŽEREME NĚCO VELKÉHO, MŮŽEME BÝT CHVÍLI PĚKNĚ TLUSTÉ.</Text>
        </AnimalText> 
        <AnimalText>
        Zvíře totiž nekoušeme. Spolkneme ho prostě jako jedno sousto.
        </AnimalText>
        <AnimalText>
        Postupně všechno strávíme a zase zhubneme.
        </AnimalText>
        <AnimalText>
        Někteří lidé nám to závidějí.
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>SSSSsssSSSS!</Text>
        </AnimalText>
        <AnimalText>
        Na čelistech
        </AnimalText>
        <AnimalText>
        máme
        </AnimalText>
        <AnimalText>
        tepločivné jamky.
        </AnimalText>
        <AnimalText>
        Je to něco jako nos.
        </AnimalText>
        <AnimalText>
        Cítíme teplotu okolí,
        </AnimalText>
        <AnimalText>
        a tak poznáme
        </AnimalText>        
        <AnimalText>
        kořist i ve tmě.
        </AnimalText>
        <AnimalText>
        <Text style={styles.strong}>SSSSssssSSSS!</Text>
        </AnimalText>        
        <AnimalText>
        Klademe vajíčka.
        </AnimalText>        
        <AnimalText>
        Třeba třicet.
        </AnimalText>        
        <AnimalText>
        Zahříváme je
        </AnimalText>        
        <AnimalText>
        třesem svalů.
        </AnimalText>        
        <AnimalText>
        <Text style={styles.strong}>Když je ti zima,</Text>
        </AnimalText>        
        <AnimalText>
        <Text style={styles.strong}>třeseš se podobně.</Text>
        </AnimalText>        
        <AnimalText>
        <Text style={styles.strong}>SsssssssssssS!</Text>
        </AnimalText>        
        <AnimalText>
        Jsme celkem společenské.
        </AnimalText>        
        <AnimalText>
        Lezeme k lidem na návštěvy.
        </AnimalText>        
        <AnimalText>
        Když jsou na nás hodní,
        </AnimalText>        
        <AnimalText>
        chytáme jim myši.
        </AnimalText>        
        <AnimalText>
        Žijeme
        </AnimalText>        
        <AnimalText>
        u protinožců
        </AnimalText>        
        <AnimalText>
        v Austrálii.
        </AnimalText>        
        <AnimalText>
        Samy
        </AnimalText>        
        <AnimalText>
        ale
        </AnimalText>        
        <AnimalText>
        nohy
        </AnimalText> 
        <AnimalText>
        ne-
        </AnimalText> 
        <AnimalText>
        má-
        </AnimalText>
        <AnimalText>
        me.
        </AnimalText>
        <AnimalText>
        Ts!
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
