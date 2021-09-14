import React from "react";
import { Text, StyleSheet, View, Modal, TouchableOpacity, ScrollView} from "react-native";
import SafeAreaView from 'react-native-safe-area-view';

const HomeScreen = (props) => {
  return  (
      <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <ScrollView >
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('Form') } >
              <Text style={styles.text}>Form</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('Order') } >
              <Text style={styles.text}>Order</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('Help') } >
              <Text style={styles.text}>Help Center</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('Time') } >
              <Text style={styles.text}>Break time</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('Delivery') } >
              <Text style={styles.text}>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('Driver') } >
              <Text style={styles.text}>Driver Medicine Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('Client') } >
              <Text style={styles.text}>Client Medicine Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=>{props.navigation.navigate('Popup')}} >
              <Text style={styles.text}>Pop Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('Delivery2') } >
              <Text style={styles.text}>Delivery reference</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('Client2') } >
              <Text style={styles.text}>Client Order History</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('Chat') } >
              <Text style={styles.text}>Chat Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('Chat2') } >
              <Text style={styles.text}>Chatting Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('Api') } >
              <Text style={styles.text}>API Integration</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('Faq') } >
              <Text style={styles.text}>FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('Login') } >
              <Text style={styles.text}>Car BN (Login)</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('Profile') } >
              <Text style={styles.text}>Car BN (MyProfile)</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('Edit') } >
              <Text style={styles.text}>Car BN (EditScreen)</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('Contact') } >
              <Text style={styles.text}>Car BN (Contact)</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('TandC') } >
              <Text style={styles.text}>Car BN (Terms & Conditions)</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('Privacy') } >
              <Text style={styles.text}>Car BN (Privacy Policy)</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('Bidding') } >
              <Text style={styles.text}>Car BN (AuctionLiveBidding)</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('HomePage') } >
              <Text style={styles.text}>Car BN (HomePage)</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('Payments') } >
              <Text style={styles.text}>Car BN (Payments)</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('Notifications') } >
              <Text style={styles.text}>Car BN (Notifications)</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('car1') } >
              <Text style={styles.text}>Car BN (SavedCar)</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('car2') } >
              <Text style={styles.text}>Car BN (rental Car)</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('Calculator') } >
              <Text style={styles.text}>Car BN (Calculator)</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('car3') } >
              <Text style={styles.text}>Car BN (AuctionLive)</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('car4') } >
              <Text style={styles.text}>Car BN (Old Car)</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('car5') } >
              <Text style={styles.text}>Car BN (New Car)</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.btn}
              onPress={()=> props.navigation.navigate('car6') } >
              <Text style={styles.text}>Car BN (Search)</Text>
          </TouchableOpacity>

        </ScrollView>
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btn: {
        backgroundColor: 'black',
        height: 55,
        width: '80%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:5,
        marginHorizontal: 40,
        borderColor: '#808080',
        borderWidth: 1,
  },
  text:{
      color: "white",
      fontSize: 15,
      fontWeight: "bold"
  }
});

export default HomeScreen;