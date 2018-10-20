// import * as constants from './actionTypes';

export function commentActions(formContent) {
  return (dispatch) => {
    return fetch(`http://localhost:3001/comments`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({comment: formContent})})
      .then(response => response.json())
      .then(comment => {dispatch({ type: 'UPDATE_COMMENT', comment })});
  }
}

export function fetchComments() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_COMMENTS' });
    return fetch('http://localhost:3001/comments')
      .then(response => response.json() )
      .then(comments => {dispatch({ type: 'FETCH_COMMENTS', comments: comments })});
  }
}