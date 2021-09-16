import React, { useEffect ,useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './NotebookForm.css';
import { Link } from 'react-router-dom';
import NoteView from './noteView';


import { thunkGetNotebooks } from '../../store/notebook';

export default function GetNotebookForm() {
    const dispatch = useDispatch();
  
    const sessionUser = useSelector(state => state.session.user);
    const notebooks = useSelector(state => state.notebook);



    let notebookArr;

    if (notebooks) {
        notebookArr = Object.values(notebooks)
    }

   

    useEffect(() => {
        dispatch(thunkGetNotebooks());
    },[dispatch]);


    if(!sessionUser) return (
        <Redirect to="/login" />
    )
    
    return (
        <>
        <div>
          <h2>NoteBooks</h2>
        </div>
        <div contentEditable={true}>
            {notebooks && notebookArr && notebookArr.map((notebook) =>(
                <p>{notebook.title}</p>
            ))}

        </div>
        <div>
        {/* <ul>
            {notebooks &&notebookArr && notebookArr.map(notebook => (
            <li key={notebook.id}>
                <Link to={`/notebooks/${notebook.id}`}>
                {notebook.title}
                </Link>
            </li>
            ))}
        </ul> */}
        </div>
        </>
    )
}

