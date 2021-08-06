import React, {useState, useEffect, useCallback} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions,} from 'react-native';
import { GiftedChat, Bubble, Send, InputToolbar } from 'react-native-gifted-chat'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Chatting =()=>{

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
          {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
          },
          
        ])
    }, [])

      const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
      }, [])

      const renderbubble =(props)=>{
          return(
            <Bubble
                {...props}
                wrapperStyle={{
                    left: {
                        backgroundColor: 'grey',
                        borderTopLeftRadius: 15,
                        borderRadius: 100, 
                    },
                    right:{
                        backgroundColor: '#3B3B3B',
                        borderTopRightRadius: 15,
                        borderRadius: 100,
                    }
                }}
                textStyle={{
                    left:{ color: 'white'},
                    right:{ color: 'white'}
                }}
                containerToPreviousStyle={{
                    right: { borderTopRightRadius: 15 },
                    left: { borderTopLeftRadius: 15 },
                }}
                  containerToNextStyle={{
                    right: { borderTopRightRadius: 15 },
                    left: { borderTopLeftRadius: 15 },
                }}
                  containerStyle={{
                    right: { borderTopRightRadius: 15 },
                    left: { borderTopLeftRadius: 15 },
                }}
            />
          )
      }

      const rendersend =(props)=>{
          return(
              <Send {...props}>
                <View style={{ backgroundColor: 'grey', height: 50, width: 50, justifyContent: 'center', alignItems: 'center', marginRight: 0, marginBottom: 0}}> 
                    <MaterialIcons name="send" color={'white'} size={32} style={{}}/>
                </View>
               </Send>
          )
      }

      const renderinput = (props)=>{
          return(
              <InputToolbar
                {...props}
                containerStyle={{
                    backgroundColor: 'black',
                    height: 50
                }}
              />
          )
      }

   

    return(
        <View style={styles.main}>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
                renderTime = {()=> null}
                renderDay= {()=> null}
                renderAvatar={() => null}
                placeholder= "Type message here"
                renderBubble={renderbubble}
                alwaysShowSend
                renderSend={rendersend}
                renderInputToolbar={renderinput}
                
            />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'black'
    }
})

export default Chatting ;
