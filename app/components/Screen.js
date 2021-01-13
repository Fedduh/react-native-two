import React from "react";
import { View, SafeAreaView, Platform, StyleSheet, StatusBar } from "react-native";
// import Constants from "expo-constants"; // alternative

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {/* iOs cannot apply padding to safeareaview */}
      {/* child also flex 1 to take full size of parent */}
      <View style={[style, styles.view]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    // paddingTop: Constants.statusBarHeight // alternative
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1 // take entire screen
  },
  view: {
    flex: 1
  }
});

export default Screen;
