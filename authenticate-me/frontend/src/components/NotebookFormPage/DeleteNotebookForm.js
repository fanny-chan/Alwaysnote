import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { thunkDeleteNotebook } from '../../store/notebook';
import { useParams } from "react-router-dom";

export default function DeleteNotebookForm() {
    const {notebookId} = useParams()
    const dispatch = useDispatch();
    const notebooks = useSelector(state => state.notebooks)
   
    // if(!notebooks) {
    //     return null;
    // }
    console.log("notebooooooooks");
    console.log(notebooks);
    console.log(notebookId);



    return (
        
        <div>
            <button className="notebook-delete" onClick={() => dispatch(thunkDeleteNotebook(notebookId))}>
            DELETE 
            </button>
        </div>
        
    )
}
