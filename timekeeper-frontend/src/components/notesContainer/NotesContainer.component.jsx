import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Notes from '../notes/notes.component';
import { addNote } from '../../redux/notes/notes.action';
import './NotesContainer.style.scss';

const NotesContainer=()=>{
    const dispatch=useDispatch();
    const {noteDisplay,notes} =useSelector(state=>state.NoteReducer)
    const[noteEntered,setNoteEntered]=useState('');
    
    const submit=()=>{
        dispatch(addNote(noteEntered));
        setNoteEntered('');
    }
    return(
        noteDisplay?
        <div className='notesContanerMain'>
            <div className='notesInput'>
                <input value={noteEntered} type='text' placeholder='Add Note' className='noteInputs' onChange={e=>setNoteEntered(e.target.value)}></input>
                <button className='addNoteBtn' onClick={submit}>Add</button>
            </div>
            <div className='notesCollection'>
                {Object.keys(notes).map((key)=>
                    {   return(
                        <Notes noteMsg={notes[key]} noteKey={key}/>
                        )
                    }    
                    )
                }          
               
               
            </div>
        </div>
        :''
    )
}

export default NotesContainer;