import {combineReducers} from "redux";
import {GET_ORGANIZATIONS_SUCCESS} from "../actions/organizationsActions";


function list(state=[], action){
    switch (action.type){
        case GET_ORGANIZATIONS_SUCCESS:
            return [...state, action.organization];
        default:
            return state;
    }
}


export const organizationsReducer = combineReducers({
   list,
});