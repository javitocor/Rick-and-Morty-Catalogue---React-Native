import {
  GET_SEARCHES, GET_SEARCHES_PENDING, GET_SEARCHES_ERROR
} from '../constants/constants';

export const getSearches = (searchResults, resource, param, value) => ({
  type: GET_SEARCHES,
  pages: searchResults.info.pages,
  next: searchResults.info.next,
  count: searchResults.info.count,
  param,
  value,
  resource,
  searchResults: searchResults.results,
});

export const getSearchesPending = () => ({
  type: GET_SEARCHES_PENDING,
});

export const getSearchesError = error => ({
  type: GET_SEARCHES_ERROR,
  error,
});