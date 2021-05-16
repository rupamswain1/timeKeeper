import BreakButtonType from './BreakButton.type';
import {startBreak,getBreakColor} from './BreakButton.action';
import {takeEvery,put,select} from 'redux-saga/effects';
import {addBreaktask} from '../task/Task.action';
import {setCountDownTrue,pauseCountDown} from '../totalTime/TotalTime.action';

function* startBreakInTask({type,breakName}){
    let taskName=breakName;
    let breakButtonSatate=yield select(state=>state.BreakButtonReducer);
    let taskReducer=yield select(state=>state.TaskReducer);
    yield put(addBreaktask(breakName,breakButtonSatate[breakName].color));
    if((breakName!='releaseAll') && (taskReducer.taskList[breakName].paused===false)){
        yield put(setCountDownTrue());
    }
    else{
        yield put(pauseCountDown());
    }
    
    
}
export function* startBreakSaga(){
    yield takeEvery(BreakButtonType.START_BREAK,startBreakInTask)

}