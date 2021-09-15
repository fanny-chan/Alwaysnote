import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { thunkUpdateNotebook } from '../../store/notebook'
import { useParams } from "react-router";

export default function UpdateNotebookForm() {
    const notebook = useSelector(state => state.notebook);
    const dispatch = useDispatch();
    const { notebookId } = useParams();


    const [title, SetTitle]= useState(notebook.title)

    const updateTitle = (e) => SetTitle(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const payload = {
            title,
        }
        let updatedNotebook = await dispatch(thunkUpdateNotebook(payload, notebookId));
        
    }
    const handleCancelClick = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                title="text"
                value={title}
                onChange={updateTitle}
                /> 
                <button type="submit">Update Notebook</button>
            </form>
            
        </div>
    )
}
