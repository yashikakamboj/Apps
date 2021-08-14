import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../../src/Constrants/Colors.js';

const AuctionLiveBidding =()=>{

    const images= [
            "https://source.unsplash.com/1024x768/?nature",
            "https://source.unsplash.com/1024x768/?water",
            "https://source.unsplash.com/1024x768/?girl",
            "https://source.unsplash.com/1024x768/?tree", 
        ]

    const data = [
        {name: 'Tom Barten', lastseen: 'Just now', label: 'Highest', price: '$25,000', image: 'https://i0.wp.com/short-biography.com/wp-content/uploads/choi-minho/Choi-Minho.jpg?fit=853%2C853&ssl=1' },
        {name: 'Max Junior', lastseen: '10:15 AM', label: '', price: '$24,000', image: 'https://i0.wp.com/short-biography.com/wp-content/uploads/choi-minho/Choi-Minho.jpg?fit=853%2C853&ssl=1' },
        {name: 'Steve Carrel', lastseen: '10:14 AM', label: '', price: '$23,000', image: 'https://i0.wp.com/short-biography.com/wp-content/uploads/choi-minho/Choi-Minho.jpg?fit=853%2C853&ssl=1' },
        {name: 'Steve Carrel', lastseen: '10:14 AM', label: '', price: '$23,000', image: 'https://i0.wp.com/short-biography.com/wp-content/uploads/choi-minho/Choi-Minho.jpg?fit=853%2C853&ssl=1' },
    ]

    const ImageCard =()=>{
        return(
            <SliderBox
                images={images}
                sliderBoxHeight={200}
                dotColor={Colors.Blue}
                inactiveDotColor="white"
                autoplay
                circleLoop
                resizeMethod={'resize'}
                resizeMode={'cover'}
                paginationBoxStyle={styles.paginationBoxStyle}
                dotStyle={styles.dotStyle}
                ImageComponentStyle={styles.ImageComponentStyle}
                imageLoadingColor="#2196F3"
            />
        )
    }
    const DetailCard =({source})=>{
        return(
            <View>
                <Image source={source}/>
            </View>
        )
    }

    const BidCard =()=>{
        return(
            <View style={[styles.card, styles.row]}>
                    <View>
                        <Text style={styles.darkred}>$11,000</Text>
                        <Text style={styles.leftgrey}>Current Bid</Text>
                    </View>
                    <View>
                        <View style={styles.row}>
                            <Feather name="clock" color={Colors.Red} size={20}/>
                            <Text style={styles.red}>00h 59m 41s</Text>
                        </View>
                        <Text style={styles.rightgrey}>Auction Bid</Text>
                    </View>
            </View>
        )
    }

    const ChatDatail =()=>{
        return(
            <View style={[styles.row, {alignItems: 'center'}]}>
                    <View style={styles.row}>
                        <Image style={styles.img} source={{uri: 'https://i0.wp.com/short-biography.com/wp-content/uploads/choi-minho/Choi-Minho.jpg?fit=853%2C853&ssl=1'}}/>
                        <View>
                            <Text style={styles.black}>Mathew Hiddelson</Text>
                            <View style={[styles.row, {justifyContent: 'flex-start'}]}>
                            <Text style={styles.leftgrey}>Dealer</Text>
                            <TouchableOpacity style={styles.rating}>
                                <Text style={styles.number}>4.5 </Text>
                                <AntDesign name="star" color="yellow" size={15}/>
                            </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View>
                        <MaterialIcons name="chat-bubble-outline" color={Colors.Blue} size={25}/>
                        <Text style={styles.blue}>Chat</Text>
                    </View>
                </View>
        )
    }

    const renderitems=({item})=>{
        return(
            <View style={[styles.row, styles.card2, {alignItems: 'center'}]}>
                <View style={styles.row}>
                    <Image style={styles.img} source={{uri: item.image}}/>
                    <View >
                        <View style={styles.row}> 
                            <Text style={styles.black}>{item.name}</Text>
                            <TouchableOpacity style={styles.tag}>
                                <Text style={styles.number}>{item.label}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.row, {justifyContent: 'flex-start'}]}>
                        <Text style={styles.leftgrey}>{item.lastseen}</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.darkred}>{item.price}</Text>
            </View>
        )
    }

    return(
        <ScrollView>
            <ImageCard />
            <View style={styles.main}>

                <BidCard />

                <Text style={styles.headingBlack}>2018 Toyota C-HR 1.8</Text>

                <ChatDatail />
            
                <View style={styles.list}>
                    <Text style={styles.listText}>LATEST BIDS</Text>
                    <FlatList
                        data={data}
                        renderItem={renderitems}
                    />
                </View>
                
                <Text style={styles.black}>Note: 5 days money back guarantee!</Text>
                <TouchableOpacity style={styles.btn1}>
                    <Text style={styles.text}>Place Bid !</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

)}

const styles = StyleSheet.create({
    main:{
        paddingHorizontal: 10,
    },
    paginationBoxStyle:{
        position: "absolute",
        bottom: 0,
        padding: 0,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
    },
    dotStyle:{
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 0,
        padding: 0,
        margin: 0,
        backgroundColor: "rgba(128, 128, 128, 0.92)"
    },
    ImageComponentStyle:{
        borderRadius: 15,
        width: '97%',
        marginTop: 10,
    },
    card:{
        shadowColor: '#3D3D3D',
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 10,
        padding: 10,
        marginTop: 10,
    },
    darkred:{
        color: Colors.Red,
        fontSize: 20,
        alignSelf:'flex-start',
        fontWeight: "bold",
        alignSelf: 'center'
    },
    red:{
        color: Colors.Red,
        fontSize: 15,
        alignSelf:'flex-start',
        fontFamily: 'sans-serif-medium',
        marginLeft: 5
    },
    leftgrey:{
        color: 'grey',
        fontSize: 13,
        alignSelf: 'flex-start'
    },
    rightgrey:{
        color: 'grey',
        fontSize: 13,
        alignSelf: 'flex-end'
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headingBlack:{
        color:'black',
        fontSize: 17,
        marginVertical: 10
    },
    black:{
        color:'black',
        fontSize: 15,
        marginTop: 5,
        fontFamily: 'sans-serif-medium',
    },
    rating:{
        flexDirection: 'row',
        backgroundColor: Colors.Red,
        width: 50,
        padding: 3,
        marginLeft: 5,
        justifyContent: 'space-evenly',
    },
    number:{
        color: 'white',
        fontSize: 10
    },
    img:{
        height: 55,
        width: 55,
        borderRadius: 50,
        marginRight: 7,
        alignSelf: 'center'
    },
    blue:{
        color: Colors.Blue,
        fontSize: 10
    },
    list:{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 20,
    },
    listText:{
        alignSelf: 'center',
        color: 'grey',
    },
    tag:{
        backgroundColor: Colors.Blue,
        borderRadius: 50,
        alignSelf: 'center',
        padding: 1,
        marginTop: 5,
        marginLeft: 5
    },
    card2:{
        shadowColor: '#3D3D3D',
        borderRadius: 40,
        backgroundColor: 'white',
        elevation: 10,
        marginTop: 5,
        paddingRight: 10,
        paddingLeft: 0,
        marginBottom: 5
    },
    btn1:{
        backgroundColor: Colors.Blue,
        borderRadius: 50,
        paddingHorizontal: 20,
        alignSelf: 'center',
        paddingVertical: 10,
        marginVertical: 20
    },
    text:{
        color: 'white',
        fontSize: 18
    },
})

export default AuctionLiveBidding;