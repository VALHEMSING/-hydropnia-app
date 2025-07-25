import { View } from "react-native";
import Hydroponnie from "./views/HydroponnieScreen";
import { Header } from "./components/Header.components";
import { SafeAreaFrameContext, SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";

const MainApp:React.FC = () => {
  return (
    <SafeAreaProvider>
    <View className="flex-1 bg-light-bg dark:bg-dark-bg">
      <Header/>
      <Hydroponnie />
    </View>
    </SafeAreaProvider>
  );
};

export default MainApp;
