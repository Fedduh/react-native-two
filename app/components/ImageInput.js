import React, { useEffect } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Image, Alert } from "react-native";

import Icon from "./Icon";
import colors from "../config/colors";
import * as ImagePicker from "expo-image-picker";

function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    // using expo imagepicker for asking permission
    const result = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!result.granted) {
      alert("you need to enable permission to access library");
    }
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        qualtiy: 0.5
      });
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log("error reading img ", error);
    }
  };

  const handlePress = () => {
    if (!imageUri) {
      selectImage();
    } else {
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        {
          text: "Yes",
          onPress: () => onChangeImage(null)
        },
        {
          text: "No"
        }
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.tile}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={[styles.tile, styles.image]} />
        ) : (
          <Icon name="camera" size={100} backgroundColor="transparent" iconColor={colors.medium} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  tile: {
    backgroundColor: colors.light,
    borderRadius: 15,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

export default ImageInput;
