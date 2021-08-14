// Driver App (Medicine Screen)
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
 

const DriverMedicine =()=>{
    return(
        <ScrollView style={styles.main}>
            <View style={{flex: 0.45}}> 
                <View style={styles.head}><Text style={{color: 'white', fontSize: 15}}>MERCHANT NAME</Text></View>
                <View style={styles.one}>
                    <View style={styles.one1}>
                        <Image style={styles.img} source={{uri: "https://www.vhv.rs/dpng/d/145-1451043_capsule-with-contents-open-capsule-png-transparent-png.png"}}/>
                    </View>
                    <View style={styles.one2}>
                        <Text style={styles.bigheading}>Medicins</Text>
                        <Text style={{color: 'grey', fontSize: 12, marginTop: 5}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit etc.</Text>
                        <View style={{flexDirection: 'row', marginTop: 5}}>
                            <MaterialIcons name="location-on" color="white" size={25} style={{marginTop: 7}}/>
                            <Text style={{color: 'white', fontSize: 15, marginTop: 5}}>New Delhi</Text>
                        </View>
                        <Text style={{color: 'white', fontSize: 12, marginTop: 5}}>Deliver by: tomorrow, 02 feb, 2021</Text>
                    </View>
                </View>
                    <Text style={{color: 'white' ,fontSize: 15, marginTop: 7}}>Warehouse Address</Text>
                    <Text style={{fontSize: 14, color: 'grey', marginTop: 10}}>Indira Press Complex, Zone-1, Maharana Pratap Nagar, Bhopal, Madhya Pradesh 462001</Text>
                    <TouchableOpacity style={{ marginTop: 22 ,marginBottom: 22, backgroundColor: '#3B3B3B', borderRadius: 30,height: 25 ,width: '35%',justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: 'white'}}>View directions</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.box}>
                <View style={{flex: 3, justifyContent: 'space-between', flexDirection: 'row'}}>
                    <View style={{flex: 2}}>
                        <Text style={{color: 'white', fontSize: 22}}>Delivery Details</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={{color: 'white', backgroundColor: 'black', padding: 6, borderRadius: 10, textAlign: 'center', justifyContent: 'center'}}>Estimated time 30 mints</Text>
                    </View>
                </View>
                <View >
                    <Text style={styles.greytext}>CUSTOMER NAME</Text>
                    <Text style={styles.whitetext}>Mr. Sahil Singh</Text>
                    <Text style={styles.greytext}>ADDRESS</Text>
                    <Text style={styles.whitetext}>Indira Press Complex, Zone-1, Maharana Pratap Nagar, Bhopal, Madhya Pradesh 462001</Text>
                    <Text style={styles.greytext}>CONTACT NUMBER</Text>
                    <Text style={styles.whitetext}>+91-123456890</Text>
                    <Text style={styles.greytext}>LOCATION</Text>
                    <Image style={styles.map} source={{uri: 'https://joomly.net/frontend/web/images/googlemap/map.png'}}/>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{color: "white", fontSize: 20,}}>Start Ride</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    main:{
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 22,
        paddingTop: 20
    },
    head:{
        width: '100%',
        height: 40,
        backgroundColor: '#3B3B3B',
        borderRadius: 7,
        color: 'white',
        paddingLeft: 15,
        justifyContent: 'center',
    },
    whitetext:{
        color: 'white',
        fontSize: 13,
        marginTop: 10
    },
    one:{
        flex: 5,
        marginVertical: 15,
        flexDirection: 'row',
    },
    one1:{
        flex: 2,
    },
    one2:{
        flex: 3,
        marginLeft: 5,
    },
    img:{
        height: 130,
        width: 130,
        borderRadius: 15,
        marginTop: 10
    },
    greytext:{
        color: 'grey',
        fontSize: 12,
        marginTop: 10
    },
    bigheading:{
        color: 'white',
        fontSize: 23
    },
    box:{
        flex: 0.55,
        backgroundColor: '#3B3B3B',
        borderRadius: 15,
        padding: 20
    },
    map:{
        marginTop: 20,
        height: 150,
        width: '100%',
        borderRadius: 15,
    },
    btn:{
        backgroundColor: '#2F4F4F',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: '70%',
        margin: 20,
        flex: 1,
        borderRadius: 10,
        marginHorizontal: 55,
        borderColor: 'white',
        borderWidth: 2
    },
})
export default DriverMedicine;
