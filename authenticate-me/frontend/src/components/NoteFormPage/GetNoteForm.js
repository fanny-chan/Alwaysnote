import React, { useEffect ,useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './NoteForm.css';
import { thunkGetNotes } from '../../store/note';

export default function GetNoteForm() {
    const dispatch = useDispatch();
  
    const sessionUser = useSelector(state => state.session.user);
    const notes = useSelector(state => state.note);


    
    let noteArr;

    if (notes) {
        noteArr = Object.values(notes)
    }

  
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
            {notes && noteArr && noteArr.map((note) => (
                <ul>{note.title}
                <li>{note.content}</li>
                </ul>
            ))}
        </div>
        </>
    )
}