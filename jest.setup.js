jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage")
);

jest.mock("@react-navigation/native", () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
      reset: jest.fn(),
    }),
    useTheme: () => ({
      colors: { primary: "blue" },
    }),
  };
});
