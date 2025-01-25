import { NavigationContainer } from "@react-navigation/native";
import { render } from "@testing-library/react-native";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import RegisterScreen from "../RegisterScreen";

describe("<RegisterScreen />", () => {
  test("Text renders correctly on RegisterScreen", () => {
    const { getByText } = render(
      <Provider store={store}>
        <NavigationContainer>
          <RegisterScreen />
        </NavigationContainer>
      </Provider>
    );

    getByText("Create a new account");
  });
});
