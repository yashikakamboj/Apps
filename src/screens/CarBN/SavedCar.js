import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from '../../../src/Constrants/Colors.js';
import images from '../../../src/Constrants/images'

const SavedCar = () => {

    const [like, setLike] = useState(false)

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



    return (
        <ScrollView>
            <View>
                <Text style={styles.text}> New</Text>
                <FlatList horizontal showsHorizontalScrollIndicator={false} data={data1} renderItem={Renderitems1} keyExtractor={item => item.title} />

                <Text style={styles.text}>Used</Text>
                <FlatList horizontal showsHorizontalScrollIndicator={false} data={data1} renderItem={Renderitems1} keyExtractor={item => item.title} />
               
                <Text style={styles.text}>Rent</Text>
                <FlatList horizontal showsHorizontalScrollIndicator={false} data={data1} renderItem={Renderitems1} keyExtractor={item => item.title} />

                <Text style={styles.text}>Auction</Text>
                <FlatList horizontal showsHorizontalScrollIndicator={false} data={data1} renderItem={Renderitems1} keyExtractor={item => item.title} />

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
        fontSize: 20,
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
        fontSize: 18,
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
    }
})
export default SavedCar;