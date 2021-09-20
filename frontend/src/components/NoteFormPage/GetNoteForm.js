import React, { useEffect ,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import UpdateNoteModal from './UpdateNoteFormModal'
import './NoteForm.css';
import { thunkGetNotes } from '../../store/note';
import DeleteNoteForm from './DeleteNoteForm';
import {List,ListItem,ListItemText} from "@material-ui/core"
import RichEditor from '../User/editor';
import { Grid } from '@material-ui/core';

export default function GetNoteForm({note}) {
    const dispatch = useDispatch();
  
    const sessionUser = useSelector(state => state.session.user);
    const notes = useSelector(state => state.note);
    const [selectedNote, setselectedNote] = useState({})
    
    let noteArr;

    if (notes) {
        noteArr = Object.values(notes)
    }

  
    useEffect(() => {
        dispatch(thunkGetNotes());
    },[dispatch]);

    if(!sessionUser) return (
        <Redirect to="/login" />
    )
    const handleItemClick =(note) => {
        if (note) {
            console.log(note)
            // let filterValue = e.target.replace('<div>',"")
            // console.log(filterValue)
            // let array = filterValue.split('<br>')
           
        }

        }

    return (
        <>
        <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
        <div>
            <h2 className="notes">Notes</h2>
        </div>
        <div style={{marginLeft:"4rem"}}className="note-div">
            <List>
            {notes && Object.values(notes).map((note, index) => (
                <div>
                <div className="note-border">
                <ListItem
                          button
                          key={index}
                          value={note.title + "||" + note.content}
                          onClick={(e) =>{
                            // console.log(e.target)
                            handleItemClick(note)
                          }
                        }
                        >
                          <ListItemText primary={<div>{note.title}<br/>{note.content}</div>}
                          />

                </ListItem>
                
                {/* <note props={note} onClick={handleSubmit}/> */}
                
                <li><DeleteNoteForm 
                key={note.id} 
                note ={note}/>
                </li>
                <li><UpdateNoteModal
                    noteTitle={note.title}
                    id= {note.id}
                    noteContent={note.content}
                    />
                </li>
                </div>
                </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                 <div className="notes">
                <div className="note-title" >
                   {selectedNote.title}
                </div>
                <div className="note-filler">
                    <RichEditor content={selectedNote.content}/>
                </div>
            </div> 
            </Grid>
            </Grid>
                </>
            ))}
            </List>
        </div>
        </>
    )
}