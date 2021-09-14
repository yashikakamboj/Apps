import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,Modal, TouchableOpacity, Image, Dimensions, ScrollView, FlatList, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Colors from '../../../src/Constrants/Colors.js';
import images from '../../../src/Constrants/images'
import { RadioButton } from 'react-native-paper';

const Search = () => {

    const [like, setLike] = useState(false)
    const [X, setX] = useState(false)

    const [checked, setChecked] = useState('');

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
                    <View style={styles.modal}>
                        <Text style={styles.text}>Filter your search</Text>
                        <View style={styles.wrap}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.white}>Sedan</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.white}>Sedan</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.white}>Sedan</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.white}>Sedan</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.white}>Sedan</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.text}>Sort by</Text>
                        <View style={styles.row}>
                            <RadioButton
                                value="first"
                                status={ checked === 'first' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('first')}
                                color={Colors.Blue}
                            />
                            <Text style={styles.grey}>Low to High</Text>
                        </View>
                        <View style={styles.row}>
                            <RadioButton
                                value="second"
                                status={ checked === 'second' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('second')}
                                color={Colors.Blue}
                            />
                            <Text style={styles.grey}>High to Low</Text>
                        </View>
                        <View style={styles.row}>
                            <RadioButton
                                value="third"
                                status={ checked === 'third' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('third')}
                                color={Colors.Blue}
                            />
                            <Text style={styles.grey}>Popularity</Text>
                        </View>
                        <View style={styles.row}>
                            <RadioButton
                                value="fourth"
                                status={ checked === 'fourth' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('fourth')}
                                color={Colors.Blue}
                            />
                            <Text style={styles.grey}>Lorem Ipsum</Text>
                        </View>
                        <View style={styles.row}>
                            <TouchableOpacity onPress={()=> setX(false)} style={styles.btn}>
                                <Text style={styles.white}>Show Result</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.greybtn}>
                                <Text style={styles.grey}>Clear</Text>
                            </TouchableOpacity>
                        </View>
                    </View> 
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
        justifyContent: "flex-start"
    },
    modal:{
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        //top: Dimensions.get('screen').height/2,
        //flex: 1,
        paddingHorizontal:20,
        paddingVertical: 15,
        position: 'absolute',
        bottom:0
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
    }
})
export default Search;