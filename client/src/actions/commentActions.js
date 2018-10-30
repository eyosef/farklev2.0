// import * as constants from './actionTypes';

export function commentActions(formContent) {
  console.log('C')
  return (dispatch) => {
    return fetch(`http://localhost:3001/comments`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({comment: formContent})})
      .then(response => response.json())
      .then(comment => {
        console.log('D')
        dispatch({ type: 'UPDATE_COMMENT', comment })});
  }
  console.log('E')
}

export function fetchComments() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_COMMENTS' });
    return fetch('http://localhost:3001/comments')
      .then(response => response.json() )
      .then(comments => {dispatch({ type: 'FETCH_COMMENTS', comments: comments })});
  }
}