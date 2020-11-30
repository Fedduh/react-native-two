import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={[styles.icon, styles.closeIcon]}>
        <MaterialCommunityIcons name="close" color="white" size={35}></MaterialCommunityIcons>
      </View>
      <View style={[styles.icon, styles.deleteIcon]}>
        <MaterialCommunityIcons name="trash-can-outline" color="white" size={35}></MaterialCommunityIcons>
      </View>
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
    position: "absolute",
    top: 10,
    zIndex: 10,
    backgroundColor: colors.black
  },
  deleteIcon: {
    right: 20
  },
  closeIcon: {
    left: 20
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  }
});

export default ViewImageScreen;
