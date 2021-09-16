import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { thunkDeleteNotebook } from '../../store/notebook';
import { useParams ,useHistory} from "react-router-dom";

export default function DeleteNotebookForm({notebook}) {

    const {notebookId} = useParams()
    console.log(notebookId)
    const dispatch = useDispatch();
    const notebooks = useSelector(state => state.notebooks)
   
    // if(!notebooks) {
    //     return null;
    // }
    console.log("notebooooooooks");
    console.log(notebook);
    console.log(notebookId);


    return (
        
        <div>
            <button className="notebook-delete" onClick={() => dispatch(thunkDeleteNotebook(notebook.id))}>
            DELETE 
            </button>
        </div>
        
    )
}
