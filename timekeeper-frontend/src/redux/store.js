import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';

import {persistStore} from 'redux-persist';
import {persistReducer1} from './root-reducer';

const middleware=[logger];

export const store=createStore(persistReducer1,applyMiddleware(...middleware));

export const persistor=persistStore(store);