import {combineReducers} from 'redux';
import usuarioReducer from "./usuarioReducer";
//import usuarioVerificadoReducer from "./usuarioVerificadoReducer";
import eventosReducer from "./eventosReducer";
import postsReducer from "./postsReducer";
import {groupReducers} from "./groupReducers";
import {usersReducer} from "./usersReducers";
import {organizationsReducer} from "./organizationsReducer";
import {chatsReducer} from "./chatsReducer";


const rootReducer = combineReducers({
    usuario: usuarioReducer,
    //usuarioVerificado: usuarioVerificadoReducer,
    eventos: eventosReducer,
    posts:postsReducer,
    groups:groupReducers,
    users:usersReducer,
    organizations: organizationsReducer,
    chats:chatsReducer
});

export default rootReducer;
