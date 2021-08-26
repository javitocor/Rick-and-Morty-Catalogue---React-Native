import {
  initialStateLocations,
  GET_SINGLE_LOCATION, GET_SINGLE_LOCATION_PENDING, GET_SINGLE_LOCATION_ERROR,
  GET_ALL_LOCATIONS, GET_ALL_LOCATIONS_PENDING, GET_ALL_LOCATIONS_ERROR,
} from '../constants/constants';

const locationReducer = (state = initialStateLocations, action) => {
  switch (action.type) {
    case GET_ALL_LOCATIONS:
      return {
        ...state,
        pending: false,
        pages: action.pages,
        next: action.next,
        count: action.count,
        locationsList: action.locationsList,
      };
    case GET_ALL_LOCATIONS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_ALL_LOCATIONS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case GET_SINGLE_LOCATION:
      return {
        ...state,
        pending: false,
        location: action.location,
      };
    case GET_SINGLE_LOCATION_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_SINGLE_LOCATION_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default locationReducer;