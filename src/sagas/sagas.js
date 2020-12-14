import {all ,put,takeLatest } from 'redux-saga/effects'
import {loginFailed, loginSuccessful} from '../actions/loginActions'
import auth from '@react-native-firebase/auth'
import {LOGIN, REGISTRATION} from "../actions/types";
import firestore from '@react-native-firebase/firestore';
//
// const users = await firestore()
//     .collection('Users')
//     .get();
function* fetchLogin(action){
    try {
        const res = yield auth().signInWithEmailAndPassword(action.payload.email,action.payload.pass);
        yield put(loginSuccessful(action.payload.email))
        // const users = yield firestore()
        //     .collection("Prikols")
        //     .doc('blablablop')
        //     .get();
        // console.warn('FIRESTORE TUT',users)
        console.warn('User ID',res.user.uid)
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