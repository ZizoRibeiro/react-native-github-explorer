// Actions Types
export const Types = {
  ADD: 'favourites/ADD',
  SEARCH: 'favourites/SEARCH',
  REMOVE: 'favourites/REMOVE',
};


// Reducers
const initialState = [];

export default function favourites(state = initialState, action) {
  switch (action.type) {
    case Types.ADD:
      return [...state, action.payload.repository];
    case Types.REMOVE:
      return state.filter(repository => repository.id !== action.payload.id);
    default:
      return state;
  }
}

// Action Creators

export function addFavourite(repositoryName) {
  return {
    type: Types.SEARCH,
    payload: {
      repositoryName,
    },
  };
}

export function removeFavourite(id) {
  return {
    type: Types.REMOVE,
    payload: {
      id,
    },
  };
}
