import React, {useEffect, useState} from "react";
import { View, Text,TouchableOpacity, TextInput} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest, registrationRequest} from "../actions/loginActions";

const LoginScreen = (props) => {

  const dispatch = useDispatch();
  const [emailInput, onChangeEmail] = React.useState('dewolfeking@gmail.com');
  const [passInput, onChangePass] = React.useState('123');
  const resetLoginAndPass = () =>{
    onChangeEmail('dewolfeking@gmail.com')
    onChangePass("123123")
  }
  const logining = () => {
      dispatch(loginRequest(emailInput,passInput,() => props.navigation.navigate('ToDoScreen')))
      resetLoginAndPass()
  }
  const registration = () => {
    dispatch(registrationRequest(emailInput,passInput,() => props.navigation.navigate('ToDoScreen')))
    resetLoginAndPass()
  }
  const {storeIsLoggined,error,email} = useSelector((state) => ({
    storeIsLoggined: state.loginReducer.isLoggined,
    error: state.loginReducer.error,
    email: state.loginReducer
  }))
    console.log('BIBASI',storeIsLoggined,email)
  return (
    <View style={{
      padding: 40,
      paddingTop: 80,
      backgroundColor: '#B8E986',
      flex: 1}}>
      <View style={{alignItems:"center"}}>
        <TextInput
          style={{ height: 40,width: 300, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => onChangeEmail(text)}
          value={emailInput}
        />
        <TextInput
          style={{ height: 40,width: 300, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => onChangePass(text)}
          value={passInput} 
        />
          {/*<Text style={{color:'red'}}>{error}</Text>*/}
         <TouchableOpacity style={{backgroundColor:"white",borderWidth:1,borderRadius:5,width:100,height:40,alignItems:'center',marginTop:5}}
                          onPress={() => logining()}
         >
          <Text style={{fontSize:26}}>Login</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{backgroundColor:"white",borderWidth:1,borderRadius:5,width:200,height:40,alignItems:'center',marginTop:5}}
                            onPress={() => registration()}
         >
              <Text style={{fontSize:26}}>Registration</Text>
         </TouchableOpacity>
         {/*<TouchableOpacity style={{backgroundColor:"white",borderWidth:1,borderRadius:5,width:200,height:40,alignItems:'center',marginTop:5}}*/}
         {/*                   onPress={() => dispatch(logOut())}*/}
         {/*>*/}
         {/*     <Text style={{fontSize:26}}>Log-out</Text>*/}
         {/*</TouchableOpacity>*/}
      </View>
    </View> 
  );
}

export default LoginScreen
