import TotalTimeType from './TotalTime.type';


export const saveTotalTime=(timeArr)=>{
    return({
        type: TotalTimeType.SAVE_TOTAL_TIME,
        payload: timeArr
        })
}