import { Stack } from "expo-router";
import { TicketProvider } from "../context/TicketContext";

export default function RootLayout() {
  return (
    <TicketProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#6D5DFB",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          contentStyle: {
            backgroundColor: "#F6F5FF",
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{ title: "Teknik Destek" }}
        />

        <Stack.Screen
          name="ariza/index"
          options={{ title: "Arıza Kayıtları" }}
        />

        <Stack.Screen
          name="ariza/yeni"
          options={{ title: "Yeni Arıza" }}
        />

        <Stack.Screen
          name="ariza/[id]"
          options={{ title: "Arıza Detayı" }}
        />
      </Stack>
    </TicketProvider>
  );
}