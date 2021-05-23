import TotalTimeType from './TotalTime.type';
import {takeEvery,put,select} from 'redux-saga/effects';
import {startTask} from '../task/Task.action';
import {startCountDown,updateLastRunSec} from '../totalTime/TotalTime.action';
import {GetDate,GetTimeInSeconds} from '../../logic/getDate';
import {submitDataStart} from '../submitData/SubmitData.action'
function* updateCountDown(){
    var d = new Date(); // for now
    var hr=d.getHours(); // => 9
    var min=d.getMinutes(); // =>  30
    var sec=d.getSeconds(); 
    const {key,countDownProgress,originalTime,lastUpdatedTime}=yield select(state=>state.TotalTimeReducer)
    const taskReducer=yield select(state=>state.TaskReducer)
   
    if(parseInt(hr)===23 && parseInt(min)===59 && parseInt(sec)===58){
        window.alert('The day is about to end, and a new day will begin, We will Save your progress so far');
        yield put(submitDataStart())
        setTimeout(function(){
            
    
        }, 500); 
        window.location.reload(false);
    }
    else{
    let originalTimeLocal=originalTime[key][GetDate()];
    let seconds=GetTimeInSeconds();
    if(countDownProgress){
        if(lastUpdatedTime===null){
            yield put(updateLastRunSec(seconds))
            yield put(startCountDown(1))
            yield put(startTask(taskReducer.activeTask,1,originalTimeLocal))
        }
        else{
            let timeDiff=seconds-lastUpdatedTime;
            yield put(updateLastRunSec(seconds))
            yield put(startCountDown(timeDiff))
            yield put(startTask(taskReducer.activeTask,timeDiff,originalTimeLocal))
        }
    }
    }
}

export function* startTaskTime(){
    yield takeEvery(TotalTimeType.UPDATE_COUNTDOWN, updateCountDown)
}