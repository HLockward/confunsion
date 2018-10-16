import * as ActionTypes from './actionTypes';

export const Comments = (state = { 
    errorMessage : null, 
    comments : []
}, 
action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS :
            return {...state, errorMessage : null, comments: action.payload};
        
        case ActionTypes.ADD_COMMENT :
            let comments = action.payload;
            return {...state, comments: state.comments.concat(comments)};

        case ActionTypes.COMMENTS_FAILED :
            return {...state, errorMessage: action.payload};

        default:
          return state;
      }
};