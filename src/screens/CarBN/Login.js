import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import Colors from '../../../src/Constrants/Colors.js';

const Login =()=>{

    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Email, setEmail] = useState('')
    const [Phone, setPhone] = useState('')
    const [Address, setAddress] = useState('')
    const [City, setCity] = useState('')
    const [State, setState] = useState('')
    const [Password, setPassword] = useState('')
    const [CPassword, setCPassword] = useState('')

    const Form =()=>{
        return(
            <View>
                <FloatingLabelInput
                    label={'First name'}
                    value={FirstName}
                    onChangeText={(value) => setFirstName(value)}
                    containerStyles={styles.item}
                    inputStyles={styles.input} 
                />
                <FloatingLabelInput
                    label={'Last name'}
                    value={LastName}
                    onChangeText={(value) => setLastName(value)}
                    containerStyles={styles.item}
                    inputStyles={styles.input} 
                />
                <FloatingLabelInput
                    label={'Email'}
                    value={Email}
                    onChangeText={(value) => setEmail(value)}
                    containerStyles={styles.item}
                    inputStyles={styles.input} 
                />
                <FloatingLabelInput
                    label={'Phone no.'}
                    value={Phone}
                    keyboardType="numeric"
                    onChangeText={(value) => setPhone(value)}
                    containerStyles={styles.item}
                    inputStyles={styles.input} 
                />
                <FloatingLabelInput
                    label={'Flat no./Street name'}
                    value={Address}
                    onChangeText={(value) => setAddress(value)}
                    containerStyles={styles.item}
                    inputStyles={styles.input} 
                />
                <FloatingLabelInput
                    label={'City'}
                    value={City}
                    onChangeText={(value) => setCity(value)}
                    containerStyles={styles.item}
                    inputStyles={styles.input} 
                />
                <FloatingLabelInput
                    label={'State'}
                    value={State}
                    onChangeText={(value) => setState(value)}
                    containerStyles={styles.item}
                    inputStyles={styles.input} 
                />
                <FloatingLabelInput
                    label={'Password'}
                    value={Password}
                    isPassword
                    onChangeText={(value) => setPassword(value)}
                    containerStyles={styles.item}
                    inputStyles={styles.input} 
                />
                <FloatingLabelInput
                    label={'Confirm password'}
                    value={CPassword}
                    isPassword
                    onChangeText={(value) => setCPassword(value)}
                    containerStyles={styles.item}
                    inputStyles={styles.input} 
                />
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.text}>Submit</Text>
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
                <Ionicons name="chevron-back" color={Colors.Blue} size={35}/>
                <Text style={styles.heading}>Registration</Text>
                <Form />
            </View>
        </ScrollView>
    )
}

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
    container: {
        width: '100%',
        borderRadius: 3,
        borderStyle: 'solid',
        borderWidth: 0.5,
        height: 50,
        marginVertical: 4,
      },
      textInput: {
        fontSize: 15,
        marginTop: 5,
        fontFamily: 'Avenir-Medium',
        color: 'black',
      },
      titleStyles: {
        position: 'absolute',
        fontFamily: 'Avenir-Medium',
        left: 3,
        left: 4,
      },
      btn:{
          height: 50,
          width: '95%',
          backgroundColor: Colors.Blue,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: 30
      },
      text:{
          color: 'white',
          fontSize: 17
      },
      item:{
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        height: 45,
        margin: 5,
      },
      input:{
          color: 'grey',
          fontSize: 15,
          fontFamily: 'sans-serif-medium',
      }
})

export default Login;