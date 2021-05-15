import React from 'react'
import TotalTargetTime from '../../components/totalTargetTime/TotalTargetTime.component';
import BreakButtons from '../../components/breakButtons/BreakButtons.component';
import ToDoTaskContainer from '../../components/toDoTaskContainer/ToDoTaskContainer.component'
import CompletedTaskListContainer from '../../components/completedTaskListContainer/CompletedTaskListContainer.component'
import './HomePage.style.scss'
const HomePage=()=>{
    return(
        <div className='mainContainerHomePage'>
            <div className='totalTimeContainer'>
                <TotalTargetTime/>
            </div>
            <div className='switchButtonsContainer'>
                <BreakButtons/>
            </div>
            <div className='taskListContainer'>
               
                <ToDoTaskContainer className='toDoListMain'/>
                <CompletedTaskListContainer className='completedTaskListMain'/>
            </div>
            <div className='reportButtonContainer'>
                Report Button
            </div>
            <div className='graphsContainer'>
                Graphs
            </div>
        </div>
    )
}

export default HomePage