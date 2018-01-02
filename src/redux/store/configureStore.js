import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import {newPost} from "../actions/postsActions";
import {comprobarUsuario} from "../actions/usuarioActions";
import {getOrganizations} from "../actions/organizationsActions";


export default function configureStore(){
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
    store.dispatch(newPost());
    store.dispatch(getOrganizations());
    store.dispatch(comprobarUsuario());
    return store;
}

