import { useFonts } from "expo-font";
import React from "react";
import { ActivityIndicator, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { SafeAreaView } from "./src/components";
import { ThemeProvider } from "./src/context/ThemeContext";
import Router from "./src/navigations/Router";
import { store } from "./src/redux/store";

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    "Figtree-Black": require("./assets/fonts/Figtree-Black.ttf"),
    "Figtree-BlackItalic": require("./assets/fonts/Figtree-BlackItalic.ttf"),
    "Figtree-Bold": require("./assets/fonts/Figtree-Bold.ttf"),
    "Figtree-BoldItalic": require("./assets/fonts/Figtree-BoldItalic.ttf"),
    "Figtree-ExtraBold": require("./assets/fonts/Figtree-ExtraBold.ttf"),
    "Figtree-ExtraBoldItalic": require("./assets/fonts/Figtree-ExtraBoldItalic.ttf"),
    "Figtree-Italic": require("./assets/fonts/Figtree-Italic.ttf"),
    "Figtree-Light": require("./assets/fonts/Figtree-Light.ttf"),
    "Figtree-LightItalic": require("./assets/fonts/Figtree-LightItalic.ttf"),
    "Figtree-Medium": require("./assets/fonts/Figtree-Medium.ttf"),
    "Figtree-MediumItalic": require("./assets/fonts/Figtree-MediumItalic.ttf"),
    "Figtree-Regular": require("./assets/fonts/Figtree-Regular.ttf"),
    "Figtree-SemiBold": require("./assets/fonts/Figtree-SemiBold.ttf"),
    "Figtree-SemiBoldItalic": require("./assets/fonts/Figtree-SemiBoldItalic.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="small" />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView>
          <ThemeProvider>
            <Router />
          </ThemeProvider>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
