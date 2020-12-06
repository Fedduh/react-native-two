import React from "react";
import { View, SafeAreaView, Platform, StyleSheet, StatusBar } from "react-native";
// import Constants from "expo-constants"; // alternative

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen]}>
      {/* iOs cannot apply padding to safeareaview */}
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    // paddingTop: Constants.statusBarHeight // alternative
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1 // take entire screen
  }
});

export default Screen;
