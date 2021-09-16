import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,Modal, TouchableOpacity, Image, Dimensions, Switch, ScrollView, FlatList, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import SwitchButton from 'switch-button-react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Colors from '../../../src/Constrants/Colors.js';
import images from '../../../src/Constrants/images'
import { RadioButton } from 'react-native-paper';

const Search = () => {

    const [like, setLike] = useState(false)
    const [X, setX] = useState(false)

    const [checked, setChecked] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
    }

    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);


    const data1 = [
        { model: '2018 Toyota C HR 1.8', paragraph: '4250 km | Automatic',  price: '25000$', calculator: true, badges: true, warranty: true, threedays: true},
        { model: "BMW", paragraph: '4250 km | Automatic', price: '25000$', calculator: false, badges: true, warranty: false, threedays: false}
    ]

    const Renderitems1 = ({ item }) => {
        return (
            <View style={styles.outerbox}>
                
                <View style={styles.row}>
                    {item.badges? <Image style={styles.stemp1} source={images.icon14}/>: null}
                    {item.warranty? <Image style={styles.stemp2} source={images.icon15}/>: null}
                    {item.threedays? <Image style={styles.stemp3} source={images.icon16}/>: null}
                </View>

                <Image style={styles.image} source={images.car} />
                
                <TouchableOpacity style={styles.likebutton} onPress={()=>{ setLike(!like) }}>
                    {like ? <Image style={styles.like} source={images.icon17}/>
                    : <Image style={styles.like} source={images.icon18}/> }
                </TouchableOpacity>

                <View style={styles.innerbox}>
                    <Text style={styles.title}>{item.model}</Text>
                    <Text style={styles.paragraph}> {item.paragraph}</Text>
                    <View style={styles.row}>
                        <Text style={styles.Blue}> {item.price}</Text>
                        {item.calculator? <Image style={styles.calculator} source={images.icon19}/> : null}
                    </View>
                </View>
            </View>
        )
    }

    const Search=()=>{
        return(
            <View style={styles.row}>
                <View style={styles.search}>
                    <View>
                        <AntDesign name="search1" size={20} color="grey"/>
                    </View>
                        <TextInput style={styles.input}/>
                    
                    <AntDesign name="closecircle" size={20} color="grey" />
                </View>
                <TouchableOpacity style={styles.filter} onPress={()=>{setX(true)}}>
                    <Ionicons name="options-sharp" size={30} color="white"/>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <ScrollView>
            <View>

                <Search />

                <Text style={styles.text}> Featured</Text>
                <FlatList horizontal showsHorizontalScrollIndicator={false} data={data1} renderItem={Renderitems1} keyExtractor={item => item.title} />
                <Text style={styles.right}>See more amazing cars</Text>

                <Text style={styles.text}>New Arrived</Text>
                <FlatList horizontal showsHorizontalScrollIndicator={false} data={data1} renderItem={Renderitems1} keyExtractor={item => item.title} />
                <Text style={styles.right}>See more amazing cars</Text>

                <Text style={styles.text}>New Arrived</Text>
                <FlatList horizontal showsHorizontalScrollIndicator={false} data={data1} renderItem={Renderitems1} keyExtractor={item => item.title} />
                <Text style={styles.right}>See more amazing cars</Text>

                <Modal transparent={true} visible={X}>
                    <ScrollView style={styles.modal}>
                        <TouchableOpacity onPress={()=>{setX(false)}} style={styles.close}>
                            <Text style={styles.white}>Close</Text>
                        </TouchableOpacity>
                        <View style={styles.row3}>
                            <Text style={styles.Blue}>Postcode</Text>
                            <View style={styles.row2}>
                                <Text style={styles.green}>NW13QB</Text>
                                <MaterialCommunityIcons name="target" size={25} color="grey" />
                            </View>
                        </View>
                        <View style={styles.row3}>
                            <Text style={styles.Blue}>Distance</Text>
                            <Text style={styles.green}>National</Text>
                        </View>
                        <View style={styles.row3}>
                            <Text style={styles.Blue}>Make</Text>
                            <Text style={styles.green}>ALFA ROMEO</Text>
                        </View>
                        <View style={styles.row3}>
                            <Text style={styles.Blue}>Modal</Text>
                            <Text style={styles.green}>All</Text>
                        </View>
                        <View style={styles.row3}>
                            <Text style={styles.Blue}>Model variant</Text>
                            <Text style={styles.green}>All</Text>
                        </View>
                        <View style={styles.row3}>
                            <Text style={styles.Blue}>Price type</Text>
                            <SwitchButton
                                onValueChange={(val) => setIsEnabled(true)}      
                                text1 = 'Finance'                        
                                text2 = 'Cash'                       
                                switchWidth = {200}                 
                                switchHeight = {40}                 
                                switchdirection = 'rtl'             
                                switchBorderRadius = {100}          
                                switchSpeedChange = {300}           
                                switchBorderColor = '#d4d4d4'       
                                switchBackgroundColor = '#fff'      
                                btnBorderColor = {'green'}      
                                btnBackgroundColor = 'white'      
                                fontColor = '#b1b1b1'               
                                activeFontColor = {'green'}      
                            />
                        </View>
                        <View style={styles.row3}>
                            <View >
                                <Text style={styles.Blue}>Price</Text>
                                <Text style={styles.BlueSmall}>Typical finance parameters: </Text>
                            </View>
                            <Text style={styles.green}>All</Text>
                        </View>
                        <View style={styles.row3}>
                            <Text style={styles.Blue}>Deposit</Text>
                            <Text style={styles.green}>$ 1000</Text>
                        </View>
                        <View style={styles.row3}>
                            <Text style={styles.Blue}>Term (months)</Text>
                            <Text style={styles.green}>48 months</Text>
                        </View>
                        <View style={styles.row3}>
                            <Text style={styles.Blue}>Mileage (per year)</Text>
                            <Text style={styles.green}>10,000 miles</Text>
                        </View>
                        <View style={styles.row3}>
                            <Text style={styles.BlueSmall}>Loess is a sedimentary deposit composed largely of silt-size grains that are loosely cemented by calcium carbonate.</Text>
                        </View>
                        <View style={styles.row3}>
                            <Text style={styles.Blue}>Year</Text>
                            <Text style={styles.grey}>All</Text>
                        </View>
                        <View style={styles.row3}>
                            <Text style={styles.Blue}>Mileage</Text>
                            <Text style={styles.grey}>All</Text>
                        </View>
                        <View style={styles.row3}>
                            <Text style={styles.Blue}>Body type</Text>
                            <Text style={styles.grey}>All</Text>
                        </View>
                        <View style={styles.row3}>
                            <Text style={styles.Blue}>Fuel type</Text>
                            <Text style={styles.grey}>All</Text>
                        </View>
                        <View style={styles.row3}>
                            <Text style={styles.Blue}>Engine size</Text>
                            <Text style={styles.grey}>All</Text>
                        </View>
                        <View style={styles.row3}>
                            <Text style={styles.Blue}>Fuel consumption</Text>
                            <Text style={styles.grey}>All</Text>
                        </View>
                        <View style={styles.row3}>
                            <Text style={styles.Blue}>Acceleration</Text>
                            <Text style={styles.grey}>All</Text>
                        </View>
                        <View style={styles.row3}>
                            <Text style={styles.Blue}>Gearbox</Text>
                            <Text style={styles.grey}>All</Text>
                        </View>
                        <View style={styles.row3}>
                            <Text style={styles.Blue}>Drivetrain</Text>
                            <Text style={styles.grey}>All</Text>
                        </View>
                        <View style={styles.row3}>
                            <Text style={styles.Blue}>CO2</Text>
                            <Text style={styles.grey}>All</Text>
                        </View>
                        <View style={styles.row3}>
                            <Text style={styles.Blue}>No. of doors</Text>
                            <Text style={styles.grey}>All</Text>
                        </View>
                        <View style={styles.row3}>
                            <Text style={styles.Blue}>Seats</Text>
                            <Text style={styles.grey}>All</Text>
                        </View>
                        <View style={styles.row3}>
                            <Text style={styles.Blue}>Insurance group</Text>
                            <Text style={styles.grey}>All</Text>
                        </View>
                        <View style={styles.row3}>
                            <Text style={styles.Blue}>Tax</Text>
                            <Text style={styles.grey}>All</Text>
                        </View>
                        <View style={styles.row3}>
                            <Text style={styles.Blue}>Colour</Text>
                            <Text style={styles.grey}>All</Text>
                        </View>
                        <View style={styles.row3}>
                            <Text style={styles.Blue}>Seller type</Text>
                            <Text style={styles.grey}>All</Text>
                        </View>
                        <View style={styles.row3}>
                            <Text style={styles.grey}>CAT C/D</Text>
                            <Text style={styles.grey}>Exclude Cat S/C/D/N</Text>
                        </View>
                        <View style={styles.row3}>
                            <Text style={styles.Blue}>Keywords</Text>
                            <Text style={styles.grey}>e.g. Alarm</Text>
                        </View>
                        <View style={styles.row3}>
                            <Text style={styles.Blue}>Northern Ireland ads only</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabled2 ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch2}
                                value={isEnabled2}
                            />
                        </View>
                        
                    </ScrollView>
                </Modal>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    img: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 5
    },
    text: {
        marginLeft: 10,
        fontSize: 18,
        color: Colors.Red,
        marginTop: 15,
        fontWeight: "500",
        fontFamily: 'sans-serif-medium',
    },
    outerbox: {
        width: Dimensions.get('screen').width / 4 * 2,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#ddd',
        borderBottomWidth: 2,
        borderRightWidth: 2,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 10,
        marginHorizontal: 10,
        marginTop: 10,
        flex:2,
    },
    image: {
        height: 100,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flex:1
    },
    innerbox: {
        padding: 5,
        flex:1,
        alignItems: 'flex-start',
    },
    title: {
        color: 'black',
        fontFamily: 'sans-serif-medium',
        fontSize: 15
    },
    paragraph: {
        fontSize: 11
    },
    Blue:{
        color: Colors.Blue,
        fontSize: 16,
        fontFamily: 'sans-serif-medium',
    },
    BlueSmall:{
        color: Colors.Blue,
        fontSize: 12,
        fontFamily: 'sans-serif-medium',
    },
    likebutton:{
        position: 'absolute',
        height: 50,
        width: 50,
        zIndex: 1,
        top: 80,
        left: Dimensions.get('screen').width / 4 * 1.5
    },
    like:{
        height: '100%',
        width: '100%'
    }, 
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'space-evenly'
    },
    calculator:{
        marginLeft: Dimensions.get('screen').width / 4 * 1,
    },
    stemp1:{
        height: 25,
        width: 25,
        position: 'absolute',
        zIndex: 1,
        marginLeft: 5,
    },
    stemp2:{
        height: 25,
        width: 25,
        position: 'absolute',
        zIndex: 1,
        marginLeft: 5,
        left: 30
    },
    stemp3:{
        height: 25,
        width: 25,
        position: 'absolute',
        zIndex: 1,
        marginLeft: 5,
        left: 60
    },
    right:{
        color: Colors.Blue,
        alignSelf: 'flex-end',
        fontSize: 12,
        marginRight: 10
    },
    filter:{
        borderRadius:10,
        padding: 10,
        backgroundColor: Colors.Blue
    },
    search:{
        borderRadius: 50,
        borderColor: 'grey',
        paddingHorizontal: 15,
        alignItems: 'center',
        borderWidth: 1,
        paddingVertical: 2,
        flexDirection: 'row',
        marginRight: 10,
        justifyContent: 'space-between',
    },
    input:{
        color: 'grey',
        width: "70%",
    },
    row2:{
        justifyContent: "flex-start",
        flexDirection: 'row'
    },
    row3:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        paddingBottom: 13,
        marginTop: 13,
        alignItems: 'center'
    },
    modal:{
        backgroundColor: 'white',
        height: Dimensions.get('screen').height,
        flex: 1,
        paddingHorizontal:20,
        //position: 'absolute',
        //bottom:0,
        width: Dimensions.get('screen').width,
        paddingTop: 10,
    },
    grey:{
        color: 'grey'
    },
    btn:{
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.Blue,
        borderRadius: 5,
        height: 50
    },
    white:{
        color: 'white'
    },
    greybtn:{
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 40
    },
    button:{
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.Blue,
        borderRadius: 5,
        height: 50,
        marginTop: 5
    },
    wrap:{
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10
    },
    green:{
        color: 'green',
        fontFamily: 'sans-serif-medium',
        fontSize: 15
    },
    close:{
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        borderRadius: 5,
        height: 50,
    },

})
export default Search;