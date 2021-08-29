import {
  GET_SINGLE_LOCATION, GET_SINGLE_LOCATION_PENDING, GET_SINGLE_LOCATION_ERROR,
  GET_ALL_LOCATIONS, GET_ALL_LOCATIONS_PENDING, GET_ALL_LOCATIONS_ERROR,
  UPDATE_LOCATIONS, UPDATE_LOCATIONS_PENDING, UPDATE_LOCATIONS_ERROR
} from '../constants/constants';

export const getAllLocations = locationsList => ({
  type: GET_ALL_LOCATIONS,
  pages: locationsList.info.pages,
  next: locationsList.info.next,
  count: locationsList.info.count,
  locationsList: locationsList.results,
});

export const getAllLocationsPending = () => ({
  type: GET_ALL_LOCATIONS_PENDING,
});

export const getAllLocationsError = error => ({
  type: GET_ALL_LOCATIONS_ERROR,
  error,
});

export const getSingleLocation = location => ({
  type: GET_SINGLE_LOCATION,
  location,
});

export const getSingleLocationPending = () => ({
  type: GET_SINGLE_LOCATION_PENDING,
});

export const getSingleLocationError = error => ({
  type: GET_SINGLE_LOCATION_ERROR,
  error,
});

export const updateLocations = data => ({
  type: UPDATE_LOCATIONS,
  data,
});

export const updateLocationsPending = () => ({
  type: UPDATE_LOCATIONS_PENDING,
});

export const updateLocationsError = error => ({
  type: UPDATE_LOCATIONS_ERROR,
  error,
});