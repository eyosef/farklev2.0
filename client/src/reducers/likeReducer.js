export default function likeReducer (state = 0 , action) {
    switch(action.type) {
      case 'UPDATE_LIKE':
        debugger;
        return Object.assign({}, state, { loading: false, loaded: true }, action.post);
      default:
        return state;
    }
  }