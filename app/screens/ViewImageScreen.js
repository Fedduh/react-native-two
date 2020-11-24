import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={[styles.icon, styles.closeIcon]}></View>
      <View style={[styles.icon, styles.deleteIcon]}></View>
      <Image source={require("../assets/chair.jpg")} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1
  },
  icon: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    zIndex: 10
  },
  deleteIcon: {
    right: 30,
    backgroundColor: colors.secondary
  },
  closeIcon: {
    backgroundColor: colors.primary,
    left: 30
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  }
});

export default ViewImageScreen;
