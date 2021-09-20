import React from "react";
import './User.css';
import { useEffect,useState } from "react";
import { useDispatch } from 'react-redux';
import UserSideNav from './Side_nav/side_nav'
import GetNoteForm from "../NoteFormPage/GetNoteForm";
import DeleteNotebookForm from "../NotebookFormPage/DeleteNotebookForm";
import { thunkGetNotes } from "../../store/note";
import RichEditor from "./editor";




const UserMain =() => {
    const dispatch = useDispatch();
    const [body ,setBody] = useState('');
    const [title, setTitle] = useState('Title of note');
    const [selectNote, setSelectNote] = useState({});

    useEffect(() => {
        dispatch(thunkGetNotes());
    },[dispatch]);

    const handleBody = (e) => {
        setBody(e)
    }

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

var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ];
  
export default UserMain;