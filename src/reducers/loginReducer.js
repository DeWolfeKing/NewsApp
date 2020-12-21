import {
    SIGN_OUT_SUCCESSFUL,
    SIGN_OUT_FAILED,
    REGISTRATION_SUCCESSFUL, REGISTRATION_FAILED, LOGIN_SUCCESSFUL, LOGIN_FAILED
} from "../actions/types";

const initialState = {
    name: '',
    email : '',
    uid: '',
    isLoggined : false,
    error: ''
};

const loginReducer = (state = initialState,action) => {
    switch(action.type){
        case LOGIN_SUCCESSFUL:{
            console.log(action.payload)
            return {
                name: action.payload.name,
                email: action.payload.email,
                uid:action.payload.uid,
                isLoggined :true,
                error: '',
            }
        }
        case LOGIN_FAILED:{
            return {
                ...state,
                error: action.payload
            }
        }
        case REGISTRATION_SUCCESSFUL:{
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                uid:action.payload.uid,
                isLoggined :true,
                error: '',
            }
        }
        case REGISTRATION_FAILED:{
            return {
                ...state,
                error: action.payload
            }
        }
        case SIGN_OUT_SUCCESSFUL : {
            return {
                name: '',
                email : '',
                uid:'',
                isLoggined : false,
                error : ''
            }
        }
        case SIGN_OUT_FAILED:{
            return {
                ...state,
                error: action.payload
            }
        }
        default :
            return state
    }    
}

export default loginReducer


