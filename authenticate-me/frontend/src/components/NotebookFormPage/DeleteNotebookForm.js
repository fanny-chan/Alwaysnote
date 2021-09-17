import React from 'react'
<<<<<<< Updated upstream
=======
import { useDispatch } from 'react-redux'
import { thunkDeleteNotebook } from '../../store/notebook';
import { useParams } from "react-router-dom";


export default function DeleteNotebookForm({notebook}) {

    const {notebookId} = useParams()
   
    const dispatch = useDispatch();
   
    // if(!notebooks) {
    //     return null;
    // }
    

>>>>>>> Stashed changes

export default function DeleteNotebookForm() {
    
    return (
        <div>
            
        </div>
    )
}
