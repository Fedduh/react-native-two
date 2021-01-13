import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import AppText from "./Text";

function ListButton({ color, name, text }) {
  return (
    <TouchableOpacity style={styles.container}>
      <MaterialCommunityIcons
        style={[styles.icon, { backgroundColor: color }]}
        color={colors.white}
        name={name}
        size={20}
      />
      <AppText style={styles.text}> {text} </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10
  },
  icon: {
    width: 40,
    padding: 10,
    borderRadius: 20
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    paddingLeft: 5
  }
});

export default ListButton;
