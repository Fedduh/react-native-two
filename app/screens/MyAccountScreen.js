import React from "react";
import { View, StyleSheet } from "react-native";
import ListButton from "../components/ListButton";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";

import colors from "../config/colors";

import Screen from "../components/Screen";

function MyAccount(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <ListItem image={require("../assets/mosh.jpg")} title={"Fedde Tilma"} subTitle={"fedde@email.com"} />
      </View>
      <View style={styles.container}>
        <ListItem
          title="My Listings"
          ImageComponent={<Icon name="format-list-bulleted" backgroundColor={colors.primary} />}
        />
        <ListItem
          title="My Messages"
          ImageComponent={<Icon name="email" backgroundColor={colors.secondary} />}
        />
      </View>
      <ListItem title="Log Out" ImageComponent={<Icon name="logout" backgroundColor={colors.tertiary} />} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 28
  }
});

export default MyAccount;
