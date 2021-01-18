import React, { useState } from "react";
import { StyleSheet } from "react-native";

import Screen from "./app/components/Screen";
import colors from "./app/config/colors";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return <ListingEditScreen />;
}

const styles = StyleSheet.create({
  tile: {
    borderRadius: 30,
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light
  }
});
