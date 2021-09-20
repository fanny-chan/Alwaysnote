import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import{ useHistory } from 'react-router-dom'
import './NotebookForm.css';


import { thunkCreateNotebook } from '../../store/notebook';

export default function CreateNotebookForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    

    // if(sessionUser) return (
    //     <Redirect to="/login" />
    // )


    const [title, SetTitle] = useState('');

    const updateTitle = (e) => SetTitle(e.target.value);

    
    const handleSubmit = async (e) => {
        e.preventDefault();
            
        const payload = {
            userId: sessionUser.id,
            title   
        }

        // await dispatch(thunkCreateNotebook(payload));

    let createdNotebook = await dispatch(thunkCreateNotebook(payload));

    if(createdNotebook) {
        history.push(`/notebooks/${createdNotebook.id}`);
    };
    }
    // if(!notebooks) {
    //     return null;
    // }
    
    return (
        <div className="submit-notebook-form">
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={updateTitle}
                required/> 
                <button className="create-notebook-button" type="submit">Create Notebook</button>
            </form>
        </div>
    )
}
