import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "./ProfileScreen";
import Colors from "../../resources/colors";

const Stack = createStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primaryColor,
        },
        headerTintColor: Colors.lightPrimaryColor,
      }}
    >
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
}
export default UserStack;