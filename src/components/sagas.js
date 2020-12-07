import {all , call, put, takeEvery, takeLatest } from 'redux-saga/effects'
// import Api from 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9e4b5d9dff24494fa300261673c996c1'
import axios from 'axios'
import {setNews} from "../actions/newsActions";
import {setLoadNews} from "../actions/newsActions";

export const Api = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9e4b5d9dff24494fa300261673c996c1'
async function fetchUser(){
    try {
        const content = await axios.get('https://newsapi.org/v2/top-headlines?apiKey=9e4b5d9dff24494fa300261673c996c1')
        // console.warn(content)
    } catch (e) {
        console.log(e)
    }
}
function* fetchNews(){
    try {
        const res = yield axios.get(Api)
        yield put(setNews(res.data))
    } catch (e) {
        console.log(e)
        // yield put(setNews(e))
        // throw new Error(e)
    }
}
function* fetchLoadNews(){
    console.log('В саге прокнуло')
    try {
        const res = yield axios.get(Api)
        console.log(res)
        yield put(setLoadNews(res.data))
    } catch (e) {
        //yield put(setNews(e))
    }
}


function* mySaga() {
    yield all([
        takeLatest("LOGIN", fetchUser),
        takeLatest("GET_NEWS", fetchNews),
        takeLatest("LOAD_NEWS", fetchLoadNews),
    ]);
}

export default mySaga;