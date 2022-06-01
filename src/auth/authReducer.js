import { types } from '../types/types';

// const state = {
//     name: 'David',
//     logged: true
// }  



//No deberia tener interacciones con el mundo exterior
// Son funciones puras que no tienen que salirse de su funcion para realizar el trabajo
// Solo necesita el estado y la accion para realizar el trabajo

export const authReducer = ( state = {}, action ) => {

    switch(action.type){
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
        case types.logout:
            return {
                logged: false
            }
        default:
            return state;
    }
}