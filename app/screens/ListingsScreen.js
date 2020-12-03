import React, { useState } from "react";
import { FlatList } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";

const initialListings = [
  {
    id: 1,
    image: require("../assets/jacket.jpg"),
    title: "Red jacket for sale",
    subTitle: "$100"
  },
  {
    id: 2,
    image: require("../assets/couch.jpg"),
    title: "Couch in great condition",
    subTitle: "$1000"
  }
];

function ListingsScreen(props) {
  const [listings, setListings] = useState(initialListings);

  return (
    <Screen>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Card image={item.image} title={item.title} subTitle={item.subTitle} />}
      />
    </Screen>
  );
}

export default ListingsScreen;
