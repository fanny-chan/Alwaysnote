import { csrfFetch } from './csrf';

const LOAD_NOTEBOOKS = 'notebook/loadNotebooks';
// const LOAD_NOTEBOOK = 'notebook/loadNotebook'
const CREATE_NOTEBOOK ='notebook/createNotebook';
const UPDATE_NOTEBOOK = 'notebook/updateNotebook';
const DELETE_NOTEBOOK = 'notebook/deleteNotebook';

// POJO action: Load all notebooks
const loadNotebooks = (notebooks) => {
  return{
    type: LOAD_NOTEBOOKS,
    payload: notebooks
  };
};

// // POJO action: Load a notebook
// const loadNotebook = (notebook) => {
//   return{
//     type: LOAD_NOTEBOOK,
//     payload: notebook
//   };
// };

// POJO action: create new notebook
const createNotebook = (notebook) => {
    return {
      type: CREATE_NOTEBOOK,
      payload: notebook
    };
  };

  //POJO action: update notebook
  const updateNotebook = (notebook) => {
    return {
      type: UPDATE_NOTEBOOK,
      payload: notebook
    };
  };
  
  //POJO action: delete notebook
  const deleteNotebook = (notebook) => {
    return {
      type: DELETE_NOTEBOOK,
      payload: notebook
    };
  };

  // create new notebook thunk
  export const thunkCreateNotebook = (notebook) => async (dispatch) => {
    const { userId, title } = notebook;
    const response = await csrfFetch("/api/notebooks", {
      method: "POST",
      body: JSON.stringify({
        userId,
        title,
      }),
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(createNotebook(data.notebook));
        return response;
    }
  };
  // get notebooks
  export const thunkGetNotebooks = () => async (dispatch) => {
    const response = await csrfFetch("/api/notebooks");

    if (response.ok) {
        const notebooks = await response.json();
        dispatch(loadNotebooks(notebooks));
    }
  }
  //  // get notebook
  //  export const thunkGetNotebook = (notebookId) => async (dispatch) => {
  //   const response = await csrfFetch("/api/notebooks/:Id");

  //   if (response.ok) {
  //       const notebook = await response.json();
  //       dispatch(loadNotebook(notebook));
  //   }
  // }


  // update notebook
  export const thunkUpdateNotebook = (notebook) => async (dispatch) => {
    const { userId, title } = notebook;
    const response = await csrfFetch("/api/notebooks", {
      method: "PATCH",
      body: JSON.stringify({
        userId,
        title,
      }),
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(updateNotebook(data.notebook));
        return response;
    }
  };

  // delete a notebook
  export const thunkDeleteNotebook = (notebookId) => async (dispatch) => {
    const response = await csrfFetch('/api/notebooks/:id', {
      method: 'DELETE',
    });
    dispatch(deleteNotebook(notebookId));
    return response;
  };
  
const initialState = {};

const notebookReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case CREATE_NOTEBOOK:
        newState = Object.assign({},state);
        newState.notebook = action.payload;
        return newState;
      case UPDATE_NOTEBOOK:
        newState = Object.assign({},state);
        newState.notebook = action.payload;
        return newState;
      case DELETE_NOTEBOOK:
        newState = Object.assign({},state);
        newState.notebook = action.payload;
        return newState;
        case LOAD_NOTEBOOKS:
          let loadState = {}
        action.payload.forEach(notebook=> loadState[notebook.id]=notebook)
        return loadState;
        default:
          return state;
    }
};
  

export default notebookReducer;
