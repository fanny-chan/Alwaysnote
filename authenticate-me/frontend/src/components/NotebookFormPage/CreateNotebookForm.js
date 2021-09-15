import React, { useEffect ,useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import{ useHistory } from 'react-router-dom'
import './NoteBookForm.css';

import { thunkCreateNotebook } from '../../store/notebook';

export default function CreateNotebookForm() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [userId, setUserId] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        dispatch(thunkGetNotebooks());
    },[dispatch]);

    const handleCancelClick = (e) => {
        e.preventDefault();
    
    const payload ={
        title
    }
    let createdNotebook = await dispatch(thunkCreateNotebook(payload));

    if(createdNotebook) {
        history.pushState(`/notebooks/${createdNotebook.id}`);
    };
    }
    const handlecancelClick = (e) => {
        e.preventDefault();
    }

    if(sessionUser) return (
        <Redirect to="/" />
    )
    
    return (
        <div>
            
        </div>
    )
}
