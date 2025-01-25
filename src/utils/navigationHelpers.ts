import { createNavigationContainerRef } from "@react-navigation/native";
import { RootNavigatorParamList } from "../types/RootNavigatorParamList";

export const navigationRef =
  createNavigationContainerRef<RootNavigatorParamList>();
