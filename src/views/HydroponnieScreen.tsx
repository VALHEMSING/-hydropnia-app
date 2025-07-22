import React, { useState } from "react";
import { ScrollView, View, Text, Alert, useColorScheme } from "react-native";
import { Button, Card, Divider, Title, Snackbar } from "react-native-paper";
import { NAME_RED, PASSWORD_RED } from "../constants/constants";
import { engineServices } from "../api/engines.service";

const Hydroponnie: React.FC = () => {
  const [snackbarVisible, setSnackbarVisible] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");

  const isDark = useColorScheme() === "dark"; // ← usamos tema activo

  const showSnackbar = (message: string) => {
    setSnackbarMessage(message);
    setSnackbarVisible(true);
  };

  const handleAction = async (
    callback: () => Promise<void>,
    successMsg: string,
    errorMsg: string
  ) => {
    try {
      await callback();
      showSnackbar(successMsg);
    } catch (error) {
      showSnackbar(errorMsg);
      console.error(error);
    }
  };

  return (
    <ScrollView
      className="flex-1 p-8 pt-4 bg-light-bg dark:bg-dark-bg "
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
                  {NAME_RED}
                </Text>
              </Text>
              <Text className="my-1">
                <Text className="font-semibold text-light-text dark:text-dark-secondary">
                  Contraseña:
                </Text>
                <Text className="font-extrabold text-light-textSecondary dark:text-dark-text">
                  {"  "}
                  {PASSWORD_RED}
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
                LED
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
                    width: "48%",
                    backgroundColor: isDark ? "#373d20" : "#8FD19E",
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: isDark ? "#D0F0C0" : "#000000",
                  }}
                  onPress={() =>
                    handleAction(
                      engineServices.handleLedOn,
                      "Led encendido",
                      "Error al encender el led..."
                    )
                  }
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
                    width: "48%",
                    backgroundColor: isDark ? "#373d20" : "#8FD19E",
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: isDark ? "#D0F0C0" : "#000000",
                  }}
                  onPress={() =>
                    handleAction(
                      engineServices.handleLedOff,
                      "Apagado el Led...",
                      "Error al apagar el led"
                    )
                  }
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
                Motor polea
              </Text>
            </Title>
            <View className="flex md:flex-row justify-start">
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
                    width: "48%",
                    backgroundColor: isDark ? "#373d20" : "#8FD19E",
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: isDark ? "#D0F0C0" : "#000000",
                  }}
                  onPress={() =>
                    handleAction(
                      engineServices.handleSubir,
                      "Secador encendido",
                      "Error al encender el secador..."
                    )
                  }
                >
                  Subir
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
                    width: "48%",
                    backgroundColor: isDark ? "#373d20" : "#8FD19E",
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: isDark ? "#D0F0C0" : "#000000",
                  }}
                  onPress={() =>
                    handleAction(
                      engineServices.handleBajar,
                      "Bajando polea...",
                      "Error al bajar la polea"
                    )
                  }
                >
                  Bajar
                </Button>
              </View>
            </View>
          </View>
          <Divider />
          <View className="mt-0 pt-2">
            <Title>
              <Text className="font-bold text-light-title dark:text-dark-title">
                Secadora
              </Text>
            </Title>
            <View className="flex md:flex-row justify-start">
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
                    width: "48%",
                    backgroundColor: isDark ? "#373d20" : "#8FD19E",
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: isDark ? "#D0F0C0" : "#000000",
                  }}
                  onPress={() =>
                    handleAction(
                      engineServices.handleSubir,
                      "Secador encendido",
                      "Error al encender el secador..."
                    )
                  }
                >
                  Frio
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
                    width: "48%",
                    backgroundColor: isDark ? "#373d20" : "#8FD19E",
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: isDark ? "#D0F0C0" : "#000000",
                  }}
                  onPress={() =>
                    handleAction(
                      engineServices.handleBajar,
                      "Bajando polea...",
                      "Error al bajar la polea"
                    )
                  }
                >
                  Calor
                </Button>
              </View>
            </View>
          </View>
        </Card.Content>
      </Card>

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
        style={{
          backgroundColor: isDark ? "#37474F" : "#4CAF50",
        }}
        action={{
          label: "OK",
          onPress: () => setSnackbarVisible(false),
        }}
      >
        {snackbarMessage}
      </Snackbar>
    </ScrollView>
  );
};

export default Hydroponnie;
