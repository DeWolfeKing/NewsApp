import {add} from "react-native-reanimated";

const initialState = {
    news : [],
    totalResults: '',
    error : null,
    isLoading : false
};
const newsReducer = (state = initialState,action) => {
    switch (action.type) {
        case 'GET_NEWS' :{
            return {
                ...state,
                isLoading: true
            }
        }
        case 'SET_NEWS' :{
            return {
                news : action.payload.articles,
                results: action.payload.totalResults,
                isLoading: false
            }
        }
        case 'SET_LOAD_NEWS' :{
            const addNews =[...state.news].concat(action.payload.articles)
            return {
                ...state,
                news : addNews,
                isLoading: false
            }
        }
        case 'ERROR_NEWS' :{
            return {
                news : [],
                error: action.payload,
                isLoading: false
            }
        }
        default :{
            return state
        }

    }
}

export default newsReducer
