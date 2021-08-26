import { combineReducers } from 'redux';
import episodeReducer from './episodes';
import locationReducer from './locations';
import characterReducer from './characters';
import searchReducer from './search';

const rootReducer = combineReducers({
  episodes: episodeReducer,
  locations: locationReducer,
  characters: characterReducer,
  searches: searchReducer,
});

export default rootReducer;