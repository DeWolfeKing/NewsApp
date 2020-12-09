import React, {useEffect, useState} from "react";
import { View, Text,TouchableOpacity, TextInput} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {login,createUser} from "../actions/loginActions";

const LoginScreen = (props) => {

  const dispatch = useDispatch();
  const [emailInput, onChangeEmail] = React.useState('dewolfeking@gmail.com');
  const [passInput, onChangePass] = React.useState('123');
  const resetLoginAndPass = () =>{
    onChangeEmail('dewolfeking@gmail.com')
    onChangePass("123")
  }
  // const toNextScreen = () => {
  //   if(storeUsername === loginInput && storePassword === passInput){
  //     dispatch(login())
  //     props.navigation.navigate('NewsScreen')
  //     resetLoginAndPass()
  //   }else{
  //     alert('wrong name or pass')
  //   }
  // }
  // const { storeUsername, storePassword } = useSelector((state) => ({
  //   storeUsername: state.loginReducer.userName,
  //   storePassword: state.loginReducer.userPass
  // }))
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
        <TouchableOpacity style={{backgroundColor:"white",borderWidth:1,borderRadius:5,width:100,height:40,alignItems:'center',marginTop:5}}
                          onPress={() => dispatch(login(emailInput,passInput))}
             >
          <Text style={{fontSize:26}}>Login</Text>
        </TouchableOpacity>
         <TouchableOpacity style={{backgroundColor:"white",borderWidth:1,borderRadius:5,width:200,height:40,alignItems:'center',marginTop:5}}
                            onPress={() => dispatch(createUser(emailInput,passInput))}
         >
              <Text style={{fontSize:26}}>Registration</Text>
         </TouchableOpacity>
      </View>
    </View> 
  );
}

export default LoginScreen
