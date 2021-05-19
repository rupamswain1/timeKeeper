import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {TotalTimeReducer} from './totalTime/TotalTime.reducer';
import {BreakButtonReducer} from './breakButton/BreakButton.reducer';
import {TaskReducer} from './task/Task.reducer';
import {SubmitDataReducer} from './submitData/SubmitData.reducer';
const persistConfig={
    key:'root',
    storage,
    whiteList:['TotalTimeReducer','SubmitDataReducer'],
    
}

export const rootReducer=combineReducers({
    TotalTimeReducer:TotalTimeReducer,
    BreakButtonReducer:BreakButtonReducer,
    TaskReducer:TaskReducer,
    SubmitDataReducer:SubmitDataReducer
});

export const persistReducer1=persistReducer(persistConfig,rootReducer);