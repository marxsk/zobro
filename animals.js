export default animalDb = {
  'tygrSumatersky': {
    name: 'Tygr sumaterský',
    contentAdult: require('./components/animals/tygrSumatersky.adult'),
    contentChild: require('./components/animals/tygrSumatersky.child'),
    animal: 'tygrSumatersky',
    neighbours: [
      'medvedKamcatsky',
      'zviera1',
    ]
  },

  'medvedKamcatsky': {
    name: 'Medvěd kamčatský',
    contentAdult: require('./components/animals/medvedKamcatsky.adult'),
    contentChild: require('./components/animals/medvedKamcatsky.child'),
    animal: 'medvedKamcatsky',
    neighbours: [
      'tygrSumatersky',
    ]
  },

  'rosomakSibirsky' : {
    name: 'Rosomák sibiřský',
    contentAdult: require('./components/animals/rosomakSibirsky.adult'),
    contentChild: require('./components/animals/rosomakSibirsky.child'),
    animal: 'rosomakSibirsky',
    neighbours: [
      'tygrSumatersky',
    ]
  },

  'medvedLedni' : {
    name: 'Medvěd lední',
    contentAdult: require('./components/animals/medvedLedni.adult'),
    contentChild: require('./components/animals/medvedLedni.child'),
    animal: 'medvedLedni',
    neighbours: [
      'tygrSumatersky',
    ]
  },

  'jerabMandzusky' : {
    name: 'Jeřáb mandžuský',
    contentAdult: require('./components/animals/jerabMandzusky.adult'),
    contentChild: require('./components/animals/jerabMandzusky.child'),
    animal: 'jerabMandzusky',
    neighbours: [
      'tygrSumatersky',
    ]
  },

  'soviceSnezni' : {
    name: 'Sovice sněžní',
    contentAdult: require('./components/animals/soviceSnezni.adult'),
    contentChild: require('./components/animals/soviceSnezni.child'),
    animal: 'soviceSnezni',
    neighbours: [
      'tygrSumatersky',
    ]
  },

  'jespakBojovny' : {
    name: 'Jespák bojovný',
    contentAdult: require('./components/animals/jespakBojovny.adult'),
    contentChild: require('./components/animals/jespakBojovny.child'),
    animal: 'jespakBojovny',
    neighbours: [
      'tygrSumatersky',
    ]
  },

  'kulikPisecny' : {
    name: 'Kulík písečný',
    contentAdult: require('./components/animals/kulikPisecny.adult'),
    contentChild: require('./components/animals/kulikPisecny.child'),
    animal: 'kulikPisecny',
    neighbours: [
      'tygrSumatersky',
    ]
  },

  'ustricnikVelky' : {
    name: 'Ústřičník velký',
    contentAdult: require('./components/animals/ustricnikVelky.adult'),
    contentChild: require('./components/animals/ustricnikVelky.child'),
    animal: 'ustricnikVelky',
    neighbours: [
      'tygrSumatersky',
    ]
  },

  'liskaPolarni' : {
    name: 'Liška polární',
    contentAdult: require('./components/animals/liskaPolarni.adult'),
    contentChild: require('./components/animals/liskaPolarni.child'),
    animal: 'liskaPolarni',
    neighbours: [
      'tygrSumatersky',
    ]
  },

  'manul' : {
    name: 'Manul',
    contentAdult: require('./components/animals/manul.adult'),
    contentChild: require('./components/animals/manul.child'),
    animal: 'manul',
    neighbours: [
      'tygrSumatersky',
    ]
  },

  'lachtanMedvedi' : {
    name: 'Lachtan medvědí',
    contentAdult: require('./components/animals/lachtanMedvedi.adult'),
    contentChild: require('./components/animals/lachtanMedvedi.child'),
    animal: 'lachtanMedvedi',
    neighbours: [
      'tygrSumatersky',
    ]
  },

  'bobrKanadsky' : {
    name: 'Bobr kanadský',
    contentAdult: require('./components/animals/bobrKanadsky.adult'),
    contentChild: require('./components/animals/bobrKanadsky.child'),
    animal: 'bobrKanadsky',
    neighbours: [
      'tygrSumatersky',
    ]
  },

  'myvalSeverni' : {
    name: 'Mýval severní',
    contentAdult: require('./components/animals/myvalSeverni.adult'),
    contentChild: require('./components/animals/myvalSeverni.child'),
    animal: 'myvalSeverni',
    neighbours: [
      'tygrSumatersky',
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
