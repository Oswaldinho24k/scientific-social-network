import {
    UPDATE_USER_SUCCESS,
    INICIAR_SESION_SUCCESS,
    CERRAR_SESION_SUCCESS
} from "../actions/usuarioActions";

export default function usuarioReducer ( state = {} , action ){
    switch(action.type){
        case UPDATE_USER_SUCCESS:
            console.log("te ando trolleando");
            return action.user;
        case INICIAR_SESION_SUCCESS:
            return action.user;
        case CERRAR_SESION_SUCCESS:
            return  {};
        default:
            return state;
    }
}