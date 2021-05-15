import {all,call} from 'redux-saga/effects';
import {startBreakSaga} from './breakButton/BreakButton.sagas'
export function* rootSaga(){
    yield all([call(startBreakSaga),]);
}