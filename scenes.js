export const MAIN_MENU = 'main-menu';
export const ANIMAL_DETAIL = 'animal-detail';
export const ANIMAL_LIST = 'animal-list';
export const EVENTS = 'events';
export const ANIMAL_NEIGHBOURS = 'animal-neighbour';
export const QR_READER = 'qr-scene';
export const ABOUT = 'about';
export const VISITORS = 'visitors';
export const GAME = 'game';
export const SERVICES = 'services';

const animals = require('./animals').default;
export const sceneTitles = {
  [MAIN_MENU]: { barColor: '#f6f6f6' },
  [QR_READER]: { title: 'Načíst QR kód', bgColor: '#37af54', barColor: '#3c3c3b'},
  [ANIMAL_LIST]: { title: 'Zvířata', bgColor: '#2d9946', barColor: '#3c3c3b'},
  [EVENTS]: { title: 'Události', bgColor: '#267f3b', barColor: '#3c3c3b'},
  [GAME]: {title: 'Šifrovací hra', bgColor: '#20642f', barColor: '#3c3c3b'},
  [VISITORS]: { title: 'Pro návštěvníky', bgColor: '#2d9946', barColor: '#3c3c3b'},
  [SERVICES]: { title: 'Služby', bgColor: '#267f3b', barColor: '#3c3c3b'},
  [ABOUT]: { title: 'O aplikaci', bgColor: '#37af54', barColor: '#3c3c3b'},

  [ANIMAL_DETAIL]: { bgColor: 'green', barColor: '#3c3c3b' },
  [ANIMAL_NEIGHBOURS]: { title: 'Sousedi', bgColor: 'blue', barColor: '#3c3c3b' },
}

export function navigatePush(navigator, scene, props) {
  let title;
  if (scene === ANIMAL_DETAIL) {
    title = animals[props.animal].name;
  } else if ((sceneTitles[scene] !== undefined) && (sceneTitles[scene].title !== undefined)) {
    title = sceneTitles[scene].title;
  } else {
    title = 'Zoo Brno';
  }
  navigator.push({
    id: scene,
    title: title,
    ...props,
  });
}
