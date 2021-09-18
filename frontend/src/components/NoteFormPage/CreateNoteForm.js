import React, { useState } from 'react';

import { useDispatch ,useSelector} from 'react-redux';
import { csrfFetch } from '../../store/csrf';
import{ useHistory } from 'react-router-dom'
import './NoteForm.css';

import { thunkCreateNote } from '../../store/note';


export default function CreateNoteForm({notebook}) {
    const sessionUser = useSelector((state) => state.session.user);
    const notebooks = useSelector((state) => state.notebook)
    const history = useHistory;
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    // const [errors, setErrors] = useState('');

    const updateTitle = (e) => setTitle(e.target.value)
    const updateContent = (e) => setContent(e.target.value)

    // const validateNote = () => {
    //     let newErrors = [];
    //     if(!title.length) newErrors.push('Title field cannot be empty.')
    //     if(!content.length) newErrors.push('Content field cannot be empty.')

    //     setErrors(newErrors);
    // }

    const handleSubmit = (e) => {
        // e.preventDefault();
        // validateNote(); 
        // if (errors.length === 0) {
        //     const payload ={
        //     userId: sessionUser.id,
        //     notebookId: notebooks.id,
        //     title,
        //     content
        // }
        // const newForm = await dispatch(thunkCreateNote(payload));
        
        let id;
        csrfFetch("/api/notes", {
            method: "POST",
            body: JSON.stringify({
              userId:sessionUser.id,
              notebookId:notebooks.id,
              title,
              content
            })

        }).then(res => {
            id = res.data
        })
    
        // const { id } = newForm
        if (id) {
            history.push(`/notes/${id}`)
        } 
        
        //}
    };
     // if(sessionUser) return (
    //     <Redirect to="/login" />
    // )

    return (
        <>
        <div>
        {/* {
        errors ?
        errors.map((error) => <li key={error}>{error}</li>)
        : null
        } */}
        </div> hello
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={updateTitle}
                /> 
            <input
                type='text'
                placeholder='content'
                onChange={updateContent}
                value={content}
                required>
            </input>
                <button type="submit">Create Note</button>
        </form>
        </>
    )
}
