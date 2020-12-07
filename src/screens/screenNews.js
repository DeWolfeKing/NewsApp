import DataNews from "../components/dataNews.js";
import {View, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, Text} from "react-native";
import {getNews,getLoadNews} from "../actions/newsActions";
import { useDispatch , useSelector } from "react-redux";
import React, {useEffect, useState} from "react";
import {logOut} from "../actions/loginActions";
import Api from '../components/sagas';

const NewsScreen = (props) =>{
    const [selectedId, setSelectedId] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNews())
    },[])

    const {newsList,isLoading,isLoggined,totalResults} = useSelector(state => ({
        newsList: state.newsReducer.news,
        totalResults : state.newsReducer.results,
        isLoading:state.newsReducer.isLoading,
        isLoggined:state.loginReducer.isLoggined
    }));
    const exit = () => {
        dispatch(logOut())
        props.navigation.navigate('LoginScreen')
    }
    !isLoggined && props.navigation.navigate('LoginScreen');
    console.warn('ПИУПИУ',newsList)
    return (
        isLoading ? <View style={[styles.container, styles.horizontal]}><ActivityIndicator size="large" color="#0000ff"/></View>:
         <View style={{flex: 1}}>
            <View style ={{alignItems:'center'}}>
                <TouchableOpacity style={{height: 40,width: 100,backgroundColor:'white',justifyContent: "center",alignItems:'center',borderWidth: 0.7,borderRadius:10,marginBottom:10,marginTop: 10}}
                                  onPress={() => exit()}
                >
                    <Text>LOGOUT</Text>
                </TouchableOpacity>
                <Text> Total Results: {totalResults} Available results: {newsList} </Text>
            </View>
            <FlatList
                data={newsList}
                renderItem={({ item }) => (
                    <DataNews
                        item = {item}
                        onPress = {() => props.navigation.navigate('DetailsNews',{selectedItem: item})}
                        publishedAt = {item.publishedAt}
                        title = {item.title}
                        author = {item.author}
                        urlToImage = {item.urlToImage}
                    />
                )}
                keyExtractor={({title}) => title }
                onEndReached={({ distanceFromEnd }) => {
                    let i = '1'
                    if(totalResults !== newsList.length) {
                        i++
                        Api.splice(Api.indexOf('&Page=')+6,1,i)
                        dispatch(getLoadNews())
                    }else {
                        alert('Это все новости')
                    }
                }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});
export default NewsScreen