import {FEILED_CREATE_TODO, SETUP_TODOLIST, SIGN_OUT_SUCCESSFUL} from "../actions/types";

const initialState = {
    todoList : [],
    error : ''
};

const todoReducer = (state = initialState,action) => {
    switch(action.type){
        case SETUP_TODOLIST : {
            const todoList = action.payload.map((item) => (item._data))
            return{
                error: '',
                todoList : todoList
            }
        }
        case SIGN_OUT_SUCCESSFUL :{
            return {
                error: '',
                todoList: []
            }
        }
        case FEILED_CREATE_TODO :{
            return {
                ...state,
                error: action.payload
            }
        }
        default :
            return state
    }    
}

export default todoReducer