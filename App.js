import React, { useState, useEffect } from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

import Button from "./app/components/Button";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import colors from "./app/config/colors";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    console.log("adding");
    console.log(uri);
    setImageUris([...imageUris, uri]);
    // setTimeout(() => {
    //   console.log(imageUris);
    // }, 500);
  };

  const handleRemove = (uri) => {
    setImageUris(
      imageUris.filter((imageUri) => {
        imageUri !== uri;
      })
    );
  };

  return (
    <Screen>
      {/* handleAdd does same as {(uri) => handleAdd(uri)} */}
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      ></ImageInputList>
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
