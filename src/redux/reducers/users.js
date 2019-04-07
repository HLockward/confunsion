import * as ActionTypes from '../actions/actionTypes';

export const User = (state = { 
    errorMessage : null, 
    user : null
}, 
action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_USER :
            return {...state, user: action.payload};

        case ActionTypes.COMMENTS_FAILED :
            return {...state, errorMessage: action.payload};

        default:
          return state;
      }
};