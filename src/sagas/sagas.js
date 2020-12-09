import {all , call, put, takeEvery, takeLatest } from 'redux-saga/effects'
// import {setNews} from "../actions/newsActions";
// import {setLoadNews} from "../actions/newsActions";
// import Api from 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9e4b5d9dff24494fa300261673c996c1'
//export const Api = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9e4b5d9dff24494fa300261673c996c1'
//import axios from 'axios'
import {createUser, login} from '../actions/loginActions'
import auth from '@react-native-firebase/auth'

//
// function* fetchLoadNews(){
//     console.log('В саге прокнуло')
//     try {
//         const res = yield axios.get(Api)
//         console.log(res)
//         yield put(setLoadNews(res.data))
//     } catch (e) {
//         //yield put(setNews(e))
//     }
// }
// async function fetchUser(){
//     try {
//         const content = await axios.get('https://newsapi.org/v2/top-headlines?apiKey=9e4b5d9dff24494fa300261673c996c1')
//         // console.warn(content)
//     } catch (e) {
//         console.log(e)
//     }
// }
// function* fetchNews(){
//     try {
//         const res = yield axios.get(Api)
//         yield put(setNews(res.data))
//     } catch (e) {
//         console.log(e)
//         // yield put(setNews(e))
//         // throw new Error(e)
//     }
// }
function* fetchLogin(props){
    try {
        const res = yield auth().signInWithEmailAndPassword(props.payload.email,props.payload.pass);
        console.warn('res1234', res);
        alert('вы вошли')
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            alert('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
            alert('That email address is invalid!');
        }
        console.error(error);
    }
}
function* fetchRegistration(props){
    try {
        const res = yield auth().createUserWithEmailAndPassword(props.payload.email,props.payload.pass);
        console.warn('res123', res);
        yield put(login(props.payload.email,props.payload.pass))
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            alert('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
            alert('That email address is invalid!');
        }
        console.error(error);
    }
}
function* mySaga() {
    yield all([
        takeLatest("LOGIN", fetchLogin),
        takeLatest("CREATE_LOGIN", fetchRegistration),
        // takeLatest("GET_NEWS", fetchNews),
        // takeLatest("LOAD_NEWS", fetchLoadNews),
    ]);
}

export default mySaga;