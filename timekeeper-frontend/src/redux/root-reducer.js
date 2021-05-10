import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {TotalTimeReducer} from './totalTime/TotalTime.reducer';

const persistConfig={
    key:'root',
    storage,
    whiteList:['TotalTimeReducer'],
}

export const rootReducer=combineReducers({
    TotalTimeReducer:TotalTimeReducer,
});

export const persistReducer1=persistReducer(persistConfig,rootReducer);