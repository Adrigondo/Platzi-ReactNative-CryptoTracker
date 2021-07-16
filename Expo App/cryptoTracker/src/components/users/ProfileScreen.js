import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
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
          name: "No antojen",
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
  }
  render() {
    const { profile, friends } = this.state.user;
    // for (item in profile.data) {
    //   console.log(profile.data[item])
    // }
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
          <View style={[{alignItems: "center"}]}>
            <View style={[styles.profileField]}>
              <MaterialCommunityIcons
                name="phone"
                size={20}
                color={"#fff"}
              />
              <Text style={[styles.profileFieldText]}>{profile.phone}</Text>
            </View>
            <View style={[styles.profileField]}>
              <MaterialCommunityIcons
                name="email"
                size={20}
                color={"#fff"}
              />
              <Text style={[styles.profileFieldText]}>{profile.email}</Text>
            </View>
            <View style={[styles.profileField]}>
              <MaterialCommunityIcons
                name="baby-face"
                size={20}
                color={"#fff"}
              />
              <Text style={[styles.profileFieldText]}>{profile.age} years old</Text>
            </View>
            <View style={[styles.profileField]}>
              <MaterialCommunityIcons
                name="gender-male-female"
                size={20}
                color={"#fff"}
              />
              <Text style={[styles.profileFieldText]}>{profile.genre}</Text>
            </View>
            <View style={[styles.profileField]}>
              <MaterialCommunityIcons
                name="school"
                size={20}
                color={"#fff"}
              />
              <Text style={[styles.profileFieldText]}>{profile.scholarship}</Text>
            </View>
          </View>
        </View>
        <View style={[styles.profileOptions]}>
          <View style={[styles.buttonContainer]}>
            <View style={[styles.buttonSection, {paddingRight: 10,}]}>
              <Pressable style={[styles.button, styles.editButton]}>
                <MaterialCommunityIcons name="chevron-down" size={25} color="#fff"/>
                <Text style={[GeneralStyles.whiteText, {marginRight: 5,}]}>
                  Friends
                </Text>
              </Pressable>
              <Pressable style={[styles.addButton]}>
                <MaterialCommunityIcons name="plus-thick" size={25} color="#fff"/>
              </Pressable>
            </View>
            <View style={[styles.buttonSection, {paddingLeft: 10,}]}>
              <Pressable style={[styles.button, styles.logOutButton]}>
                <MaterialCommunityIcons name="chevron-down" size={25} color="#fff"/>
                <Text style={[GeneralStyles.whiteText, {marginRight: 5,}]}>
                  Groups
                </Text>
              </Pressable>
              <Pressable style={[styles.addButton]}>
                <MaterialCommunityIcons name="plus-thick" size={25} color="#fff"/>
              </Pressable>
            </View>
          </View>
        </View>
            <FlatList
              data={friends}
              keyExtractor={(item) => item.username}
              renderItem={
                ({ item }) =>
                  <View style={{flexDirection: "row"}}>
                    <View>
                      <Avatar.Image
                        size={30}
                        source={{uri: item.picture}}
                      />
                    </View>
                    <View>
                      <Text>
                        {item.firstName} {item.lastName}
                      </Text>
                      <Text>
                        @{item.username}
                      </Text>
                    </View>
                  </View>
              }
            />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414",
    padding: 20,
    paddingBottom: 0,
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
    color: "white",
    textAlign: "center",
    marginLeft: 10,
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