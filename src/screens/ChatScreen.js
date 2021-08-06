import React from "react";
import { Text, StyleSheet, View, FlatList, Image, TouchableOpacity} from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

const ChatScreen =()=>{
    const renderitems = ({item})=>{
        return(
            <View style={styles.list}>
                <Image source={{uri: item.image}} style={styles.img}/>
                <Text style={styles.text}>{item.name}</Text>
            </View>
        )
    }

    return(
        <View style={styles.main}>
            <FlatList
                data = {data}
                keyExtractor = {(item)=>{item.name}}
                renderItem={renderitems}
            />
            <TouchableOpacity style={styles.floatingButton}>
                <Entypo name="plus" color={'white'} size={40}  ></Entypo>
            </TouchableOpacity>
        </View>
    )
}

const data = [
    { name : "Merchant", image: 'https://i0.wp.com/short-biography.com/wp-content/uploads/choi-minho/Choi-Minho.jpg?fit=853%2C853&ssl=1' },
    { name : "Merchant", image: 'https://i0.wp.com/short-biography.com/wp-content/uploads/choi-minho/Choi-Minho.jpg?fit=853%2C853&ssl=1' },
    { name : "Merchant", image: 'https://i0.wp.com/short-biography.com/wp-content/uploads/choi-minho/Choi-Minho.jpg?fit=853%2C853&ssl=1' },
    { name : "Merchant", image: 'https://i0.wp.com/short-biography.com/wp-content/uploads/choi-minho/Choi-Minho.jpg?fit=853%2C853&ssl=1' },
    { name : "Merchant", image: 'https://i0.wp.com/short-biography.com/wp-content/uploads/choi-minho/Choi-Minho.jpg?fit=853%2C853&ssl=1' },
    { name : "Merchant", image: 'https://i0.wp.com/short-biography.com/wp-content/uploads/choi-minho/Choi-Minho.jpg?fit=853%2C853&ssl=1' },
   
]

const styles = StyleSheet.create({
    main:{
        backgroundColor: 'black',
        flex:  1,
        padding: 20
    },
    img:{
        height: 60,
        width: 60,
        borderRadius: 100
    },
    text:{
        color: 'white',
        borderBottomColor: "#808080",
        borderBottomWidth: 0.5,
        color: 'white',
        marginBottom: 20,
        flex: 1,
        marginBottom: 0,
        fontSize: 18,
        marginLeft: 15,
        marginTop: 5
    },
    list:{
        flex: 1,
        flexDirection: 'row',
        marginBottom: 20
    },
    floatingButton:{
        backgroundColor: "#3B3B3B",
        height: 55,
        width: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        bottom: 15,
        right: 20,
        position: 'absolute'
    }
})
export default ChatScreen;