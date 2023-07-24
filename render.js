import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreen from "./Screens/authentication/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./Screens/authentication/LoginScreen/LoginScreen";
import Home from "./Screens/main/Home";

const Auth = createStackNavigator();
const Main = createStackNavigator();

export default function renderScreen(params) {
  if (params) {
    return (
      <Auth.Navigator>
        <Auth.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Auth.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
      </Auth.Navigator>
    );
  }
  return (
    <Main.Navigator>
      <Main.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
    </Main.Navigator>
  );
}
