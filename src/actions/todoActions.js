const pushTask = (nameTask) => ({
    type : 'ADD_TASK',
    payload : { taskName : nameTask }
})
const deleteTask = (name) => ({
    type : 'DELETE_TASK',
    payload : name
})
export default {
    pushTask,
    deleteTask
}