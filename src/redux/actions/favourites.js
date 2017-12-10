import { SEARCH } from 'redux/types/favourites';

export function addFavourite(repositoryName) {
  return {
    type: SEARCH,
    payload: {
      repositoryName,
    },
  };
}
