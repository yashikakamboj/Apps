import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList , ScrollView, Image, Dimensions} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SliderBox } from "react-native-image-slider-box";
import Colors from '../../../src/Constrants/Colors.js';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import images from '../../Constrants/images'


const RentalCar =()=>{

    const [like, setLike] = useState(false)
    const [List1, setList1] = useState(false)
    const [List2, setList2] = useState(false)
    
    const image= [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",
    ]

    const ImageCard =()=>{
        return(
            <SliderBox
                images={image}
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

    const ChatDatail =()=>{
        return(
            <View style={[styles.row, {alignItems: 'center', marginTop: 20}]}>
                    <View style={styles.row}>
                        <Image style={styles.img} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb8sfGC0G3nRm_ntTwhXdsaLR8WYHwB9E4sA&usqp=CAU'}}/>
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
                        <Text style={styles.bluesmall}>Chat</Text>
                    </View>
                </View>
        )
    }

    const OverView =()=>{
        return(
            <View >
                <Text style={styles.bluemedium}>Overview</Text>
                <View style={[styles.row, {justifyContent:'flex-start'}]}>
                    <Image source={images.icon21}/>
                    <Text style={styles.black}> 40,000 Km</Text>
                </View>
                <View style={styles.wrap}>
                    <View style={styles.item}>
                        <Image style={styles.icon} source={images.icon1}/>
                        <Text>Sedan</Text>
                    </View>
                    <View style={styles.item}>
                        <Image style={styles.icon} source={images.icon2}/>
                        <Text>Automatic</Text>
                    </View>
                    <View style={styles.item}>
                        <Image style={styles.icon} source={images.icon3}/>
                        <Text>Petrol</Text>
                    </View>
                
                    <View style={styles.item}>
                        <Image style={styles.icon} source={images.icon4}/>
                        <Text>3240 CC</Text>
                    </View>
                    <View style={styles.item}>
                        <Image style={styles.icon} source={images.icon5}/>
                        <Text>8 Kmpl</Text>
                    </View>
                    <View style={styles.item}>
                        <Image style={styles.icon} source={images.icon6}/>
                        <Text>4 seats</Text>
                    </View>
                </View>
            </View>
        )
    }

    const Specification =()=>{
        return(
            <View>
                <Text style={styles.bluemedium}>Specification</Text>

                <View style={styles.box}>
                    <TouchableOpacity onPress={()=> {setList1(!List1)}} style={styles.row}>
                        <Text style={List1? styles.open : styles.close}>Features</Text>
                        { List1 ?
                        <AntDesign name="minus" size={30} color={Colors.Red}/> :
                        <AntDesign name="plus" size={30} color={Colors.Blue}/>
                        }
                    </TouchableOpacity>
                    {List1 ? <Text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Text>: null}
                </View>
                <View style={styles.box}>
                    <TouchableOpacity onPress={()=> {setList2(!List2)}} style={styles.row}>
                        <Text style={List2? styles.open : styles.close}>Vechical summary</Text>
                        { List2 ?
                        <AntDesign name="minus" size={30} color={Colors.Red}/> :
                        <AntDesign name="plus" size={30} color={Colors.Blue}/>
                        }
                    </TouchableOpacity>
                    {List2 ? <Text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Text>: null}
                </View>

            </View>
        )
    }

    return(
        <ScrollView style={styles.main}>

            <ImageCard />

            <View style={styles.row}>
                <Image style={styles.stemp1} source={images.icon7}/>
                <Image style={styles.stemp2} source={images.icon8}/>
                <Image style={styles.stemp3} source={images.icon9}/>
                <Image style={styles.stemp4} source={images.icon10}/>
            </View>
            
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.grey}>2018 Toyata C-HR 1.81</Text>
                    <TouchableOpacity style={styles.likebutton} onPress={()=>{ setLike(!like) }}>
                        {like ? <Image style={styles.like} source={images.icon11}/>
                        : <Image style={styles.like} source={images.icon12}/> }
                    </TouchableOpacity>
                </View>

                <Text style={styles.blue}>$50,000</Text>
                <View style={[styles.row, {justifyContent: 'flex-start'}]}>
                    <Text style={styles.close}>$168 </Text>
                    <Text>per month(PCP)</Text>
                    <Image style={styles.calculator} source={images.icon19}/>
                    <Image style={styles.calculator} source={images.icon20}/>
                </View>
                <View style={[styles.row, {marginTop: 10}]}>
                    <View>
                        <Text style={styles.smallblue}>Auction Ends in</Text>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.red}>00 Hours - 45 Minutes - 26 Seconds</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.bid}>
                        <Image style={styles.calculator} source={images.icon22}/>
                        <Text style={styles.blue}>Bid</Text>
                    </TouchableOpacity>
                </View>

                <ChatDatail />
                <OverView />
                <Specification />

            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    main:{
        flex: 1
    },
    paginationBoxStyle:{
        //position: "absolute",
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
        width: '95%',
        marginTop: 0,
        borderRadius: 20,
        marginTop: 10
    },
    stemp1:{
        height: 40,
        width: 40,
        position: 'absolute',
        zIndex: 1,
        marginLeft: 10,
    },
    stemp2:{
        height: 40,
        width: 40,
        position: 'absolute',
        zIndex: 1,
        left: 50,
    },
    stemp3:{
        height: 40,
        width: 40,
        position: 'absolute',
        zIndex: 1,
        left: 90
    },
    stemp4:{
        height: 40,
        width: 40,
        position: 'absolute',
        zIndex: 1,
        left: 130
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    likebutton:{
        height: 50,
        width: 50,
    },
    like:{
        height: '100%',
        width: '100%'
    }, 
    blue:{
        color: Colors.Blue,
        fontSize: 22,
        fontFamily: 'sans-serif-medium',
    },
    grey:{
        color: Colors.LightGrey,
        fontSize: 20,
        fontFamily: 'sans-serif-medium',
        marginTop: 20
    },
    container:{
        padding: 7
    },
    smallgrey:{
        color: Colors.LightGrey,
        fontSize: 13,
        fontFamily: 'sans-serif-medium',
    },
    calculator:{
         marginLeft: 5,
         //height: 20,
         //width: 20
    },
    smallblue:{
        color: Colors.Blue,
        fontSize: 17,
        fontFamily: 'sans-serif-medium',
    },
    btn:{
        elevation: 5,
        shadowColor: '#3D3D3D',
        borderRadius: 5,
        backgroundColor: 'white',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 7
    },
    bid:{
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignSelf: 'flex-end',
        flexDirection: 'row',
    },
    img:{
        height: 55,
        width: 55,
        borderRadius: 50,
        marginRight: 7,
        alignSelf: 'center'
    },
    leftgrey:{
        color: 'grey',
        fontSize: 13,
        alignSelf: 'flex-start'
    },
    black:{
        color:'black',
        fontSize: 15,
        marginTop: 5,
        fontFamily: 'sans-serif-medium',
    },
    number:{
        color: 'white',
        fontSize: 10
    },
    rating:{
        flexDirection: 'row',
        backgroundColor: Colors.Red,
        width: 50,
        padding: 3,
        marginLeft: 5,
        justifyContent: 'space-evenly',
    },
    bluesmall:{
        color: Colors.Blue,
        fontSize: 10
    },
    bluemedium: {
        color: Colors.Blue,
        fontSize: 17,
        fontFamily: 'sans-serif-medium',
        marginTop: 15
    },
    icon:{
        height: 20,
        width: 20,
        marginRight: 5
    },
    wrap:{
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    item:{
        width: Dimensions.get('screen').width/3.5,
        flexDirection: 'row',
        marginHorizontal: 5,
        marginTop: 10
    },
    box:{
        elevation: 5,
        shadowColor: '#3D3D3D',
        borderRadius: 5,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 7
    },
    open:{
        color: Colors.Red,
        fontFamily: 'sans-serif-medium',
    },
    close:{
        color: Colors.Blue,
        fontFamily: 'sans-serif-medium',
    },
    red:{
        color: Colors.Red,
        fontFamily: 'sans-serif-medium',
        padding: 3
    }
})
export default RentalCar;
