import React from "react";
import { View, StyleSheet, Text } from "react-native";

import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onAddImage, onRemoveImage }) {
  return (
    <View style={styles.container}>
      {/* Showing current selected images */}
      {imageUris.map((uri) => (
        <View key={uri} style={styles.image}>
          <ImageInput imageUri={uri} onChangeImage={() => onRemoveImage(uri)} />
        </View>
      ))}
      {/* always space to add new image */}
      <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  image: {
    marginRight: 10
  }
});

export default ImageInputList;