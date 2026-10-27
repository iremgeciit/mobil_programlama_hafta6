import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#3478F6",
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "Ürün Kataloğu" }}
      />

      <Stack.Screen
        name="urun/[id]"
        options={{ title: "Ürün Detayı" }}
      />
    </Stack>
  );
}