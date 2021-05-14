import BreakButtonType from './BreakButton.type';

const INITIAL_STATE={
    instagram:{isActive:false,time:0},
    faceBook:{isActive:false,time:0},
    youtube:{isActive:false,time:0},
    call:{isActive:false,time:0},
    messaging:{isActive:false,time:0},
    sleep:{isActive:false,time:0},
    excercise:{isActive:false,time:0},
    tea:{isActive:false,time:0},
    food:{isActive:false,time:0},
    releaseAll:{isActive:true,time:0},
    currentActive:'releaseAll',
    
}


export const BreakButtonReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        
        case BreakButtonType.START_BREAK:
            let prevActive='';
            let btnName=action.breakName;
            console.log(state[btnName])
            if(action.breakName!='releaseAll'){
                
                state[state.currentActive].isActive=false;
                state[btnName].isActive=true;
                state.currentActive=action.breakName;
                prevActive=state.currentActive;
            }
            else{
                
                state[state.currentActive].isActive=false;
                state.currentActive=action.breakName;
                prevActive=state.currentActive;
            }
            return{
                ...state,
                [btnName]:{...state[btnName]},
                [prevActive]:{...state[prevActive]}
            }
        case BreakButtonType.PAUSE_BREAK:
            state[state.currentActive].isActive=false;
            return{
                ...state,
                [action.breakName]:{...state[action.breakName]},
            }
        default:
            return state;
    }
}

