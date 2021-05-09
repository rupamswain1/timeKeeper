import React from 'react'
import TotalTargetTime from '../../components/totalTargetTime/TotalTargetTime.component';
import './HomePage.style.scss'
const HomePage=()=>{
    return(
        <div className='mainContainerHomePage'>
            <div className='totalTimeContainer'>
                <TotalTargetTime/>
            </div>
            <div className='switchButtonsContainer'>
                SwitchButtons
            </div>
            <div className='taskListContainer'>
                TaskListContainer
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