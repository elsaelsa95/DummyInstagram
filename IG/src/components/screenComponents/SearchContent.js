import React, { useEffect, useState } from "react";
import { View, ScrollView, Image, TouchableOpacity } from "react-native";

const SearchContent = (props) => {
  const [contents, setContents] = useState([]);

  const fetchAllContents = async () => {
    try {
      const data = await fetch(
        "https://private-705ef-elsaelsa95.apiary-mock.com/contents"
      );
      const result = await data.json();
      setContents(result.data);
    } catch (error) {
      console.log("Error Contents:", error);
    }
  };

  useEffect(() => {
    fetchAllContents();
  });

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {contents?.map((value, index) => (
            <View key={index}>
              <TouchableOpacity
                style={{ padding: 2 }}
                onPressIn={() => {
                  // console.log(value)
                  props.data(value);
                }}
                onPressOut={() => {
                  props.data(null);
                }}
              >
                <Image
                  style={{
                    width: 115,
                    height: 125,
                  }}
                  source={{ uri: value.content }}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchContent;
