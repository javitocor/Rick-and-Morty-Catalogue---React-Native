import {
  initialStateEpisodes,
  GET_SINGLE_EPISODE, GET_SINGLE_EPISODE_PENDING, GET_SINGLE_EPISODE_ERROR,
  GET_ALL_EPISODES, GET_ALL_EPISODES_PENDING, GET_ALL_EPISODES_ERROR,
} from '../constants/constants';

const characterReducer = (state = initialStateEpisodes, action) => {
  switch (action.type) {
    case GET_ALL_EPISODES:
      return {
        ...state,
        pending: false,
        pages: action.pages,
        next: action.next,
        count: action.count,
        episodesList: action.episodesList,
      };
    case GET_ALL_EPISODES_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_ALL_EPISODES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case GET_SINGLE_EPISODE:
      return {
        ...state,
        pending: false,
        episode: action.episode,
      };
    case GET_SINGLE_EPISODE_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_SINGLE_EPISODE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default characterReducer;