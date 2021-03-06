'use strict';


// Resets the currently visible error message.
export const resetErrorMessage = () => ({
  type: 'RESET_ERROR_MESSAGE'
});


export const setTitle = (text) => ({
  type: 'SET_TITLE',
  payload: { text: text }
});


export const loadSession = () => ({
  type: 'API_REQUEST',
  payload: {
    id: 'LOAD_SESSION',
    path: '/_session',
    method: 'GET'
  }
});


export const signIn = (email, password)  => (dispatch, getState) => {

  if (getState().session.isSignedIn) {
    return null;
  }

  dispatch({
    type: 'API_REQUEST',
    payload: {
      id: 'SIGNIN',
      path: '/_session',
      method: 'POST',
      payload: { email, password }
    }
  });
};

export const signOut = () => ({
  type: 'API_REQUEST',
  payload: {
    id: 'SIGNOUT',
    path: '/_session',
    method: 'DELETE'
  }
});


export const fetchGroups = () => ({
  type: 'API_REQUEST',
  payload: {
    id: 'FETCH_GROUPS',
    path: '/_groups',
    method: 'GET'
  }
});


export const fetchTracks = () => ({
  type: 'API_REQUEST',
  payload: {
    id: 'FETCH_TRACKS',
    path: '/_tracks',
    method: 'GET'
  }
});

export const fetchLessons = () => ({
  type: 'API_REQUEST',
  payload: {
    id: 'FETCH_LESSONS',
    path: '/_lessons',
    method: 'GET'
  }
});


export const fetchProblems = () => ({
  type: 'API_REQUEST',
  payload: {
    id: 'FETCH_PROBLEMS',
    path: '/_problems',
    method: 'GET'
  }
});


export const updateProblemResults = (results) => ({
  type: 'PROBLEM_RESULTS_RECEIVED',
  payload: results
});


export const updateProblemCode = (code) => ({
  type: 'PROBLEM_CODE_UPDATE',
  payload: code
});
