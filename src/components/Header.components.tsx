import { View, Text, useColorScheme } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type HeaderProps = {
  title?: string;
};

export const Header = ({ title = "Hidroponia" }: HeaderProps) => {
  const colorScheme = useColorScheme(); 
  
  return (
    <View 
     className={` px-4 pt-14  flex-row justify-center items-center ${
        colorScheme === 'dark' ? 'bg-dark-primary' : 'bg-light-primary'
      }`}
    >
      <View className="flex-row items-center space-x-2">
        <MaterialIcons 
          name="eco" 
          size={28} 
          color={colorScheme === 'dark' ? "#AEF6C7" : "#C9FFE2"}
        />
        <Text 
          className={`text-3xl font-bold ${
            colorScheme === 'dark' ? 'text-dark-text' : 'text-light-text'
          }`}
        >
          {title}
        </Text>
      </View>
    </View>
  );
};
