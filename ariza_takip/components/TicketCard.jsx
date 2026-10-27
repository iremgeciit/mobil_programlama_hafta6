import { Pressable, Text, View, StyleSheet } from "react-native";
import { router } from "expo-router";
import StatusBadge from "./StatusBadge";

export default function TicketCard({ ticket }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.pressed,
      ]}
      onPress={() => router.push(`/ariza/${ticket.id}`)}
    >
      <View style={styles.top}>
        <Text style={styles.title}>{ticket.title}</Text>
        <StatusBadge status={ticket.status} />
      </View>

      <Text style={styles.category}>
        🛠️ {ticket.category}
      </Text>

      <View style={styles.bottom}>
        <Text style={styles.description} numberOfLines={1}>
          {ticket.description}
        </Text>

        <Text style={styles.detail}>Detay →</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#E8E5FF",

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 2,
  },

  pressed: {
    opacity: 0.7,
  },

  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#25233A",
    flex: 1,
  },

  category: {
    color: "#6D5DFB",
    fontWeight: "600",
    marginTop: 12,
  },

  bottom: {
    marginTop: 12,
  },

  description: {
    color: "#77738A",
    marginBottom: 10,
  },

  detail: {
    color: "#6D5DFB",
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
});