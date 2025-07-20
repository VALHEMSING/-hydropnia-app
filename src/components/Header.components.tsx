import { View, Text, useColorScheme } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type HeaderProps = {
  title?: string;
};

export const Header = ({ title = "Hidroponia" }: HeaderProps) => {
  const colorScheme = useColorScheme();

  return (
    <View
      className={` px-4 pt-14  flex-row justify-center items-center rounded-bl-full rounded-br-full
         border-2 dark:border-dark-text  ${
           colorScheme === "dark" ? "bg-dark-primary" : "bg-light-primary"
         }`}
    >
      <View className="flex-row items-center space-x-2">
        <MaterialIcons
          name="eco"
          size={28}
          color={colorScheme === "dark" ? "#AEF6C7" : "#4b7f52"}
          className="mb-3"
        />
        <Text className="text-3xl font-bold mb-3 text-light-text dark:text-dark-text">
          {title}
        </Text>
      </View>
    </View>
  );
};
