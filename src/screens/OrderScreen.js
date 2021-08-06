// Merchant (Order details)
import React from "react";
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, Image} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const OrderScreen = (props) => {
  return  (
      <ScrollView style={styles.main}>
         <View style={styles.one}>
            <FontAwesome.Button name="bell" size={25} backgroundColor="#000" onPress={() => {}}></FontAwesome.Button>
         </View>

         <View style={styles.two}>
             <Text style={{fontSize: 25, color: 'white', marginTop: 20}}>Order booked successfully</Text>
             <Text style={{fontSize: 15, color: 'white', marginTop: 20}}>ORDER ID: XXXXXXXXX145</Text>
           
             <Text style={{fontSize: 20, color: 'white', marginTop: 20}}>Delivery Details</Text>
             <View style={{flex:2, flexDirection: 'row'}}>
                    <View style={{flex:1}}>
                        <Text style={{fontSize: 15, color: 'grey', marginTop: 30}}>STATUS</Text>
                        <Text style={{fontSize: 14, color: 'white', marginTop: 5}}>Booking Confirmed</Text>
                        <Text style={{fontSize: 15, color: 'grey', marginTop: 30}}>CUSTOMER NAME</Text>
                        <Text style={{fontSize: 14, color: 'white', marginTop: 5}}>Mr. Sahil Singh</Text>
                    </View>
                    <View style={styles.qr}>
                        <Image style={styles.img2} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAxFQyJLUt-38s5_YmRzuiGFTmSEJnMJ-cWQ&usqp=CAU'}}/>
                    </View>
            </View>
             <Text style={{fontSize: 15, color: 'grey', marginTop: 20}}>ADDRESS</Text>
             <Text style={{fontSize: 14, color: 'white', marginTop: 5}}>Indira Press Complex, Zone-!, Maharana Pratap Nagar, Bhopal, Madhya 462011</Text>
             <Text style={{fontSize: 15, color: 'grey', marginTop: 20}}>CONTACT NUMBER</Text>
             <Text style={{fontSize: 14, color: 'white', marginTop: 5}}>+91- 819334 85593</Text>
             <Text style={{fontSize: 15, color: 'grey', marginTop: 20}}>Location</Text>
             <Image style={styles.img} source={{uri: 'https://joomly.net/frontend/web/images/googlemap/map.png'}}/>
             <TouchableOpacity style={styles.btn}>
                    <Text style={{color: "white", fontSize: 15, fontWeight: "bold"}}>Cancel Order</Text>
             </TouchableOpacity>
         </View>
     </ScrollView>
  );
};

const styles = StyleSheet.create({
    main:{
        backgroundColor: 'black',
        flex: 1
    },
    one:{
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginHorizontal: 15,
        marginTop: 20
    },
    two:{
        marginHorizontal: 20,
    },
    img:{
        marginTop: 20,
        height: 150,
        width: '100%',
        borderRadius: 15,
    },
    img2:{
        height: 150,
        width: 150,
    },
    btn:{
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        width: '70%',
        margin: 20,
        flex: 1,
        borderRadius: 10,
        marginHorizontal: 60        
    },
    qr:{
        flex:1,
        flexDirection: 'column',
        marginHorizontal: 0,
        //position: 'absolute',
        top: 0,
        left: 0,
        height: 50,
        lineHeight: 0,
        borderColor: '#FFFFFF',
        borderLeftWidth: 3,
        borderTopWidth: 3,
        padding: 10,
    }
});

export default OrderScreen;

    {/* position: 'absolute',
        top: 0,
        left: 0,
        height: 25,
        width: 25,
        borderColor: '#FFFFFF',
        borderLeftWidth: 3,
        borderTopWidth: 3,
        padding: 10, */}