import {combineReducers} from 'redux';
import {ADD_CHAT_SUCCESS} from "../actions/chatsActions";

function list(state=[], action){
    switch(action.type){
        case ADD_CHAT_SUCCESS:
            return [...state, action.chat];
        default:
            return state;
    }
}

function current(state={}, action){
    switch(action.type){
        default:
            return state;
    }
}

export const chatsReducer = combineReducers({
   list,
   current
});