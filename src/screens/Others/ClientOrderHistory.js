// Client (Order History Screen)
import React from "react";
import { Text, StyleSheet, View, Modal, TouchableOpacity, FlatList, Image} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Rating, AirbnbRating } from 'react-native-elements';

const ClientOrderHistory = ()=>{
    const renderitems = ({item})=>{
        return(
            <View style={styles.card}>
                <View style={{flex: 1,}}>
                    <Text style={styles.whiteHeading}>{item.name}</Text>
                    <Text style={styles.grey}>ORDER ID</Text>
                    <Text style={styles.white}>{item.orderId}</Text>
                    <Text style={styles.grey}>Delivery Time</Text>
                    <Text style={styles.white}>{item.time}</Text>
                    <Text style={styles.grey}>Delivery Type</Text>
                    <Text style={styles.white}>{item.type}</Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Image style={styles.img} source={{uri: "https://www.vhv.rs/dpng/d/145-1451043_capsule-with-contents-open-capsule-png-transparent-png.png"}}/>
                    <Text style={styles.grey}>CASH PAID</Text>
                    <Text style={styles.white}>{item.amount}</Text>
                    <Rating startingValue="{3.3}" imageSize={32} tintColor="#3B3B3B" style={styles.star}/> 
                </View>
            </View>
        );
    }
    return(
        <View style={styles.main}>
            <View style={styles.one}>
                <Text style={styles.one1}>Order history</Text>
                <FontAwesome.Button name="bell" size={25} backgroundColor="#000" onPress={() => {}}></FontAwesome.Button>
            </View>
            <FlatList
                data = {data}
                keyExtractor = {(item)=>{item.orderId}}
                renderItem ={renderitems}
            />
        </View>
    )
}
const data = [
    { name: 'MERCHANT NAME', orderId: '#1234-5678-9789', time: '08:00 AM', type: 'HAND PICKED', amount: "$556"},
    { name: 'MERCHANT NAME', orderId: '#1234-5678-9789', time: '08:00 AM', type: 'HAND PICKED', amount: "$556"}
]

const styles = StyleSheet.create({
    main:{
        padding: 20,
        backgroundColor: 'black',
        flex: 1
    },
    one:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    one1:{
        fontSize: 27,
        color: 'white'
    },
    card:{
        flexDirection: 'row',
        backgroundColor:'#3B3B3B',
        borderRadius: 10,
        marginTop: 15,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flex: 2
    },
    whiteHeading:{
        color:'#fff',
        fontSize:15
    },
    grey:{
        color:'grey',
        fontSize:13,
        marginTop:10
    },
    white:{
        color:'#fff',
        marginTop: 5
    },
    img:{
        height: 70,
        width: 70,
        borderRadius: 15,
        marginBottom: 25
    },
    star:{
        width: '60%',
        marginHorizontal: 5,
        marginRight: 20,
        marginTop: 10
    }
})

export default ClientOrderHistory;