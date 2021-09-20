import React from 'react'
import { useDispatch } from 'react-redux'
import { thunkDeleteNote } from '../../store/note'



export default function DeleteNoteForm({note}) {
    const dispatch = useDispatch();

    return (
        <div>
            <button className="note-delete" onClick={() => {if(note && note.id)dispatch(thunkDeleteNote(note.id))}}>
            Delete note
            </button>
        </div>
    )
}
