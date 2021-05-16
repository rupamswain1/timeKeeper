import { pauseTask } from './Task.action';
import TaskType from './Task.type';

const INITIAL_STATUS={
    taskList:{},
    activeTask:null
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
                taskList:{...state.taskList},
                
            }
        case TaskType.REMOVE_TASK:
            delete state.taskList[action.taskName];
            if(state.activeTask===action.taskName){
                state.activeTask=null;
            }
            return{
                ...state,
                taskList:{...state.taskList},
                activeTask:state.activeTask,
            }
        case TaskType.PAUSE_TASK:
            state.taskList[action.taskName].paused=true;
            state.activeTask=null;
            return{
                ...state,
                taskList:{...state.taskList},
                activeTask:state.activeTask,
            }
        case TaskType.START_TASK:
            for(var key in state.taskList){
                state.taskList[key].paused=true;
            }
            state.taskList[action.taskName].paused=false;
            if(action.seconds!=undefined && action.totalTime!=undefined){
            state.taskList[action.taskName].time=parseInt(state.taskList[action.taskName].time)+parseInt(action.seconds);
            console.log(action.totalTime);
            console.log(state.taskList[action.taskName].time)
            
            state.taskList[action.taskName].percentage=(((state.taskList[action.taskName].time)/(parseInt(action.totalTime)))*parseInt(100)).toFixed(1);
            }
            state.activeTask=action.taskName;
            return{
                ...state,
                taskList:{...state.taskList},
                activeTask:state.activeTask,
            }
        case TaskType.COMPLETED_TASK:
            state.taskList[action.taskName].isCompleted=true;
            if(state.activeTask===action.taskName){
                state.activeTask=null;
            }
            return{
                ...state,
                taskList:{...state.taskList},
                activeTask:state.activeTask,
            }
        case TaskType.ADD_BREAK_TASK:
            for(var key in state.taskList){
                //console.log(key)
                if(key!=action.taskName){
                    state.taskList[key].paused=true;
                }
                //console.log(state.taskList[key].pasued)
            }
            if(action.taskName!='releaseAll'){
                
                //console.log(state.taskList)
                if((state.taskList[action.taskName]===undefined)){
                let taskData={
                    time:0,
                    paused:false,
                    isCompleted:false,
                    color:action.color,
                    percentage:0,
                    type:'break',
                }
                state.taskList[action.taskName]=taskData;
                state.activeTask=action.taskName
                }
                else{

                    //console.log('********************************************************')
                    //console.log(state.taskList[action.taskName].paused)
                    if(!(state.taskList[action.taskName].paused)){
                        
                        state.taskList[action.taskName].paused=true;
                        state.activeTask=null
                    }
                    else{
                        
                        state.taskList[action.taskName].paused=false;
                        state.activeTask=action.taskName
                    }

                }

            }
            
            return{
                ...state,
                taskList:{...state.taskList},
                activeTask:state.activeTask,
            }
            case TaskType.REMOVE_ALL_TASK:
                return{
                    ...state,
                    taskList:{},
                    activeTask:null
                }
        default:
            return state;
    }
}