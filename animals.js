export default animalDb = {
  'tygrSumatersky': {
    name: 'Tygr sumaterský',
    contentAdult: require('./components/animals/tygrSumatersky.adult'),
    contentChild: require('./components/animals/tygrSumatersky.child'),
    animal: 'tygrSumatersky',
    neighbours: [
      {animal: 'tygrSumatersky', direction: 'front'},
      {animal: 'rosomakSibirsky', direction: 'right'},
      {animal: 'soviceSnezni', direction: 'right'},
    ]
  },

  'medvedKamcatsky': {
    name: 'Medvěd kamčatský',
    contentAdult: require('./components/animals/medvedKamcatsky.adult'),
    contentChild: require('./components/animals/medvedKamcatsky.child'),
    animal: 'medvedKamcatsky',
    neighbours: [
      {animal: 'medvedKamcatsky', direction: 'front'},
      {animal: 'lachtanMedvedi', direction: 'left'},
      {animal: 'manul', direction: 'left'},
      {animal: 'rosomakSibirsky', direction: 'right'},
    ]
  },

  'rosomakSibirsky' : {
    name: 'Rosomák sibiřský',
    contentAdult: require('./components/animals/rosomakSibirsky.adult'),
    contentChild: require('./components/animals/rosomakSibirsky.child'),
    animal: 'rosomakSibirsky',
    neighbours: [
      {animal: 'rosomakSibirsky', direction: 'front'},
      {animal: 'tygrSumatersky', direction: 'left'},
      {animal: 'medvedKamcatsky', direction: 'right'},
    ]
  },

  'medvedLedni' : {
    name: 'Medvěd lední',
    contentAdult: require('./components/animals/medvedLedni.adult'),
    contentChild: require('./components/animals/medvedLedni.child'),
    animal: 'medvedLedni',
    neighbours: [
      {animal: 'medvedLedni', direction: 'front'},
//      {animal: 'rysKanadsky', direction: 'left'},
//      {animal: 'orelVychodni', direction: 'back'},
    ]
  },

  'jerabMandzusky' : {
    name: 'Jeřáb mandžuský',
    contentAdult: require('./components/animals/jerabMandzusky.adult'),
    contentChild: require('./components/animals/jerabMandzusky.child'),
    animal: 'jerabMandzusky',
    neighbours: [
      {animal: 'jerabMandzusky', direction: 'front'},
      {animal: 'myvalSeverni', direction: 'left'},
    ]
  },

  'soviceSnezni' : {
    name: 'Sovice sněžní',
    contentAdult: require('./components/animals/soviceSnezni.adult'),
    contentChild: require('./components/animals/soviceSnezni.child'),
    animal: 'soviceSnezni',
    neighbours: [
      {animal: 'soviceSnezni', direction: 'front'},
      {animal: 'tygrSumatersky', direction: 'left'},
//      {animal: 'jespakBojovny', direction: 'right'},
//      {animal: 'tenkozobecOpacny', direction: 'right'},
      {animal: 'ustricnikVelky', direction: 'right'},
//      {animal: 'kulikPisecny', direction: 'right'},

    ]
  },

  'jespakBojovny' : {
    name: 'Jespák bojovný',
    contentAdult: require('./components/animals/jespakBojovny.adult'),
    contentChild: require('./components/animals/jespakBojovny.child'),
    animal: 'jespakBojovny',
    neighbours: [
      {animal: 'jespakBojovny', direction: 'front'},
//      {animal: 'tenkozobecOpacny', direction: 'front'},
      {animal: 'ustricnikVelky', direction: 'front'},
      {animal: 'kulikPisecny', direction: 'front'},

      {animal: 'soviceSnezni', direction: 'left'},
      {animal: 'lachtanMedvedi', direction: 'right'},
    ]
  },

  'kulikPisecny' : {
    name: 'Kulík písečný',
    contentAdult: require('./components/animals/kulikPisecny.adult'),
    contentChild: require('./components/animals/kulikPisecny.child'),
    animal: 'kulikPisecny',
    neighbours: [
      {animal: 'kulikPisecny', direction: 'front'},
      {animal: 'jespakBojovny', direction: 'front'},
//      {animal: 'tenkozobecOpacny', direction: 'front'},
      {animal: 'ustricnikVelky', direction: 'front'},

      {animal: 'soviceSnezni', direction: 'left'},
      {animal: 'lachtanMedvedi', direction: 'right'},
    ]
  },

  'ustricnikVelky' : {
    name: 'Ústřičník velký',
    contentAdult: require('./components/animals/ustricnikVelky.adult'),
    contentChild: require('./components/animals/ustricnikVelky.child'),
    animal: 'ustricnikVelky',
    neighbours: [
      {animal: 'ustricnikVelky', direction: 'front'},
      {animal: 'jespakBojovny', direction: 'front'},
//      {animal: 'tenkozobecOpacny', direction: 'front'},
      {animal: 'kulikPisecny', direction: 'front'},

      {animal: 'soviceSnezni', direction: 'left'},
      {animal: 'lachtanMedvedi', direction: 'right'},
    ]
  },

/*  'liskaPolarni' : {
    name: 'Liška polární',
    contentAdult: require('./components/animals/liskaPolarni.adult'),
    contentChild: require('./components/animals/liskaPolarni.child'),
    animal: 'liskaPolarni',
    neighbours: [
      'tygrSumatersky',
    ]
  },
*/
  'manul' : {
    name: 'Manul',
    contentAdult: require('./components/animals/manul.adult'),
    contentChild: require('./components/animals/manul.child'),
    animal: 'manul',
    neighbours: [
      {animal: 'manul', direction: 'front'},
      {animal: 'medvedKamcatsky', direction: 'right'},
      {animal: 'lachtanMedvedi', direction: 'back'},
    ]
  },

  'lachtanMedvedi' : {
    name: 'Lachtan medvědí',
    contentAdult: require('./components/animals/lachtanMedvedi.adult'),
    contentChild: require('./components/animals/lachtanMedvedi.child'),
    animal: 'lachtanMedvedi',
    neighbours: [
      {animal: 'lachtanMedvedi', direction: 'front'},

      {animal: 'ustricnikVelky', direction: 'left'},
      {animal: 'jespakBojovny', direction: 'left'},
//      {animal: 'tenkozobecOpacny', direction: 'left'},
      {animal: 'kulikPisecny', direction: 'left'},

      {animal: 'myvalSeverni', direction: 'right'},

      {animal: 'manul', direction: 'back'},
    ]
  },

  'bobrKanadsky' : {
    name: 'Bobr kanadský',
    contentAdult: require('./components/animals/bobrKanadsky.adult'),
    contentChild: require('./components/animals/bobrKanadsky.child'),
    animal: 'bobrKanadsky',
    neighbours: [
      {animal: 'bobrKanadsky', direction: 'front'},
      {animal: 'myvalSeverni', direction: 'right'},
    ]
  },

  'myvalSeverni' : {
    name: 'Mýval severní',
    contentAdult: require('./components/animals/myvalSeverni.adult'),
    contentChild: require('./components/animals/myvalSeverni.child'),
    animal: 'myvalSeverni',
    neighbours: [
      {animal: 'myvalSeverni', direction: 'front'},
      {animal: 'lachtanMedvedi', direction: 'left'},
      {animal: 'jerabMandzusky', direction: 'right'},
      {animal: 'bobrKanadsky', direction: 'back'},
//      {animal: 'pustikBradaty', direction: 'right'},
//      {animal: 'rysKanadsky', direction: 'right'},
    ]
  },

  'agamaKocincinska' : {
    name: 'Agama kočinčinská',
    contentAdult: require('./components/animals/agamaKocincinska.adult'),
    contentChild: require('./components/animals/agamaKocincinska.child'),
    animal: 'agamaKocincinska',
    neighbours: [
//      {animal: 'dvojjazycnikHaitsky', direction: 'right'},
//      {animal: 'bazilisekZeleny', direction: 'right'},
//      {animal: 'anakondaVelka', direction: 'left'},
    ]
  },

  'dzelada' : {
    name: 'Dželada',
    contentAdult: require('./components/animals/dzelada.adult'),
    contentChild: require('./components/animals/dzelada.child'),
    animal: 'dzelada',
    neighbours: [
//      {animal: 'paovceHrivnata', direction: 'front'},
//      {animal: 'sobPolarni', direction: 'right'},
    ]
  },  
  
  'husickaVdovka' : {
    name: 'Husička vdovka',
    contentAdult: require('./components/animals/husickaVdovka.adult'),
    contentChild: require('./components/animals/husickaVdovka.child'),
    animal: 'husickaVdovka',
    neighbours: [
      {animal: 'lemurKata', direction: 'right'},
//      {animal: 'husickaDvoubarva', direction: 'front'},
      {animal: 'plamenakRuzovy', direction: 'front'},
    ]
  },
  
  'jaguarundi' : {
    name: 'Jaguarundi',
    contentAdult: require('./components/animals/jaguarundi.adult'),
    contentChild: require('./components/animals/jaguarundi.child'),
    animal: 'jaguarundi',
    neighbours: [
//      {animal: 'lemurBelocely', direction: 'right'},
//      {animal: 'variCernobily', direction: 'left'},
    ]
  },
  
  'klokanZlutonohy' : {
    name: 'Klokan žlutonohý',
    contentAdult: require('./components/animals/klokanZlutonohy.adult'),
    contentChild: require('./components/animals/klokanZlutonohy.child'),
    animal: 'klokanZlutonohy',
    neighbours: [
      {animal: 'pandaCervena', direction: 'back'},
      {animal: 'vikuna', direction: 'back'},
      {animal: 'zebraGrevyho', direction: 'front'},
    ]
  },
  
  'krajtaKobercova' : {
    name: 'Krajta kobercová',
    contentAdult: require('./components/animals/krajtaKobercova.adult'),
    contentChild: require('./components/animals/krajtaKobercova.child'),
    animal: 'krajtaKobercova',
    neighbours: [
      {animal: 'papousekPatagonsky', direction: 'left'},
      {animal: 'pustikObecny', direction: 'right'},
    ]
  },
  
  'kunPrevalskeho' : {
    name: 'Kůň Převalského',
    contentAdult: require('./components/animals/kunPrevalskeho.adult'),
    contentChild: require('./components/animals/kunPrevalskeho.child'),
    animal: 'kunPrevalskeho',
    neighbours: [
      {animal: 'jakDomaci', direction: 'back'},
    ]
  },
/*
  '' : {
    name: '',
    contentAdult: require('./components/animals/.adult'),
    contentChild: require('./components/animals/.child'),
    animal: '',
    neighbours: [
      {animal: '', direction: ''},
    ]
  },
*/

  
};
