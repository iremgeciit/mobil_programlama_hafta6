import {
  View,
  FlatList,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";

import { router } from "expo-router";
import TicketCard from "../../components/TicketCard";
import { useTickets } from "../../context/TicketContext";

export default function TicketListScreen() {
  const { tickets } = useTickets();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Arızalarım</Text>

          <Text style={styles.subtitle}>
            Toplam {tickets.length} kayıt
          </Text>
        </View>

        <Pressable
          style={styles.addButton}
          onPress={() => router.push("/ariza/yeni")}
        >
          <Text style={styles.addButtonText}>+ Yeni</Text>
        </Pressable>
      </View>

      <FlatList
        data={tickets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TicketCard ticket={item} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: "#F6F5FF",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#25233A",
  },

  subtitle: {
    color: "#77738A",
    marginTop: 4,
  },

  addButton: {
    backgroundColor: "#6D5DFB",
    paddingHorizontal: 17,
    paddingVertical: 11,
    borderRadius: 12,
  },

  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});