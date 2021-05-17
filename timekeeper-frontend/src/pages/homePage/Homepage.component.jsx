import React from 'react'
import {useDispatch,useSelector} from 'react-redux';
import TotalTargetTime from '../../components/totalTargetTime/TotalTargetTime.component';
import BreakButtons from '../../components/breakButtons/BreakButtons.component';
import ToDoTaskContainer from '../../components/toDoTaskContainer/ToDoTaskContainer.component'
import CompletedTaskListContainer from '../../components/completedTaskListContainer/CompletedTaskListContainer.component';
import Button from '@material-ui/core/Button';
import {submitDataStart} from '../../redux/submitData/SubmitData.action'
import DoughnutChart from '../../doughnutChart/DoughnutChart.component'
import TimeComparisonBarChart from '../../components/timeComparisonBarChart/timeComparisonBarChart';
import './HomePage.style.scss'
const HomePage=()=>{
    const dispatch=useDispatch();
    const {key,data}=useSelector(state=>state.SubmitDataReducer);
    const totalTimeReducer=useSelector(state=>state.TotalTimeReducer);
    const totalTimeKey=totalTimeReducer.key;
    const {totalTime,countDownProgress}=totalTimeReducer;
    const dispatchSubmit=()=>{
        dispatch(submitDataStart());
        window.location.reload(false);
    }
    return(
        <div className='mainContainerHomePage'>
            <div className='totalTimeContainer'>
                <TotalTargetTime/>
            </div>
            {totalTime[totalTimeKey]?
                <>
                <div className='switchButtonsContainer'>
                    <BreakButtons/>
                </div>
                <div className='taskListContainer'>
                
                    <ToDoTaskContainer className='toDoListMain'/>
                    <CompletedTaskListContainer className='completedTaskListMain'/>
                </div>
            
                <div className='reportButtonContainer'>
                    <Button className='finishDayBtn' variant="contained" color="secondary" onClick={dispatchSubmit}>
                        Finish Your Day
                    </Button>
                </div>
            </>
            :''}
            {Object.keys(data).length>0 && Object.keys(data[key]).length>0?countDownProgress?'':
            <div className='graphsContainer'>
                <DoughnutChart/>
                <TimeComparisonBarChart/>
            </div>
            :''}
        </div>
    )
}

export default HomePage