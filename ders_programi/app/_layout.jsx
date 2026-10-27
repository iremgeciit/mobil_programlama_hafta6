import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#16875D",
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "Ders Programım" }}
      />

      <Stack.Screen
        name="ders/[id]"
        options={{ title: "Ders Detayı" }}
      />
    </Stack>
  );
}