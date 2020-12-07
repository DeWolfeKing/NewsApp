import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import DataNews from "../components/dataNews";

const DetailsNewsScreen = (props) =>{
    const selectedNews = props.route.params.selectedItem
    return (
        <View style={{flex: 1,alignItems:'center', padding:20,borderBottomWidth: 3}}>
            <DataNews
                publishedAt = {selectedNews.publishedAt}
                title = {selectedNews.title}
                author = {selectedNews.author}
                urlToImage = {selectedNews.urlToImage}
            />

            <TouchableOpacity style={{backgroundColor:"white",borderWidth:1,borderRadius:5,width:100,height:40,alignItems:'center',marginTop:5}}
                              onPress={() => props.navigation.goBack('NewsScreen')}>
                <Text style={{fontSize:26}}>Go Back</Text>
            </TouchableOpacity>
        </View>
    )


}


export default DetailsNewsScreen