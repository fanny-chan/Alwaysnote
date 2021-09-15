import React from "react";
import './User.css';
import GetNotebookForm from "../NotebookFormPage/GetNotebookForm";
import UpdateNotebookForm from "../NotebookFormPage/UpdateNotebookForm";


const UserMain =() => {
    return (
        <div class="main-container">
            <div class="side-nav"></div>
                <div className="user-email">
                <div className="notebook-form">
                    <GetNotebookForm />
                    <UpdateNotebookForm />
                </div>
                    
                </div>
        </div>
    )
}
export default UserMain;