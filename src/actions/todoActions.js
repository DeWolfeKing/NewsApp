import {CREATE_TODO, DELETE_TODO, FEILED_CREATE_TODO, GET_TODO, SETUP_TODOLIST} from "./types";

export const setupTodoList = (todoList) =>({type:SETUP_TODOLIST,payload:todoList})
export const createTodo = (taskName,UserID,cb) =>({type:CREATE_TODO,payload: {TaskName:taskName,UserID:UserID,callback:cb}})
export const failedCreateTodo = (error) =>({type:FEILED_CREATE_TODO,payload: error})
export const deleteTodo = (taskName,UserID) =>({type:DELETE_TODO,payload: {TaskName:taskName,UserID:UserID}})
export const getTodoList = (UserID) =>({type:GET_TODO,payload: {UserID:UserID} })



