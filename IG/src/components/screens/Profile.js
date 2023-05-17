import React from "react";
import { View } from "react-native";
import { ProfileBody } from "../screenComponents/ProfileBody";

const Profile = () => {
  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
      <View style={{ width: "100%", padding: 10 }}>
        <ProfileBody
          name="Angelo Carl"
          accountName="Angelooo"
          profileImage="https://picsum.photos/id/1/200/300"
          bio="Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.
          Aliquam non mauris."
          posts="3"
          followers="100"
          following="137"
        />
      </View>
    </View>
  );
};

export default Profile;
