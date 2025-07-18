
import { ScrollView, View, Text } from "react-native";
import { Card, Divider, Title } from "react-native-paper";

const Hydroponnie = () => {
  return (
    <ScrollView
      className="flex-1 p-8 pt-10 bg-light-bg dark:bg-dark-bg"
      keyboardShouldPersistTaps="handled"
    >
      <Card className="mb-4 rounded-lg bg-light-cards dark:bg-dark-cards">
        <Card.Content>
          <View className="items-center py-4">
            {/* Título */}
            <Title
              style={{ fontWeight: 'bold' }}
              className="text-light-text dark:text-dark-text text-3xl"
            >
              Configuración WiFi
            </Title>

            {/* Divider */}
            <Divider className="w-1 h-1  my-2" />

            <View className="w-full items-start px-2 mt-2">
              <Text className="my-1">
                <Text className="font-bold text-light-secondary dark:text-dark-secondary">
                  Red: 
                </Text>
                <Text className="font-bold text-light-secondary dark:text-dark-secondary">
                     Hidroponia
                </Text>
              </Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default Hydroponnie
