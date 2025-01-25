import { Theme, useTheme } from "@react-navigation/native";
import _ from "lodash";
import React from "react";
import {
  Platform,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import typography from "../constants/typography";
import Text from "./Text";

export interface InputFieldProps extends TextInputProps {
  title?: string;
  isRequire?: boolean;
  infoMessage?: string;
  errorMessage?: string;
  textArea?: boolean;
  editable?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  title,
  isRequire,
  infoMessage,
  errorMessage,
  style,
  textArea,
  editable = true,
  ...textInputProps
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={[styles.container, style]}>
      {title && (
        <Text
          variant="label-smallBold"
          color={theme.colors.text}
          style={styles.labelInput}
        >
          {isRequire && (
            <Text variant="label-smallBold" color={theme.colors.border}>
              *
            </Text>
          )}
          {title}
        </Text>
      )}
      <View
        style={[
          styles.inputContainer,
          !editable && { backgroundColor: theme.colors.border },
        ]}
      >
        <TextInput
          placeholderTextColor={theme.colors.border}
          editable={editable}
          style={[
            styles.input,
            textArea && {
              height: 77,
              textAlignVertical: "top",
              textAlign: "left",
            },
          ]}
          {...(textArea && {
            multiline: true,
            numberOfLines: 4,
          })}
          {...textInputProps}
        />
      </View>
      {errorMessage && (
        <Text
          variant="paragraph-xsmall"
          color={theme.colors.primary}
          style={styles.inputInfo}
        >
          {errorMessage}
        </Text>
      )}
      {infoMessage && (
        <Text
          variant="paragraph-xsmall"
          color={theme.colors.primary}
          style={styles.inputInfo}
        >
          {infoMessage}
        </Text>
      )}
    </View>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      marginBottom: 16,
    },
    labelInput: {
      marginBottom: 4,
    },
    inputContainer: {
      flexDirection: "row",
      borderWidth: 1.5,
      borderColor: theme.colors.border,
      borderRadius: 8,
      paddingHorizontal: 8,
      alignItems: "center",
      height: 40,
    },
    input: {
      flex: 1,
      color: theme.colors.text,
      ..._.omit(typography.paragraph.medium, ["lineHeight"]),
      ...(Platform.OS === "ios" && { padding: 8 }),
    },
    inputInfo: {
      marginTop: 4,
    },
    leftIcon: {
      marginRight: 8,
    },
  });

export default InputField;
