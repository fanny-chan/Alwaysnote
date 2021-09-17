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
  const deleteNotebook = (notebookId) => {
    return {
      type: DELETE_NOTEBOOK,
      payload: notebookId
    };
  };

  // create new notebook thunk
  export const thunkCreateNotebook = (notebook) => async (dispatch) => {
    const { userId, title } = notebook;
    const response = await csrfFetch("/api/notebooks", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId,
        title,
      }),
    });
    if (response.ok) {
        const newNotebook = await response.json();
        dispatch((createNotebook(newNotebook)));
        return newNotebook;
    }
  };
  // get notebooks
  export const thunkGetNotebooks = () => async (dispatch) => {
    const response = await csrfFetch("/api/notebooks");

    if (response.ok) {
        const notebooks = await response.json();
        dispatch(loadNotebooks(notebooks));
        return notebooks;
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
  export const thunkUpdateNotebook = (updatedNotebook) => async (dispatch) => {
    const { id } = updatedNotebook;
    const response = await csrfFetch(`/api/notebooks/${parseInt(id)}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedNotebook)
    });

    if (response.ok) {
        const updateddata = await response.json();
        dispatch(updateNotebook(updateddata));
        return updateddata;
    }
  };

  // delete a notebook
  export const thunkDeleteNotebook = (notebookId) => async (dispatch) => {
    const response = await csrfFetch(`/api/notebooks/${parseInt(notebookId)}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if(response.ok) {
    await dispatch(deleteNotebook(notebookId));
    }
  };
  
const initialState = {
};

const notebookReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case CREATE_NOTEBOOK:
        newState = Object.assign({},state);
        newState.notebook = action.payload;
        return newState;
      case UPDATE_NOTEBOOK:
        newState = Object.assign({},state);
        newState[action.payload.id] = action.payload;
        return newState;
      case DELETE_NOTEBOOK:
        newState = Object.assign({},state);
        delete newState[action.payload]
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
