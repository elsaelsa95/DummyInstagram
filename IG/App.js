import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import * as React from "react";

import Home from "./src/components/screens/Home";
import Search from "./src/components/screens/Search";
import Post from "./src/components/screens/Post";
import Profile from "./src/components/screens/Profile";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "md-home" : "md-home-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "md-search" : "md-search-outline";
            } else if (route.name === "Post") {
              iconName = focused ? "md-add-circle" : "md-add-circle-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "at-circle" : "at-circle-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Post" component={Post} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
