/* eslint-disable consistent-return */
import 'regenerator-runtime/runtime';
import { BASE_URL } from '../constants/constants';
import * as fromEpisodes from '../actions/episodes';
import * as fromLocations from '../actions/locations';
import * as fromCharacters from '../actions/characters';
import * as fromSearches from '../actions/search';

export const AllCall = (route) => async dispatch => {
  const Url = `${BASE_URL + route}`;
  
  try {
    if(route==='episode'){
      dispatch(fromEpisodes.getAllEpisodesPending());
    } else if (route==='location') {
      dispatch(fromLocations.getAllLocationsPending());
    } else if (route==='character'){
      dispatch(fromCharacters.getAllCharactersPending());
    }         

    const response = await fetch(Url, { mode: 'cors'});
    const data = await response.json();
    if(route==='episode'){
      dispatch(fromEpisodes.getAllEpisodes(data));
    } else if (route==='location') {
      dispatch(fromLocations.getAllLocations(data));
    } else if (route==='character'){
      dispatch(fromCharacters.getAllCharacters(data));
    }     
    return data;
  } catch (error) {
    if(route==='episode'){
      dispatch(fromEpisodes.getAllEpisodesError(error));
    } else if (route==='location') {
      dispatch(fromLocations.getAllLocationsError(error));
    } else if (route==='character'){
      dispatch(fromCharacters.getAllCharactersError(error));
    } 
  }
};

export const SingleCall = (route, id) => async dispatch => {
  const Url = `${BASE_URL + route}`;
  try {
    if(route==='episode'){
      dispatch(fromEpisodes.getSingleEpisodePending());
    } else if (route==='location') {
      dispatch(fromLocations.getSingleLocationPending());
    } else if (route==='character'){
      dispatch(fromCharacters.getSingleCharacterPending());
    }

    const response = await fetch(`${Url}/${id}`, { mode: 'cors' });
    const data = await response.json();
    if(route==='epsiode'){
      dispatch(fromEpisodes.getSingleEpisode(data));
    } else if (route==='location') {
      dispatch(fromLocations.getSingleLocation(data));
    } else if (route==='character'){
      dispatch(fromCharacters.getSingleCharacter(data));
    }
    return data;
  } catch (error) {
    if(route==='episode'){
      dispatch(fromEpisodes.getSingleEpisodeError(error));
    } else if (route==='location') {
      dispatch(fromLocations.getSingleLocationError(error));
    } else if (route==='character'){
      dispatch(fromCharacters.getSingleCharacterError(error));
    }   
  }
};


export const SearchCall = (resource, param, value) => async dispatch => {
  const Url = `${BASE_URL + resource}`;

  try{
    dispatch(fromSearches.getSearchesPending());

    const response = await fetch(`${Url}/?${param}=${value}`, { mode: 'cors' });
    const data = await response.json();

    dispatch(fromSearches.getSearches(data, resource, param, value));

    return data;
  } catch (error) {
    dispatch(fromSearches.getSearchesError(error));
  }  
};

export const UpdateCall = (route) => async dispatch => {
  const Url = route;
  
  try {
    if(route.includes("episode")){
      dispatch(fromEpisodes.updateEpisodesPending());
    } else if (route.includes("location")) {
      dispatch(fromLocations.updateLocationsPending());
    } else if (route.includes("character")){
      dispatch(fromCharacters.updateCharactersPending());
    }         

    const response = await fetch(Url, { mode: 'cors'});
    const data = await response.json();
    if(route.includes("episode")){
      dispatch(fromEpisodes.updateEpisodes(data));
    } else if (route.includes("location")) {
      dispatch(fromLocations.updateLocations(data));
    } else if (route.includes("character")){
      dispatch(fromCharacters.updateCharacters(data));
    }     
    return data;
  } catch (error) {
    if(route.includes("episode")){
      dispatch(fromEpisodes.updateEpisodesError(error));
    } else if (route.includes("location")) {
      dispatch(fromLocations.updateLocationsError(error));
    } else if (route.includes("character")){
      dispatch(fromCharacters.updateCharactersError(error));
    } 
  }
};