export default function favourites(state = [], action) {
  switch (action.type) {
    case 'ADD_FAVOURITE':
      return [...state, action.payload.repository];
    default:
      return state;
  }
}
