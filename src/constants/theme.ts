import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { darkTheme, lightTheme } from "./colors";

export const navigationLightTheme = {
  ...DefaultTheme,
  colors: lightTheme,
};

export const navigationDarkTheme = {
  ...DarkTheme,
  colors: darkTheme,
};
