import React from "react";
import { TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const NewTweetButton = () => {

    const navigation = useNavigation();

  const newTweet = () => (
    navigation.navigate("NewTweet")
  )

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.button}
      onPress={newTweet}
    >
      <MaterialCommunityIcons name={"feather"} size={30} color={"white"} />
    </TouchableOpacity>
  );
};

export default NewTweetButton;
