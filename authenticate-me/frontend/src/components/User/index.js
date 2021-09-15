import React from "react";
import './User.css';
import GetNotebookForm from "../NotebookFormPage/GetNotebookForm";
import UpdateNotebookForm from "../NotebookFormPage/UpdateNotebookForm";
import CreateNotebookForm from "../NotebookFormPage/CreateNotebookForm";


const UserMain =() => {
    return (
        <div class="main-container">
            <div class="side-nav"></div>
                <div className="user-email">
                <div className="notebook-form">
                    <CreateNotebookForm />
                    <GetNotebookForm />
                    <UpdateNotebookForm />
                </div>
                    
                </div>
        </div>
    )
}
export default UserMain;