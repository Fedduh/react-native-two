import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import Icon from "../components/Icon";
import AppText from "./Text";

function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 30,
    alignItems: "center",
    width: "33%"
  },
  label: {
    marginTop: 5,
    textAlign: "center"
  }
});

export default CategoryPickerItem;
