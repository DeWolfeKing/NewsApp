const initialState = {
    todoList :[]
};

const todoReducer = (state = initialState,action) => {
    switch(action.type){
        case 'ADD_TASK': {
            return{
                ...state,
                todoList : [...state.todoList, action.payload]
            }
        }
        case 'DELETE_TASK' :{
            const newTodoList = state.todoList.filter((item) => item.taskName !== action.payload)
            return {
                ...state,
                todoList : newTodoList
            }        
        }
        default :
            return state
    }    
}

export default todoReducer