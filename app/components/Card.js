import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import AppText from "./Text";
import colors from "../config/colors";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText numberOfLines={1}>{title}</AppText>
        <AppText style={styles.subTitle} numberOfLines={2}>
          {subTitle}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    width: "100%",
    overflow: "hidden" // needed so overflow of img is hidden (round borders)
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    backgroundColor: "#f8f4f4"
  },
  detailsContainer: {
    padding: 20
  },
  subTitle: {
    marginTop: 7,
    color: colors.secondary,
    fontWeight: "bold"
  }
});

export default Card;
