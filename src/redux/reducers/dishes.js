import * as actionTypes from '../actions/actionTypes';

export const Dishes = (
state = {
    isLoading : true, 
    errorMessage : null, 
    dishes : []
}, 
action) => {
    switch (action.type) {
        case actionTypes.ADD_DISHES:
            return {...state, isLoading : false, errorMessage : null, dishes: action.payload};

        case actionTypes.DISHES_LOADING:
            return {...state, isLoading : true, errorMessage : null, dishes: []};
            
        case actionTypes.DISHES_FAILED:
            return {...state, isLoading : false, errorMessage : action.payload}

        default:
          return state;
      }
};