import React, {useEffect, useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity,ScrollView} from "react-native";
import { useDispatch , useSelector } from "react-redux";
import DataTask from "../components/dataTask";
import {signOutRequest} from "../actions/loginActions";
import {deleteTodo, getTodoList} from "../actions/todoActions";

const ToDoScreen = (props) => {
  const dispatch = useDispatch();
  const {Name,Email,UserID} = useSelector((state) => ({
      Name: state.loginReducer.name,
      Email: state.loginReducer.email,
      UserID: state.loginReducer.uid,
  }))
  const todoList = useSelector(state => state.todoReducer.todoList)
  const deleteToDoItem = (name) => {
    dispatch(deleteTodo(name,UserID))
    dispatch(getTodoList(UserID))
  }
  useEffect(() => {
      dispatch(getTodoList(UserID))
  },[UserID])
  return (
    <View style={styles.screen}>
        <View style={{flexDirection: 'column',flex: 1}}>
            <ScrollView>
                  {
                    todoList.map((item) => (
                        <DataTask
                          onDelete={deleteToDoItem}
                          taskName={item.TaskName}
                          styless={styles}
                        />
                    ))
                  }
            </ScrollView>
        </View>
        <View style={{alignItems:'auto',flexDirection:'row'}}>
            <View style={{padding:10}}>
                <Text>{Name}</Text>
                <Text>{Email}</Text>
                <TouchableOpacity onPress={() => dispatch(signOutRequest(() => props.navigation.navigate('LoginScreen')))}>
                    <Text style={{fontSize:26}}>signOutRequest</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{backgroundColor:"white",borderWidth:1,borderRadius:100,width:40,height:40,alignItems:'center',marginLeft: 80}}
                            onPress={() => props.navigation.navigate('AddToDo')}>
                <Text style={{fontSize:26}}>+</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    completeTask:{
      paddingBottom: 300,
      color: '#4A4956',
      fontSize: 30
    },
    task:{
      borderColor: 'white',
      borderBottomWidth: 1
    },
    textTime:{
      marginTop: 20,
      lineHeight: 50,
      color: '#787786',
      fontSize: 20
    },
    textTask:{
      lineHeight: 20,
      color: '#4A4956',
      fontSize: 14
    },
    textTaskName: {
      color: '#4A4956',
      fontSize: 30
    },
    imgPencil:{
      marginLeft:300,
      width:40,
      height:40,
      resizeMode: 'stretch',
    }
    ,
    imageStyles:{
      flex: 0.1, 
      width:40,
      height:40,
      resizeMode: 'stretch',
    },
    screen: {
      paddingHorizontal: 20,
      paddingVertical:40,
      backgroundColor: '#B8E986',
      flex: 1
    },
    homeButton:{
      flex: 0.9,
      textTransform: 'uppercase',
      paddingLeft: 10,
      color: 'white',
      // fontFamily: ["normal", "Roboto"],
      fontSize: 20
    }
});

export default ToDoScreen