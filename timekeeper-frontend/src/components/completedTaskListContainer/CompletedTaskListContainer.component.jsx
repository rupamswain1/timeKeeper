import React from 'react';
import {useSelector} from 'react-redux';
import AddedTask from '../addedTask/AddedTask.component';
import './CompletedTaskListContainer.style.scss'
import {GetDate} from '../../logic/getDate';
import {SecondsToArray} from '../../logic/arrayToSeconds'
const CompletedTaskListContainer=()=>{
    const {taskList}=useSelector(state=>state.TaskReducer);
    const {key,originalTime,totalTime}=useSelector(state=>state.TotalTimeReducer);
    return(
        <>
        {totalTime[key]!=undefined && totalTime[key][GetDate()]?
        <div className='completedTaskListMainContainer'>
            <span className='headingCompleted'>Completed Task List</span>
            <div className='completedTaskListContainer'>

            {Object.keys(taskList).map((key)=>
                {   return(
                    taskList[key].isCompleted?
                    (<AddedTask key={key} type={taskList[key].type} completed={taskList[key].isCompleted} bgColor={taskList[key].color} taskName={key} paused={taskList[key].paused} percentage={taskList[key].percentage} time={SecondsToArray(taskList[key].time)}/>)
                    :''
                    
                    )
                }    
                )
            }          
            </div>
        </div>
        :''}
        </>
    )
}
export default CompletedTaskListContainer;