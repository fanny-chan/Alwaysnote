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
  
    const sessionUser = useSelector(state => state.session.user);
    const notebooks = useSelector(state => state.notebook);

    const notebookArr = Object.values(notebooks)
    console.log('-------------')
    console.log(notebooks)
    console.log(notebookArr)
    

    useEffect(() => {
        dispatch(thunkGetNotebooks());
    },[dispatch]);


    if(!sessionUser) return (
        <Redirect to="/login" />
    )
    return (
        <>
        <div>
          <h1>NoteBooks</h1>
        </div>
        <div>
            {notebookArr && notebookArr.map((notebook) =>(
                <p>{notebook.title}</p>
            ))}

        </div>
        <div>
            {notebookArr[0]?.title}
        </div>
        </>
    )
}

