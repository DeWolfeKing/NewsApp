import {
    LOGIN,
    LOGIN_FAILED,
    LOGIN_SUCCESSFUL,
    REGISTRATION,
    REGISTRATION_FAILED,
    REGISTRATION_SUCCESSFUL,
    SIGN_OUT,
    SIGN_OUT_FAILED,
    SIGN_OUT_SUCCESSFUL,
} from "./types";


export const registrationRequest = (name,email,pass,cb) =>({
    type: REGISTRATION ,
    payload: {
        name:name,
        email:email,
        pass:pass,
        callback:cb
}});
export const registrationSuccessful = (name,email,uid) => ({
    type: REGISTRATION_SUCCESSFUL,
    payload: {
        name:name,
        email:email,
        uid:uid
}});
export const registrationFailed = (error) => ({ type: REGISTRATION_FAILED ,payload: error});

export const loginRequest = (email,pass,cb) => ({ type: LOGIN ,payload: {
    email : email,
    pass : pass,
    callback : cb
}});

export const loginSuccessful = (data) => ({ type: LOGIN_SUCCESSFUL ,payload: {
    name:data.Name,
    email:data.Email,
    uid:data.UserID,
}});
export const loginFailed = (error) => ({ type: LOGIN_FAILED ,payload: error});
export const signOutRequest = (cb) => ({type : SIGN_OUT,payload: {callback:cb}})
export const signOutSuccessful = () => ({ type: SIGN_OUT_SUCCESSFUL});
export const signOutFailed = (error) => ({ type: SIGN_OUT_FAILED ,payload: error});

