import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  FlatList,
} from "react-native";

import Colors from "../../resources/colors";
import GeneralStyles from "../../resources/generalStyles";

class ProfileScreen extends React.Component {
  state = {
    user: {
      profile: {
        username: "Adrigondo",
        firstName: "Adrian",
        lastName: "González",
        data: [
          {
            field: "Phone",
            value: "6141520913",
          },
          {
            field: "Email",
            value: "theadrigondo24@gmail.com"
          },
          {
            field: "Age",
            value:"18 years old"
          },
          {
            field: "Genre",
            value:"Man"
          },
          {
            field: "Scholarship",
            value:"Bachellor"
          },
        ],
      },
    },
  }
  render() {
    const { profile } = this.state.user;
    // for (item in profile.data) {
    //   console.log(profile.data[item])
    // }
    return (
      <View style={styles.container}>
        <View style={[styles.profileInformation]}>
          <View style={styles.header}>
            <View>
              <Image
                style={styles.profileImage}
                source={{uri: "https://gravatar.com/avatar/74b143021b70bb936f4edbc9e11ecb1b?d=identicon"}}
              />
            </View>
            <View>
              <Text style={[styles.profileName, GeneralStyles.whiteText, {textAlign: "center"}]}>
                Adrian González
              </Text>
              <Text style={[styles.profileUsername, GeneralStyles.whiteText, {textAlign: "center"}]}>
                @Adrigondo
              </Text>
            </View>
          </View>
          <View>
            <FlatList
              contentContainerStyle={[{ alignItems: "center", },]}
              data={profile.data}
              keyExtractor={(item) => item.field}
              renderItem={
                ({item}) => 
                  <View style={styles.profileField}>
                    <Text style={[styles.profileFieldText, GeneralStyles.bold, {marginRight:5,}]}>
                      {item.field}:
                    </Text>
                    <Text style={[styles.profileFieldText, ]}>
                      {item.value}
                    </Text>
                  </View>
              }
            />
          </View>
        </View>
        <View style={[styles.profileOptions]}>
          <View style={[styles.buttonContainer]}>
            <Pressable style={[styles.button, styles.editButton]}>
              <Text style={[GeneralStyles.whiteText]}>
                Edit profile
              </Text>
            </Pressable>
          </View>
          <View style={[styles.buttonContainer]}>
            <Pressable style={[styles.button, styles.logOutButton]}>
              <Text style={[GeneralStyles.whiteText]}>
                Log out
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    alignItems: "center",
    padding: 20,
  },
  profileInformation: {
    backgroundColor: Colors.secondaryColor,
    borderRadius: 10,
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
    borderColor: "#fff",
    borderWidth: 5,
    borderRadius: 60,
    marginBottom: 5,
  },
  profileUsername: {
    fontWeight: "bold",
    fontSize: 18,
  },
  profileName: {
    fontSize: 27,
  },
  profileField: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileFieldText: {
    color: "white",
    textAlign: "center",
  },
  profileOptions: {
    flexDirection: "row",
  },
  buttonContainer: {
    width: "50%",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  editButton: {
    backgroundColor: Colors.blue,
  },
  logOutButton: {
    backgroundColor: Colors.pink,
  }
});
export default ProfileScreen;