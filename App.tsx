import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import AppNavigation from "./src/navigations";
import { useFonts } from "expo-font";
import Toast from "react-native-toast-message";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo: require("./assets/fonts/Archivo-Regular.ttf"),
    SwitzerVariable: require("./assets/fonts/Switzer-Variable.ttf"),
    SwitzerRegular: require("./assets/fonts/Switzer-Regular.otf"),
  });

  useEffect(() => {
    const loadFonts = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };

    loadFonts();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <AppNavigation />
      <StatusBar style="auto" />
      <Toast />
    </>
  );
}
