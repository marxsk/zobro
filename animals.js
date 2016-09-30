export default animalDb = {
  'tygrSumatersky': {
    name: 'Tygr Sumaterský',
    content: require('./components/animals/tygrSumatersky'),
    animal: 'tygrSumatersky',
    neighbours: [
      'medvedKamcatsky',
      'zviera1',
    ]
  },
  'medvedKamcatsky': {
    name: 'Medvěd Kamčatský',
    content: require('./components/animals/medvedKamcatsky'),
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
