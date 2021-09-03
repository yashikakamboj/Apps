import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, ScrollView, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../src/Constrants/Colors.js';

const Contact =()=>{

    const [List, setList] = useState(false);
    const data = [{key: 'One'}, {key: 'Two'}, {key: 'Three'}];

    const renderitems = ({item}) =>{
        return(
        <TouchableOpacity style={styles.listitem}>
            <Text style={styles.bigBlueText}>
                {item.key}
            </Text>
        </TouchableOpacity>
        )}

    const Card1 =()=>{
        return(
            <View style={styles.card}>
                    <View style={styles.row}>
                        <Ionicons name="mail" color={Colors.Red} size={23}/>
                        <Text style={styles.bigBlueText}>info@carsbn.com</Text>
                    </View>
                    <View style={styles.row}>
                        <Ionicons name="call" color={Colors.Red} size={23}/>
                        <Text style={styles.bigBlueText}>+140-212345561</Text>
                    </View>
                    <View style={styles.row}>
                        <Ionicons name="location-sharp" color={Colors.Red} size={25}/>
                        <Text style={styles.bigBlueText}>122, Baker Street, Jaipur, Rajasthan</Text>
                    </View>
            </View>
        )
    }

    const Card2 =()=>{
        return(
            <View style={[styles.card, {flexDirection: 'row', justifyContent: 'space-evenly'}]}>
                <AntDesign name="facebook-square" color="#3b5998" size={32}/>
                <FontAwesome name="twitter-square" color="skyblue" size={32}/>
                <Image style={styles.icon} source={{uri: 'data:image/jpeg;base64,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' }} />
                <Image style={styles.icon} source={{uri: 'data:image/png;base64,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' }} />
                <AntDesign name="youtube" color={Colors.Red} size={35}/>
            </View>
        )
    }

    const DropDown =()=>{
        return(
            <View>
                <TouchableOpacity onPress={()=> {setList(!List)}} style={[styles.card, {justifyContent: 'space-between', flexDirection: 'row'}]}>
                    <Text style={styles.bigBlueText}>Subject</Text>
                    <Ionicons name="chevron-down" color="#1f3d7a" size={30}/>
                </TouchableOpacity>
                {List ? <FlatList data={data} renderItem={renderitems}/> : null}
            </View>
        )
    }

    const Form =()=>{
        return(
            <View>
                <Text style= {styles.blueText}>Email</Text>
                <TextInput style={styles.input}/>
                <Text style= {styles.blueText}>Phone no.</Text>
                <TextInput style= {styles.input} />
                <Text style= {styles.blueText}>Message</Text>
                <TextInput style= {styles.input} />
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btntext}>Send Message</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return(
        <ScrollView style={styles.main}>
            <View style={styles.upper}>
                <Image style={styles.img} source={require('../../../asserts/CarLogo.jpg')}/>
            </View>
            <View style={styles.lower}>
                <Ionicons name="chevron-back" color="#1f3d7a" size={35}/>
                <Text style={styles.heading}>CarsBN</Text>
                
                <Card1 />
                <Card2 />
                
                <View style={styles.line}>
                    <Text style={styles.text}>Send Message</Text>
                </View>
                
                <DropDown />
                <Form />
                
            </View>
        </ScrollView>
    )
    
};


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
        marginVertical: 10,
        marginLeft: 5
    },
    row:{
        flexDirection: 'row'
    },
    card:{
        shadowColor: '#3D3D3D',
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 10,
        padding: 10,
        marginBottom: 10,
    },
    bigBlueText:{
        color: Colors.Blue,
        fontSize: 15,
        marginLeft: 5,
        fontFamily: 'sans-serif-medium',
        alignSelf:'center'
    },
    icon: {
        height:30,
        width: 33,
    },
    text: {
        color: Colors.Blue,
        fontSize: 14,
        fontFamily: 'sans-serif-medium',
        alignSelf: 'center',
        marginBottom: 15,
        marginTop: 5
    },
    input: {
        borderBottomColor: "darkgrey",
        borderBottomWidth: 1,
        color: '#696969',
        fontFamily: 'sans-serif-medium',
        padding: 0,
    },
    blueText:{
        color: Colors.Blue,
        fontSize: 14,
        marginTop: 5,
        fontFamily: 'sans-serif-medium',
    },
    btn:{
        backgroundColor: Colors.Blue,
        borderRadius: 50,
        alignSelf: 'center',
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    btntext:{
        color: 'white',
        fontSize: 14,
        padding: 10
    },
    listitem:{
        shadowColor: '#3D3D3D',
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 10,
        padding: 10,
        marginBottom: 7,
    }
})

export default Contact;