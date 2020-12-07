import { createStore , applyMiddleware } from 'redux'
import React from "react";
import rootReducer from '../reducers'
import {Provider} from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ToDoScreen from '../screens/screenToDo';
import LoginScreen from '../screens/screenLogin';
import AddToDo from '../screens/screenAddToDo';
import NewsScreen from "../screens/screenNews";
import DetailsNewsScreen from "../screens/screenDetailsNews";
import createSagaMiddleware from 'redux-saga'
import mySaga from "../components/sagas";


const Stack = createStackNavigator();
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);
sagaMiddleware.run(mySaga)
const Nav =() =>{
  return(
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="AddToDo" component={AddToDo} />
          <Stack.Screen name="ToDoScreen" component={ToDoScreen} />
          <Stack.Screen name="NewsScreen" component={NewsScreen} />
          <Stack.Screen name="DetailsNews" component={DetailsNewsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default Nav

