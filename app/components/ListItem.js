import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";
import AppText from "./AppText";

function ListItem({ image, title, subTitle, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View style={styles.containerText}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15
  },
  image: {
    width: 70,
    height: 70,
    // resizeMode: "cover",
    borderRadius: 35,
    marginRight: 10
  },
  containerText: {},
  title: {
    fontWeight: "500"
  },
  subTitle: {
    color: colors.medium
  }
});

export default ListItem;
