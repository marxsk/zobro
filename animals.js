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

  'z' : {
    name: 'Z',
    animal: 'z',
    neighbours: [

    ]
  }
};
