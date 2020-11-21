import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={[styles.container, styles.text]}>
      <Text style={styles.text}>Hello!</Text>
    </SafeAreaView>
  );
}
// 1.15.51 in video -> modules voor padding android top

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange"
  },
  text: {
    color: "white"
  }
});
