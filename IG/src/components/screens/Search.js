import React, { useState } from "react";
import {
  View,
  ScrollView,
  StatusBar,
  Dimensions,
  Image,
  Text,
} from "react-native";
import SearchBox from "../screenComponents/SearchBox";
import SearchContent from "../screenComponents/SearchContent";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Search = () => {
  const [value, setValue] = useState(null);

  const getData = (data) => {
    setValue(data);
  };
  const windowWidth = Dimensions.get("window").width;
  const windowHeigth = Dimensions.get("window").height;

  return (
    <View
      style={{
        marginTop: 20,
        width: "100%",
        heigth: "100%",
        backgroundColor: "white",
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBox />
        <SearchContent data={getData} />
      </ScrollView>
      {value ? (
        <View
          style={{
            position: "absolute",
            zIndex: 1,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(52,52,52,52,0.8)",
          }}
        >
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <View
            style={{
              position: "absolute",
              top: windowHeigth / 8,
              left: windowWidth / 25,
              backgroundColor: "white",
              width: 330,
              height: 465,
              borderRadius: 15,
              zIndex: 1,
              elevation: 50,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
                paddingHorizontal: 15,
              }}
            >
              <Image
                source={{ uri: value.avatar }}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  borderColor: "gray",
                  borderWidth: 0.5,
                }}
              />
              <Text style={{ fontSize: 12, fontWeight: "600", paddingLeft: 5 }}>
                {value.fullName}
              </Text>
            </View>
            <Image
              source={{ uri: value.content }}
              style={{ width: "100%", height: "80%" }}
            />
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: 5,
                }}
              >
                <Feather
                  name="heart"
                  size={24}
                  color="black"
                  style={{ marginRight: 10 }}
                />
                <Ionicons
                  name="person-outline"
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
                <Entypo
                  name="dots-three-vertical"
                  size={24}
                  color="black"
                  style={{ marginRight: 10 }}
                />
              </View>
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default Search;
