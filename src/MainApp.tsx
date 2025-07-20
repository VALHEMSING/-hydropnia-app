import { View } from "react-native";
import Hydroponnie from "./views/HydroponnieScreen";
import { Header } from "./components/Header.components";

const MainApp = () => {
  return (
    <View className="flex-1 bg-light-bg dark:bg-dark-bg">
      <Header />
      <Hydroponnie />
    </View>
  );
};

export default MainApp;
