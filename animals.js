export default animalDb = {
  'tygrSumatersky': {
    name: 'Tygr Sumaterský',
    contentAdult: require('./components/animals/tygrSumatersky.adult'),
    contentChild: require('./components/animals/tygrSumatersky.child'),
    animal: 'tygrSumatersky',
    neighbours: [
      'medvedKamcatsky',
      'zviera1',
    ]
  },

  'medvedKamcatsky': {
    name: 'Medvěd Kamčatský',
    contentAdult: require('./components/animals/medvedKamcatsky.adult'),
    contentChild: require('./components/animals/medvedKamcatsky.child'),
    animal: 'medvedKamcatsky',
    neighbours: [
      'tygrSumatersky',
    ]
  },
  'zviera1' : {
    name: 'Zviera 1',
    animal: 'zviera1',
    neighbours: [

    ]
  }
};
