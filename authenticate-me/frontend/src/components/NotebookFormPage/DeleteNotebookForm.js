import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { thunkDeleteNotebook } from '../../store/notebook';

export default function DeleteNotebookForm() {
    const dispatch = useDispatch();

    return (
        <div>
            <button className="notebook-delete">
                onClick={() => dispatch(thunkDeleteNotebook(notebook.id))}
            </button>
            
        </div>
    )
}
