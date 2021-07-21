import React from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  FlatList,
} from "react-native";
import {
  Avatar,
  Title,
  Caption,
  TouchableRipple,
} from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ProfileItemRender from "./profileItems/ProfileItemRender";

import colors from "../../resources/colors";
import GeneralStyles from "../../resources/generalStyles";

class ProfileScreen extends React.Component {
  state = {
    user: {
      profile: {
        username: "Adrigondo",
        firstName: "Adrian",
        lastName: "González",
        phone: "6141520913",
        email: "theadrigondo24@gmail.com",
        age: "18",
        genre: "Man",
        scholarship: "Bachellor",
        picture: "https://gravatar.com/avatar/74b143021b70bb936f4edbc9e11ecb1b?d=identicon",
      },
      friends: [
        {
          username: "SeSentoEnElPastel",
          firstName: "Uriel",
          lastName: "Nevarez",
          picture: "https://gravatar.com/avatar/345345?d=identicon",
        },
        {
          username: "EliasRebobo",
          firstName: "Elias",
          lastName: "Orozco",
          picture: "https://gravatar.com/avatar/345345?d=identicon",
        },
        {
          username: "QuienEsEmi",
          firstName: "Emiliano",
          lastName: "Rivera",
          picture: "https://gravatar.com/avatar/345345?d=identicon",
        },
        {
          username: "ElBabas",
          firstName: "Saulo",
          lastName: "Rivera",
          picture: "https://gravatar.com/avatar/345345?d=identicon",
        },
      ],
      groups: [
        {
          id: 1,
          name: "Bobos",
          picture: "https://gravatar.com/avatar/345345?d=identicon",
          members: [
            {
              username: "EliasRebobo",
              firstName: "Elias",
              lastName: "Orozco",
              picture: "https://gravatar.com/avatar/345345?d=identicon",
            },
            {
              username: "QuienEsEmi",
              firstName: "Emiliano",
              lastName: "Rivera",
              picture: "https://gravatar.com/avatar/345345?d=identicon",
            },
          ]
        },
        {
          id: 2,
          name: "Ya antojaron",
          picture: "https://gravatar.com/avatar/345345?d=identicon",
          members: [
            {
              username: "SeSentoEnElPastel",
              firstName: "Uriel",
              lastName: "Nevarez",
              picture: "https://gravatar.com/avatar/345345?d=identicon",
            },
            {
              username: "ElBabas",
              firstName: "Saulo",
              lastName: "Rivera",
              picture: "https://gravatar.com/avatar/345345?d=identicon",
            },
          ]
        },

      ]
    },
    form: {},
  }
  componentDidMount() {
    const { profile } = this.state.user;
    this.setState({
      form: {
        phone: profile.phone,
        email: profile.email,
        age: profile.age,
        genre: profile.genre,
        scholarship: profile.scholarship,
        picture: profile.picture,
      }
    })
  }
  handleList = (selected) => {
    if (selected === "friends") {
      const { isFriendsActive } = this.state;
      this.setState({
        isFriendsActive: !isFriendsActive,
        isGroupsActive: false,
      });
    } else if (selected === "groups")  {
      const { isGroupsActive } = this.state;
      this.setState({
        isFriendsActive: false,
        isGroupsActive: !isGroupsActive,
      });
    }
  }
  handlePage = (page) => {
    this.props.navigation.navigate(page);
  }
  handleText = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }
  render() {
    const { profile, friends, groups } = this.state.user;
    const { form } = this.state;
    return (
      <View style={styles.container}>
        <View style={[styles.profileInformation]}>
          <View style={styles.header}>
            <View>
              <Avatar.Image
                size={100}
                style={styles.profileImage}
                source={{ uri: profile.picture }}
              />
            </View>
            <View>
              <Text style={[styles.profileName, GeneralStyles.whiteText, {textAlign: "center"}]}>
                {profile.firstName} {profile.lastName}
              </Text>
              <Text style={[styles.profileUsername, GeneralStyles.whiteText, {textAlign: "center"}]}>
                @{profile.username}
              </Text>
            </View>
          </View>
          <View style={[{alignItems: "flex-start"}]}>
            <View style={[styles.profileField]}>
              <MaterialCommunityIcons
                name="phone"
                size={20}
                color={"#fff"}
              />
              <TextInput
                style={[styles.profileFieldText]}
                value={form.phone}
                placeholder="Phone"
                placeholderTextColor={"#bbb"}
                onChange={this.handleChange}
              />
            </View>
            <View style={[styles.profileField]}>
              <MaterialCommunityIcons
                name="email"
                size={20}
                color={"#fff"}
              />
              <TextInput
                style={[styles.profileFieldText]}
                value={form.email}
                placeholder="Email"
                placeholderTextColor={"#bbb"}
                onChange={this.handleChange}
              />
            </View>
            <View style={[styles.profileField]}>
              <MaterialCommunityIcons
                name="baby-face"
                size={20}
                color={"#fff"}
              />
              <TextInput
                style={[styles.profileFieldText]}
                value={form.age}
                placeholder="Age"
                placeholderTextColor={"#bbb"}
                onChange={this.handleChange}
              />
            </View>
            <View style={[styles.profileField]}>
              <MaterialCommunityIcons
                name="gender-male-female"
                size={20}
                color={"#fff"}
              />
              <TextInput
                style={[styles.profileFieldText]}
                value={form.genre}
                placeholder="Genre"
                placeholderTextColor={"#bbb"}
                onChange={this.handleChange}
              />
            </View>
            <View style={[styles.profileField]}>
              <MaterialCommunityIcons
                name="school"
                size={20}
                color={"#fff"}
              />
              <TextInput
                style={[styles.profileFieldText]}
                value={form.scholarship}
                placeholder="Scholarship"
                placeholderTextColor={"#bbb"}
                onChange={this.handleChange}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414",
    padding: 20,
  },
  profileInformation: {
    backgroundColor: "#282828",
    borderRadius: 30,
    width: "100%",
    padding: 20,
    marginBottom: 30,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
    backgroundColor: "#458985",
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  profileUsername: {
    fontSize: 18,
  },
  profileName: {
    fontWeight: "bold",
    fontSize: 27,
  },
  profileField: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 3,
  },
  profileFieldText: {
    flex: 1,
    color: "white",
    marginLeft: 10,
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  buttonSection: {
    width: "50%",
    flexDirection: "row",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    // alignItems: "center",
    padding: 5,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
  },
  editButton: {
    backgroundColor: colors.blue,
  },
  logOutButton: {
    backgroundColor: colors.pink,
  },
  addButton: {
    borderRadius: 20,
    backgroundColor: colors.green,
    flex: 0,
    alignSelf: "center",
    padding: 3,
    justifyContent: "flex-end",
  },
});
export default ProfileScreen;