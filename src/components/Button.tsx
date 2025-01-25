import { Theme, useTheme } from "@react-navigation/native";
import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { TypographyVariant } from "../constants/typography";
import Text from "./Text";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant: "primary" | "outline";
  style?: ViewStyle;
  textStyle?: TextStyle;
  isDisabled?: boolean;
  textVariant?: TypographyVariant;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant,
  style,
  textStyle,
  isDisabled = false,
  isLoading = false,
  textVariant = "label-mediumBold",
}) => {
  const theme = useTheme();
  const getTextColorStyle = (): TextStyle => {
    switch (variant) {
      case "primary":
        return styles.primaryText;
      case "outline":
        return styles.outlineText;
      default:
        return styles.primaryText;
    }
  };
  const styles = createStyles(theme);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, styles[variant], style]}
      disabled={isDisabled || isLoading}
      activeOpacity={0.8}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={theme.colors.background} />
      ) : (
        <Text
          variant={textVariant}
          color={getTextColorStyle().color as string}
          style={[textStyle]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    button: {
      height: 48,
      borderRadius: 48 / 2,
      alignItems: "center",
      justifyContent: "center",
    },
    primary: {
      backgroundColor: theme.colors.primary,
    },
    primaryText: {
      color: theme.colors.background,
    },
    outline: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: theme.colors.primary,
    },
    outlineText: {
      color: theme.colors.primary,
    },
  });

export default Button;
