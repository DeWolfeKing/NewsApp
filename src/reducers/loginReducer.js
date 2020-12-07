const initialState = {
    userName : 'Admin',
    userPass : '123',
    isLoggined : false,
};
4
const loginReducer = (state = initialState,action) => {
    switch(action.type){
        case 'LOGIN':{
            console.log(state.isLoggined)
            return {
                ...state,
                isLoggined :true
            }
        }
        case 'LOGOUT' : {
            console.log(state.isLoggined)
            return {
                ...state,
                isLoggined : false
            }
        }
        default :
            return state
    }    
}

export default loginReducer


