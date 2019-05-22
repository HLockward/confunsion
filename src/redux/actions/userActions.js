import * as ActionTypes from '../actions/actionTypes';
import { baseUrl } from '../../shared/baseUrl';

export const loginUser = (user) => ({
    type: ActionTypes.LOGIN_USER,
    payload: user
});

export const signInUser = (user) =>({
    type: ActionTypes.SIGNIN_USER,
    payload: user
});

export const logoutUser = () =>({
    type: ActionTypes.LOGOUT_USER,
    payload: null
});

export const login = (user) => (dispatch) => {

    return fetch(baseUrl + 'users/login', {
        method : 'post',
        body: JSON.stringify(user),

        headers : {
            "Content-Type": "application/json"
        },
        credentials: 'same-origin'
    })
    .then(response => response.json())  
    .then(response => {
        if(response.success){
            dispatch(loginUser(response.user)); 
        }
    })
    .catch(error =>  { console.log('login', error.message); 
    alert('could not login \nError: '+error.message); }); 
};

export const signIn = (user) => (dispatch) => {

    return fetch(baseUrl + 'users/signup', {
        method : 'post',
        body: JSON.stringify(user),

        headers : {
            "Content-Type": "application/json"
        },
        credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(response => {
        if(response.success){
            dispatch(signInUser(response.user)); 
        }
    })
    .catch(error =>  { console.log('sign in', error.message); 
    alert('could not sign in \nError: '+error.message); }); 
};

export const logout = () => (dispatch) =>{
    return fetch(baseUrl + 'users/logout')
    .then(response => response.json())
    .then((response) =>{
        dispatch(logoutUser());
        alert(response.status);
    })
    .catch(error =>  console.log('logout', error.message));
}