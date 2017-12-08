import api from 'services/api';

function addFavourite(repository) {
  return {
    type: 'ADD_FAVOURITE',
    payload: {
      repository,
    },
  };
}

export function searchAndAddRepository(repositoryName) {
  return async (dispatch) => {
    const response = await api.get(`/repos/${repositoryName}`);

    dispatch(addFavourite(response.data));
  };
}
