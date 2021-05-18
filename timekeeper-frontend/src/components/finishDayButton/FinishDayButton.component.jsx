import React from 'react';
import Button from '@material-ui/core/Button';
import {useSelector, useDispatch} from 'react-redux';
import {submitDataStart} from '../../redux/submitData/SubmitData.action'
import './FinishDayButton.style.scss'
const FinishDayButton=()=>{
    const {key,originalTime,totalTime}=useSelector(state=>state.TotalTimeReducer);
    const dispatch=useDispatch();
    const dispatchSubmit=()=>{

    dispatch(submitDataStart());
    setTimeout(function(){
        window.location.reload(false);

    }, 500);     
}
    return(
        <>  
        {totalTime[key]?
            <Button className='finishDayBtn' variant="contained" color="secondary" onClick={dispatchSubmit}>
                Finish Your Day
             </Button>
        :''}
        </>
    )
}

export default FinishDayButton;