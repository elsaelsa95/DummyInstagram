import React from "react";
import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBox = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItem: "center",
        width: "100%",
        paddingVertical: 10,
        position: "relative",
      }}
    >
      <Ionicons
        name="md-search-outline"
        style={{
          fontSize: 20,
          opacity: 0.7,
          position: "absolute",
          zIndex: 1,
          left: 25,
        }}
      />
      <TextInput
        placeholder="search"
        placeholderTextColor="#909090"
        style={{
          width: "95%",
          backgroundColor: "#EBEBEB",
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          fontSize: 15,
          marginLeft: 7,
          padding: 5,
          paddingLeft: 50,
        }}
      />
    </View>
  );
};

export default SearchBox;
