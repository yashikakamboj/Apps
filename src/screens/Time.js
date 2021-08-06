// Driver (Timer)
import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';

const Time =()=>{
    return(
        <View style={{backgroundColor: 'black', flex: 1,}}>
            <View style={styles.one}>
                <Image style={styles.img} source={require('../../asserts/Timer.jpg')} />
            </View>
            <View style={{flexDirection: 'row', marginVertical: 40, justifyContent: 'space-between', marginHorizontal: 80,alignItems: 'center', }}>
                <Text style={styles.text}>4</Text>
                <Text style={styles.text}>4</Text>
                <Text style={{color: 'grey', fontSize: 40}}>:</Text>
                <Text style={styles.text}>4</Text>
                <Text style={styles.text}>4</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.btn}>
                   <Text style={{color: 'white', fontSize: 15}}> Resume Delivery </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles= StyleSheet.create({
    one:{
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn:{
        backgroundColor: 'black',
        height: 65,
        width: '80%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:5,
        marginHorizontal: 40,
        borderColor: '#808080',
        borderWidth: 1,
    },
    img:{
        height: 200,
        width: 160,
        resizeMode: 'stretch'
    },
    text:{
        color: 'black',
        backgroundColor: 'grey',
        fontSize: 30,
        justifyContent: 'center',
        height: 60,
        width: 40,
        textAlign: 'center',
        alignItems: 'center'
    }
})
export default Time;