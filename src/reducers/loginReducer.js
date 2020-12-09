import {FAILED, SUCCESSFUL, LOGOUT} from "../actions/types";


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
                userEmail: action.payload.email,
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
        case LOGOUT : {
            console.log(state.isLoggined)
            return {
                userEmail : '',
                isLoggined : false,
            }
        }
        default :
            return state
    }    
}

export default loginReducer


