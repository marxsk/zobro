const initialState = {
  language: 'cz',
  readerLevel: 'adult',
  lastAnimal: undefined,
  notifications: {},
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
    case 'ADD_NOTIFICATION':
      let newNotification = Object.assign({}, state.notifications);
      newNotification[action.eventID] = true;
      return {
        ...state,
        notifications: newNotification
      }
    case 'REMOVE_NOTIFICATION':
      let newNotificatio = Object.assign({}, state.notifications);
      newNotificatio[action.eventID] = false;
      return {
        ...state,
        notifications: newNotificatio
      }
    default:
      return state;
  }
}
