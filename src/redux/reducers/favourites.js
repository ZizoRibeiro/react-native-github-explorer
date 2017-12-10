import { ADD } from 'redux/types/favourites';

export default function favourites(state = [], action) {
  switch (action.type) {
    case ADD:
      return [...state, action.payload.repository];
    default:
      return state;
  }
}
