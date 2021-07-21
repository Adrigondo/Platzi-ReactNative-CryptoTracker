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
// const api=process.env.REACT_NATIVE_API;

import API from "../../libs/API";

import Constants from "expo-constants";
const { manifest } = Constants;

const api = `http://${manifest.debuggerHost.split(':').shift()}:4000`;

import colors from "../../resources/colors";
import GeneralStyles from "../../resources/generalStyles";

class UserCreateScreen extends React.Component {
  state = {
    form: {},
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
  handleSubmit = async () => {
    this.setState({
      loading: true,
      error: undefined,
    });
    const { form } = this.state;
    const {
      username,
      password,
      firstName,
      lastName,
      email, phone, age, scholarship, genre
    } = form;
    try{
      const response = await API.instance.post(
        `${api}/users`,
        headers= {
          "Content-Type": "application/json"
        },
        body = {
          username,
          password,
          firstName,
          lastName,
          email, phone, age, scholarship, genre
        }
      );
      
      console.log(response.json())
      
      this.setState({
        loading: false,
        coins: response.data,
        coinsFiltered: response.data,
      });

    }catch(error){
      this.setState({
        loading: false,
        error: error
      });
    }
    // console.log("Coins:", this.filteredCoins);
  }
  render() {
    const { form } = this.state;
    return (
      <View style={styles.container}>
        <View style={[styles.profileInformation]}>
          <View style={[{ alignItems: "flex-start" }]}>
            
            <View style={[styles.profileField, {marginBottom:5}]}>
              <TextInput
                style={[styles.profileName, GeneralStyles.whiteText,styles.profileFieldText,{textAlign:"center"}]}
                value={form.firstName}
                placeholder="First Name"
                placeholderTextColor={"#bbb"}
                onChange={this.handleChange}
              />
            </View>
            <View style={[styles.profileField, {marginBottom:5}]}>
              <TextInput
                style={[styles.profileName, GeneralStyles.whiteText,styles.profileFieldText,{textAlign:"center"}]}
                value={form.lastName}
                placeholder="Last Name"
                placeholderTextColor={"#bbb"}
                onChange={this.handleChange}
              />
            </View>
            <View style={[styles.profileField, {marginBottom:15}]}>
              <TextInput
                style={[styles.profileUsername, GeneralStyles.whiteText, styles.profileFieldText,{textAlign:"center"}]}
                value={form.username}
                placeholder="Username"
                placeholderTextColor={"#bbb"}
                onChange={this.handleChange}
              />
            </View>
            <View style={[styles.profileField]}>
              <MaterialCommunityIcons
                name="form-textbox-password"
                size={20}
                color={"#fff"}
              />
              <TextInput
                style={[styles.profileFieldText]}
                value={form.password}
                placeholder="Password"
                placeholderTextColor={"#bbb"}
                onChange={this.handleChange}
              />
            </View>
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
        <View style={[styles.buttonContainer]}>
          <Pressable
            onPress={this.handleSubmit}
            style={[styles.button, styles.editButton]}
          >
            <Text>
              Create Account!
            </Text>
          </Pressable>
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
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  buttonSection: {
    width: "50%",
    flexDirection: "row",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    // alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  editButton: {
    backgroundColor: colors.blue,
  },
});
export default UserCreateScreen;