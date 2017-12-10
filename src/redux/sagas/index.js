import { SEARCH } from 'redux/types/favourites';

import { takeLatest } from 'redux-saga/effects';

import { searchAndAddRepository } from 'redux/sagas/favourites';

export default function* root() {
  yield [
    takeLatest(SEARCH, searchAndAddRepository),
  ];
}
