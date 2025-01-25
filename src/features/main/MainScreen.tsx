import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button, Text } from "../../components";
import { AppDispatch, RootState } from "../../redux/store";
import { removeUser } from "../../redux/userSlice";
import { RootNavigatorParamList } from "../../types/RootNavigatorParamList";

type NavigationProp = NativeStackNavigationProp<RootNavigatorParamList, "Main">;

const MainScreen: React.FC = () => {
  const styles = createStyles();
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user.email);

  return (
    <View style={styles.screen}>
      <Text variant="label-largeBold" style={styles.titleText}>
        Hai, {user}
      </Text>
      <Button
        title="Logout"
        onPress={() => {
          dispatch(removeUser());
          navigation.reset({
            index: 0,
            routes: [{ name: "Login" }],
          });
        }}
        variant={"outline"}
      />
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
      marginBottom: 16,
      textAlign: "center",
    },
  });

export default MainScreen;
