
import {GET_ALL_GROUPS, NEW_GROUP_SUCCESS} from "../actions/groupActions";

export function groupReducers(state=[], action){
    switch(action.type){
        case GET_ALL_GROUPS:
            return action.groups;

        case NEW_GROUP_SUCCESS:
            return [...state, action.group];
        default:
            return state;
    }
}