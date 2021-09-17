import React from 'react'
import { useDispatch } from 'react-redux'
import { thunkDeleteNote } from '../../store/note'
import { useParams } from 'react-router-dom'


export default function DeleteNoteForm({note}) {
    const dispatch = useDispatch();

    return (
        <div>
            <button className="note-delete" onClick={() => dispatch(thunkDeleteNote(note.id))}>
            Delete note
            </button>
        </div>
    )
}
