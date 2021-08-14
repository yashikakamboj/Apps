import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList, ActivityIndicator} from 'react-native';
const movieURL = "https://reactnative.dev/movies.json";

const API =()=>{

    const [loading, setloading] = useState(true);
    const [data, setData] = useState([]);
    const [title, setTitle] = useState([]);

    useEffect(() => {
        fetch(movieURL)
        .then((response) => response.json())
        .then((json) => {
            // console.log("json",json.movies);
            setData(json.movies)
            setTitle(json.title)
            setloading(false)
        })
        .catch((error) => {
            console.error("error here", error );
        });
        
    },[]);

    console.log("title",title)
    console.log("movies",data)


    const Item=(title,releaseYear)=>{
       return( 
            <View style={{backgroundColor:"blue"}}>
                <Text style={{color:"red"}}>{title}</Text>
                <Text style={{color:"red"}}>{releaseYear}</Text>
            </View>
        )
    }
    const renderItem =({item})=>(
         <Item 
            title={item.title}
            releaseYear={item.releaseYear}
       />
    )
    
    return(
        <View>
            <Text style={{color:"red"}}>{title}</Text>
             <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({


});

export default API;
