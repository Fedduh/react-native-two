import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";

import { AppForm, AppFormField, SubmitButton, AppFormPicker, FormImagePicker } from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
  images: Yup.array().min(1, "Please select at least one image.")
});

const categories = [
  { label: "Furniture", value: 1, icon: "floor-lamp", backgroundColor: "#fc5c65" },
  { label: "Cars", value: 2, icon: "car", backgroundColor: "#fd9644" },
  { label: "Cameras", value: 3, icon: "camera", backgroundColor: "#fed330" },
  { label: "Movies & Music", value: 4, icon: "headphones", backgroundColor: "#4b7bec" }
];

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ title: "", price: "", category: null, description: "", images: [] }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField name="title" placeholder="Title" maxLength={255} />
        <AppFormField name="price" placeholder="Price" keyboardType="numeric" maxLength={8} width={120} />
        <AppFormPicker
          name="category"
          placeholder="Category"
          items={categories}
          width={"50%"}
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
        />
        <AppFormField name="description" placeholder="Description" multiline numberOfLines={3} />

        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});

export default ListingEditScreen;
