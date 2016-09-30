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
