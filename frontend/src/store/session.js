import { csrfFetch } from './csrf';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';



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

  const initialState = { user: null, };


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
      default:
        return state;
  }
};

export default sessionReducer;