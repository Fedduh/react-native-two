import React from "react";
import { StyleSheet, SafeAreaView, Platform, View, useWindowDimensions, Text, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./app/assets/background.jpg")} style={styles.backgroundImage} />
      {/* logo */}
      <View style={styles.iconContainer}>
        <Image source={require("./app/assets/logo-red.png")} style={styles.icon} />
        <Text style={styles.text}>Sell What you Dont Need</Text>
      </View>
      {/* footer */}
      <View style={styles.footer}>
        <View style={[styles.footerbar, styles.red]}></View>
        <View style={[styles.footerbar, styles.green]}></View>
      </View>
    </View>
  );
}
// 1.46.55 : flex basis

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue"
  },
  backgroundImage: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    ...StyleSheet.absoluteFill
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%"
  },
  icon: {
    top: 100,
    width: 80,
    height: 80
  },
  text: {
    fontSize: 12
  },
  footer: {
    position: "absolute",
    bottom: 0,
    height: 120,
    width: "100%"
  },
  footerbar: {
    height: 60,
    width: "100%"
  },
  red: {
    backgroundColor: "tomato"
  },
  green: {
    backgroundColor: "#539597"
  }
});
