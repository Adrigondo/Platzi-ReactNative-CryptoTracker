import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import { Avatar } from "react-native-paper";
import colors from "../../resources/colors";

import Searcher from "../general/Searcher";
import UserItemFriend from "./profileItems/UserItemFriend";

class UsersSearchScreen extends React.Component{
  state = {
    user: {
      friends: [
        {
          id: 1,
          username: "SeSentoEnElPastel",
          firstName: "Uriel",
          lastName: "Nevarez",
          picture: "https://gravatar.com/avatar/345345?d=identicon",
        },
        {
          id: 2,
          username: "EliasRebobo",
          firstName: "Elias",
          lastName: "Orozco",
          picture: "https://gravatar.com/avatar/345345?d=identicon",
        },
        {
          id: 4,
          username: "QuienEsEmi",
          firstName: "Emiliano",
          lastName: "Rivera",
          picture: "https://gravatar.com/avatar/345345?d=identicon",
        },
        {
          id: 5,
          username: "ElBabas",
          firstName: "Saulo",
          lastName: "Rivera",
          picture: "https://gravatar.com/avatar/345345?d=identicon",
        },
      ],
    },
    users: [
      {
        id: 1,
        username: "SeSentoEnElPastel",
        firstName: "Uriel",
        lastName: "Nevarez",
        picture: "https://gravatar.com/avatar/345345?d=identicon",
      },
      {
        id: 2,
        username: "EliasRebobo",
        firstName: "Elias",
        lastName: "Orozco",
        picture: "https://gravatar.com/avatar/345345?d=identicon",
      },
      {
        id: 3,
        username: "Adrigondo2",
        firstName: "Alejandro",
        lastName: "Dominguez",
        picture: "https://gravatar.com/avatar/345345?d=identicon",
      },
      {
        id: 4,
        username: "QuienEsEmi",
        firstName: "Emiliano",
        lastName: "Rivera",
        picture: "https://gravatar.com/avatar/345345?d=identicon",
      },
      {
        id: 5,
        username: "ElBabas",
        firstName: "Saulo",
        lastName: "Rivera",
        picture: "https://gravatar.com/avatar/345345?d=identicon",
      },
    ],
    usersFiltered: [],
  };
  handleSearch = (query) => {
    const { users } = this.state;

    const usersFiltered = users.filter(
      (user) => {
        const queryClean = query.toLowerCase();
        const usernameClean = user.username.toLowerCase();
        const nameClean = `${user.firstName} ${user.lastName}`.toLowerCase();
        return (
          usernameClean.includes(queryClean) ||
          nameClean.includes(queryClean)
        );
      }
    );
    this.setState({ usersFiltered: usersFiltered });
  }

  render() {
    const { usersFiltered } = this.state;
    return (
      <View style={styles.container}>
        <Searcher
          onChange={this.handleSearch}
          placeholder={"Search user..."}
        />
        <FlatList
          contentContainerStyle={styles.list}
          data={usersFiltered}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) =>
            <UserItemFriend
              user={item}
              icon={"account-multiple-plus"}
              color={colors.blue}
            />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
  list: {
    padding: 10,
  },
});

export default UsersSearchScreen;