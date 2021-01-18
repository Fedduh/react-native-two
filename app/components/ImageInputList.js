import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onAddImage, onRemoveImage }) {
  // creating ref to call method
  const scrollView = useRef();

  return (
    // View so the scrollView does not take 100% height
    <View>
      {/* default vertical scrollbar */}
      {/* horizontal is same as horizontal = true */}
      <ScrollView horizontal ref={scrollView} onContentSizeChange={() => scrollView.current.scrollToEnd()}>
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
      </ScrollView>
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
