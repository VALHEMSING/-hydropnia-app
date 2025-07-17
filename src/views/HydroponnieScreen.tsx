import { ScrollView, View, Text } from "react-native";
import { Card, Divider, Title } from "react-native-paper";

const Hydroponnie = () => {
  return (
    <ScrollView
      className="flex-1 p-4 bg-light-bg dark:bg-dark-bg"
      contentContainerStyle={{ paddingTop: 16 }} // Ajuste para el header
      keyboardShouldPersistTaps="handled"
    >
      <Card className="mb-4 rounded-lg bg-light-cards dark:bg-dark-cards">
        <Card.Content>
          <View className="items-center py-4">
            <Title 
              style={{ fontWeight: 'bold' }}
              className="text-light-text dark:text-dark-text text-9xl"
            >
              Configuración WiFi
            </Title>
            <Divider 
              style={{ height: 1, marginVertical: 8, marginTop: 12 }} 
              className="bg-light-divider dark:bg-dark-divider"
            />
            <View className="rounded-lg p-4 mt-2">
                <Text className="my-1 text-light-text dark:text-dark-text">
                    <Text className={`font-bold color-light-secondary dark:color-dark-secondary`}>Red:</Text>
                    <Text className="font-bold color-light-secondary dark:color-dark-secondary">nombre</Text>
                </Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default Hydroponnie;