import { useNavigation, useTheme } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Formik } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { Button, FormikInputField, Text } from "../../components";
import { AppDispatch } from "../../redux/store";
import { setUser } from "../../redux/userSlice";
import { RootNavigatorParamList } from "../../types/RootNavigatorParamList";
import {
  LoginFormValues,
  loginInitialValues,
  loginValidationSchema,
} from "./AuthSchemes";

type NavigationProp = NativeStackNavigationProp<
  RootNavigatorParamList,
  "Login"
>;

const LoginScreen: React.FC = () => {
  const styles = createStyles();
  const navigation = useNavigation<NavigationProp>();
  const theme = useTheme();
  const dispatch = useDispatch<AppDispatch>();

  const onFieldSubmit = async (values: LoginFormValues): Promise<void> => {
    dispatch(setUser(values.email));
    navigation.reset({
      index: 0,
      routes: [{ name: "Main" }],
    });
  };
  return (
    <View style={styles.screen}>
      <Text
        variant="label-largeBold"
        color={theme.colors.primary}
        style={styles.titleText}
      >
        Welcome
      </Text>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        enableReinitialize={true}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={onFieldSubmit}
      >
        {({ handleSubmit }) => (
          <>
            <FormikInputField
              name="email"
              autoCapitalize="none"
              title="Email"
              placeholder="Input your email"
              style={styles.inputForm}
            />
            <FormikInputField
              name="password"
              title="Passowrd"
              placeholder="Input your password"
              style={styles.inputForm}
              secureTextEntry
            />
            <Button
              title="Login"
              onPress={() => handleSubmit()}
              variant={"primary"}
              style={styles.inputForm}
            />
            <Button
              title="Register"
              onPress={() => navigation.navigate("Register")}
              variant={"outline"}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

const createStyles = () =>
  StyleSheet.create({
    screen: {
      flex: 1,
      paddingHorizontal: 20,
      justifyContent: "center",
    },
    titleText: {
      marginBottom: 7,
    },
    inputForm: {
      marginBottom: 20,
    },
  });

export default LoginScreen;
