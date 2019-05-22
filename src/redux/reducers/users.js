import * as ActionTypes from '../actions/actionTypes';

export const User = (state = { 
    errorMessage : null, 
    user : null
}, 
action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_USER :
        case ActionTypes.SIGNIN_USER :
            return {...state, user: action.payload};
        case ActionTypes.LOGOUT_USER :
            return {...state, user: action.payload};
        default:
          return state;
      }
};