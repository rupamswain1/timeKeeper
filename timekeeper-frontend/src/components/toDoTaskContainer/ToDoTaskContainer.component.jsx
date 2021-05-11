import React from 'react';
import './ToDoTaskContainer.style.scss'
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
const ToDoTaskContainer=()=>{
    return(
        <div className='toDoMainContainer'>
            ToDoContainer
            <div className='addIconButton'>
                <Tooltip title="Add" aria-label="add">
                    <Fab color="secondary">
                        <AddIcon />
                    </Fab>
                </Tooltip>
            </div>
        </div>
    )
}
export default ToDoTaskContainer;