import React, {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import TotalTargetTime from '../../components/totalTargetTime/TotalTargetTime.component';
import BreakButtons from '../../components/breakButtons/BreakButtons.component';
import ToDoTaskContainer from '../../components/toDoTaskContainer/ToDoTaskContainer.component'
import CompletedTaskListContainer from '../../components/completedTaskListContainer/CompletedTaskListContainer.component';
import FinishDayButton from '../../components/finishDayButton/FinishDayButton.component'

import DoughnutChart from '../../doughnutChart/DoughnutChart.component'
import TimeComparisonBarChart from '../../components/timeComparisonBarChart/timeComparisonBarChart';
import TimeTrackerLineChart from '../../components/timeTrackLineChart/TimeTrackLineChart.component'
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import IconButton from '@material-ui/core/IconButton';

import {removeAllTask} from '../../redux/task/Task.action';
import {removeAllTime} from '../../redux/totalTime/TotalTime.action';
import './HomePage.style.scss'
const HomePage=()=>{
    const dispatch=useDispatch();
    //const {key,data}=useSelector(state=>state.SubmitDataReducer);
    //const totalTimeReducer=useSelector(state=>state.TotalTimeReducer);
    //const totalTimeKey=totalTimeReducer.key;
    //const {totalTime,countDownProgress}=totalTimeReducer;
    const reset=()=>{
        dispatch(removeAllTask());
        dispatch(removeAllTime());
        window.location.reload(false);
    }
    return(
        <div className='mainContainerHomePage'>

            <div className='restoreReducer'>
                <IconButton aria-label="reset"  color="primary" onClick={reset}><RotateLeftIcon/></IconButton>    
            
            </div>
            <div className='totalTimeContainer'>
                <TotalTargetTime/>
            </div>
            
                <>
                <div className='switchButtonsContainer'>
                    <BreakButtons/>
                </div>
                <div className='taskListContainer'>
                
                    <ToDoTaskContainer className='toDoListMain'/>
                    <CompletedTaskListContainer className='completedTaskListMain'/>
                </div>
            
                <div className='reportButtonContainer'>
                   <FinishDayButton/>
                </div>
            </>
            
            
            <div className='graphsContainer'>
                <div className='chartConatiner1'> 
                    <DoughnutChart/>1
                    <TimeComparisonBarChart/>
                </div>
                <div className='chartContainer2'>
                    <TimeTrackerLineChart/>
                </div>
                
            </div>
            
        </div>
    )
}

export default HomePage
//countDownProgress?'':