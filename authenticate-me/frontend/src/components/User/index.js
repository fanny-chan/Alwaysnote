import React from "react";
import './User.css';
import { Link } from "react-router-dom";
import GetNotebookForm from "../NotebookFormPage/GetNotebookForm";
import UpdateNotebookForm from "../NotebookFormPage/UpdateNotebookForm";
import CreateNotebookForm from "../NotebookFormPage/CreateNotebookForm";



const UserMain =() => {

    return (
        <div class="main-container">
            <div class="side-nav">
                <div className="user-email">
                <div className="notebook-form">
                    <CreateNotebookForm />
                </div> 
                <div className="new-notebook"></div>
                <div className="notebooks"></div>
                    <Link className="button-notebook" to="/notebooks"><button className="button1">Notebooks</button></Link>
                {/* <div className="get-notebook-form" style={{color:"pink"}}>
                    <GetNotebookForm />
                </div> */}
                <div className="update-notebook-form">
                    <UpdateNotebookForm />
                </div>
            
                </div>            
            </div>
        </div>
    )
}
export default UserMain;