import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton({ title, color = "primary", onPress }) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold"
  }
});

export default AppButton;
