import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Story = () => {
  const [stories, setStories] = useState([]);

  const fetchAllStories = async () => {
    const data = await fetch(
      "https://private-705ef-elsaelsa95.apiary-mock.com/stories"
    );
    const result = await data.json();
    // console.log(result)
    setStories(result.data);
  };

  useEffect(() => {
    fetchAllStories();
  });

  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ paddingVertical: 10 }}
      >
        {stories?.map((value, index) => (
          <TouchableOpacity key={index}>
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
                    reziseMode: "cover",
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