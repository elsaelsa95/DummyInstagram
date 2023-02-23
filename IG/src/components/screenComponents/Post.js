import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Post = () => {
  const [posts, setPosts] = useState([]);

  const fetchAllPosts = async () => {
    const data = await fetch(
      "https://private-705ef-elsaelsa95.apiary-mock.com/posts"
    );
    const result = await data.json();
    // console.log(result)
    setPosts(result.data);
  };

  useEffect(() => {
    fetchAllPosts();
  });
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {posts?.map((value, index) => (
          <TouchableOpacity key={index}>
            <View style={{ flexDirection: "row", margin: 10 }}>
              <Image
                style={{
                  reziseMode: "cover",
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
                width: 370,
                height: 300,
                borderWidth: 0.3,
                borderColor: "silver",
              }}
              source={{ uri: value.post }}
            />
            <View style={{ flexDirection: "row", margin: 10 }}>
              {value.isLove === true ? (
                <FontAwesome name="heart" size={25} color="red" />
              ) : (
                <FontAwesome name="heart-o" size={25} color="black" />
              )}
              <AntDesign
                name="message1"
                size={25}
                color="black"
                style={{ marginLeft: 20 }}
              />
              <Ionicons
                name="paper-plane-outline"
                size={25}
                color="black"
                style={{ marginLeft: 20 }}
              />
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text>{value.totalLoves} likes</Text>
              <Text style={{ fontWeight: "bold", marginRight: 5 }}>
                {value.caption}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Post;
