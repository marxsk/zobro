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
      {animal: 'jespakBojovny', direction: 'right'},
//      {animal: 'tenkozobecOpacny', direction: 'right'},
      {animal: 'ustricnikVelky', direction: 'right'},
      {animal: 'kulikPisecny', direction: 'right'},

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

/*
  '' : {
    name: '',
    contentAdult: require('./components/animals/.adult'),
    contentChild: require('./components/animals/.child'),
    animal: '',
    neighbours: [
      'tygrSumatersky',
    ]
  },
*/
};
