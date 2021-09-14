import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList , ScrollView, Image, Dimensions} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SliderBox } from "react-native-image-slider-box";
import Colors from '../../../src/Constrants/Colors.js';
import images from '../../Constrants/images';

const HomePage =()=>{

    const data1 = [
        {title: 'One', id: '1', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida eros magna, ut aliquet lectus imperdiet et. Donec nec augue posuere, gravida est id, gravida nunc. Vivamus enim odio, gravida id neque eget, malesuada convallis est.', image: 'https://source.unsplash.com/1024x768/?tree'},
        {title: 'Two', id: '2', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida eros magna, ut aliquet lectus imperdiet et. Donec nec augue posuere, gravida est id, gravida nunc. Vivamus enim odio, gravida id neque eget, malesuada convallis est.', image: 'https://source.unsplash.com/1024x768/?nature'},
        {title: 'Three', id: '3', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida eros magna, ut aliquet lectus imperdiet et. Donec nec augue posuere, gravida est id, gravida nunc. Vivamus enim odio, gravida id neque eget, malesuada convallis est.', image: 'https://source.unsplash.com/1024x768/?girl'},
        {title: 'Four', id: '4', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida eros magna, ut aliquet lectus imperdiet et. Donec nec augue posuere, gravida est id, gravida nunc. Vivamus enim odio, gravida id neque eget, malesuada convallis est.', image: 'https://source.unsplash.com/1024x768/?water'},
    ]

    const data2 = [
        {title: 'One', id: '1', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida eros magna, ut aliquet lectus imperdiet et. Donec nec augue posuere, gravida est id, gravida nunc. Vivamus enim odio, gravida id neque eget, malesuada convallis est.', image: 'https://source.unsplash.com/1024x768/?water'},
        {title: 'Two', id: '2', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida eros magna, ut aliquet lectus imperdiet et. Donec nec augue posuere, gravida est id, gravida nunc. Vivamus enim odio, gravida id neque eget, malesuada convallis est.', image: 'https://source.unsplash.com/1024x768/?girl'},
        {title: 'Three', id: '3', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida eros magna, ut aliquet lectus imperdiet et. Donec nec augue posuere, gravida est id, gravida nunc. Vivamus enim odio, gravida id neque eget, malesuada convallis est.', image: 'https://source.unsplash.com/1024x768/?nature'},
        {title: 'Four', id: '4', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida eros magna, ut aliquet lectus imperdiet et. Donec nec augue posuere, gravida est id, gravida nunc. Vivamus enim odio, gravida id neque eget, malesuada convallis est.', image: 'https://source.unsplash.com/1024x768/?tree'},
    ]

    const image= [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree", 
    ]

    const renderitems1 =({item})=>{
        return(
            <View style={styles.outerbox}>
                <View style={styles.rating}>
                    <Text style={styles.w}>{item.id}</Text>
                </View>
                <Image style={styles.image} source={{uri: item.image}}/>
                <View style={styles.innerbox}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.paragraph}>{item.body}</Text>
                </View>
            </View>
        )
    }

    const renderitems2 =({item})=>{
        return(
            <View style={styles.outerbox}>
                <View style={styles.rating}>
                    <Text style={styles.w}>{item.id}</Text>
                </View>
                <Image style={styles.image} source={{uri: item.image}}/>
                <View style={styles.innerbox}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.paragraph}>{item.body}</Text>
                </View>
            </View>
        )
    }

    const ImageCard =()=>{
        return(
                <SliderBox
                images={image}
                sliderBoxHeight={450}
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

    const RowButton =()=>{
        return(
            <View style={styles.row}>
                    <View>
                        <TouchableOpacity style={styles.redButton}>
                            <EvilIcons name="refresh" color="white" size={45}/>
                        </TouchableOpacity>
                        <Text style={styles.btntext}>Used</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.blueButton}>
                            <AntDesign name="star" color="white" size={25}/>
                        </TouchableOpacity>
                        <Text style={styles.btntext}>New</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.orangeButton}>
                            <Entypo name="key" color="white" size={25}/>
                        </TouchableOpacity>
                        <Text style={styles.btntext}>Rent</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.turquoiseButton}>
                            <AntDesign name="star" color="white" size={25}/>
                        </TouchableOpacity>
                        <Text style={styles.btntext}>Sell</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.purpleButton}>
                            <Image source={images.icon23} style={styles.auction}/>
                        </TouchableOpacity>
                        <Text style={styles.btntext}>Auction</Text>
                    </View>
                </View>
        )
    }

    const SmallCard =({text, icon})=>{
        return(
            <View style={styles.smallCard}>
                <View style={styles.circle}>
                    <Image source={icon} s/>
                </View>
                <View style={styles.Rectangle}>
                    <Text style={styles.whiteText}>{text}</Text>
                </View>
            </View>
        )
    }

    const UseCard =()=>{
        return(
            <View style={styles.card}>
                <Text style={styles.head}>Why Use CarsBN?</Text>
                <Text style={styles.body}>It is a long established fact that a reader will be distracted by readable content of a page when looking as its layout.</Text>
                <View style={styles.rowButton}>
                    <SmallCard text={"175 Inspection Point"} icon={images.icon24}/>
                    <SmallCard text={"Fixed Price, No Hidden Fees"} icon= {images.icon25}/>
                    <SmallCard text={"1 Year Warranty"} icon= {images.icon26}/>
                    <SmallCard text={"5 Day Money BAck Guarantee"} icon= {images.icon27}/>
                </View>
            </View>
        )
    }

    return(

        <ScrollView style={styles.main}>
            <Ionicons name="menu-outline" color={Colors.Blue} size={40} style={{position: 'absolute', zIndex: 1}}/>
            <MaterialIcons name="chat-bubble-outline" color={Colors.Blue} size={25} style={{position: 'absolute', right: 10, top: 10, zIndex: 1}}/>
            <ImageCard />
            <View style={styles.container}>
                <RowButton />
                <UseCard />
                <Text style={styles.head}>Best Price Through Auction</Text>
                <FlatList horizontal showsHorizontalScrollIndicator={false} data={data1} style={styles.flatList} renderItem={renderitems1} />
                <Text style={styles.head}>Hassle-Free Paperwork Registration Process</Text>
                <FlatList horizontal showsHorizontalScrollIndicator={false} data={data2} style={styles.flatList} renderItem={renderitems2} />
                <Text style={styles.head}>How it works?</Text>
            </View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
    },
    container:{
        paddingHorizontal: 8
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
        width: '100%',
        marginTop: 0,
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        marginHorizontal: 10
    },
    blueButton: {
        backgroundColor: 'skyblue',
        height: 70,
        width: 70,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    orangeButton:{
        backgroundColor: 'orange',
        height: 70,
        width: 70,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    redButton: {
        backgroundColor: Colors.Red,
        height: 70,
        width: 70,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    turquoiseButton:{
        backgroundColor: '#00ffef',
        height: 70,
        width: 70,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    purpleButton:{
        backgroundColor: 'purple',
        height: 70,
        width: 70,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btntext:{
        color: 'black',
        fontFamily: 'sans-serif-medium',
        marginTop: 10,
        alignSelf: 'center'
    },
    card:{
        backgroundColor: '#DCDCDC',
        borderRadius: 10,
        padding: 20,
        marginTop: 20
    },
    head:{
        color: 'black',
        fontFamily: 'sans-serif-medium',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 10,
        textAlign: 'center'
    },
    body:{
        textAlign: 'center',
        marginTop: 10
    },
    circle:{
        backgroundColor: Colors.Blue,
        height: 50,
        width: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#DCDCDC',
        borderWidth: 2,
        position: 'absolute',
        zIndex: 1,
        alignSelf: 'center'
    },
    Rectangle:{
        backgroundColor: Colors.Blue,
        width: 130,
        height: 100,
        borderRadius: 10,
        alignSelf:'center',
        marginTop: 20
    },
    whiteText:{
        color: 'white',
        fontFamily: 'sans-serif-medium',
        fontSize: 13,
        alignSelf: 'center',
        paddingHorizontal: 10,
        paddingTop: 40,
        paddingBottom: 10,
        textAlign: 'center'
    },
    rowButton:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginVertical: 10,
    },
    smallCard:{
        marginTop: 10
    },
    image:{
        height: 150,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        //resizeMode: 'stretch'
    },
    outerbox:{
        width: Dimensions.get('screen').width/3*2,
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
    },
    innerbox:{
        padding: 10,
    },
    flatList:{
        marginVertical: 10
    },
    title:{
        color: 'black',
        fontFamily: 'sans-serif-medium',
        fontSize: 15,
        marginTop: 10
    },
    paragraph:{
        fontSize: 11
    },
    auction:{
        height: 40,
        width: 40,
    },
    rating:{
        position: 'absolute',
        backgroundColor: Colors.Blue,
        borderRadius: 100,
        top: 135,
        left: 10,
        zIndex: 1,
        height: 30,
        width: 30,
        justifyContent: 'center'
    },
    w:{
        color: 'white',
        alignSelf: 'center',
        fontFamily: 'sans-serif-medium',
        fontSize: 18
    }
})

export default HomePage;
