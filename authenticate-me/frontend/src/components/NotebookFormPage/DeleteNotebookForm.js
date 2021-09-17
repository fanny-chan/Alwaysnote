import React from 'react'

import { useDispatch } from 'react-redux'
import { thunkDeleteNotebook } from '../../store/notebook';
import { useParams } from "react-router-dom";


export default function DeleteNotebookForm({notebook}) {

    const {notebookId} = useParams()

    console.log(notebookId)

    const dispatch = useDispatch();
   
    // if(!notebooks) {
    //     return null;
    // }



    return (
        
        <div>
            <button className="notebook-delete" onClick={() => dispatch(thunkDeleteNotebook(notebook.id))}>
            DELETE 
            </button>
        </div>
        
    )
}
