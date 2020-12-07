import React from "react";
import { View,Text} from "react-native";


const DataTask = (props) => {
    return(
        <View style={{borderBottomWidth:1,borderBottomColor: 'white',paddingBottom: 20}}>
            <View >
                <Text onPress={() => props.onDelete(props.taskName)} style={props.styless.textTaskName}>{props.taskName}</Text>
            </View>
        </View>
    )
}

export default DataTask;