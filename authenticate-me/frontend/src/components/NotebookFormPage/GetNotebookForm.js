import React, { useEffect ,useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import{ useHistory } from 'react-router-dom'
import './NotebookForm.css';
import NoteView from './noteView';


import { thunkGetNotebooks } from '../../store/notebook';

export default function GetNotebookForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const notebooks = useSelector(state => state.notebook);
    console.log(notebooks);

    const notebookArr = Object.values(notebooks)
    
    const [title, setTitle] = useState('');
    const [errors, setErrors] = useState('');

    useEffect(() => {
        dispatch(thunkGetNotebooks());
    },[dispatch]);

    const handleCancelClick = (e) => {
        e.preventDefault();
    
    const payload = {
        title,
        userId: sessionUser.id
    }
    let createdNotebook = dispatch(thunkGetNotebooks(payload));

    if(createdNotebook) {
        history.pushState(`/notebooks/${createdNotebook.id}`);
    };
    }

    // if(!sessionUser) return (
    //     <Redirect to="/login" />
    // )
    
    return (
        <>
        <div>
          <h1>NoteBooks</h1>
        </div>
        <div>
            {notebooks.userId}
        </div>
        <div>
            {notebooks.title}
        </div>
        </>
    )
}