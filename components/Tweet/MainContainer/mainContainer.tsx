// It is the right part (main), containing:
// (a) id/name of the person tweeting
// (b) tweet/content
// (c) footer -> retweet, like...

import React from "react";
import { Text, View, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import moment from "moment";

import { TweetType } from "../../../types";
import styles from "./styles";
import Footer from "./Footer";

export type MainContainerProps = {
    tweet: TweetType;
};

const MainContainer = ({ tweet }: MainContainerProps) => (
    <View style={styles.container}>

        {/* <Text style={{color:"white"}}>Helloooooooooooooo</Text> */}
        {/* user */}
        <View style={styles.tweetheaderContainer}>
            <View style={styles.tweetHeaderContainer}>
                <Text style={styles.name}>{tweet.user.name}</Text>
                <Text style={styles.username}> @{tweet.user.username}</Text>
                <Text style={styles.createdAt}>{moment(tweet.createdAt).fromNow()}</Text>
            </View>
            <View>
                <Entypo name={"chevron-down"} size={24} color={"grey"} />
            </View>
        </View>

        {/* content */}
        <View style={styles.content}>
            <Text>{tweet.content}</Text>
            {!!tweet.image && <Image style={styles.image} source={{ uri: tweet.image }} />}
        </View>

        {/* tweet footer */}
        <Footer tweet={tweet} />
    </View>
);

export default MainContainer;
