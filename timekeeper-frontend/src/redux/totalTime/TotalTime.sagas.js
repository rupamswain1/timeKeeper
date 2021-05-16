import TotalTimeType from './TotalTime.type';
import {takeEvery,put,select} from 'redux-saga/effects';
import {startTask} from '../task/Task.action';
import {startCountDown} from '../totalTime/TotalTime.action';
import {GetDate} from '../../logic/getDate';

function* updateCountDown(){
    const {key,countDownProgress,totalTime,originalTime}=yield select(state=>state.TotalTimeReducer)
    const taskReducer=yield select(state=>state.TaskReducer)

    let originalTimeLocal=originalTime[key][GetDate()];
    
    //check for count down is in progress or not,
    //check task paused status
    //console.log('saaaaaaaaa')
    if(countDownProgress){
        yield put(startCountDown(1))
        yield put(startTask(taskReducer.activeTask,1,originalTimeLocal))
    }
   
}

export function* startTaskTime(){
    yield takeEvery(TotalTimeType.UPDATE_COUNTDOWN, updateCountDown)
}