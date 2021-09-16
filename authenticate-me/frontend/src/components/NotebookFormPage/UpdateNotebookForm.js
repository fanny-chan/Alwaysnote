import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { thunkUpdateNotebook } from '../../store/notebook'
import { useHistory, useParams, Redirect} from "react-router";

export default function UpdateNotebookForm() {
    const sessionUser = useSelector(state => state.session.user);
    const currNotebook = useSelector(state => state.notebook.id);

    const dispatch = useDispatch();
    const { notebookId } = useParams();
    const history = useHistory();


    const [title, setTitle]= useState('');
    // const [errors,setErrors] = useState([])

    const updateTitle = (e) => setTitle(e.target.value);

    // const validateNotebook = () => {
    //     let newErrors = [];
    //     if(!title.length) newErrors.push('Title cannot be empty')
        
    //     setErrors(newErrors);
    // }

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        //  validateNotebook();

       
         const payload = {
            id: notebookId,
            user: sessionUser.id,
            title,
        }
        
        
        //if logged in
        if (sessionUser && currNotebook.id !== currNotebook.id ) {
            return (<Redirect to='/' />)
        }

        await dispatch(thunkUpdateNotebook(payload, notebookId));

        history.push(`/notebooks/${notebookId}`)
    }
        
        
    
    // const handleCancelClick = (e) => {
    //     e.preventDefault();
    // }

    return (
        <>
        <div>
            
            <form onSubmit={handleSubmit}>
                <input
                type="submit"
                placeholder='Title'
                value={title}
                onChange={updateTitle}
                /> 
                <button type="submit">Update Notebook</button>
            </form>
            
        </div>
        </>
    )
}
