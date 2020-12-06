import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

const initialListings = [
  {
    id: 1,
    image: require("../assets/jacket.jpg"),
    title: "Red jacket for sale",
    price: "$100"
  },
  {
    id: 2,
    image: require("../assets/couch.jpg"),
    title: "Couch in great condition",
    price: "$1000"
  }
];

function ListingsScreen(props) {
  const [listings, setListings] = useState(initialListings);

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Card image={item.image} title={item.title} subTitle={item.price} />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light
  }
});

export default ListingsScreen;
