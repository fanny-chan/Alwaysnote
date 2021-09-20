import React from "react";
import './User.css';
import { useEffect,useState } from "react";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import GetNotebookForm from "../NotebookFormPage/GetNotebookForm";
import UpdateNotebookForm from "../NotebookFormPage/UpdateNotebookForm";
import CreateNotebookForm from "../NotebookFormPage/CreateNotebookForm";
import UserSideNav from './Side_nav/side_nav'
import GetNoteForm from "../NoteFormPage/GetNoteForm";
import DeleteNotebookForm from "../NotebookFormPage/DeleteNotebookForm";
import RichEditor from "./editor";
import { thunkGetNotes } from "../../store/note";




const UserMain =() => {
    const dispatch = useDispatch();
    const [selectNote, setSelectNote] = useState({});

    useEffect(() => {
        dispatch(thunkGetNotes());
    },[dispatch]);

    

    const handleItemClick =(e,note) => {
        if (note) {
            console.log("index.js")
            console.log(note)
            setSelectNote(note)
        }

        }

    return (
        <div className="main-container">
        <UserSideNav />
            {/* <div class="side-nav">
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
            </div> */}
            <div className="all-notes">

                <div className="all-note-title">
                    <GetNoteForm onClick={handleItemClick}/>
                </div>
            </div>
            <div className="notes">
                <div className="note-title">
                   {selectNote && selectNote.title ? selectNote.title: 'Title of note'}
                </div>
                <div className="note-filler">
                    <RichEditor selectNote={selectNote}  />
                    

                </div>

            </div>
            
               
        </div>
    )
}

  
export default UserMain;