// DRiver App (Delivery confirmation)
import React, {useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image, Dimensions, FlatList, ScrollView} from 'react-native';


const Delivery =()=>{
    
    const [List, setList] = useState(false)

    const renderitems = ({item}) => 
        <TouchableOpacity style={styles.listbtn}>
            <Text style={styles.listText}>
                {item.key}
            </Text>
        </TouchableOpacity>
        
    return(
        
        <View style={styles.one}>
                <Text style={{color: 'white', fontSize: 25, marginTop: (Dimensions.get('screen').height/5), marginLeft: 40 }}>Delivery Confirmation</Text>
            <View style={styles.two}>
                <TouchableOpacity
                    onPress={()=>{}}
                    style={styles.btn}>
                    <Text style={styles.text}>In Hand</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn} >
                    <Text style={styles.text}>Drop Box</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> {setList(!List)}}
                    style={[styles.btn, {backgroundColor: 'red', marginBottom: 0}]} >
                    <Text style={styles.text}>Order refused</Text>
                </TouchableOpacity>
                {List ? <FlatList data={[{key: 'Not available'}, {key: 'Fund not available'}, {key: 'Denied'}]} renderItem={renderitems}/> : null}
            </View>
        </View>
        
    );
};
const styles = StyleSheet.create({
    one:{
        backgroundColor: 'black',
        flex: 1
    },
    two:{
        backgroundColor: '#696969',
        margin: 35,
        borderRadius: 7,
        justifyContent: 'space-evenly',
        paddingVertical: 60,
        paddingHorizontal: 30,
        alignItems: 'center',
        marginTop: 40
    },
    btn:{
        backgroundColor: '#808080',
        height: 65,
        width: '97%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#808080',
        borderWidth: 1,
        marginVertical: 10
    },
    text:{
        color: 'white',
        fontSize: 14
    },
    listbtn:{
        backgroundColor: '#808080',
        height: 65,
        width: 270,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderBottomColor: "#F5F5F5",
        borderBottomWidth: 0.6,
        paddingHorizontal: 40,
        marginVertical:0,
    },
    listText:{
        color: 'white',
        fontSize: 14
    }
})
export default Delivery;