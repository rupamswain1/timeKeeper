import React from 'react';
import './ToDoTaskContainer.style.scss'
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AddedTask from '../addedTask/AddedTask.component';
const ToDoTaskContainer=()=>{
    return(
        <div className='toDoMainContainer'>
            <div className='addTaskinpputContainer'>
                <div className='addTaskContainer'>
                    <TextField className='addTaskText' id="outlined-basic" label="Add Task" variant="outlined" color='primary'/>
                    <Button
                    variant="contained"
                    color="primary"
                    className='saveTaskBtn'
                    startIcon={<CheckIcon />}
                    ></Button>
                    <hr></hr>
                </div>
            </div>
            <div className='addedTaskListContainer'>
                <AddedTask completed={50} bgColor='rgb(239, 68, 11)'/>
                <AddedTask completed={10} bgColor='rgb(239, 68, 11)'/>
               

            </div>

        </div>
    )
}
export default ToDoTaskContainer;