// Client App (popUP Star Screen)
import React, { useState } from 'react';
import { View, Text, Modal, Button, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { Rating, AirbnbRating } from 'react-native-elements';

const Popup = ()=>{

    const [X, setX] = useState(false);

    return(
        <View style={{flex: 1}}>
            <Button title="change" onPress={()=>{setX(true)}}></Button>
                <Modal transparent={true} visible={X}>
                    <View style={styles.popup}>
                        <TouchableOpacity style={{top:-7,right:-7,width:30,height:30, borderRadius:100,alignItems: 'center',justifyContent: 'center', backgroundColor: 'white', position:"absolute", alignContent: 'center', textAlign: 'center'}}>
                        <Entypo name="circle-with-cross" color={'red'} size={32} onPress={()=>{setX(false)}} ></Entypo>
                        </TouchableOpacity>
                            <View style={styles.container}>                        
                                <View style={styles.row}>
                                    <View>
                                        <Image style={styles.img} source={{uri: 'https://i0.wp.com/short-biography.com/wp-content/uploads/choi-minho/Choi-Minho.jpg?fit=853%2C853&ssl=1'}}/>
                                    </View>
                                    <View style={{flexDirection: 'column'}}>
                                        <Text style={styles.text}>Merchant Name</Text>
                                        <Rating startingValue="{3.3}" imageSize={32} tintColor="#3B3B3B" style={styles.star}/>
                                    </View>
                                </View>
                                <View style={styles.row}>
                                    <View>
                                        <Image style={styles.img} source={{uri: 'https://i0.wp.com/short-biography.com/wp-content/uploads/choi-minho/Choi-Minho.jpg?fit=853%2C853&ssl=1'}}/>
                                    </View>
                                    <View style={{flexDirection: 'column'}}>
                                        <Text style={styles.text}>Driver Name</Text>
                                        <Rating startingValue="{3.3}" imageSize={32} tintColor="#3B3B3B" style={styles.star}/> 
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.btn}>
                                <Text style={styles.btntext}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                    </View>  
                </Modal>

        </View>
    );
}
const styles = StyleSheet.create({
    popup:{
        backgroundColor: '#3B3B3B',
        height: 350,
        width: 310,
        marginHorizontal: 55,
        marginVertical: 200,
        borderRadius: 20,
        
    },
    container:{
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    img: {
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 1.5,
        height: 90,
        width: 90,
        marginLeft: 20,
        zIndex: 2
    },
    row:{
        flexDirection: 'row',
        marginVertical: 15,
        marginHorizontal: 0,
        zIndex: 0
    },
    btn: {
        backgroundColor: 'black',
        height: 60,
        width: '60%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#808080',
        borderWidth: 1,
        justifyContent: 'center',
        textAlign: 'center',
        marginVertical: 10,
        marginHorizontal: 60
  },
    btntext:{
        color: 'white',
        fontSize: 16
    },
    text:{
        color: 'white',
        fontSize: 17,
        paddingLeft: 20,
        paddingTop: 20,
        
    },
    myStarStyle: {
        color: 'yellow',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
    },
    myEmptyStarStyle: {
        color: 'white',
    },
    star:{
        width: '100%',
        marginHorizontal: 5
    }
})
export default Popup;