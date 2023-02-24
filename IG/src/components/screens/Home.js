import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

import Story from "./../screenComponents/Story"
import Post from "./../screenComponents/Post"

const Home = () => {
  const [fontsLoaded] = useFonts({
    "LobsterTwo-Regular": require("./../../../assets/fonts/LobsterTwo-Regular.ttf"),
  });
  if (!fontsLoaded) {
    // return (console.log("Loading..."))
    return (
      <View>
        <Text> Loading ...</Text>
      </View>
    )
  }

  return (
    <View style= {{ backgroundColor:"white" }}>
      <View
        style={{
          marginTop: 40,
          marginLeft: 10,
          marginRight: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontFamily: "LobsterTwo-Regular", fontSize: 25 }}>
          DummyInstagram
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Feather
            name="heart"
            size={24}
            color="black"
            style={{ marginRight: 10 }}
          />
          <Ionicons
            name="paper-plane-outline"
            size={24}
            color="black"
            style={{ marginRight: 10 }}
          />
        </View>
      </View>
        <Story/>
        <Post/>
    </View>
  );
};

export default Home;
