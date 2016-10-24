export function setLanguage(language) {
  return {
    type: 'SET_LANGUAGE',
    language
  };
}

export function setReaderLevel(level) {
  return {
    type: 'SET_READER_LEVEL',
    level
  }
}

export function setLastAnimal(animalID) {
  return {
    type: 'SET_LAST_ANIMAL',
    animalID
  }
}

export function addNotification(event) {
  return {
    type: 'ADD_NOTIFICATION',
    eventID: event.id,
  }
}

export function removeNotification(event) {
  return {
    type: 'REMOVE_NOTIFICATION',
    eventID: event.id,
  }
}
