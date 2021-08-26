export const BASE_URL = 'https://rickandmortyapi.com/api/';

export const initialStateEpisodes = {
  error: null,
  pending: false,
  pages: null,
  next: null,
  count: null,
  episodesList: [],
  episode: {},
};

export const GET_SINGLE_EPISODE = 'GET_SINGLE_EPISODE';
export const GET_SINGLE_EPISODE_PENDING = 'GET_SINGLE_EPISODE_PENDING';
export const GET_SINGLE_EPISODE_ERROR = 'GET_SINGLE_EPISODE_ERROR';
export const GET_ALL_EPISODES = 'GET_ALL_EPISODES';
export const GET_ALL_EPISODES_PENDING = 'GET_ALL_EPISODES_PENDING';
export const GET_ALL_EPISODES_ERROR = 'GET_ALL_EPISODES_ERROR';

export const initialStateLocations = {
  error: null,
  pending: false,
  pages: null,
  next: null,
  count: null,
  locationsList: [],
  location: {},
};

export const GET_SINGLE_LOCATION = 'GET_SINGLE_LOCATION';
export const GET_SINGLE_LOCATION_PENDING = 'GET_SINGLE_LOCATION_PENDING';
export const GET_SINGLE_LOCATION_ERROR = 'GET_SINGLE_LOCATION_ERROR';
export const GET_ALL_LOCATIONS = 'GET_ALL_LOCATIONS';
export const GET_ALL_LOCATIONS_PENDING = 'GET_ALL_LOCATIONS_PENDING';
export const GET_ALL_LOCATIONS_ERROR = 'GET_ALL_LOCATIONS_ERROR';

export const initialStateCharacters = {
  error: null,
  pending: false,
  pages: null,
  next: null,
  count: null,
  charactersList: [],
  character: {},
};

export const GET_SINGLE_CHARACTER = 'GET_SINGLE_CHARACTER';
export const GET_SINGLE_CHARACTER_PENDING = 'GET_SINGLE_CHARACTER_PENDING';
export const GET_SINGLE_CHARACTER_ERROR = 'GET_SINGLE_CHARACTER_ERROR';
export const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS';
export const GET_ALL_CHARACTERS_PENDING = 'GET_ALL_CHARACTERS_PENDING';
export const GET_ALL_CHARACTERS_ERROR = 'GET_ALL_CHARACTERS_ERROR';

export const initialStateSearch = {
  error: null,
  pending: false,
  pages: null,
  next: null,
  count: null,
  param: null,
  value: null,
  resource: null,
  searchResults: [],
};

export const GET_SEARCHES = 'GET_SEARCHES';
export const GET_SEARCHES_PENDING = 'GET_SEARCHES_PENDING';
export const GET_SEARCHES_ERROR = 'GET_SEARCHES_ERROR';