import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView, Dimensions} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';
import Colors from '../../Constrants/Colors.js';
import { Avatar } from 'react-native-elements';

const EditScreen =()=>{

    const [image, setImage] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRveQdZi9pVUm0br0quUidx2fmdD1Y_KyCWOg&usqp=CAU');

    const chooseFromGallery = () =>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            setImage(image.path);
          });
    }

    const UploadImage =()=>{
        return(
            <View>
                <Avatar
                    rounded
                    onPress={chooseFromGallery}
                    activeOpacity={0.7}
                    source={{uri: image}}
                    size={80}
                />
                <Image style={styles.icon} source={require('../../../asserts/camera.png')} />
            </View>
        )
    }

    const Form =()=>{
        return(
            <View>
                <Text style= {styles.blueText}>First name</Text>
                <TextInput style= {styles.input} />
                <Text style= {styles.blueText}>Last name</Text>
                <TextInput style= {styles.input} />
                <Text style= {styles.blueText}>Email</Text>
                <TextInput style= {styles.input} />
                <Text style= {styles.blueText}>Phone no.</Text>
                <TextInput style= {styles.input} />
                <Text style= {styles.blueText}>Flat no./ Street name</Text>
                <TextInput style= {styles.input} />
                <Text style= {styles.blueText}>City</Text>
                <TextInput style= {styles.input} />
                <Text style= {styles.blueText}>State</Text>
                <TextInput style= {styles.input} />
            </View>
        )
    }

    return(
        <ScrollView style={styles.main}> 

            <UploadImage />
            <Form />

            <View style={styles.row}>
                <TouchableOpacity style={styles.btn1}>
                    <Text style={styles.text}>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2}>
                    <Text style={styles.text}>Cancel</Text>
                </TouchableOpacity>
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        padding: 10
    },
    img:{
        height: 80,
        width: 80,
        borderRadius: 100,
        marginVertical: 10,
    },
    input: {
        borderBottomColor: "#808080",
        borderBottomWidth: 1,
        color: '#696969',
        fontFamily: 'sans-serif-medium',
        padding: 0,
    },
    blueText:{
        color: Colors.Blue,
        fontSize: 15,
        marginTop: 5,
        fontFamily: 'sans-serif-medium',
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 70,
        marginBottom: 20
    },
    btn1:{
        backgroundColor: Colors.Blue,
        borderRadius: 50,
        paddingHorizontal: 35,
        paddingVertical: 5,
    },
    btn2:{
        backgroundColor: Colors.Red,
        borderRadius: 50,
        paddingHorizontal: 35,
        paddingVertical: 5,
    },
    text:{
        color: 'white',
        fontSize: 18
    },
    camera:{
        backgroundColor: 'white',
        borderRadius:50,
        top:17,
        left: 60,
        width:30,
        height:30,
        position:"absolute",
        zIndex: 1,
        padding: 0,
    },
    icon:{
        top:7,
        left: 60,
        width:40,
        height:40,
        position:"absolute",
        zIndex: 1,
    }
})

export default EditScreen;