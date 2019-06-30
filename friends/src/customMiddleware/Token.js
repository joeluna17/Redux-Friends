import { LOG_IN_SUCCESSFUL } from '../actions';


export const setToken = store => next => action =>{
    if(action.type ===  LOG_IN_SUCCESSFUL) {
        localStorage.setItem('userToken', action.payload); 

    }
    next(action);
}