module.exports = {
  preset: "jest-expo",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|expo-modules-core|expo|@react-native|@react-navigation|@react-native-async-storage|@react-native/polyfills|@react-native-community|react-redux|redux-persist|react-native-screens|react-native-safe-area-context|react-native-gesture-handler|expo-status-bar)/)",
  ],
  testPathIgnorePatterns: ["/node_modules/", "/android/", "/ios/"],
};
