import { View } from "react-native";
import Hydroponnie from "./views/HydroponnieScreen";
import { Header } from "./components/Header.components";

const MainApp = () => {
  return (
    <View className="flex flex-1">
      <Header />
      <Hydroponnie /> 
    </View>
  );
};

export default MainApp;
