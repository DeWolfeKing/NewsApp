import React from "react";
import {Text, Image, TouchableOpacity, View} from "react-native";

const DataNews = (props) => {
    return(
        <TouchableOpacity
            style={{marginBottom: 20}}

            onPress={props.onPress}
            >
            <View
                style={{
                    backgroundColor : 'white',
                    padding:20,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 7,
                    },
                    shadowOpacity: 0.41,
                    shadowRadius: 9.11,

                    elevation: 14,
                }}
            >
            <Text style={{fontSize: 20,color: 'black'}}>{props.author}</Text>
            <Image
                style={{marginLeft: 10,marginBottom: 10,marginTop: 10,width:60,height:60}}
                source={{uri: props.urlToImage}}
            />
            <Text style={{fontSize:12,color:'gray',marginBottom:10,marginLeft: 10}}>{props.publishedAt}</Text>
            <Text style={{fontSize:18,marginBottom:10,marginLeft: 10}}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default DataNews;