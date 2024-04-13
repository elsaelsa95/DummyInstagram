import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const ProfileBody = ({
  name,
  accountName,
  profileImage,
  bio,
  posts,
  followers,
  following,
}) => {
  return (
    <View>
      {accountName ? (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                marginTop: 30,
                marginLeft: 5,
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {accountName}
            </Text>
          </View>
        </View>
      ) : null}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          paddingVertical: 20,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: profileImage }}
            style={{
              // resizeMode: "cover",
              width: 80,
              height: 80,
              borderRadius: 100,
            }}
          />
          <Text
            style={{
              paddingVertical: 5,
              fontWeight: "bold",
            }}
          >
            {name}
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{posts}</Text>
          <Text>Posts</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{followers}</Text>
          <Text>Followers</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{following}</Text>
          <Text>Following</Text>
        </View>
      </View>
      <Text style={{ margin: 5 }}>{bio}</Text>
      <TouchableOpacity>
        <View
          style={{
            width: "100%",
            height: 35,
            borderRadius: 5,
            borderColor: "#DEDEDE",
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <Text
            style={{
              fontWeigth: "bold",
              fontSize: 14,
              opacity: 0.8,
            }}
          >
            Edit Profile
          </Text>
        </View>
      </TouchableOpacity>
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              alignItems: "center",
              margin: 10,
            }}
          >
            <MaterialIcons name="grid-on" size={24} color="black" />
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Image
              style={{
                width: 110,
                height: 110,
              }}
              source={{ uri: "https://picsum.photos/id/1/200/300" }}
            />
            <Image
              style={{
                width: 110,
                height: 110,
              }}
              source={{ uri: "https://picsum.photos/id/3/200/300" }}
            />
            <Image
              style={{
                width: 110,
                height: 110,
              }}
              source={{ uri: "https://picsum.photos/id/4/200/300" }}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ProfileBody;
