export const MAIN_MENU = 'main-menu';
export const CONTACTS = 'contacts';
export const ANIMAL_DETAIL = 'animal-detail';
export const ANIMAL_LIST = 'animal-list';
export const EVENTS = 'events';
export const ANIMAL_NEIGHBOURS = 'animal-neighbour';
export const QR_READER = 'qr-scene';

const animals = require('./animals').default;
const sceneTitles = {
  MAIN_MENU: 'ZOO Brno',
  CONTACTS: 'Kontakty',
  ANIMAL_DETAIL: '???',
  EVENTS: 'Události',
  ANIMAL_NEIGHBOURS: 'Sousedi',
  QR_READER: 'Načíst QR kód',
}

export function navigatePush(navigator, scene, props) {
  let title;
  if (scene === ANIMAL_DETAIL) {
    title = animals[props.animal].name;
  } else if (sceneTitles[scene] !== undefined) {
    title = sceneTitles[scene];
  } else {
    title = 'ZOO Brno';
  }
  navigator.push({
    id: scene,
    title: title,
    ...props,
  });
}
