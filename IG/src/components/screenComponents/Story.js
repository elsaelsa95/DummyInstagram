import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const Story = () => {
  const [stories, setStories] = useState([]);

  const fetchAllStories = async () => {
    try {
      const data = await fetch(
        "https://private-705ef-elsaelsa95.apiary-mock.com/stories"
      );
      const result = await data.json();
      // console.log(result)
      setStories(result.data);
    } catch (error) {
      console.log("Error Story:", error);
    }
  };

  useEffect(() => {
    fetchAllStories();
  });

  const navigation = useNavigation();

  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ paddingVertical: 10 }}
      >
        {stories?.map((value, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.navigate("StoryDetail", {
                id: value.id,
                avatar: value.avatar,
                fullName: value.fullName,
                story: value.story,
              })
            }
          >
            <View
              style={{
                flexDirection: "column",
                paddingHorizontal: 5,
                position: "relative",
              }}
            >
              {value.id == 1 ? (
                <Ionicons
                  name="add-circle"
                  size={24}
                  style={{
                    position: "absolute",
                    bottom: 15,
                    right: 3,
                    zIndex: 1,
                  }}
                  color="black"
                />
              ) : null}
              <View
                style={{
                  width: 60,
                  height: 60,
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
                    width: 50,
                    height: 50,
                    borderRadius: 100,
                    backgroundColor: "lightblue",
                  }}
                  source={{ uri: value.avatar }}
                />
              </View>
              <Text style={{ textAlign: "center", fontSize: 12 }}>
                {value.fullName}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Story;
