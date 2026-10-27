import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";

import {
  router,
  useLocalSearchParams,
} from "expo-router";

import StatusBadge from "../../components/StatusBadge";
import { useTickets } from "../../context/TicketContext";

export default function TicketDetailScreen() {
  const { id } = useLocalSearchParams();
  const { tickets } = useTickets();

  const ticket = tickets.find(
    (item) => item.id === id
  );

  if (!ticket) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Arıza bulunamadı.
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => router.back()}
        >
          <Text style={styles.buttonText}>
            Geri Dön
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          {ticket.title}
        </Text>

        <StatusBadge status={ticket.status} />

        <Text style={styles.label}>Kategori</Text>
        <Text style={styles.value}>
          {ticket.category}
        </Text>

        <Text style={styles.label}>Açıklama</Text>
        <Text style={styles.value}>
          {ticket.description}
        </Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>
          ← Geri Dön
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    backgroundColor: "#F6F5FF",
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 24,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E8E5FF",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#25233A",
    marginBottom: 15,
  },

  label: {
    fontWeight: "bold",
    color: "#6D5DFB",
    marginTop: 22,
    marginBottom: 5,
  },

  value: {
    fontSize: 16,
    color: "#4B485D",
    lineHeight: 24,
  },

  button: {
    backgroundColor: "#6D5DFB",
    padding: 15,
    borderRadius: 13,
    marginTop: 20,
  },

  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
  },
});