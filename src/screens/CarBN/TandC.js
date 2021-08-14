import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../src/Constrants/Colors.js';

const TandC =()=>{

    return(
        <ScrollView style={styles.main}>
            <View style={styles.upper}>
                <Image style={styles.img} source={require('../../../asserts/CarLogo.jpg')}/>
            </View>
            <View style={styles.lower}>
                <Ionicons name="chevron-back" color={Colors.Blue} size={35}/>

                <Text style={styles.heading}>Terms & Conditions</Text>
                <Text style={styles.head}>Lorem Ipsum</Text>
                <Text style={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                <Text style={styles.head}>Lorem Ipsum</Text>
                <Text style={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                <Text style={styles.head}>Lorem Ipsum</Text>
                <Text style={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            
            </View>
        </ScrollView>

)}

const styles = StyleSheet.create({
    main:{
        backgroundColor: Colors.Blue,
        flex: 1
    },
    upper:{
        backgroundColor: Colors.Blue,
        height: Dimensions.get('screen').height/9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lower:{
        height: Dimensions.get('screen').height/9*8,
        backgroundColor: 'white',
        padding: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    img:{
        height: "100%",
        width: "50%",
    },
    heading:{
        color: Colors.Blue,
        fontSize: 22,
        fontFamily: 'sans-serif-medium',
        marginTop: 10,
        marginLeft: 5
    },
    head:{
        color: '#3B3B3B',
        marginLeft: 5,
        fontSize: 17,
        fontFamily: 'sans-serif-medium',
        marginTop: 10,
    },
    body:{
        color: 'grey',
        marginLeft: 5,
        fontFamily: 'sans-serif-medium',
    }
})

export default TandC;