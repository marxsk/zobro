import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/myvalSeverni/01.jpg'),
  require('../../images/animals/myvalSeverni/02.jpg'),
  require('../../images/animals/myvalSeverni/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/myvalSeverni/01-thumb.jpg'),
  require('../../images/animals/myvalSeverni/02-thumb.jpg'),
  require('../../images/animals/myvalSeverni/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
          <AnimalText>
            Milí člověčí kamarádi, těší nás, že jste zavítali k našemu výběhu! Jsme mývali severní a rádi bychom vám povykládali krátký mývalí příběh.
          </AnimalText>
          <AnimalText>
            Za devatero horami, devatero řekami a jedním Atlantským oceánem, na světadílu zvaném Amerika, bydlela taková malá roztomilá šelma. Srst měla šedou a její huňatý ocas zdobily tmavé kroužky. Vzrůstem tato šelma jen trochu převyšovala domácí kočky, zato čenich se jí protáhl tak, že dokázala vyčmuchat kdejakého špindíru. Snad proto žila u vody a pečlivě umývala nejen sebe, ale i všechno, co chtěla sežrat. Nikdo jí neřekl jinak než princezna Mývalka.
          </AnimalText>
          <AnimalText>
            Princeznu neohrožoval žádný drak ani čert. A k tomu neuměla kouzlit. Až jednou, když si tak umývala žábu k obědu, připlaval k ní z protějšího břehu princ Mýval. Byl stejně čistotný jako ona, a tak se skamarádili. Měli spolu spoustu dětí a nadále vedli svůj nezajímavý život, pustý draků, čertů a kouzel. Inu, i takhle nudné mohou princezny být.
          </AnimalText>
          <AnimalText>
          Mezitím se rod mývalů rozrůstal a rozšířil se do mnoha koutů světa. Dnes je naleznete dokonce i v Česku, avšak musíte si uvědomit, že ne všichni jsou svatoušci…
          </AnimalText>
          <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
          Když na les padne tma, vydávají se na lov mývalí loupežníci. Oči skrývají pod černými škraboškami – to aby nebylo vidět, jak moc se jim oči hladem blyští. Mývali sice neumějí moc rychle běhat, ale hbitě šplhají po stromech a přepadávají ptačí hnízda. Milují vajíčka. Ptáčkům vždy pohrozí svými nezatažitelnými drápy, šikovnými prstíky zašmátrají v hnízdě a kořist je jejich. Když si vajíčko ochutí oříšky nebo si k němu přikousnou kousek hmyzu, jsou na vrcholu blaha.
          </AnimalText>
          <AnimalText>
          Ale znáte to, někdy se ani člověku nechce nic dělat, natož aby se vyčerpával lovem. Mývalí loupežnická banda si to moc dobře uvědomuje. Její členové jsou vysoce inteligentní, a tak si našli snadnější kořist – popelnice. Dají se z nich vyhrabat všelijaké delikatesy, zbytky ovoce počínaje, kousky šťavnatého masa konče.  Bohužel ale mývali nemají takový smysl pro čistotu, jaký kdysi mívali. Kolem popelnic dělají nepořádek, navíc z kožichu vytřepávají všemožné kousavé breberky.
          </AnimalText>
          <AnimalText>
          To se lidem vůbec nelíbí. Rozhodli se, že pošlou na loupežnické mývaly myslivce, aby jim ukázali, zač je toho loket.
          </AnimalText>
          <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
          Některých hodných mývalů se ale lidem zželelo a začali je chovat v zajetí. Tihle mývali už nemusejí krást. Dostávají žrádlo skoro do postele. Už si zase můžou připadat jako princezny a princové.
          </AnimalText>
          <AnimalText>
          Ani my, mývali v brněnské zoo, si nestěžujeme. Máme útulný výběh s místy, kde si můžeme hrát na schovávanou, a pan chovatel nám připravuje spousty dobrot.
          </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
