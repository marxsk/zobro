const initialState = {
  language: 'cz',
  readerLevel: 'adult',
  lastAnimal: undefined,
};

export default function configuration(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return {
        ...state,
        language: action.language
      };
    case 'SET_READER_LEVEL':
      return {
        ...state,
        readerLevel: action.level
      };
    case 'SET_LAST_ANIMAL':
      return {
        ...state,
        lastAnimal: action.animalID
      };
    default:
      return state;
  }
}
