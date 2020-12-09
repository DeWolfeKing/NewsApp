const initialState = {
    userEmail : '',
    isLoggined : false,
};

const loginReducer = (state = initialState,action) => {
    switch(action.type){
        case 'LOGIN':{
            console.log(state.isLoggined)
            return {
                userEmail: action.payload.email,
                isLoggined :true
            }
        }
        case 'LOGOUT' : {
            console.log(state.isLoggined)
            return {
                userEmail : '',
                userPass : '',
                isLoggined : false,
            }
        }
        default :
            return state
    }    
}

export default loginReducer


