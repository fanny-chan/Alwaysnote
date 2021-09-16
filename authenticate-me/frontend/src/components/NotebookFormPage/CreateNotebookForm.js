import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import{ useHistory } from 'react-router-dom'
import './NotebookForm.css';


import { thunkCreateNotebook } from '../../store/notebook';

export default function CreateNotebookForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const notebooks = useSelector(state => state.notebooks);

    // if(sessionUser) return (
    //     <Redirect to="/login" />
    // )

    let notebookArr;
    if (notebooks) {
        notebookArr = Object.values(notebooks)
    }

    const [title, SetTitle] = useState('');

    const updateTitle = (e) => SetTitle(e.target.value);

    
    const handleSubmit = async (e) => {
        e.preventDefault();
            
        const payload = {
            userId: sessionUser.id,
            title   
        }

        await dispatch(thunkCreateNotebook(payload));

    let createdNotebook = await dispatch(thunkCreateNotebook(payload));

    if(createdNotebook) {
        history.push(`/notebooks/${createdNotebook.id}`);
    };
    }
    
    return (
        <div className="submit-notebook-form">
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={updateTitle}
                required/> 
                <button type="submit">Create Notebook</button>
            </form>
        </div>
    )
}
