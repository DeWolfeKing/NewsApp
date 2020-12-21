import {all ,put,takeLatest } from 'redux-saga/effects'
import {
    loginFailed,
    loginSuccessful,
    registrationFailed,
    registrationSuccessful, signOutFailed, signOutSuccessful,
    // signOutFailed,
    // signOutSuccessful
} from '../actions/loginActions'
import {getTodoList, setupTodoList} from '../actions/todoActions'
import auth from '@react-native-firebase/auth'
import {CREATE_TODO, DELETE_TODO, GET_TODO, LOGIN, REGISTRATION, SIGN_OUT} from "../actions/types";
import firestore from '@react-native-firebase/firestore';

function* fetchLogin(action){
    try {
        const res = yield auth().signInWithEmailAndPassword(action.payload.email,action.payload.pass);
        const users = yield firestore()
            .collection("Users")
            .where('UserID', '==', res.user.uid)
            .get()
        yield put(loginSuccessful(users.docs[0]._data))
       action.payload.callback()
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            yield put(loginFailed('That email address is already in use!'))
        }
        else if (error.code === 'auth/invalid-email') {
            yield put(loginFailed('That email address is invalid!'))
        }
        else{
            yield put(loginFailed(error.code))
        }
    }
}
function* fetchRegistration(action){
    try {
        const res = yield auth().createUserWithEmailAndPassword(action.payload.email,action.payload.pass);
        const users = yield firestore()
            .collection("Users")
            .add({
                Name: action.payload.name,
                Email: action.payload.email,
                UserID: res.user.uid,
            })
        yield put(registrationSuccessful(action.payload.name,action.payload.email,res.user.uid))
        action.payload.callback()
    } catch (error) {
        yield put(registrationFailed(error));
    }
}
function* fetchSignOut(action){
    try {
        const res = yield auth().signOut();
        yield put(signOutSuccessful())
        action.payload.callback()
    } catch (error) {
        yield put(signOutFailed(error))
    }
}
function* fetchCreateTodo(action){
    try {
        const Todos = yield firestore()
            .collection("Todos")
            .add({
                TaskName: action.payload.TaskName,
                UserID: action.payload.UserID,
            })
     //   action.payload.callback()
    } catch (error) {
        console.log('ERROR IN CREATE TODO',error)
    }
}
function* fetchGetTodo(action){
    try {
        const Todos = yield firestore()
            .collection("Todos")
            .where('UserID', '==',action.payload.UserID)
            .get()
        yield put(setupTodoList(Todos.docs))
    } catch (error) {
        console.log('ERROR IN GET TODO',error)
    }
}
function* fetchDeleteTodo(action){
    try {
        const Todos = yield firestore()
            .collection('Todos')
            .where('UserID', '==',action.payload.UserID)
            .where('TaskName', '==',action.payload.TaskName)
            .get()
        const path = yield firestore()
             .collection('Todos')
             .doc(Todos.docs[0].id)
             .delete()

    } catch (error) {
        console.log('ERROR IN DELETE TODO',error)

    }
}
function* mySaga() {
    yield all([
        // takeLatest(MODIFIED_TODO_LIST,fetchSetTodoList),
        takeLatest(DELETE_TODO,fetchDeleteTodo),
        takeLatest(GET_TODO,fetchGetTodo),
        takeLatest(CREATE_TODO,fetchCreateTodo),
        takeLatest(SIGN_OUT,fetchSignOut),
        takeLatest(LOGIN, fetchLogin),
        takeLatest(REGISTRATION, fetchRegistration),
    ]);
}

export default mySaga;