import { csrfFetch } from './csrf';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';
const CREATE_NOTEBOOK ='/createNotebook';
const UPDATE_NOTEBOOK = '/updateNotebook';
const DELETE_NOTEBOOK = '/deleteNotebook';

// POJO action 1: set the session user in the session slice of state
const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

// action: function that returns an object
// POJO action 2: remove the session user
const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};
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


// login thunk action
export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
  
};
// signup thunk action
export const signup = (user) => async (dispatch) => {
    const { username, email, password } = user;
    const response = await csrfFetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(setUser(data.user));
        return response;
    }
  };
// restore user thunk action
  export const restoreUser = () => async dispatch => {
    const response = await csrfFetch('/api/session');
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
  };
// logout thunk action
  export const logout = () => async (dispatch) => {
    const response = await csrfFetch('/api/session', {
      method: 'DELETE',
    });
    dispatch(removeUser());
    return response;
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
  // read notebook

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
  export const thunkDeleteNotebook = (notebook) => async (dispatch) => {
    const response = await csrfFetch('/api/notebooks/:id', {
      method: 'DELETE',
    });
    dispatch(deleteNotebook());
    return response;
  };
  
const initialState = { user: null, 
  notebook: {
    userId: '',
    title: '',
  } };


const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
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
    default:
      return state;
  }
};

export default sessionReducer;