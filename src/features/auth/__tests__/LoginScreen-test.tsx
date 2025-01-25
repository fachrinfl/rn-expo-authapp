import { NavigationContainer } from "@react-navigation/native";
import { act, fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import LoginScreen from "../LoginScreen";

describe("<LoginScreen />", () => {
  test("Text renders correctly on LoginScreen", () => {
    const { getByText } = render(
      <Provider store={store}>
        <NavigationContainer>
          <LoginScreen />
        </NavigationContainer>
      </Provider>
    );

    getByText("Welcome");
  });

  test("Text renders and handles form submission correctly", async () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <NavigationContainer>
          <LoginScreen />
        </NavigationContainer>
      </Provider>
    );

    await act(async () => {
      fireEvent.changeText(
        getByPlaceholderText("Input your email"),
        "test@example.com"
      );
      fireEvent.changeText(
        getByPlaceholderText("Input your password"),
        "password123"
      );
      fireEvent.press(getByText("Login"));
    });

    expect(getByText("Welcome")).toBeTruthy();
  });

  test("Form validation shows errors for invalid inputs", async () => {
    const { getByPlaceholderText, getByText, findByText } = render(
      <Provider store={store}>
        <NavigationContainer>
          <LoginScreen />
        </NavigationContainer>
      </Provider>
    );

    const loginButton = getByText("Login");
    fireEvent.press(loginButton);

    expect(await findByText("Email is required")).toBeTruthy();
    expect(await findByText("Password is required")).toBeTruthy();

    const emailInput = getByPlaceholderText("Input your email");
    fireEvent.changeText(emailInput, "invalid-email");

    const passwordInput = getByPlaceholderText("Input your password");
    fireEvent.changeText(passwordInput, "password123");

    fireEvent.press(loginButton);

    expect(await findByText("Enter a valid email")).toBeTruthy();
  });
});
