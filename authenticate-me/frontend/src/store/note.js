import { csrfFetch } from './csrf';

const LOAD_NOTE = 'note/loadNote';
// const LOAD_NOTEBOOK = 'note/loadNote'
const CREATE_NOTE ='note/createNote';
const UPDATE_NOTE = 'note/updateNote';
const DELETE_NOTE = 'note/deleteNote';

// POJO action: Load all notebooks
const loadNotes = (notes) => {
    return{
      type: LOAD_NOTE,
      payload: notes
    };
  };

// POJO action: create new notebook
const createNote = (note) => {
    return {
      type: CREATE_NOTE,
      payload: note
    };
  };

  //POJO action: update notebook
  const updateNote = (note) => {
    return {
      type: UPDATE_NOTE,
      payload: note
    };
  };
  
  //POJO action: delete notebook
  const deleteNote = (noteId) => {
    return {
      type: DELETE_NOTE,
      payload: noteId
    };
  };


const initialState = {  
      note: '',
      userId: '',
      title: '',
     };

const noteReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case CREATE_NOTE:
          newState = Object.assign({},state);
          newState.notebook = action.payload;
          return newState;
        case UPDATE_NOTE:
          newState = Object.assign({},state);
          newState.notebook = action.payload;
          return newState;
        case DELETE_NOTE:
          newState = Object.assign({},state);
          newState.notebook = action.payload;
          return newState;
          case LOAD_NOTE:
            newState = Object.assign({},state);
            newState.notebook = action.payload;
            return newState;
          default:
            return state;
      }
}

export default noteReducer;
