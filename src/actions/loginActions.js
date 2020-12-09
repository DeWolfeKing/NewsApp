import {FAILED, LOGIN, REGISTRATION, SUCCESSFUL} from "./types";
export const registrationRequest = (email,pass,cb) =>({ type: REGISTRATION ,payload: {email, pass,callback:cb}});
export const loginRequest = (email,pass,cb) => ({ type: LOGIN ,payload: {email, pass,callback:cb}});
export const loginSuccessful = (email) => ({ type: SUCCESSFUL ,payload: email });
export const loginFailed = (error) => ({ type: FAILED ,payload: error});

