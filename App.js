import React, { useState } from "react";
import { StyleSheet, Switch, Text, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./app/components/Text";
import AppPicker from "./app/components/Picker";
import Card from "./app/components/Card";

import Screen from "./app/components/Screen";

import AppButton from "./app/components/Button";
import AppTextInput from "./app/components/TextInput";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return <ListingEditScreen></ListingEditScreen>;
}

const styles = StyleSheet.create({
  main: {
    padding: 20,
    marginTop: 20
  },
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  }
});
