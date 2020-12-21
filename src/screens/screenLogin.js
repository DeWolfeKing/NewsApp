import React, {useEffect, useState} from "react";
import { View, Text,TouchableOpacity, TextInput} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest, registrationRequest} from "../actions/loginActions";

const LoginScreen = (props) => {
    const dispatch = useDispatch();
    const [nameInput, setNameInput] = React.useState('Name');
    const [emailInput, setEmailInput] = React.useState('dewolfeking@gmail.com');
    const [passInput, setPassInput] = React.useState('123123');
    const clearInput = () =>{
        setNameInput('Name')
        setEmailInput('dewolfeking@gmail.com')
        setPassInput('123123')
    }
  const logining = () => {
      dispatch(loginRequest(emailInput,passInput,() => props.navigation.navigate('ToDoScreen')))
      clearInput()
  }
  const registration = () => {
      dispatch(registrationRequest(nameInput,emailInput,passInput,() => props.navigation.navigate('ToDoScreen')))
      clearInput()
  }
  const {error} = useSelector((state) => ({
    error: state.loginReducer.error,
  }))
  return (
    <View style={{
      padding: 40,
      paddingTop: 80,
      backgroundColor: '#B8E986',
      flex: 1}}>
      <View style={{alignItems:"center"}}>
        <TextInput
            style={{ height: 40,width: 300, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setNameInput(text)}
            value={nameInput}
        />
        <TextInput
          style={{ height: 40,width: 300, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => setEmailInput(text)}
          value={emailInput}
        />
        <TextInput
          type={'password'}
          style={{ height: 40,width: 300, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => setPassInput(text)}
          value={passInput} 
        />
         <Text style={{color:'red'}}>{error}</Text>
         <TouchableOpacity style={{backgroundColor:"white",borderWidth:1,borderRadius:5,width:100,height:40,alignItems:'center',marginTop:5}}
                          onPress={() => logining()}
         ><Text style={{fontSize:26}}>Login</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{backgroundColor:"white",borderWidth:1,borderRadius:5,width:200,height:40,alignItems:'center',marginTop:5}}
                            onPress={() => registration()}
         ><Text style={{fontSize:26}}>Registration</Text>
         </TouchableOpacity>
      </View>
    </View> 
  );
}

export default LoginScreen
