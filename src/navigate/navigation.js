import { createStore , applyMiddleware } from 'redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'
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
import mySaga from "../sagas/sagas";
import AsyncStorage from '@react-native-community/async-storage';
import Loading from "../screens/screenLoading";
import loginReducer from "../reducers/loginReducer";
const Stack = createStackNavigator();
const sagaMiddleware = createSagaMiddleware()


const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
  whitelist: ['loginReducer']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store)

sagaMiddleware.run(mySaga)
const Nav =() =>{
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Loading">
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="AddToDo" component={AddToDo} />
            <Stack.Screen name="ToDoScreen" component={ToDoScreen} />
            <Stack.Screen name="NewsScreen" component={NewsScreen} />
            <Stack.Screen name="DetailsNews" component={DetailsNewsScreen} />
            <Stack.Screen name="Loading" component={Loading} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
export default Nav

