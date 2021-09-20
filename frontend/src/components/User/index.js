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
import { TextField} from "@material-ui/core"
import * as noteActions from '../../store/note';




const UserMain =() => {
    const dispatch = useDispatch();
    const [selectNote, setSelectNote] = useState({});

    useEffect(() => {
        dispatch(thunkGetNotes());
    },[dispatch]);

    const updateNote = (note) => {
        setSelectNote(note)
        dispatch(noteActions.thunkUpdateNote(note));
        dispatch(noteActions.thunkGetNotes());
    }
    

    const handleItemClick =(e,note) => {
        if (note) {
           
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
                   {/* {selectNote && selectNote.title ? selectNote.title: 'Title of note'} */}
                   <TextField
                    type="text"
                    style={{ marginBottom: "5%", width: "100%"}}
                    name="title"
                    value={selectNote && selectNote.title ? selectNote.title: 'Title of note'}
                    onChange={(e) => setSelectNote({...selectNote, title: e.target.value})}
                    onBlur={(e) => updateNote(selectNote)}
                    />
                </div>
                <div className="note-filler">
                    {/* <RichEditor selectNote={selectNote}  /> */}
                    <TextField
                    type="text"
                    multiline
                    minRows={20}
                    style={{ marginBottom: "5%", width: '100%'}}
                    name="content"
                    value={selectNote && selectNote.content ? selectNote.content: 'Start writing...'}
                    onChange={(e) => {
                        console.log(e.target.name + " : " + e.target.value);
                        setSelectNote({...selectNote, content: e.target.value})
                    }}
                    onBlur={(e) => updateNote(selectNote)}
                    />
                    

                </div>
            </div>
               
        </div>
    )
}

  
export default UserMain;