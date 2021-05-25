import React from 'react';
import './NotesContainer.style.scss';

const NotesContainer=()=>{
    return(
        <div className='notesContanerMain'>
            <div className='notesInput'>
                <input type='text' placeholder='Add Note' className='noteInputs'></input>
                <button className='addNoteBtn'>Add</button>
            </div>
            <div className='notesCollection'>b</div>
        </div>
    )
}

export default NotesContainer;