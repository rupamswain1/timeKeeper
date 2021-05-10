import TotalTimeType from './TotalTime.type';

const INITIAL_STATE={
    totalTime:[0,0,0,0,0,0]
}

export const TotalTimeReducer=(state=INITIAL_STATE, action)=>{
    switch(action.type){
        case TotalTimeType.SAVE_TOTAL_TIME:
            return{
                ...state,
                totalTime:action.payload,
            }
        default:
            return state;
    }
}