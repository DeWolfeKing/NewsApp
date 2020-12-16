import {FAILED, LOGIN, REGISTRATION, SIGN_OUT, SIGN_OUT_FAILED, SIGN_OUT_SUCCESSFUL, SUCCESSFUL} from "./types";
export const registrationRequest = (email,pass,cb) =>({ type: REGISTRATION ,payload: {email, pass,callback:cb}});
export const loginRequest = (email,pass,cb) => ({ type: LOGIN ,payload: {email, pass,callback:cb}});
export const loginSuccessful = (email) => ({ type: SUCCESSFUL ,payload: email });
export const loginFailed = (error) => ({ type: FAILED ,payload: error});
export const signOutRequest = (cb) => ({type : SIGN_OUT,payload: {callback:cb}})
export const signOutSuccessful = () => ({ type: SIGN_OUT_SUCCESSFUL});
export const signOutFailed = (error) => ({ type: SIGN_OUT_FAILED ,payload: error});

