import React, {useEffect} from "react";
import { View, StyleSheet, Text, TouchableOpacity} from "react-native";
import { useDispatch , useSelector } from "react-redux";
import todoActions from "../actions/todoActions";
import DataTask from "../components/dataTask";

const ToDoScreen = (props) => {
  const dispatch = useDispatch();

  const todoList = useSelector(state => state.todoReducer.todoList)

  const deleteToDoItem = (name) => {
    dispatch(todoActions.deleteTask(name))
  }


  return (
    <View style={styles.screen}> 
        <View style={{flexDirection: 'column',flex: 1}}>
          {
            todoList.map((item,index, array) => (
                <DataTask
                  onDelete={deleteToDoItem}
                  taskName={item.taskName}
                  styless={styles} 
                />
              ))
          }
        </View>
        <View style={{alignItems:'auto'}}>
          <TouchableOpacity style={{backgroundColor:"white",borderWidth:1,borderRadius:100,width:40,height:40,alignItems:'center'}}
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
      padding: 40,
      paddingTop: 80,
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