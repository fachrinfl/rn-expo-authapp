import { Theme, useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StatusBar } from "react-native";
import { useSelector } from "react-redux";
import LoginScreen from "../features/auth/LoginScreen";
import RegisterScreen from "../features/auth/RegisterScreen";
import MainScreen from "../features/main/MainScreen";
import { RootState } from "../redux/store";
import { RootNavigatorParamList } from "../types/RootNavigatorParamList";

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const StackNavigator: React.FC = () => {
  const theme = useTheme() as Theme;
  const user = useSelector((state: RootState) => state.user.email);
  const initialRoute = user ? "Main" : "Login";

  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle={theme.dark ? "light-content" : "dark-content"}
      />
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigator;
