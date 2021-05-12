import React from 'react';
import './ToDoTaskContainer.style.scss'
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
const ToDoTaskContainer=()=>{
    return(
        <div className='toDoMainContainer'>
        <div className='addTaskinpputContainer'>
            <TextField className='addTaskText' id="outlined-basic" label="Add Task" variant="outlined" color='primary'/>
            <Button className='addItemIconButton' color="primary" aria-label="add to shopping cart">
                <CheckIcon/>
    </Button>
        </div>
        
            <div className='addIconButton'>
               { /*<Tooltip title="Add" aria-label="add">
                    <Fab color="secondary">
                        <AddIcon />
                    </Fab>
                </Tooltip>*/}
            </div>
        </div>
    )
}
export default ToDoTaskContainer;