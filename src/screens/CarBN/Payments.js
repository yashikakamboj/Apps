import React, {useState, useEffect} from 'react';
import { FlatList } from 'react-native';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Switch, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../src/Constrants/Colors.js';

const Payments =()=>{

    const data = [
        {amount: "$25,000", time:"10:22", color: false ,text: "You have received $25,000 from the buyer Abhishek"},
        {amount: "$25,000", time:"10:22", color: true ,text: "You have received $25,000 from the buyer Abhishek"},
        {amount: "$25,000", time:"10:22", color: false ,text: "You have received $25,000 from the buyer Abhishek,You have received $25,000 from the buyer Abhishek"},
        {amount: "$25,000", time:"10:22", color: true ,text: "You have received $25,000 from the buyer Abhishek"},
        {amount: "$25,000", time:"10:22", color: false ,text: "You have received $25,000 from the buyer Abhishek,You have received $25,000 from the buyer Abhishek"},
        {amount: "$25,000", time:"10:22", color: true ,text: "You have received $25,000 from the buyer Abhishek"},
        {amount: "$25,000", time:"10:22", color: false ,text: "You have received $25,000 from the buyer Abhishek"},
        {amount: "$25,000", time:"10:22", color: true ,text: "You have received $25,000 from the buyer Abhishek, you have received $25,000 from the buyer Abhishek"},
    ]

    const renderitems = ({item}) =>{
        return(
            <TouchableOpacity style={styles.container}>
                <View style={styles.row1}>
                    <Image style={styles.icon} source={require('../../../asserts/ic_account_balance_wallet_24px.png')} />
                    <Text style={styles.blue}>{item.amount}</Text>
                </View>
                <View style={styles.row2}>
                    <Text style={item.color ? styles.green : styles.red}>{item.text}</Text>
                    <View style={{flex: 1}}>
                        <Ionicons name="chevron-forward-outline" color={'black'} size={25}/>
                        <Text style={styles.black}>{item.time}</Text>
                    </View>
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
    row1:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    row2:{
        flexDirection: 'row',
        alignItems: 'center',
        flex: 10,
    },
    container:{
        marginHorizontal: 8,
        borderBottomColor: "#808080",
        borderBottomWidth: 1,
        marginTop: 5,
        paddingVertical: 5
    },
    blue:{
        color: Colors.Blue,
        fontFamily: 'sans-serif-medium',
        fontSize: 18,
        marginLeft: 7
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
        height: 25,
        width: 25
    },
    black:{
        fontSize: 10,
        color: 'black'
    }
})

export default Payments;