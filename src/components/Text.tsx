import React from "react";
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleProp,
  TextStyle,
} from "react-native";
import { getTypographyStyle, TypographyVariant } from "../constants/typography";
import { Theme, useTheme } from "@react-navigation/native";

interface CustomTextProps extends RNTextProps {
  variant: TypographyVariant;
  color?: string | undefined;
  style?: StyleProp<TextStyle>;
}

const Text: React.FC<CustomTextProps> = ({
  variant,
  color,
  style,
  children,
  ...props
}) => {
  const theme = useTheme() as Theme;
  const typographyStyle = getTypographyStyle(variant);

  return (
    <RNText
      style={[
        {
          fontFamily: typographyStyle.fontFamily,
          fontWeight: typographyStyle.fontWeight,
          fontSize: typographyStyle.fontSize,
          lineHeight: typographyStyle.lineHeight,
          letterSpacing: typographyStyle.letterSpacing,
          color: (color || theme.colors.text) as string,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
};

export default Text;
