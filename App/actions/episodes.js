import {
  GET_SINGLE_EPISODE, GET_SINGLE_EPISODE_PENDING, GET_SINGLE_EPISODE_ERROR,
  GET_ALL_EPISODES, GET_ALL_EPISODES_PENDING, GET_ALL_EPISODES_ERROR,
  UPDATE_EPISODES, UPDATE_EPISODES_PENDING, UPDATE_EPISODES_ERROR
} from '../constants/constants';

export const getAllEpisodes = episodesList => ({
  type: GET_ALL_EPISODES,
  pages: episodesList.info.pages,
  next: episodesList.info.next,
  count: episodesList.info.count,
  episodesList: episodesList.results,
});

export const getAllEpisodesPending = () => ({
  type: GET_ALL_EPISODES_PENDING,
});

export const getAllEpisodesError = error => ({
  type: GET_ALL_EPISODES_ERROR,
  error,
});

export const getSingleEpisode = episode => ({
  type: GET_SINGLE_EPISODE,
  episode,
});

export const getSingleEpisodePending = () => ({
  type: GET_SINGLE_EPISODE_PENDING,
});

export const getSingleEpisodeError = error => ({
  type: GET_SINGLE_EPISODE_ERROR,
  error,
});

export const updateEpisodes = data => ({
  type: UPDATE_EPISODES,
  data,
});

export const updateEpisodesPending = () => ({
  type: UPDATE_EPISODES_PENDING,
});

export const updateEpisodesError = error => ({
  type: UPDATE_EPISODES_ERROR,
  error,
});