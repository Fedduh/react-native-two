import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";
import AppText from "./AppText";

function ListItem({ image, title, subTitle, IconComponent, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white
  },
  image: {
    width: 70,
    height: 70,
    // resizeMode: "cover",
    borderRadius: 35
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center"
  },
  title: {
    fontWeight: "500"
  },
  subTitle: {
    color: colors.medium
  }
});

export default ListItem;
