import React, { useEffect ,useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import{ useHistory } from 'react-router-dom'
import './NoteBookForm.css';


import { thunkCreateNotebook } from '../../store/notebook';

export default function CreateNotebookForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const notebooks = useSelector(state => state.notebooks);

    const notebookArr = Object.values(notebooks)
    
    console.log(notebookArr)

    const [title, setTitle] = useState('');

    useEffect(() => {
        dispatch(thunkCreateNotebook());
    },[dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
    const payload = {
        userId: sessionUser.id,
        title   
    }

    let createdNotebook = await dispatch(thunkCreateNotebook(payload));

    if(createdNotebook) {
        history.pushState(`/notebooks/${createdNotebook.id}`);
    };
    }

    if(sessionUser) return (
        <Redirect to="/login" />
    )
    
    return (
        <div>
            <noteView />
        </div>
    )
}
