import React, { useState, useEffect } from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

import Button from "./app/components/Button";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import colors from "./app/config/colors";
import ImageInput from "./app/components/ImageInput";

export default function App() {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    // using expo imagepicker for asking permission
    const result = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!result.granted) {
      alert("you need to enable permission to access library");
    }
  };
  // pass empty array to only run once
  // this useEffect function cannot be async itself
  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <Screen>
      <ImageInput imageUri={imageUri} onChangeImage={(uri) => setImageUri(uri)}></ImageInput>
    </Screen>
  );
}

const styles = StyleSheet.create({
  tile: {
    borderRadius: 30,
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light
  }
});
