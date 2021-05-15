import BreakButtonType from './BreakButton.type';

export const startBreak=(breakName)=>{
    console.log(breakName)
    return{
    type:BreakButtonType.START_BREAK,
    breakName:breakName,
}
}

export const pauseBreak=(breakName)=>{
    return{
    type:BreakButtonType.PAUSE_BREAK,
    breakName:breakName,}
}

export const getBreakColor=(breakName)=>{
    return{
        type:BreakButtonType.GET_BREAK_COLOR,
        breakName:breakName
    }
}