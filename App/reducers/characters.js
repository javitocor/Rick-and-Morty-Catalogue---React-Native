import {
  initialStateCharacters,
  GET_SINGLE_CHARACTER, GET_SINGLE_CHARACTER_PENDING, GET_SINGLE_CHARACTER_ERROR,
  GET_ALL_CHARACTERS, GET_ALL_CHARACTERS_PENDING, GET_ALL_CHARACTERS_ERROR,
  UPDATE_CHARACTERS, UPDATE_CHARACTERS_PENDING, UPDATE_CHARACTERS_ERROR
} from '../constants/constants';

const characterReducer = (state = initialStateCharacters, action) => {
  switch (action.type) {
    case GET_ALL_CHARACTERS:
      return {
        ...state,
        pending: false,
        pages: action.pages,
        next: action.next,
        count: action.count,
        charactersList: action.charactersList,
      };
    case GET_ALL_CHARACTERS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_ALL_CHARACTERS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case GET_SINGLE_CHARACTER:
      return {
        ...state,
        pending: false,
        character: action.character,
      };
    case GET_SINGLE_CHARACTER_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_SINGLE_CHARACTER_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case UPDATE_CHARACTERS_ERROR:
      return {
        ...state,
        pending: false,
        error:action.error,
      }
    case UPDATE_CHARACTERS_PENDING:
      return {
        ...state,
        pending: true,
      }
    case UPDATE_CHARACTERS:
      return {
        ...state,
        pending: false,
        next: action.data.info.next,
        charactersList: [...state.charactersList, ...action.data.results],
      };
    default:
      return state;
  }
};

export default characterReducer;