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
  
  'lemurKata' : {
    name: 'Lemur kata',
    contentAdult: require('./components/animals/lemurKata.adult'),
    contentChild: require('./components/animals/lemurKata.child'),
    animal: 'lemurKata',
    neighbours: [
      {animal: 'zebraChapmanova', direction: 'right'},
      {animal: 'zirafaSitovana', direction: 'right'},
      {animal: 'husickaVdovka', direction: 'left'},
      {animal: 'plamenakRuzovy', direction: 'left'},
      {animal: 'husickaDvoubarva', direction: 'left'},
    ]
  },
  
  'levhartCejlonsky' : {
    name: 'Levhart cejlonský',
    contentAdult: require('./components/animals/levhartCejlonsky.adult'),
    contentChild: require('./components/animals/levhartCejlonsky.child'),
    animal: 'levhartCejlonsky',
    neighbours: [
      {animal: 'krkavecVelky', direction: 'back'},
      {animal: 'krajtaKobercova', direction: 'right'},
      {animal: 'pavKorunkaty', direction: 'back'},
      {animal: 'pavianAnubi', direction: 'left'},
    ]
  },
  
  'mandelikHajni' : {
    name: 'Mandelík hajní',
    contentAdult: require('./components/animals/mandelikHajni.adult'),
    contentChild: require('./components/animals/mandelikHajni.child'),
    animal: 'mandelikHajni',
    neighbours: [
//      {animal: '', direction: ''},
    ]
  },
  
  'pandaCervena' : {
    name: 'Panda červená',
    contentAdult: require('./components/animals/pandaCervena.adult'),
    contentChild: require('./components/animals/pandaCervena.child'),
    animal: 'pandaCervena',
    neighbours: [
      {animal: 'vikuna', direction: 'left'},
      {animal: 'klokanZlutonohy', direction: 'back'},
      {animal: 'zakoSedy', direction: 'right'},
      {animal: 'zakoSedy', direction: 'left'},
    ]
  },
  
  'plamenakRuzovy' : {
    name: 'Plameňák růžový',
    contentAdult: require('./components/animals/plamenakRuzovy.adult'),
    contentChild: require('./components/animals/plamenakRuzovy.child'),
    animal: 'plamenakRuzovy',
    neighbours: [
      {animal: 'lemurKata', direction: 'right'},
      {animal: 'husickaVdovka', direction: 'front'},
      {animal: 'husickaDvoubarva', direction: 'front'},
    ]
  },
  
  'tamarinZlutoruky' : {
    name: 'Tamarín žlutoruký',
    contentAdult: require('./components/animals/tamarinZlutoruky.adult'),
    contentChild: require('./components/animals/tamarinZlutoruky.child'),
    animal: 'tamarinZlutoruky',
    neighbours: [
      {animal: 'maraStepni', direction: 'left'},
      {animal: 'nosalCerveny', direction: 'right'},
    ]
  },
  
  'urzonKanadsky' : {
    name: 'Urzon kanadský',
    contentAdult: require('./components/animals/urzonKanadsky.adult'),
    contentChild: require('./components/animals/urzonKanadsky.child'),
    animal: 'urzonKanadsky',
    neighbours: [
      {animal: 'cipmankVychodni', direction: 'left'},
    ]
  },
  
  'varanKomodsky' : {
    name: 'Varan komodský',
    contentAdult: require('./components/animals/varanKomodsky.adult'),
    contentChild: require('./components/animals/varanKomodsky.child'),
    animal: 'varanKomodsky',
    neighbours: [
      {animal: 'tamarinPinci', direction: 'right'},
      {animal: 'zelvaUhlirska', direction: 'right'},
      {animal: 'vousivkaPestra', direction: 'right'},
      {animal: 'kuanduObecny', direction: 'left'},
    ]
  },
  
  'velbloudDvouhrby' : {
    name: 'Velbloud dvouhrbý',
    contentAdult: require('./components/animals/velbloudDvouhrby.adult'),
    contentChild: require('./components/animals/velbloudDvouhrby.child'),
    animal: 'velbloudDvouhrby',
    neighbours: [
      {animal: 'zebraGrevyho', direction: 'left'},
      {animal: 'jakDomaci', direction: 'right'},
      {animal: 'kunPrevalskeho', direction: 'front'},
    ]
  },
  
  'vlkArkticky' : {
    name: 'Vlk arktický',
    contentAdult: require('./components/animals/vlkArkticky.adult'),
    contentChild: require('./components/animals/vlkArkticky.child'),
    animal: 'vlkArkticky',
    neighbours: [
      {animal: 'bobrKanadsky', direction: 'right'},
      {animal: 'skunkPruhovany', direction: 'left'},
      {animal: 'pustikBelavy', direction: 'back'},
      {animal: 'losEvropsky', direction: 'back'},
      {animal: 'jelenMilu', direction: 'right'},
    ]
  },
  
  'zebraChapmanova' : {
    name: 'Zebra Chapmanova',
    contentAdult: require('./components/animals/.adult'),
    contentChild: require('./components/animals/.child'),
    animal: '',
    neighbours: [
//      {animal: 'agapornisFischeruv', direction: 'right'},
      {animal: 'zirafaSitovana', direction: 'front'},
      {animal: 'lemurKata', direction: 'left'},
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
