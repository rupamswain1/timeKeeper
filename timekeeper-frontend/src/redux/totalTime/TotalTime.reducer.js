import TotalTimeType from './TotalTime.type';

const INITIAL_STATE={
    key:0,
    totalTime:{},
}

export const TotalTimeReducer=(state=INITIAL_STATE, action)=>{
    switch(action.type){
        case TotalTimeType.SAVE_TOTAL_TIME:
            state.key=Object.keys(state.totalTime).length;
            let newDate=new Date()
            let date = newDate.getDate();
            let month = newDate.getMonth() + 1;
            let year = newDate.getFullYear();
            let fullDate=date.toString()+month.toString()+year.toString();
            state.totalTime[state.key]={[fullDate]:action.payload}
            return{
                ...state,
                key:state.key,
                totalTime:{...state.totalTime},
            }
        default:
            return state;
    }
}