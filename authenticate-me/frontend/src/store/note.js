import { csrfFetch } from './csrf';

const LOAD_NOTE = 'note/loadNote';
// const LOAD_NOTE = 'note/loadNote'
const CREATE_NOTE ='note/createNote';
const UPDATE_NOTE = 'note/updateNote';
const DELETE_NOTE = 'note/deleteNote';

// POJO action: Load all notes
const loadNotes = (notes) => {
    return{
      type: LOAD_NOTE,
      payload: notes
    };
  };

// POJO action: create new note
const createNote = (note) => {
    return {
      type: CREATE_NOTE,
      payload: note
    };
  };

  //POJO action: update note
  const updateNote = (note) => {
    return {
      type: UPDATE_NOTE,
      payload: note
    };
  };
  
  //POJO action: delete note
  const deleteNote = (noteId) => {
    return {
      type: DELETE_NOTE,
      payload: noteId
    };
  };

  // get notes
  export const thunkGetNote = () => async (dispatch) => {
    const response = await csrfFetch("/api/notes");

    if (response.ok) {
        const notes = await response.json();
        dispatch(loadNotes(notes));
    }
  }

  // create new note thunk
  export const thunkCreateNote = (note) => async (dispatch) => {
    const { userId, notebookId,title ,content} = note;
    const response = await csrfFetch("/api/notes", {
      method: "POST",
      body: JSON.stringify({
        userId,
        notebookId,
        title,
        content
      }),
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(createNote(data.note));
        return response;
    }
  };
   // update note
   export const thunkUpdateNote = (note) => async (dispatch) => {
    const { userId, title } = note;
    const response = await csrfFetch("/api/notes", {
      method: "PATCH",
      body: JSON.stringify({
        userId,
        title,
      }),
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(updateNote(data.note));
        return response;
    }
  };

   // delete a note
   export const thunkDeleteNote = (noteId) => async (dispatch) => {
    const response = await csrfFetch('/api/notes/:id', {
      method: 'DELETE',
    });
    dispatch(deleteNote(noteId));
    return response;
  };


const initialState = {};

const noteReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case CREATE_NOTE:
          newState = Object.assign({},state);
          newState.note = action.payload;
          return newState;
        case UPDATE_NOTE:
          newState = Object.assign({},state);
          newState.note = action.payload;
          return newState;
        case DELETE_NOTE:
          newState = Object.assign({},state);
          newState.note = action.payload;
          return newState;
          case LOAD_NOTE:
            let loadState = {}
            action.payload.forEach(note=> loadState[note.id]=note)
            return loadState;
          default:
            return state;
      }
}

export default noteReducer;
