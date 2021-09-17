import React, { useEffect ,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import UpdateNoteModal from './UpdateNoteFormModal'
import './NoteForm.css';
import { thunkGetNotes } from '../../store/note';
import DeleteNoteForm from './DeleteNoteForm';

export default function GetNoteForm({note}) {
    const dispatch = useDispatch();
  
    const sessionUser = useSelector(state => state.session.user);
    const notes = useSelector(state => state.note);

    
    let noteArr;

    if (notes) {
        noteArr = Object.values(notes)
    }
    useEffect(() => {
    if(!sessionUser) return (
        <Redirect to="/login" />
    )

    return (
        <>
        <div>
            <h2>Notes</h2>
        </div>
        <div style={{marginLeft:"2rem"}}contentEditable ={true}>
            {notes && Object.values(notes).map((note) => (
                <ul>{note.title}
                <li>{note.content}</li>
                <li><DeleteNoteForm 
                key={note.id} 
                note ={note}/>
                </li>
                <li><UpdateNoteModal
                    noteTitle={note.title}
                    id= {note.id}
                    noteContent={note.content}
                    />
                </li>
                </ul>
            ))}
        </div>
        </>
    )
            }