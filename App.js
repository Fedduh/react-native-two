import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./app/components/AppText";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Card from "./app/components/Card";

import AppButton from "./app/components/AppButton";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  return <MessagesScreen></MessagesScreen>;
}

const styles = StyleSheet.create({
  main: {
    padding: 20,
    marginTop: 20,
    backgroundColor: "#f8f4f4"
  }
});
