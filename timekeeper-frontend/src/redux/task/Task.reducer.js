import { pauseTask } from './Task.action';
import TaskType from './Task.type';

const INITIAL_STATUS={
    taskList:{}
}


export const TaskReducer=(state=INITIAL_STATUS,action)=>{
    switch(action.type){
        case TaskType.ADD_TASK:
            if(state.taskList[action.taskName]==undefined){
                let taskData={
                    time:0,
                    paused:true,
                    isCompleted:false,
                    color:'rgb(239, 68, 11)',
                    percentage:0,
                }
                state.taskList[action.taskName]=taskData;
            }
            return{
                ...state,
                taskList:{...state.taskList}
            }
        case TaskType.REMOVE_TASK:
            delete state.taskList[action.taskName];
            return{
                ...state,
                taskList:{...state.taskList}
            }
        case TaskType.PAUSE_TASK:
            state.taskList[action.taskName].paused=true;
            return{
                ...state,
                taskList:{...state.taskList}
            }
        case TaskType.START_TASK:
            for(var key in state.taskList){
                state.taskList[key].paused=true;
            }
            state.taskList[action.taskName].paused=false;
            return{
                ...state,
                taskList:{...state.taskList}
            }
        case TaskType.COMPLETED_TASK:
            state.taskList[action.taskName].isCompleted=true;
            return{
                ...state,
                taskList:{...state.taskList}
            }
        case TaskType.ADD_BREAK_TASK:
            for(var key in state.taskList){
                //console.log(key)
                state.taskList[key].paused=true;
                //console.log(state.taskList[key].pasued)
            }
            if(action.taskName!='releaseAll'){
                
                //console.log(state.taskList)
                if((state.taskList[action.taskName]==undefined)){
                let taskData={
                    time:0,
                    paused:false,
                    isCompleted:false,
                    color:action.color,
                    percentage:30,
                    type:'break',
                }
                state.taskList[action.taskName]=taskData;
                }
                else{
                    if(state.taskList[action.taskName].paused===false){
                        state.taskList[action.taskName].paused=true;
                    }
                    else{
                        state.taskList[action.taskName].paused=false;
                    }

                }
            }
            
            return{
                ...state,
                taskList:{...state.taskList}
            }
        default:
            return state;
    }
}