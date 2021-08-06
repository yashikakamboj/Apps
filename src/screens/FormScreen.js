import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
 
const FormScreen = ()=>{
    return(
        
        <ScrollView style={styles.main}>
            <View style={styles.one}>
                <Text style={styles.text}>Profile</Text>
                <FontAwesome.Button name="bell" size={25} backgroundColor="#000" onPress={() => {}}></FontAwesome.Button>
            </View>
            <View style={styles.two}>
                <Image style={styles.img} source={{uri: 'https://i0.wp.com/short-biography.com/wp-content/uploads/choi-minho/Choi-Minho.jpg?fit=853%2C853&ssl=1'}}/>
            </View>
            <View style={{alignItems: 'flex-end', marginRight: 25}}>
                <Icon name="edit" color={'#fff'} size={28}/>
            </View>
            <View style= {styles.three}>
                <Text style= {styles.top}>Name</Text>
                <TextInput style= {styles.input}/>
                <Text style= {styles.top}>Contact no.</Text>
                <TextInput style= {styles.input}/>
                <Text style= {styles.top}>Email</Text>
                <TextInput style= {styles.input}/>
                <Text style= {styles.top}>Address</Text>
                <TextInput style= {styles.input}/>
                <Text style= {styles.top}>Business Name</Text>
                <TextInput style= {styles.input}/>
                <Text style= {styles.top}>Business Type</Text>
                <TextInput style= {styles.input}/>
                <Text style= {styles.top}>Registration Number</Text>
                <TextInput style= {styles.input}/>
                <Text style= {styles.top}>Business Domain</Text>
                <TextInput style= {styles.input}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style= {styles.top}>Facebook (Optional)</Text>
                    <Image style={styles.icon} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTImj5adg1sNvD0iCEQcjIGr-CZGuiX1or61w&usqp=CAU' }} />
                </View>
                <TextInput style= {styles.input}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style= {styles.top}>Linkedin (Optional)</Text>
                    <Image style={styles.icon} source={{uri: 'data:image/png;base64,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' }} />
                </View>
                <TextInput style= {styles.input}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style= {styles.top}>Twitter (Optional)</Text>
                    <Image style={styles.icon} source={{uri: 'data:image/png;base64,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' }} />
                </View>
                <TextInput style= {styles.input}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style= {styles.top}>Instagram (Optional)</Text>
                    <Image style={styles.icon} source={{uri: 'data:image/jpeg;base64,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' }} />
                </View>
                <TextInput style= {styles.input}/>
            </View>
            <View style={styles.four}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{color: "white"}}>Change Password</Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.btn}>
                    <Text style={{color: "white"}}>Help</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.five}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{color: "white"}}>Log out</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        
    );
}
const styles= StyleSheet.create ({
    one: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
    main: {
        backgroundColor: 'black',
        flex: 1,
        //marginTop: getStatusBarHeight()
    },
    text: {
        color: 'white',
        fontSize: 30,
        marginLeft: 10
    },
    img: {
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 1.5,
        height: 150,
        width: 150,
    },
    two: {
        //justifyContent: 'center',
        alignItems: 'center',
    },
    three:{
        margin: 20,

    },
    top: {
        color: '#808080',
        fontSize: 13,
    },
    input: {
        borderBottomColor: "#808080",
        borderBottomWidth: 1,
        color: 'white',
        marginBottom: 20
    },
    four: {
        flexDirection: 'row',
        margin: 20,
        marginTop: 0,
        marginBottom: 0
    },
    five:{
        margin: 20,
        flex: 1,
        flexDirection: 'row',
        marginTop:0
    },
    btn: {
        backgroundColor: '#808080',
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        width: '50%',
        margin: 5,
        flex: 1,
        borderRadius: 3,
        padding: 5
    },
    icon: {
        height:25,
        width: 25,
        borderRadius: 100,
        //marginRight: 0,
        //marginBottom: 0
    }
})
export default FormScreen;