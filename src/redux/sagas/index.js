import { takeLatest } from 'redux-saga/effects';

import { Types as FavouritesTypes } from 'redux/modules/favourites';

import { searchAndAddRepository } from 'redux/sagas/favourites';

export default function* root() {
  yield [
    takeLatest(FavouritesTypes.SEARCH, searchAndAddRepository),
  ];
}
