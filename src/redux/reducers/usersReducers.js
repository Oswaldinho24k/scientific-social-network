import {combineReducers} from "redux";
import {GET_USER_SUCCESS} from "../actions/usuariosActions";

function list(state=[], action){
    switch (action.type){
        case GET_USER_SUCCESS:
            let user = state.find(u=>u.id === action.user.id);
            if(user) return state;
            return [action.user, ...state];
        default:
            return state;
    }
}

function object(state={}, action){
    switch (action.type){
        case GET_USER_SUCCESS:
            return {
                ...state,
                [action.user.id] : action.user
            };
        default:
            return state;
    }
}

export const usersReducer = combineReducers({
   list,
    object
});