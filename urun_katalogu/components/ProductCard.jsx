import { Pressable, Text, View, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function ProductCard({ product }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && { opacity: 0.7 },
      ]}
      onPress={() => router.push(`/urun/${product.id}`)}
    >
      <View style={styles.icon}>
        <Text style={styles.iconText}>🛍️</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.name}>{product.name}</Text>

        <View style={styles.bottom}>
          <Text style={styles.price}>
            {product.price.toLocaleString("tr-TR")} TL
          </Text>

          <Text style={styles.detail}>Detay →</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 17,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDE9FF",
  },

  icon: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "#EAF2FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  iconText: {
    fontSize: 27,
  },

  info: {
    flex: 1,
  },

  category: {
    color: "#3478F6",
    fontSize: 12,
    fontWeight: "bold",
  },

  name: {
    color: "#172033",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 4,
  },

  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  price: {
    color: "#172033",
    fontWeight: "bold",
  },

  detail: {
    color: "#3478F6",
    fontWeight: "bold",
  },
});