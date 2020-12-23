import React, { useState } from "react";
import { StyleSheet, Switch, Text, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./app/components/AppText";
import AppPicker from "./app/components/AppPicker";
import Card from "./app/components/Card";

import Screen from "./app/components/Screen";

import AppButton from "./app/components/AppButton";
import AppTextInput from "./app/components/AppTextInput";
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
