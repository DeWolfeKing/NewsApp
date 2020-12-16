import { View, Text,TouchableOpacity, TextInput,ActivityIndicator} from "react-native";
import {useSelector} from "react-redux";
import auth from '@react-native-firebase/auth'
import React, { useState, useEffect } from 'react';

const Loading = (props) => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);
    if (initializing) return null;

    if (!user) {
        return (
            <View>
                <ActivityIndicator  size="large" color="#00ff00"/>
                <TouchableOpacity  onPress={props.navigation.navigate('LoginScreen')}/>
            </View>
        );
    }
    return (
        <View>
            <ActivityIndicator size="large" color="#00ff00"/>
            <TouchableOpacity onPress={props.navigation.navigate('ToDoScreen')}/>
        </View>
    )

}
export default Loading