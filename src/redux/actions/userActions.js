import * as ActionTypes from '../actions/actionTypes';
import { baseUrl } from '../../shared/baseUrl';

export const loginUser = (user) => ({
    type: ActionTypes.LOGIN_USER,
    payload: user
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
        alert(response.status);
    })
    .catch(error =>  { console.log('login', error.message); 
    alert('could not login \nError: '+error.message); }); 
};

