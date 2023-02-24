import React from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const StoryDetail = ({ route }) => {
  const { id, avatar, fullName, story } = route.params;
  const navigation = useNavigation();

  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "black",
        flexDirection: "column",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 5,
          padding: 15,
          position: "absolute",
          marginTop: 20,
          marginLeft: 15,
          alignItems: "center",
        }}
      >
        <Image
          style={{
            reziseMode: "cover",
            width: 40,
            height: 40,
            borderRadius: 100,
            backgroundColor: "lightblue",
          }}
          source={{ uri: avatar }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "85%",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 15,
              color: "white",
              marginLeft: 15,
            }}
          >
            {fullName}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <AntDesign name="close" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          flexDirection: "row",
          top: 80,
          padding: 10,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Image
          style={{
            width: "100%",
            height: 500,
          }}
          source={{ uri: story }}
        />
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 10,
          flexDirection: "row",
          padding: 10,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <TextInput
          placeholder="Send Message"
          placeholderTextColor="white"
          style={{
            borderColor: "white",
            borderRadius: 25,
            borderWidth: 1,
            width: "85%",
            height: 50,
            padding: 15,
          }}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons
            name="paper-plane-outline"
            size={30}
            color="white"
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StoryDetail;
