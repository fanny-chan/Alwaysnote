import React, { useEffect ,useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './NoteForm.css';
import { thunkGetNotes } from '../../store/note';
import DeleteNoteForm from './DeleteNoteForm';

export default function GetNoteForm() {
    const dispatch = useDispatch();
  
    const sessionUser = useSelector(state => state.session.user);
    const notes = useSelector(state => state.note);

console.log(notes)
    
    let noteArr;

    if (notes) {
        noteArr = Object.values(notes)
    }
console.log(noteArr)
  
    useEffect(() => {
        dispatch(thunkGetNotes());
    },[dispatch]);

    if(!sessionUser) return (
        <Redirect to="/login" />
    )

    return (
        <>
        <div>
            <h2>Notes</h2>
        </div>
        <div contentEditable ={true}>
            {notes && Object.values(notes).map((note) => (
                <ul>{note.title}
                <li>{note.content}</li>
                <li><DeleteNoteForm 
                key={note.id} 
                note ={note}/>
                </li>
                </ul>
            ))}
        </div>
        </>
    )
}