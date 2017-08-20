import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/levKonzsky/01.jpg'),
  require('../../images/animals/levKonzsky/02.jpg'),
  require('../../images/animals/levKonzsky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/levKonzsky/01-thumb.jpg'),
  require('../../images/animals/levKonzsky/02-thumb.jpg'),
  require('../../images/animals/levKonzsky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
//      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Byl teplý letní den, když vtom celý širý kraj zaplavila vlna vzrušení: "Je to tady!" Stromy si šeptaly, i&nbsp;vítr tuto zprávu nesl dál a dál, až do nejzazších koutů zoologické zahrady: "Už se narodil! Budoucí král je mezi námi!"
        </AnimalText>
        <AnimalText>
          Vyčerpaná, ale hrdá lvice ležela na boku a zlehka k sobě tiskla ten malý, právě narozený uzlíček štěstí a chlupů. Lví král a novopečený otec obcházel kolem nich a dával bedlivý pozor, aby jeho rodinu neohrozilo žádné nebezpečí. Každou chvíli však jeho soustředění vyrušil některý z obyvatel zoo, kteří se sem jeden za druhým hrnuli, aby královské rodině pogratulovali k synkovi. Lví král byl totiž v celé zahradě i za jejími hranicemi velmi oblíbený a každý ho měl rád, stejně jako jeho ženu – a teď i synka.
        </AnimalText>
//        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Malý lvíček, kterého pojmenovali Lolek, rostl jako z vody. Každý v zahradním království si ho hned oblíbil. Jeho královští rodiče ho totiž vychovávali, jak nejlépe svedli, aby z něj byl jednou dobrý a oblíbený vládce, alespoň jako jeho tatínek.
        </AnimalText>
        <AnimalText>
          Lolek dospíval a pomalu bylo načase, aby se ujal své role. Dosavadní král byl sice ještě v plné síle, ale bylo by škoda nevyužít Lolkových schopností, které se od svého otce za ta léta naučil. Mladý následník trůnu se na to na jednu stranu velmi těšil, na stranu druhou mu však bylo líto, že bude muset sesadit z trůnu svého tátu, kterého tak obdivoval a kterého měli všichni tolik rádi!
        </AnimalText>
        <AnimalText>
          Jednoho dne odpoledne, právě v době, kdy lví král přijímal své poddané a řešil s nimi různé záležitosti v království, objevil se ve frontě žadatelů o audienci též Lolek. Král nevěděl, proč mladík přišel, ale byl si jist, že by ho nevyrušil z práce jen tak pro nic za nic. A taky že ne. Hned, když se Lolek dostal na řadu, předložil otci návrh: "Tati, dlouho jsem nad tím přemýšlel, protože vím, že jsi nejlepší král, kterého tato zoo kdy mohla mít, a nechci, abys o toto výsostné postavení přišel. Zároveň nechci, aby všechno mé vzdělání přišlo vniveč. Proto jsem se rozhodl, že se vydám do světa a najdu místo, kde mě budou potřebovat a kde budu moct být stejně dobrým králem, jako jsi ty tady!"
        </AnimalText>
        <AnimalText>
          Lví král svému synovi neodpověděl hned, ale požádal ho, aby si pro odpověď přišel zítra. Dlouho nad tím návrhem přemýšlel, sečetl všechna pro a odečetl proti. V noci téměř nespal, protože stále zvažoval, jak se rozhodnout. Ale následující den, když Lolek opět přišel k audienci, řekl mu: "Synu, jsem si jist, že jsme tě s matkou vychovali, jak nejlépe jsme svedli. Každému rodiči je zatěžko pustit své dítě žít vlastní dospělý život, a tak ani já nebudu vesel, až budeš odcházet. Ale vím, že najdeš místo prosté krále, kde tě budou potřebovat mnohem více než my tady. Už teď vím, že jim budeš dobrým králem a snad si ve světě najdeš i dobrou královnu, jako jsem si před léty našel i já."
        </AnimalText>
//        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Čas uběhl jak voda a přišel den, kdy měl Lolek vyrazit do světa. Všichni se s ním loučili a přáli mu hodně štěstí. Ještě dlouho poté, co opustil zahradu, dívali se směrem, kterým odešel.
        </AnimalText>
        <AnimalText>
          Šel dlouho, až dorazil do zoologické zahrady, plné rozličných zvířat, kde však panovalo bezvládí, chyběl tady pravý král. Představil se jim tedy a stručně vysvětlil, co hledá. Mezitím už si začala zvířata něco šeptat, až se ozval velký medvěd: "Slyšeli jsme o tobě, že jsi z pravého královského rodu a tvůj otec je dobrým vládcem. To víš, vítr a tažní ptáci nic neutají," dodal medvěd na vysvětlenou.
        </AnimalText>
        <AnimalText>
          Celé odpoledne i večer trávil Lolek seznamováním se se svým novým královstvím, neboť všechna zvířata se jednohlasně shodla, že by ho chtěla mít za krále. A co víc – seznámil se i s Kivu, lvicí, která sem dorazila jen o pár dní dříve a které se tady natolik zalíbilo, že se rozhodla zde zůstat. Povídali si spolu dlouho do noci, když už všechna ostatní zvířata spala, a zjišťovali, kolik toho mají společného a jak je hezké, že se tady takovou náhodou potkali.
        </AnimalText>
        <AnimalText>
          Inu, svět je malý…
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
