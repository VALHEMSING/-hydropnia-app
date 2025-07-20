import React from "react";
import { ScrollView, View, Text, Alert, useColorScheme } from "react-native";
import { Button, Card, Divider, Title } from "react-native-paper";

const Hydroponnie = () => {
  const isDark = useColorScheme() === "dark"; // ← usamos tema activo

  return (
    <ScrollView
      className="flex-1 p-8 pt-4 bg-light-bg dark:bg-dark-bg"
      keyboardShouldPersistTaps="handled"
    >
      {/* CARD 1: WiFi */}
      <Card className="mb-4 ">
        <Card.Content className=" dark:border-dark-text border-2 rounded-xl bg-light-cards dark:bg-dark-cards">
          <View>
            <Title>
              <Text className="font-extrabold text-light-title dark:text-dark-title text-xl">
                Configuración WiFi
              </Text>
            </Title>
            <View className="items-start p-3 mt-2 rounded-lg bg-light-bgCard dark:bg-dark-primary">
              <Text className="my-1">
                <Text className="font-semibold text-light-text dark:text-dark-secondary">
                  Red:
                </Text>
                <Text className="font-extrabold text-light-textSecondary dark:text-dark-text">
                  {"  "}
                  Hidroponia
                </Text>
              </Text>
              <Text className="my-1">
                <Text className="font-semibold text-light-text dark:text-dark-secondary">
                  Contraseña:
                </Text>
                <Text className="font-extrabold text-light-textSecondary dark:text-dark-text">
                  {"  "}
                  1234567
                </Text>
              </Text>
            </View>
          </View>
        </Card.Content>
      </Card>

      {/* CARD 2: Controles */}
      <Card>
        <Card.Content className="dark:border-dark-text border-2 rounded-xl bg-light-bgCard dark:bg-dark-cards">
          <View className="mt-0 p-1">
            <Title>
              <Text className="font-bold text-light-title dark:text-dark-title">
                Primeros controles:
              </Text>
            </Title>
            <View className="flex md:flex-row justify-between ">
              {/* Botón estilizado con useTheme */}
              <View className="flex-row gap-5 p-5 w-full pt-2 rounded-xl overflow-hidden">
                <Button
                  mode="contained"
                  contentStyle={{
                    paddingVertical: 12,
                  }}
                  labelStyle={{
                    fontWeight: "bold",
                    color: isDark ? "#81C784" : "#101F14",
                  }}
                  style={{
                    backgroundColor: isDark ? "#373d20" : "#8FD19E",
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: isDark ? "#D0F0C0" : "#000000",
                  }}
                  onPress={() => Alert.alert("Encendido")}
                >
                  Encender
                </Button>
                <Button
                  mode="contained"
                  contentStyle={{
                    paddingVertical: 12,
                  }}
                  labelStyle={{
                    fontWeight: "bold",
                    color: isDark ? "#81C784" : "#101F14",
                  }}
                  style={{
                    backgroundColor: isDark ? "#373d20" : "#8FD19E",
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: isDark ? "#D0F0C0" : "#000000",
                  }}
                  onPress={() => Alert.alert("Apagdo...")}
                >
                  Apagar
                </Button>
              </View>
            </View>
          </View>
          <Divider />
          <View className="mt-0 pt-2">
            <Title>
              <Text className="font-bold text-light-title dark:text-dark-title">
                Segundos controles
              </Text>
            </Title>
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default Hydroponnie;
