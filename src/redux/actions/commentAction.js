import * as ActionTypes from '../actions/actionTypes';
import { baseUrl } from '../../shared/baseUrl';

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => {
            if(response.ok){
                return response;
            }else{
                var error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        }, error =>{
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
};

export const addComments = (comments) =>({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating,comment) => (dispatch, getState) =>{
    
    const state = getState();
    const token = state.user.token;
    const newComment = {
        rating: rating,
        comment: comment
    };

    return fetch(baseUrl + dishId + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers : {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        credentials: 'same-origin' 
    })
    .then(response => response.json())
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => dispatch(addComment(response)))
    .catch(error =>  { console.log('post comments', error.message); 
    alert('Your comment could not be posted\nError: '+error.message); });
};