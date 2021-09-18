import React from "react";
import './side_nav.css';
import { Link } from "react-router-dom";
import CreateNotebookForm from "../../NotebookFormPage/CreateNotebookForm";
import CreateNoteForm from "../../NoteFormPage/CreateNoteForm";
import {ExpandLess, ExpandMore} from "@material-ui/icons"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { useDispatch, useSelector } from 'react-redux';
import{ useEffect} from 'react';
import { thunkGetNotebooks } from "../../../store/notebook";

const UserSideNav =() => {
    const dispatch = useDispatch();
    const notebooks = useSelector(state => state.notebook);

    let notebookArr;

    if (notebooks) {
        notebookArr = Object.values(notebooks)
        console.log(notebookArr);
    }
    useEffect(() => {
        dispatch(thunkGetNotebooks());
    },[dispatch]);

    return (
            <div className="side-nav">
            <div className="nav-buttons">
                <div className="user-profile">
                <div className="get-notebook">
                    <CreateNotebookForm />
                <div className="create-note">
                    <CreateNoteForm />
                <div className="menu-buttons">
                    <div className="Notebooks">
                        <Link className="main-button" to="/notebooks"><button className="button">Notebooks</button>
                        </Link>
                        {notebookArr && notebookArr.length > 0 && notebookArr.map(notebook => (
                        <li className="list-notebook"key={notebook.id}>
                            <Link to={`/notebooks/${notebook.id}`}>
                            {notebook.title}
                            </Link>
                        </li>
                        ))}
                    <div className="Notes">
                        {/* <Link className="main-button" ><button className="button">Notes</button>
                        </Link> */}
                    <div className="Logout">
                        <Link className="main-button" to="/login"><button className="button">Logout</button>
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
 
    )
}

export default UserSideNav;