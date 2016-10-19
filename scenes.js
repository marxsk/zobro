export const MAIN_MENU = 'main-menu';
export const CONTACTS = 'contacts';
export const ANIMAL_DETAIL = 'animal-detail';
export const ANIMAL_LIST = 'animal-list';
export const EVENTS = 'events';
export const ANIMAL_NEIGHBOURS = 'animal-neighbour';
export const QR_READER = 'qr-scene';

const animals = require('./animals').default;
export const sceneTitles = {
  [MAIN_MENU]: { bgColor: 'yellow' },
  [CONTACTS]: { title: 'Kontakty', bgColor: 'red' },
  [ANIMAL_DETAIL]: { bgColor: 'green' },
  [EVENTS]: { title: 'Události', bgColor: 'orange' },
  [ANIMAL_NEIGHBOURS]: { title: 'Sousedi', bgColor: 'blue' },
  [ANIMAL_LIST]: { title: 'Seznam zvířat', bgColor: 'gray'},
  [QR_READER]: { title: 'Načíst QR kód', bgColor: 'pink' },
}

export function navigatePush(navigator, scene, props) {
  let title;
  if (scene === ANIMAL_DETAIL) {
    title = animals[props.animal].name;
  } else if ((sceneTitles[scene] !== undefined) && (sceneTitles[scene].title !== undefined)) {
    title = sceneTitles[scene].title;
  } else {
    title = 'ZOO Brno';
  }
  navigator.push({
    id: scene,
    title: title,
    ...props,
  });
}
