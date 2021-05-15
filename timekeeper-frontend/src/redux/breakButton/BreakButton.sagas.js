import BreakButtonType from './BreakButton.type';
import {startBreak,getBreakColor} from './BreakButton.action';
import {takeEvery,put,select} from 'redux-saga/effects';
import {addBreaktask} from '../task/Task.action';

function* startBreakInTask({type,breakName}){
    let taskName=breakName;
    let breakButtonSatate=yield select(state=>state.BreakButtonReducer)
    console.log(breakButtonSatate)
    yield put(addBreaktask(breakName,breakButtonSatate[breakName].color))
   
}
export function* startBreakSaga(){
    yield takeEvery(BreakButtonType.START_BREAK,startBreakInTask)

}