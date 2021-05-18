import TotalTimeType from './TotalTime.type';
import {takeEvery,put,select} from 'redux-saga/effects';
import {startTask} from '../task/Task.action';
import {startCountDown} from '../totalTime/TotalTime.action';
import {GetDate} from '../../logic/getDate';
import {submitDataStart} from '../submitData/SubmitData.action'
function* updateCountDown(){
    var d = new Date(); // for now
    var hr=d.getHours(); // => 9
    var min=d.getMinutes(); // =>  30
    var sec=d.getSeconds(); 
    const {key,countDownProgress,totalTime,originalTime}=yield select(state=>state.TotalTimeReducer)
    const taskReducer=yield select(state=>state.TaskReducer)
    if(parseInt(hr)===23 && parseInt(min)===58 && parseInt(sec)===15){
        window.alert('The day is about to end, and a new day will begin, please Save your progress and start a new time');
        
    }
    else{
    let originalTimeLocal=originalTime[key][GetDate()];
    
    //check for count down is in progress or not,
    //check task paused status
    //console.log('saaaaaaaaa')
    if(countDownProgress){
        yield put(startCountDown(1))
        yield put(startTask(taskReducer.activeTask,1,originalTimeLocal))
    }
    }
}

export function* startTaskTime(){
    yield takeEvery(TotalTimeType.UPDATE_COUNTDOWN, updateCountDown)
}