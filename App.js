import React from "react";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import RegistrationScreen from "./Screens/authentication/RegistrationScreen/RegistrationScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <React.StrictMode>
      <RegistrationScreen onReady={onLayoutRootView} />
    </React.StrictMode>
  );
}
