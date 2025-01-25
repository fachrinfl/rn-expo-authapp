/* eslint-disable react-hooks/exhaustive-deps */
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { navigationDarkTheme, navigationLightTheme } from "../constants/theme";
import { useTheme } from "../context/ThemeContext";
import { navigationRef } from "../utils/navigationHelpers";
import StackNavigator from "./StackNavigator";

const Router: React.FC = () => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? navigationDarkTheme : navigationLightTheme;

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={style.container}>
        <NavigationContainer ref={navigationRef} theme={theme}>
          <StackNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Router;
