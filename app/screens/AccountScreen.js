import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeperator from "../components/ListItemSeperator";
import Screen from "../components/Screen";
import colors from "../config/colors";

const menuItems = [
  {
    title: "My listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary
    }
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary
    }
  }
];

function MyAccount(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem image={require("../assets/mosh.jpg")} title={"Fedde Tilma"} subTitle={"fedde@email.com"} />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
            />
          )}
        />
      </View>
      <ListItem title="Log Out" IconComponent={<Icon name="logout" backgroundColor={colors.tertiary} />} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light
  },
  container: {
    marginVertical: 20
  }
});

export default MyAccount;
