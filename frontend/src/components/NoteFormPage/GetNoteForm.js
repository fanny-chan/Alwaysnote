
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import UpdateNoteModal from './UpdateNoteFormModal'
import './NoteForm.css';

import DeleteNoteForm from './DeleteNoteForm';
import {List,ListItem,ListItemText} from "@material-ui/core"



export default function GetNoteForm(props) {
    // const dispatch = useDispatch();
  
    const sessionUser = useSelector(state => state.session.user);
    const notes = useSelector(state => state.note);
   
    
  
    

    // useEffect(() => {
    //     dispatch(thunkGetNotes());
    // },[dispatch]);

    if(!sessionUser) return (
        <Redirect to="/login" />
    )

    return (
        <>
        <div>
            <h2 className="notes">Notes</h2>
        </div>
        <div className="note-div">
            <List>
            {notes && Object.values(notes).map((note, index) => (
                <>
                <div className="note-border">
                <ListItem
                          button
                          key={index}
                          value={note.title + "||" + note.content}
                          onClick={(e) =>{
                            props.onClick(e,note)
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
            
                </>
            ))}
            </List>
        </div>
        </>
    )
}