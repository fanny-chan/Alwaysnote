import React from "react";
import './User.css';
import { Link } from "react-router-dom";
// import ReactQuill from 'react-quill'
import GetNotebookForm from "../NotebookFormPage/GetNotebookForm";
import UpdateNotebookForm from "../NotebookFormPage/UpdateNotebookForm";
import CreateNotebookForm from "../NotebookFormPage/CreateNotebookForm";



const UserMain =() => {

    return (
        <div class="main-container">
            <div class="side-nav">
                <div className="nav-buttons">
                        <div className="user-profile">
                        <div className="get-notebook">
                            <CreateNotebookForm />
                        <div className="create-note">
                        <div className="menu-buttons">
                            <div className="Notebooks">
                                <Link className="main-button" to="/notebooks"><button className="button">Notebooks</button>
                                </Link>
                            <div className="Notes">
                                <Link className="main-button" to="/notes"><button className="button">Notes</button>
                                </Link>
                            <div className="Logout">
                                <Link className="main-button" to="/"><button className="button">Logout</button>
                                </Link>
                        </div>
                        </div>
                        </div>

                    </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="all-notes">
                <div className="all-note-title">
                    Notes
                </div>
            </div>
            <div className="notes">
                <div className="note-title">
                    Title of note
                </div>
                <div className="note-filler">
                    Content of note
                    {/* <ReactQuill/> */}
                </div>

            </div>
            
               
        </div>
    )
}
export default UserMain;