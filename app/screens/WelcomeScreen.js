import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import AppButton from "../components/Button";

function WelcomeScreen(props) {
  return (
    <ImageBackground source={require("../assets/background.jpg")} style={styles.background} blurRadius={5}>
      {/* logo */}
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      {/* buttons */}
      <View style={styles.buttonContainer}>
        <AppButton title="login" onPress={() => console.log("login")} />
        <AppButton title="register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center"
  },
  logo: {
    width: 100,
    height: 100
  },
  tagline: {
    paddingVertical: 20,
    fontWeight: "600",
    fontSize: 25
  },
  buttonContainer: {
    padding: 20,
    width: "100%"
  }
});

export default WelcomeScreen;
