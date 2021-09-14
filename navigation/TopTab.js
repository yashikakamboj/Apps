import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'
//import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import images from '../src/constrants/images'

const Tab= createMaterialTopTabNavigator();

const TopTab =()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="car1" component={car1}
                options={{
                    headerShown: false,
                    tabBarColor: '#fff',
                    tabBarIcon: () => (
                    <Image source={images.car1} style={styles.image}/> ),
            }}/>
            <Tab.Screen name="car2" component={car2} 
                options={{
                    tabBarColor: '#fff',
                    tabBarIcon: ({ color }) => (
                        <Image source={images.car2} style={styles.image}/>
                    ),
                }}
            />
            <Tab.Screen name="car3" component={car3}
                options={{
                    tabBarColor: '#fff',
                    tabBarIcon: ({ color }) => (
                        <Image source={images.car3} style={styles.image}/>
                    ),
                }}
            />
            <Tab.Screen name="car4" component={car4}
                options={{
                    tabBarColor: '#fff',
                    tabBarIcon: ({ color }) => (
                        <Image source={images.car4} style={styles.image}/>
                    ),
                }}
            />
            <Tab.Screen name="car5" component={car5}
                options={{
                    tabBarColor: '#fff',
                    tabBarIcon: ({ color }) => (
                        <Image source={images.car1} style={styles.image}/>
                    ),
                }}
            />
            <Tab.Screen name="car6" component={car6}
                options={{
                    tabBarColor: '#fff',
                    tabBarIcon: ({ color }) => (
                        <Image source={images.car1} style={styles.image}/>
                    ),
                }}
            />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    image:{
        height: 25,
        width: 45,
        alignSelf: 'center'
    }
})

export default TopTab;