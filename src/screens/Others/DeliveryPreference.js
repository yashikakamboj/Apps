// Driver App (Delivery Preference Screen)
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Alert} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DeliveryPreference = ()=>{

    const [X, setX] = useState(false);
    const [Y, setY] = useState(false);
    const [Z, setZ] = useState(false);
    
    const[ data , setdata] = useState([
        {time: "8:00 AM to 12:00 PM", id: '1'},
        {time: "12:00 PM to 4:00 PM", id: '2'},
        {time: "4:00 PM to 12:00 AM", id: '3'},
        {time: "12:00 AM to 4:00 PM", id: '4'},
        {time: "4:00 AM to 8:00 AM", id: '5'},
    ]);

    onChangeValue = (itemSelected , index)=>{
        const newData = data.map(item =>{
            if (item.id == itemSelected.id){
                return {
                    ...item,
                    selected: !(item.selected),
                }
            }
            return {
                ...item,
                selected: item.selected
            }
        })
        setdata(newData)
    }

    showItems=()=>{
        const listSelected = data.filter(item => item.selected == true)
        let contentAlert = '';
        listSelected.forEach(item => {
            contentAlert = contentAlert + `${item.id} . ` + item.time + '\n'; 
        })

        var show= "";
        if (X == true){
            show = show + "Pharmacy" + '\n'; 
        }
        if (Y == true){
            show = show + "Flowers" + '\n'; 
        }
        if (Z == true){
            show = show + "General" + '\n'; 
        }

        Alert.alert('Details', show + contentAlert);
    }

    const getHeader = () => {
        return(
            <ScrollView style={styles.mainView} showsVerticalScrollIndicator={false} >
            <Text style={styles.text}>Select Delivery Preference</Text>
            <View style={styles.row}>
                <View style={styles.btn}>
                    <TouchableOpacity style={ X ? styles.boxSelected : styles.boxNotSelected} onPress={()=>{setX(!X)}}>
                        <MaterialCommunityIcons name="pharmacy" size={45} color="white"/>
                    </TouchableOpacity>
                    <Text style={{color: 'white', marginTop: 10}}>Pharmacy</Text>
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity style={ Y ? styles.boxSelected : styles.boxNotSelected} onPress={()=>{setY(!Y)}} >
                        <MaterialCommunityIcons name="flower" size={45} color="white"/>
                    </TouchableOpacity>
                    <Text style={{color: 'white', marginTop: 10}}>Flowers</Text>
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity style={ Z ? styles.boxSelected : styles.boxNotSelected} onPress={()=>{setZ(!Z)}}>
                        <MaterialCommunityIcons name="bee-flower" size={45} color="white"/>
                    </TouchableOpacity>
                    <Text style={{color: 'white', marginTop: 10}}>General</Text>
                </View>
            </View>
            <Text style={styles.whiteText}>Select time slots</Text>
            <Text style={styles.grey}>Every four hour ride must a four hour gap</Text>
            </ScrollView>
        );
        
    };

    const getFooter = () => {

        return (
            <View style={styles.mainView}>
                <TouchableOpacity style={styles.button} onPress={showItems}>
                    <Text style={styles.buttonText}>Proceed</Text>
                </TouchableOpacity>
            </View>
        );
    };

    const renderitems = ({item, index})=>{
        return(
            <TouchableOpacity style={item.selected ? styles.selected : styles.notselected} onPress={()=>{onChangeValue(item, index)}}>
                <AntDesign name="clockcircleo" size={20} color="#BBC4C2" style={{marginLeft: 30}}/>
                <Text style={styles.listText}> {item.time} </Text>
            </TouchableOpacity>
        );
    }

    return(
        <View>
            <FlatList
                data={data}
                ListHeaderComponent={getHeader}
                ListFooterComponent={getFooter}
                style={{backgroundColor: 'black'}}
                renderItem={renderitems}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainView:{
        paddingHorizontal: 25,
        backgroundColor: 'black',
        
    },
    text:{
        fontSize: 35,
        color: 'white',
        marginTop: 25,
        marginHorizontal: 20
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 40,
    },
    boxSelected:{
        backgroundColor: 'grey',
        height: 80,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 10
    },
    boxNotSelected:{
        backgroundColor: '#3B3B3B',
        height: 80,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 10
    },
    btn:{
        alignItems: 'center'
    },
    whiteText:{
        color: 'white',
        fontSize: 30,
        marginTop: 45
    },
    grey:{
        color: 'grey',
        fontSize: 15,
        marginTop: 4,
        marginBottom: 10
    },
    listText:{
        color: 'white',
        fontSize: 17,
        width: '70%',
        height: 50,
        justifyContent: 'flex-start',
        paddingLeft: 20,
        paddingVertical: 10,
        //backgroundColor: 'red'
    },
    notselected :{
        flexDirection: 'row',
        marginTop: 15,
        backgroundColor: '#3B3B3B',
        borderRadius: 10,
        height: 60,
        width: '85%',
        marginHorizontal: 30,
        alignItems: 'center',
    },
    button : {
        backgroundColor: 'black',
        height: 55,
        width: '90%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
        borderColor: '#808080',
        borderWidth: 2,
        marginTop: 40,
        fontSize: 10,
        marginBottom: 20
  },
  buttonText:{
      fontSize: 15,
      color: 'white',
      marginHorizontal: 15
  },
  selected:{
      flexDirection: 'row',
      marginTop: 15,
      backgroundColor: 'grey',
      borderRadius: 10,
      height: 60,
      width: '85%',
      marginHorizontal: 30,
      alignItems: 'center',
  }
})
export default DeliveryPreference;

{/*
<FlatList
                data={DATA}
                scrollEnabled={false}
                extraData={selectedIds}
                renderItem={(item)=>{
                    return(
                        <TouchableOpacity onPress={() => handleSelectionMultiple(item.id)} style={item.id === selectedIds ? styles.selected : styles.listBtn}>
                            <AntDesign name="clockcircleo" size={20} color="grey" style={{marginLeft: 30}}/>
                            <Text style={styles.listText}> {item.time} </Text>
                        </TouchableOpacity>
                    );
                }}
            />

            const[ selectedIds , setState] = useState([]);

    handleSelectionMultiple = (id) => {
        var selectedIds = [...selectedIds]
     
        if(selectedIds.includes(id))
          selectedIds = selectedIds.filter(_id => _id !== id)
        else 
          selectedIds.push(id)
     
        setState({selectedIds})
     }

     onPress={()=>{alert("selected items: ", selectedIds)}
*/}