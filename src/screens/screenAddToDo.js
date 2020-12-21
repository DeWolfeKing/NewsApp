import { View, Text, TouchableOpacity, TextInput} from "react-native";
import React, { useState } from 'react';
import {createTodo, failedCreateTodo, getTodoList} from "../actions/todoActions";
import { useDispatch, useSelector } from "react-redux";

const AddToDo = (props) => {
  const dispatch = useDispatch();
  const [nameTaskInput, onChangeTaskName] = useState('nameTask');
  const {todoList,error,UserID} = useSelector((state) => ({
    todoList: state.todoReducer.todoList,
    error: state.todoReducer.error,
    UserID: state.loginReducer.uid,
  }))
  const addTask = () => {
    if(nameTaskInput) {
        const isItemExist = todoList.map((item) => item.TaskName === nameTaskInput);
        if (isItemExist.includes(true) || !nameTaskInput) {
            dispatch(failedCreateTodo('Wrong taskName'))
        } else {
            dispatch(createTodo(nameTaskInput, UserID, props.navigation.navigate('ToDoScreen')))
            dispatch(getTodoList(UserID))
        }
    }else{
        dispatch(failedCreateTodo('Wrong taskName'))
    }
  }
  return(
    <View style = {{
      padding: 40,
      paddingTop: 80,
      backgroundColor: '#b8e986',
      flex: 1}}>
      <View style={{alignItems:'center'}}>
        <TextInput style={{ height: 40,width: 300, borderColor: 'gray', borderWidth: 1 }}
          onChangeText = {text => onChangeTaskName(text)}
          value={nameTaskInput}
        />
          <Text style={{color:'red'}}>{error}</Text>
        <TouchableOpacity style={{backgroundColor:"white",borderWidth:1,borderRadius:5,width:150,height:30,alignItems:'center',marginTop:5}}
                          onPress={() => addTask()}>
              <Text style={{fontSize:20}}>ADD TASK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AddToDo