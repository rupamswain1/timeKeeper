import React from 'react'
import {useDispatch} from 'react-redux';
import TotalTargetTime from '../../components/totalTargetTime/TotalTargetTime.component';
import BreakButtons from '../../components/breakButtons/BreakButtons.component';
import ToDoTaskContainer from '../../components/toDoTaskContainer/ToDoTaskContainer.component'
import CompletedTaskListContainer from '../../components/completedTaskListContainer/CompletedTaskListContainer.component';
import Button from '@material-ui/core/Button';
import {submitDataStart} from '../../redux/submitData/SubmitData.action'
import './HomePage.style.scss'
const HomePage=()=>{
    const dispatch=useDispatch();
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
                <Button className='finishDayBtn' variant="contained" color="secondary" onClick={()=>dispatch(submitDataStart())}>
                    Finish Your Day
                </Button>
            </div>
            <div className='graphsContainer'>
                Graphs
            </div>
        </div>
    )
}

export default HomePage