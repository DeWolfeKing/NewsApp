export const login = (email,pass) => ({ type: 'LOGIN' ,payload:{
    email : email,
    pass : pass
    }});
export const createUser = (email,pass) =>({
    type: 'CREATE_LOGIN' ,
    payload: {
        email: email,
        pass: pass
    }
})
export const logOut = () => ({ type: 'LOGOUT' });