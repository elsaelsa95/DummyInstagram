import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

const Comment = () => {
  const [comments, setComments] = useState([]);

  const fetchAllComments = async () => {
    try {
      const data = await fetch(
        "https://private-705ef-elsaelsa95.apiary-mock.com/comments"
      );
      const result = await data.json();
      // console.log(result)
      setComments(result.data);
    } catch (error) {
      console.log("Error Comment :", error);
    }
  };

  useEffect(() => {
    fetchAllComments();
  });
  const [isLove, setIsLove] = useState(false);

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {comments?.map((value, index) => (
          <View
            key={index}
            style={{
              marginBottom: -10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", margin: 10 }}>
              <View
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: "white",
                  borderWidth: 1.8,
                  borderRadius: 100,
                  borderColor: "orange",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
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
              </View>
              <View style={{ marginLeft: 5 }}>
                <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                  {value.fullName}
                </Text>
                <Text style={{ fontSize: 12 }}> {value.comments}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={{ marginRight: 20, marginTop: 15 }}
              onPress={() => {
                setIsLove(!isLove);
              }}
            >
              {isLove ? (
                <FontAwesome name="heart" size={15} color="red" />
              ) : (
                <FontAwesome name="heart-o" size={15} color="black" />
              )}
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Comment;
