import {NEW_POST_SUCCESS} from "../actions/postsActions";

export default function postsReducer(state=[], action){
    switch(action.type){
        case NEW_POST_SUCCESS:
            return [action.post, ...state];

        default:
            return state
    }
}