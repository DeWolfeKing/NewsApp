import {all ,put,takeLatest } from 'redux-saga/effects'
import {loginFailed, loginSuccessful} from '../actions/loginActions'
import auth from '@react-native-firebase/auth'
import {LOGIN, REGISTRATION} from "../actions/types";

function* fetchLogin(action){
    try {
        const res = yield auth().signInWithEmailAndPassword(action.payload.email,action.payload.pass);
        yield put(loginSuccessful(action.payload.email))
        action.payload.callback()
    } catch (error) {
        yield put(loginFailed(error.userInfo.message));
    }
}
function* fetchRegistration(action){
    try {
        const res = yield auth().createUserWithEmailAndPassword(action.payload.email,action.payload.pass);
        yield put(loginSuccessful(action.payload.email))
        action.payload.callback()
    } catch (error) {
        yield put(loginFailed(error.userInfo.message));
    }
}
function* mySaga() {
    yield all([
        takeLatest(LOGIN, fetchLogin),
        takeLatest(REGISTRATION, fetchRegistration),
        // takeLatest("GET_NEWS", fetchNews),
        // takeLatest("LOAD_NEWS", fetchLoadNews),
    ]);
}

export default mySaga;