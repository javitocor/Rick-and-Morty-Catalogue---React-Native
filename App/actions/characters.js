import {
  GET_SINGLE_CHARACTER, GET_SINGLE_CHARACTER_PENDING, GET_SINGLE_CHARACTER_ERROR,
  GET_ALL_CHARACTERS, GET_ALL_CHARACTERS_PENDING, GET_ALL_CHARACTERS_ERROR,
  UPDATE_CHARACTERS, UPDATE_CHARACTERS_PENDING, UPDATE_CHARACTERS_ERROR
} from '../constants/constants';

export const getAllCharacters = charactersList => ({
  type: GET_ALL_CHARACTERS,
  pages: charactersList.info.pages,
  next: charactersList.info.next,
  count: charactersList.info.count,
  charactersList: charactersList.results,
});

export const getAllCharactersPending = () => ({
  type: GET_ALL_CHARACTERS_PENDING,
});

export const getAllCharactersError = error => ({
  type: GET_ALL_CHARACTERS_ERROR,
  error,
});

export const getSingleCharacter = character => ({
  type: GET_SINGLE_CHARACTER,
  character,
});

export const getSingleCharacterPending = () => ({
  type: GET_SINGLE_CHARACTER_PENDING,
});

export const getSingleCharacterError = error => ({
  type: GET_SINGLE_CHARACTER_ERROR,
  error,
});

export const updateCharacters = data => ({
  type: UPDATE_CHARACTERS,
  data,
});

export const updateCharactersPending = () => ({
  type: UPDATE_CHARACTERS_PENDING,
});

export const updateCharactersError = error => ({
  type: UPDATE_CHARACTERS_ERROR,
  error,
});