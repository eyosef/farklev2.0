export default function farkleReducer (state = {}, action) {
    switch (action.type) {
        case 'UPDATE_SCORE':
        debugger;
            return {score: state.score} 
        default: 
            return state;
    }
}