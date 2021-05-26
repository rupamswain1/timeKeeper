import React from 'react';
import Notes from '../notes/notes.component';
import './NotesContainer.style.scss';

const NotesContainer=()=>{
    return(
        <div className='notesContanerMain'>
            <div className='notesInput'>
                <input type='text' placeholder='Add Note' className='noteInputs'></input>
                <button className='addNoteBtn'>Add</button>
            </div>
            <div className='notesCollection'>
                <Notes noteMsg={'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'}/>
                <Notes noteMsg={'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'}/>
            </div>
        </div>
    )
}

export default NotesContainer;