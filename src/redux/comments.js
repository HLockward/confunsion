import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './actionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT :
            let comments = action.payload;
            comments.id = state.length;
            comments.date = new Date().toISOString();
            console.log(`comment: ${comments}`);
            return state.concat(comments);
        default:
          return state;
      }
};