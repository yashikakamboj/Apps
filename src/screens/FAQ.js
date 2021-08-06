import React, { useState, Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FAQ = ()=>{

    const [isSelected, setIS] = useState(false);

    _onpress =(id) => {
        return(
            setIS(prev=> !prev)
        )
        
    };
     
    ListItem = ({item})=>{
            return (
                <TouchableOpacity style={styles.box} onPress={()=> _onpress(item.id)}>
                    <View style={styles.row}>
                        <Text style={styles.text1}> {item.head} </Text>
                        <MaterialIcons name="keyboard-arrow-down" size={30} color="white" style={{marginLeft: 30}}/>
                    </View>
                    <View style={styles.detail}>
                        {isSelected ? <Text style={styles.text2}>{item.body}</Text> : null}
                    </View>
                </TouchableOpacity>
        );
    }

    renderitems = ({item}) => {
        return(
            <ListItem item={item} />
        )
    }

    return(
        <View style={styles.main}>
            <FlatList
                data= {data}
                keyExtractor={(index, _)=> index + ''}
                renderItem={renderitems}
            />
        </View>
    )
}

const data =[
    {id: 1, head: "Lorem ipsum 1", body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'},
    {id:2, head: "Lorem ipsum 2", body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'},
    {id:3, head: "Lorem ipsum 3", body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'},
    {id:4, head: "Lorem ipsum 4", body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'},
    {id:5, head: "Lorem ipsum 5", body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'},
    {id:6, head: "Lorem ipsum 6", body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'},
    {id:7, head: "Lorem ipsum 7", body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'},
    {id:8, head: "Lorem ipsum 8", body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'},
    {id:9, head: "Lorem ipsum 9", body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'},
    {id:10, head: "Lorem ipsum 10",body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'},
    
]

const styles = StyleSheet.create({
    main:{
        backgroundColor: 'black',
        flex: 1,
        paddingTop: 10,
        justifyContent: 'center' 
    },
    box:{
        backgroundColor: 'grey',
        marginBottom: 10,
        width: '90%',
        height: '100%',
        borderRadius: 10,
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignSelf: 'center',

    },
    text1:{
        color: 'white',
    },
    text2:{
        color: 'white',
        borderTopColor: "white",
        borderTopWidth: 1,
        paddingVertical: 5
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    },
    detail:{
        
    },
})
export default FAQ;