import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
  return (
    <View>
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
    </View>
  );
};

export default Home;