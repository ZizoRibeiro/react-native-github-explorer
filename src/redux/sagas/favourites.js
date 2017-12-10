import { ADD } from 'redux/types/favourites';
import api from 'services/api';
import { call, put } from 'redux-saga/effects';

export function* searchAndAddRepository(action) {
  const response = yield call(api.get, `/repos/${action.payload.repositoryName}`);

  yield put({ type: ADD, payload: { repository: response.data } });
}
