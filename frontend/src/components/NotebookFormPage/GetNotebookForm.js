import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CreateModal from './UpdateNotebookModal';
import './NotebookForm.css';
import DeleteNotebookForm from './DeleteNotebookForm';
import { thunkGetNotebooks } from '../../store/notebook';
import UserSideNav from '../User/Side_nav/side_nav';



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
        <div className="full-page">
            <div className="notebook-nav">
            <UserSideNav />
            </div>
            <div className="notebook-index">
                <div className="notebook-title">
                    <h3>NoteBooks</h3>
                </div>
                <div className="new-notebook">
                    <button className="new-notebook-button">New Notebook</button>
                </div>
                
                <div className="notebook-render-list">
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
        </div>
        </>
    )
}

