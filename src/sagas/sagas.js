import {all ,put,takeLatest } from 'redux-saga/effects'
import {loginFailed, loginSuccessful, signOutFailed, signOutSuccessful} from '../actions/loginActions'
import auth from '@react-native-firebase/auth'
import {LOGIN, REGISTRATION, SIGN_OUT} from "../actions/types";
import firestore from '@react-native-firebase/firestore';

function* fetchLogin(action){
    try {
        const res = yield auth().signInWithEmailAndPassword(action.payload.email,action.payload.pass);

        yield put(loginSuccessful(action.payload.email))
        // const users = yield firestore()
        //     .collection("Prikols")
        //     .doc('Proverka')
        //     .get('BIBASI');
        // console.warn('FIRESTORE TUT',users)
        console.warn('ЮЗЕР',auth().currentUser)
        console.warn('User ID',res)
        action.payload.callback()
    } catch (error) {
        yield put(loginFailed(error.userInfo.message));
    }
}
function* fetchRegistration(action){
    try {
        const res = yield auth().createUserWithEmailAndPassword(action.payload.email,action.payload.pass);
        const users = yield firestore()
            .collection("Users")
            .doc(res.user.uid)
            .set({
                todo: []
            })
        yield put(loginSuccessful(action.payload.email))
        console.warn('User ID',res.user.uid)
        action.payload.callback()
    } catch (error) {
        yield put(loginFailed(error.userInfo.message));
    }
}
function* fetchSignOut(action){
    try {
        const res = yield auth().signOut();
        console.warn('Vihod Srabotal')
        console.warn('ЮЗЕР',auth().currentUser)
        yield put(signOutSuccessful())
        //action.payload.callback()
    } catch (error) {
        yield put(signOutFailed(error))
    }
}
function* mySaga() {
    yield all([
        takeLatest(SIGN_OUT,fetchSignOut),
        takeLatest(LOGIN, fetchLogin),
        takeLatest(REGISTRATION, fetchRegistration),
    ]);
}

export default mySaga;