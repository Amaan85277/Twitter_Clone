// This file contains all template for Tweet
// divided the tweet into two parts:
// left -> picture
// right/main-> Tweet

import React from "react";
import { ScrollView, View } from "react-native";

import LeftContainer from "./LeftContainer/leftContainer";
import MainContainer from "./MainContainer/mainContainer";

import { TweetType } from "../../types";
import styles from "./styles";

export type TweetProps={
    tweet: TweetType,
}

const Tweet = ({tweet}: TweetProps)=>(
    <View style={styles.container}>
        <LeftContainer user={tweet.user} />
        <MainContainer tweet={tweet}/>
    </View>
)

export default Tweet;
