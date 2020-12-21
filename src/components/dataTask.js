import React from "react";
import { View,Text,TouchableOpacity} from "react-native";
import {useSelector} from "react-redux";


const DataTask = (props) => {
    return(
        <View style={{borderBottomWidth:1,borderBottomColor: 'white',paddingBottom: 20}}>
            <TouchableOpacity onPress={() => props.onDelete(props.taskName)}>
                <Text  style={props.styless.textTaskName}>{props.taskName}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DataTask;