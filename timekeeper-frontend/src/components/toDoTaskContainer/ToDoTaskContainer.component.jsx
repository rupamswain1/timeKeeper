import React,{useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './ToDoTaskContainer.style.scss'
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AddedTask from '../addedTask/AddedTask.component';
import {addTask} from '../../redux/task/Task.action';
const ToDoTaskContainer=()=>{

    const {taskList}=useSelector(state=>state.TaskReducer);
    const dispatch=useDispatch();
    const[taskName,setTaskName]=useState();
    console.log(taskList)
    const setTask=(event)=>{
        setTaskName(event.target.value);
    }
    const dispatchAddTask=()=>{
        dispatch(addTask(taskName));
        setTaskName('');
        document.getElementById('outlined-basic').blur();
    }

    return(
        <div className='toDoMainContainer'>
            <span className='headingToDo'>Task List</span>
            <div className='addTaskinpputContainer'>
                <div className='addTaskContainer'>
                    <input value={taskName} onChange={setTask} className='addTaskText' id="outlined-basic" placeholder="Add Task" variant="outlined" color='primary'></input>
                   
                    <Button
                    variant="contained"
                    color="primary"
                    className='saveTaskBtn'
                    startIcon={<CheckIcon />}
                    onClick={dispatchAddTask}
                    ></Button>
                    <hr></hr>
                </div>
            </div>
            <div className='addedTaskListContainer'>

                {Object.keys(taskList).map((key)=>
                    {   return(
                        taskList[key].isCompleted?'':
                        (<AddedTask key={key} type={taskList[key].type} completed={taskList[key].isCompleted} bgColor={taskList[key].color} taskName={key} paused={taskList[key].paused} percentage={taskList[key].percentage}/>)
                        )
                    }    
                    )
                }          
            </div>

        </div>
    )
}
export default ToDoTaskContainer;