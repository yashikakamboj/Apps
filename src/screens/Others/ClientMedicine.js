// Client App (Medicine Screen)
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const ClientMedicine =()=>{

    const [checked, setChecked] = React.useState('first');
    var items = [
        {label: "Hand Pick", value: 1},
        {label: "Drop Box", value: 2}
    ];

    return(
        <ScrollView style={styles.main}>
            <View style={{flex: 0.5, marginBottom: 15}}> 
                <Text style={{color: 'white', fontSize: 22, marginTop: 10}}>Package name</Text>
                <View style={styles.one}>
                    <View style={styles.one1}>
                        <Text style={{color: 'white', fontSize: 16, marginTop: 20}}>MERCHANT NAME</Text>
                        <Text style={{color: 'white', fontSize: 15, marginTop: 7}}>Pharmacy 1</Text>
                        <Text style={{color: 'grey', fontSize: 12, marginTop: 7}}>Order ID</Text>
                        <Text style={{color: 'white', fontSize: 15, marginTop: 7}}>#1234-5678-9632</Text>
                        <Text style={{color: 'grey', fontSize: 12, marginTop: 7}}>QTY.</Text>
                        <Text style={{color: 'white', fontSize: 14, marginTop: 7}}>12</Text>     
                        <Text style={{color: 'grey', fontSize: 12, marginTop: 5, marginBottom:0}}>Amount</Text>               
                    </View>
                    <View style={styles.one2}>
                        <Image style={styles.img} source={{uri: "https://www.vhv.rs/dpng/d/145-1451043_capsule-with-contents-open-capsule-png-transparent-png.png"}}/>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 0}}>
                    <Text style={{color: 'white', fontSize: 14, marginLeft: 5, marginBottom: 25}}>$125</Text>
                    <TouchableOpacity style={{backgroundColor: '#3B3B3B', borderRadius: 15, alignItems: 'center', width: 50, height: 22}}>
                        <Ionicons name="chatbox-outline" color="white" size={19}/>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <RadioForm
                        radio_props = {items}
                        onPress = {(value)=>{}} 
                        buttonOuterSize={23}
                        buttonColor={'#fff'}
                        formHorizontal={false}
                        labelHorizontal={true}
                        animation={true}
                        labelStyle={{fontSize: 16, color: '#fff', marginLeft:10, marginHorizontal:20,}}
                        selectedButtonColor= {'#fff'}
                        formHorizontal={true}
                    />
                </View>

            </View>
            <View style={styles.box}>
                <View style={{flex: 2, justifyContent: 'space-between', flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <Text style={{color: 'white', fontSize: 20}}>Delivery Details</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={{color: 'white',fontSize: 11, backgroundColor: 'black', padding: 6, borderRadius: 10, textAlign: 'center', justifyContent: 'center'}}>Estimated Time 12:30pm, 21 Jan 2021</Text>
                    </View>
                </View>
                <View >
                    <Text style={styles.greytext}>STATUS</Text>
                    <Text style={styles.whitetext}>ON THE WAY.</Text>
                    <Text style={styles.greytext}>DELIVERY LOCATION</Text>
                    <Text style={styles.whitetext}>123, PATEL NAGAR, MANSROVAR, JAIPUR</Text>
                    <Image style={styles.map} source={{uri: 'https://joomly.net/frontend/web/images/googlemap/map.png'}}/>
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
    whitetext:{
        color: 'white',
        fontSize: 14,
        marginTop: 10
    },
    one:{
        flex: 5,
        marginVertical: 15,
        flexDirection: 'row',
    },
    one2:{
        flex: 2,
    },
    one1:{
        flex: 3,
        marginLeft: 5,
    },
    img:{
        height: 130,
        width: 130,
        borderRadius: 15,
        marginTop: 20
    },
    greytext:{
        color: 'grey',
        fontSize: 12,
        marginTop: 10
    },
    box:{
        flex: 0.5,
        backgroundColor: '#3B3B3B',
        borderRadius: 15,
        padding: 20
    },
    map:{
        marginTop: 20,
        height: 170,
        width: '100%',
        borderRadius: 10,
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
export default ClientMedicine;
