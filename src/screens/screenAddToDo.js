import { View, Text, TouchableOpacity, TextInput} from "react-native";
import React, { useState } from 'react';
import todoActions from "../actions/todoActions";
import { useDispatch, useSelector } from "react-redux";

const AddToDo = (props) => {
  
  const dispatch = useDispatch();
  const todoList = useSelector((state) =>{
    return state.todoReducer.todoList
  })
  const [nameTaskInput, onChangeTaskName] = useState('nameTask');
  const addTask = () => {
    const isItemExist = todoList.map((item) => item.taskName === nameTaskInput);

    if (isItemExist.includes(true)) {
      alert('Wrong taskName')
    } else {
      dispatch(todoActions.pushTask(nameTaskInput))
      props.navigation.navigate('ToDoScreen')
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
        <TouchableOpacity style={{backgroundColor:"white",borderWidth:1,borderRadius:5,width:150,height:30,alignItems:'center',marginTop:5}}
                          onPress={() => addTask()}>
              <Text style={{fontSize:20}}>ADD TASK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AddToDo