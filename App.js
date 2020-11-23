import React from "react";
import { StyleSheet, SafeAreaView, Text, StatusBar, Platform, View, useWindowDimensions } from "react-native";

export default function App() {
  console.log(useWindowDimensions());
  return (
    <View style={styles.container}>
      <View style={styles.main} />
      <View style={styles.main2} />
      <View style={styles.main3} />
    </View>
  );
}
// 1.40.44 : flex basis

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  main: {
    backgroundColor: "blue",
    width: 100,
    height: 100
  },
  main2: {
    backgroundColor: "gold",
    width: 100,
    height: 100
  },
  main3: {
    backgroundColor: "tomato",
    width: 100,
    height: 100
  }
});
