import React from "react";
import { View, Text,TouchableOpacity, TextInput} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import firebase from "@react-native-firebase/app";
import {login} from "../actions/loginActions";

const LoginScreen = (props) => {
  console.warn(firebase.app().utils().app)

  const dispatch = useDispatch();
  const [loginInput, onChangeLogin] = React.useState('Admin');
  const [passInput, onChangePass] = React.useState('123');
  const resetLoginAndPass = () =>{
    onChangeLogin('Admin')
    onChangePass("123")
  }

  const toNextScreen = () => {
    if(storeUsername === loginInput && storePassword === passInput){
      dispatch(login())
      props.navigation.navigate('NewsScreen')
      resetLoginAndPass()
    }else{
      alert('wrong name or pass')
    }
  }
  const { storeUsername, storePassword } = useSelector((state) => ({
    storeUsername: state.loginReducer.userName,
    storePassword: state.loginReducer.userPass
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
          onChangeText={text => onChangeLogin(text)}
          value={loginInput}      
        />
        <TextInput
          style={{ height: 40,width: 300, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => onChangePass(text)}
          value={passInput} 
        />
        <TouchableOpacity style={{backgroundColor:"white",borderWidth:1,borderRadius:5,width:100,height:40,alignItems:'center',marginTop:5}}
                          onPress={() => toNextScreen()}>
          <Text style={{fontSize:26}}>Login</Text>
        </TouchableOpacity>
      </View>
    </View> 
  );
}

export default LoginScreen
