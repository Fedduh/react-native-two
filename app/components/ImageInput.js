import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

import Icon from "./Icon";
import colors from "../config/colors";
import * as ImagePicker from "expo-image-picker";

function ImageInput({ imageUri, onChangeImage }) {
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log("error reading img", error);
    }
  };

  return (
    <View style={styles.tile}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.tile} />
      ) : (
        <TouchableOpacity onPress={selectImage}>
          <Icon name="camera" size={100} backgroundColor="transparent" iconColor={colors.medium} />
        </TouchableOpacity>
      )}
    </View>
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

export default ImageInput;
