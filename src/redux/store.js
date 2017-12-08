import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const middleware = [thunk];

const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;

const store = createAppropriateStore(reducers, applyMiddleware(...middleware));

export default store;
