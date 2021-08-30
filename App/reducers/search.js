import {
  initialStateSearch,
  GET_SEARCHES, GET_SEARCHES_PENDING, GET_SEARCHES_ERROR
} from '../constants/constants';

const searchReducer = (state = initialStateSearch, action) => {
  switch (action.type) {
    case GET_SEARCHES:
      return {
        ...state,
        pending: false,
        pages: action.pages,
        next: action.next,
        count: action.count,
        param: action.param,
        value: action.value,
        resource: action.resource,
        searchResults: action.searchResults,
      };
    case GET_SEARCHES_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_SEARCHES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };    
    default:
      return state;
  }
};

export default searchReducer;