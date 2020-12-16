import {FAILED, SUCCESSFUL, LOGOUT, SIGN_OUT_SUCCESSFUL, SIGN_OUT_FAILED} from "../actions/types";

const initialState = {
    userEmail : '',
    isLoggined : false,
    error: ''
};

const loginReducer = (state = initialState,action) => {
    switch(action.type){
        case SUCCESSFUL:{
            console.log(state.isLoggined)
            return {
                ...state,
                userEmail: action.payload,
                isLoggined :true,
                error: '',
            }
        }
        case FAILED:{
            console.log(action.payload)
            return {
                ...state,
                error: action.payload
            }
        }
        case SIGN_OUT_SUCCESSFUL : {
            console.log(state.isLoggined)
            return {
                userEmail : '',
                isLoggined : false,
                error : ''
            }
        }
        case SIGN_OUT_FAILED:{
            console.log(action.payload)
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


