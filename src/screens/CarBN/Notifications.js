import React, {useState, useEffect} from 'react';
import { FlatList } from 'react-native';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Switch, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../Constrants/Colors.js';

const Notifications =()=>{

    const data = [
        { color: true, text: "Your request for Vehical verification is approved by Admin", time: "10:20"},
        { color: false, text: "Your money has been transferred back to your account successfully", time: "10:20"},
        { color: true, text: "Your request for Vehical verification is approved by Admin", time: "10:20"},
        { color: false, text: "Your money has been transferred back to your account successfully", time: "10:20"},
        { color: true, text: "Your request for Vehical verification is approved by Admin", time: "10:20"},
        { color: false, text: "Your money has been transferred back to your account successfully", time: "10:20"},
        { color: true, text: "Your request for Vehical verification is approved by Admin", time: "10:20"},
        { color: false, text: "Your money has been transferred back to your account successfully", time: "10:20"},
    ]

    const renderitems = ({item}) =>{
        return(
            <TouchableOpacity style={styles.container}>
                <View style={styles.row}>
                    <Image style={styles.icon} source={require('../../../asserts/ic_notifications_activasdasdasde_24px.png')} />
                    <Text style={item.color ? styles.green : styles.red} >{item.text}</Text>
                    <Text style={styles.grey}>{item.time}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return(
        <View style={styles.main}>
            <FlatList
                data= {data}
                renderItem = {renderitems}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        backgroundColor: 'white',
        flex: 1
    },
    container:{
        marginHorizontal: 8,
        borderBottomColor: "#808080",
        borderBottomWidth: 1,
        marginTop: 5,
        paddingVertical: 10
    },
    red:{
        color: Colors.Red,
        fontFamily: 'sans-serif-medium',
        flex: 9
    },
    green:{
        color: Colors.Green,
        fontFamily: 'sans-serif-medium',
        flex: 9,
    },
    icon:{
        height: 20,
        width: 20,
        marginRight: 7
    },
    grey:{
        fontSize: 12,
        color: Colors.LightGrey,
        alignSelf: 'flex-end'
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default Notifications;