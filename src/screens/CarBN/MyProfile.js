import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Switch, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../../src/Constrants/Colors.js';

const MyProfile =()=>{

    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch1 = () => {
        setIsEnabled1(previousState => !previousState)
    }
    const toggleSwitch2 = () => {
        setIsEnabled2(previousState => !previousState)
    }

    const Profile =()=>{
        return(
            <View style={styles.row}>
                <View style={styles.subRow}>
                    <Image style={styles.img} source={{uri: 'https://i0.wp.com/short-biography.com/wp-content/uploads/choi-minho/Choi-Minho.jpg?fit=853%2C853&ssl=1'}}/>
                    <View style={styles.column}>
                        <Text style={styles.name}>Manish Sharma</Text>
                        <TouchableOpacity style={styles.rating}>
                            <Text style={styles.number}>4.5 </Text>
                            <AntDesign name="star" color="yellow" size={20}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <AntDesign name="edit" color="#1f3d7a" size={30} style={styles.edit}/>
            </View>
        )
    }

    const ProfileDetail =()=>{
        return(
            <View>
                <Text style={styles.redText}>Profile</Text>
                <Text style= {styles.blueText}>Phone no.</Text>
                <TextInput style= {styles.input} />
                <Text style= {styles.blueText}>Email</Text>
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

    const AccountDetail =()=>{
        return(
            <View>
                <Text style={styles.redText}>Account Setting</Text>
                <View style={styles.switch}>
                    <Text style= {styles.blueText2}>Switch to Seller/Buyer</Text>
                    <View style={{borderBottomColor: "#808080", borderBottomWidth: 1, flex: 1, justifyContent:'center'}}>
                        <Switch
                            trackColor={{ false: "darkgrey", true: "darkgrey" }}
                            thumbColor={isEnabled1 ? "grey" : "white"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch1}
                            value={isEnabled1}
                        />
                    </View>
                </View>
                <Text style= {styles.blueText2}>Change Password</Text>
                <Text style= {styles.blueText2}>Privacy Settings</Text>
                <View style={styles.switch}>
                    <Text style= {styles.blueText2}>Newsletter</Text>
                    <View style={{borderBottomColor: "#808080", borderBottomWidth: 1, flex: 1, justifyContent:'center'}}>
                        <Switch
                            trackColor={{ false: "darkgrey", true: "darkgrey" }}
                            thumbColor={isEnabled2 ? "grey" : "white"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch2}
                            value={isEnabled2}
                        />
                    </View>
                </View>
            </View>
        )
    }

    return(
        <ScrollView style={styles.main}> 

            <Profile />
            <ProfileDetail />
            <AccountDetail />
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        padding: 10
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    img:{
        height: 70,
        width: 70,
        borderRadius: 100
    },
    rating:{
        flexDirection: 'row',
        backgroundColor: Colors.Red,
        width: 70,
        padding: 3,
        justifyContent: 'space-evenly'
    },
    name:{
        color: Colors.Blue,
        letterSpacing: 1,
        marginTop: 7,
        fontFamily: 'sans-serif-medium',
        fontSize: 17
    },
    subRow:{
        flexDirection: 'row'
    },
    column:{
        flexDirection: 'column',
        marginLeft: 10
    },
    number:{
        color: 'white'
    },
    input: {
        borderBottomColor: "#808080",
        borderBottomWidth: 1,
        color: '#696969',
        fontFamily: 'sans-serif-medium',
        padding: 0,
    },
    redText:{
        color: Colors.Red,
        fontSize: 20,
        marginTop: 10,
        fontFamily: 'sans-serif-medium',
    },
    blueText:{
        color: Colors.Blue,
        fontSize: 15,
        marginTop: 5,
        fontFamily: 'sans-serif-medium',
    },
    blueText2:{
        color: Colors.Blue,
        fontSize: 15,
        fontFamily: 'sans-serif-medium',
        borderBottomColor: "#808080",
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginTop: 20
    },
    switch:{
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
})

export default MyProfile;