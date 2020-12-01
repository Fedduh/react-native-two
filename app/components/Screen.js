import React from "react";
import { FlatList, SafeAreaView, Platform, StyleSheet, StatusBar } from "react-native";
// import Constants from "expo-constants"; // alternative

function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    // paddingTop: Constants.statusBarHeight // alternative
  }
});

export default Screen;
