import React from "react";
import './User.css';
import GetNotebookForm from "../NotebookFormPage/GetNotebookForm";
import UpdateNotebookForm from "../NotebookFormPage/UpdateNotebookForm";


const UserMain =() => {

    return (
        <div class="main-container">
            <div class="side-nav">
                <div className="user-email">
                <div className="new-notebook"></div>
                <div className="get-notebook-form" style={{color:"pink"}}>
                    <GetNotebookForm />
                </div>
                <div className="update-notebook-form">
                    <UpdateNotebookForm />
                </div>
            
                </div>            
            </div>
        </div>
    )
}
export default UserMain;