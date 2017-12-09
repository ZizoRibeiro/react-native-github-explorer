import { takeLatest } from 'redux-saga/effects';

import { searchAndAddRepository } from 'redux/sagas/favourites';

export default function* root() {
  yield [
    takeLatest('SEARCH_REPOSITORY', searchAndAddRepository),
  ];
}
