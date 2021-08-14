// Merchant (Help Center Screen)
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Feather } from '@expo/vector-icons'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const HelpScreen =()=>{
    return(
        <ScrollView style={{backgroundColor: 'black', flex:1}}>
        <View style={styles.one}>
            <Text style={{fontSize: 30, color: 'white'}}>Help Center</Text>
            <MaterialCommunityIcons name="bell" size={30} color="white"/>
        </View>
        <View style={styles.two}>
            <Text style={styles.text}>Order ID</Text>
            <TextInput style={styles.input}/>
             <Text style={styles.text}>Contact no.</Text>
             <TextInput style={styles.input}/>
             <Text style={styles.text}>Enquiry Detail</Text>
             
            <TextInput style={{height: 300, backgroundColor: 'grey', color: 'white', padding: 8, marginTop: 15, lineHeight: 17 }}
               placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            />
            <TouchableOpacity style={styles.btn}>
              <Text style={{color: "white", fontSize: 17}}>Submit</Text>
            </TouchableOpacity>
         </View>
        </ScrollView>
    );
};
const styles= StyleSheet.create({
    one:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 15
    },
    two:{
        marginHorizontal: 20,
        marginTop: 15
    },
    text:{
        fontSize: 14,
        color: 'grey',
        marginTop: 10
    },
    input:{
        borderBottomColor: "#808080",
        borderBottomWidth: 1,
        paddingBottom: 7,
        color: 'white',
        marginBottom: 0,
        fontSize: 15,
    },
    btn: {
        backgroundColor: 'black',
        height: 60,
        width: '100%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#808080',
        borderWidth: 1,
        marginTop: 30
  }
});
export default HelpScreen;