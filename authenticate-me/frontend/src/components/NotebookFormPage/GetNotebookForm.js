import React, { useEffect ,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CreateModal from './modal';
import './NotebookForm.css';
import DeleteNotebookForm from './DeleteNotebookForm';
import Modal from 'react-modal'
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
        <div>
            {notebooks && notebookArr && notebookArr.map((notebook) =>(
                <ul>{notebook.title} 
                <li> <DeleteNotebookForm key={notebook.id} notebook ={notebook}/> 
                </li>
                <li>
                    <CreateModal 
                    notebookTitle={notebook.title}
                    id= {notebook.id}
                    />
                </li>
                </ul>
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

