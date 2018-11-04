export function likeActions(commentLikes) {
    return (dispatch) => {
      return fetch(`http://localhost:3001/likes`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({like: commentLikes})})
        .then(response => response.json())
        .then(like => {
          dispatch({ type: 'UPDATE_LIKE', like })});
    }
  }
