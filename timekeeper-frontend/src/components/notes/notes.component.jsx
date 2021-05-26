import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import './notes.style.scss'
const Notes=({noteMsg,noteId})=>{
    return(
        <div className='notesContainer'>
            <div className='notesText'>{noteMsg}</div>
            <div className='removeButton'>
                <CancelIcon/>
            </div>
        </div>

    )
}

export default Notes;