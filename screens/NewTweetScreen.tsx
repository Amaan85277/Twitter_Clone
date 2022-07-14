// This is the the screen that will pop-up for creating the new tweet

import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import ProfilePicture from '../components/ProfilePicture';

export default function NewTweetScreen() {

    const [tweet, setTweet] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const PostTweet = ()=>{
        console.log(
            `tweet => ${tweet}
            image => ${imageUrl}`
        );
    }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
            <AntDesign name={"close"} size={30} color={Colors.light.tint} />
            <TouchableOpacity
            style={styles.button}
            onPress={PostTweet}>
                <Text style={styles.buttonText}>Tweet</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.newTweetContainer}>
            <ProfilePicture image={"https://allthefujoshiunite.files.wordpress.com/2021/02/last.jpg"}/>
            <View style={styles.inputContainer}>

                <TextInput
                value={tweet}
                onChangeText={(value)=> setTweet(value)}
                multiline={true}
                numberOfLines={3}
                style={styles.tweetInput}
                placeholder='Type here...'/>

                <TextInput
                value={imageUrl}
                onChangeText={(value)=>setImageUrl(value)}
                style={styles.imageInput}
                placeholder='image-url (optional) '/>
            </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start"
    // justifyContent: 'center',
  },
  headerContainer:{
    // backgroundColor:"red",
    flexDirection:"row",
    justifyContent:"space-between",
    width:"100%",
    padding:15
  },
  button:{
    backgroundColor : Colors.light.tint,
    borderRadius:30
  },
  buttonText:{
    paddingHorizontal:20,
    paddingVertical:10,
    color:"white",
    fontWeight:"bold"
  },
  newTweetContainer:{
    flexDirection:"row",
    padding:15
  },
  inputContainer:{
    marginLeft:15
  },
  tweetInput:{
    height:100,
    maxHeight:300,
  },
  imageInput:{

  },
});

