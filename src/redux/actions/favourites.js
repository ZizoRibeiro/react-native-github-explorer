export function addFavourite(repositoryName) {
  return {
    type: 'SEARCH_REPOSITORY',
    payload: {
      repositoryName,
    },
  };
}
