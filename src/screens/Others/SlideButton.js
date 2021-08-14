{/*import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useSharedValue } from 'react-native-reanimated';
import { transform } from '@babel/core';

const SlideButton =()=>{

  const X = useSharedValue(0);
  const animatedGestureHandler = useAnimatedGestureHandler({
    onActive: (e)=>{
      X.value = e.translationX;
    }
  });
  const AnimatedStyles ={
    swipeable: useAnimationStyle(()=>{
      transform: [{translationX: X.value}]
    })
  }

  return(
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View style={{backgroundColor: 'black', flex: 0.6}}></View>
      <View style={{backgroundColor: '#3B3B3B', flex: 0.4, borderTopLeftRadius: 50, borderTopRightRadius: 50, alignItems: 'center'}}>
          <Text style={{color: 'white', fontSize: 17, marginTop: 70}}>Send Notification to Client</Text>
          <View style={styles.btn}>
            <PanGestureHandler onGestureEvent={animatedGestureHandler}>
              <Animated.View style={[styles.square, AnimatedStyles.swipeable]}>
                <MaterialIcons name="keyboard-arrow-right" color="white" size={45}/>
              </Animated.View>
            </PanGestureHandler>
          </View>
      </View>
    </View>
  );
};
const styles= StyleSheet.create({
  btn:{
    marginTop: 30,
    backgroundColor: 'black',
    height: 70,
    width: 300,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10
  },
  square:{
    height: 55,
    width: 85,
    backgroundColor: 'grey',
    borderRadius: 10,
    marginVertical: 5,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
}) 
export default SlideButton; */}
