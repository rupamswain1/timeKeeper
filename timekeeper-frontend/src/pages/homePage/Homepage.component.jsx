import React, {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import TotalTargetTime from '../../components/totalTargetTime/TotalTargetTime.component';
import BreakButtons from '../../components/breakButtons/BreakButtons.component';
import ToDoTaskContainer from '../../components/toDoTaskContainer/ToDoTaskContainer.component'
import CompletedTaskListContainer from '../../components/completedTaskListContainer/CompletedTaskListContainer.component';
import FinishDayButton from '../../components/finishDayButton/FinishDayButton.component'

import DoughnutChart from '../../doughnutChart/DoughnutChart.component'
import TimeComparisonBarChart from '../../components/timeComparisonBarChart/timeComparisonBarChart';
import createSelector from 'reselect'
import './HomePage.style.scss'
const HomePage=()=>{
    const dispatch=useDispatch();
    //const {key,data}=useSelector(state=>state.SubmitDataReducer);
    //const totalTimeReducer=useSelector(state=>state.TotalTimeReducer);
    //const totalTimeKey=totalTimeReducer.key;
    //const {totalTime,countDownProgress}=totalTimeReducer;
    
    return(
        <div className='mainContainerHomePage'>
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
                <DoughnutChart/>
                <TimeComparisonBarChart/>
            </div>
            
        </div>
    )
}

export default HomePage
//countDownProgress?'':