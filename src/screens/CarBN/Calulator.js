import React, {useState} from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import SwitchButton from 'switch-button-react-native';
import Colors from '../../../src/Constrants/Colors.js';
import AntDesign from 'react-native-vector-icons/AntDesign';
import images from '../../../src/Constrants/images'

const Calculator =()=>{

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
    }

    return(
        <View style={styles.main}>

            <View style={styles.row}>
                <Image style={styles.image} source={images.car} />
                <View style={styles.right}>
                    <View style={styles.row}>
                        <Text style={styles.bluebig}>$176.15</Text>
                        <Text style={styles.bluesmall}>per month(PCP)</Text>
                    </View>
                    <Text style={styles.black}>Aston Martin Vantage</Text>
                </View>
            </View>

            <View style={styles.row2}>
                <Text style= {styles.grey}>Finance Type</Text> 
                    <SwitchButton
                        onValueChange={(val) => setIsEnabled(true)}      
                        text1 = 'PCP'                        
                        text2 = 'HP'                       
                        switchWidth = {100}                 
                        switchHeight = {30}                 
                        switchdirection = 'rtl'             
                        switchBorderRadius = {100}          
                        switchSpeedChange = {300}           
                        switchBorderColor = '#d4d4d4'       
                        switchBackgroundColor = '#fff'      
                        btnBorderColor = {Colors.Blue}       
                        btnBackgroundColor = 'white'      
                        fontColor = '#b1b1b1'               
                        activeFontColor = {Colors.Blue}            
                    />
            </View>
            <View style={styles.row2}>
                <Text style= {styles.grey}>Finance types explained</Text>
                <AntDesign name="arrowright" color={Colors.LightGrey} size={30}/>
            </View>
            <View style={styles.row2}>
                <Text style= {styles.grey}>I have a cash deposite of</Text>
                <Text style={styles.red}>$1000</Text>
            </View>
            <View style={styles.row2}>
                <Text style= {styles.grey}>I'd ike to repay over</Text>
                <Text style={styles.red}>$500</Text>
            </View>
            <View style={styles.row2}>
                <Text style= {styles.grey}>My annual mileage is</Text>
                <Text style={styles.red}>10,000 miles</Text>
            </View>

            <View style={styles.center}>
                <Text style={styles.bluebig}>Representative example</Text>
                <Text style={styles.greysmall}>Based on excellence credit score</Text>
            </View>

            <View style={styles.row2}>
                <View style={styles.row}>
                    <AntDesign name="plus" size={20} color={Colors.Blue}/>
                    <Text style= {styles.grey}>I'd ike to repay over</Text>
                </View>
                <Text style={styles.black}>$176.16</Text>
            </View>
            <View style={styles.row2}>
                <View style={styles.row}>
                    <AntDesign name="plus" size={20} color={Colors.Blue}/>
                    <Text style= {styles.grey}>46 monthly payments</Text>
                </View>
                <Text style={styles.black}>$176.16</Text>
            </View>
            <View style={styles.row2}>
                <View style={styles.row}>
                    <AntDesign name="plus" size={20} color={Colors.Blue}/>
                    <Text style= {styles.grey}>Lorem Ipsum</Text>
                </View>
                <Text style={styles.black}>$176.16</Text>
            </View>
            <View style={[styles.row, {justifyContent: 'space-between'}]}>
                <Text style= {styles.bluebig}>Total Amount</Text>
                <Text style={styles.bluebig}>$25,000</Text>
            </View>
            

        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        padding: 7
    },
    image: {
        height: 100,
        width: '40%',
        borderRadius: 10
    },
    row:{
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center'
    },
    row2:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomColor: "darkgrey",
        borderBottomWidth: 1,
        alignItems: 'center'
    },
    bluebig:{
        color: Colors.Blue,
        fontSize: 20,
        fontFamily: 'sans-serif-medium',
    },
    bluesmall:{
        color: Colors.Blue,
        fontSize: 10,
        fontFamily: 'sans-serif-medium',
    },
    black:{
        color: 'black',
        fontSize: 15,
        fontFamily: 'sans-serif-medium',
    },
    right:{
        marginLeft: 10,
        alignSelf: 'center',
        marginBottom: 10
    },
    grey:{
        color: Colors.LightGrey,
        marginTop: 15,
        paddingBottom: 15,
        marginLeft: 5
    },
    rightshift: {
        flex: 1,
        alignItems: 'flex-end', 
        justifyContent: 'center'
    },
    red:{
        color: Colors.Red,
        fontSize: 15,
        fontFamily: 'sans-serif-medium',
    },
    black:{
        color: 'black',
        fontSize: 17,
        fontFamily: 'sans-serif-medium',
    },
    center:{
        alignItems: 'center',
        marginTop: 20
    },
    greysmall:{
        color: Colors.LightGrey,
        fontSize: 12,
        fontFamily: 'sans-serif-medium',
    },
})

export default Calculator;