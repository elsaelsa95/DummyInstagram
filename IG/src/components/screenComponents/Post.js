import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import Comment from "./Comment";

const Post = () => {
  const [posts, setPosts] = useState([]);

  const fetchAllPosts = async () => {
    try {
      const data = await fetch(
        "https://private-705ef-elsaelsa95.apiary-mock.com/posts"
      );
      const result = await data.json();
      // console.log(result)
      setPosts(result.data);
    } catch (error) {
      console.log("Error Post:", error);
    }
  };

  useEffect(() => {
    fetchAllPosts();
  });

  const [shouldShow, setShouldShow] = useState(true);
  const [totalLoves, setTotalLoves] = useState(95);
  const [isLove, setIsLove] = useState(false);

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {posts?.map((value, index) => (
          <View key={index} style={{ marginBottom: 10 }}>
            <View style={{ flexDirection: "row", margin: 10 }}>
              <Image
                style={{
                  // reziseMode: "cover",
                  width: 30,
                  height: 30,
                  borderRadius: 100,
                  backgroundColor: "lightblue",
                }}
                source={{ uri: value.avatar }}
              />
              <Text style={{ margin: 5, fontWeight: "bold" }}>
                {value.fullName}
              </Text>
            </View>
            <Image
              style={{
                width: "100%",
                height: 300,
                borderWidth: 0.3,
                borderColor: "silver",
              }}
              source={{ uri: value.post }}
            />
            <View key={index} style={{ flexDirection: "row", margin: 10 }}>
              <TouchableOpacity
                onPress={() => {
                  if (isLove) {
                    setTotalLoves((prevCount) => prevCount - 1);
                  } else {
                    setTotalLoves((prevCount) => prevCount + 1);
                  }
                  setIsLove(!isLove);
                }}
              >
                {isLove ? (
                  <FontAwesome name="heart" size={25} color="red" />
                ) : (
                  <FontAwesome name="heart-o" size={25} color="black" />
                )}
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  name="message1"
                  size={25}
                  color="black"
                  style={{ marginLeft: 20 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons
                  name="paper-plane-outline"
                  size={25}
                  color="black"
                  style={{ marginLeft: 20 }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: "bold" }}>{totalLoves} likes</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontWeight: "bold" }}>
                  {value.fullName}{" "}
                  <Text style={{ fontWeight: "normal", alignItems: "stretch" }}>
                    {value.caption}
                  </Text>
                </Text>
              </View>
              <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
                <Text style={{ marginRight: 5, opacity: 0.5 }}>
                  View all comments
                </Text>
              </TouchableOpacity>
              {!shouldShow ? null : <Comment />}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Post;
