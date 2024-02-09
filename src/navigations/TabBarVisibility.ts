import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { hiddenRoutes } from "./hiddenRoutes";

export const getTabBarVisibility = (route) => {
  const routeName =
    getFocusedRouteNameFromRoute(route) ?? ("HomeStackNavigation")
  console.log(routeName, "roue");


  if (hiddenRoutes.includes(routeName)) {
    return "none";
  }

  return "flex";
};
