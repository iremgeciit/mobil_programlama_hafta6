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

import { products } from "../../data/products";

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();

  const product = products.find(
    (item) => item.id === id
  );

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Ürün bulunamadı.</Text>

        <Pressable style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Geri Dön</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.icon}>
          <Text style={styles.iconText}>🛍️</Text>
        </View>

        <Text style={styles.category}>
          {product.category}
        </Text>

        <Text style={styles.title}>
          {product.name}
        </Text>

        <Text style={styles.price}>
          {product.price.toLocaleString("tr-TR")} TL
        </Text>

        <View style={styles.divider} />

        <Text style={styles.label}>Ürün Açıklaması</Text>
        <Text style={styles.description}>
          {product.description}
        </Text>

        <Text style={styles.label}>Stok Durumu</Text>
        <Text style={styles.stock}>
          ✓ Stokta {product.stock} adet
        </Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>← Ürünlere Dön</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    backgroundColor: "#F5F8FF",
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 25,
    borderWidth: 1,
    borderColor: "#DDE9FF",
  },

  icon: {
    width: 70,
    height: 70,
    borderRadius: 18,
    backgroundColor: "#EAF2FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },

  iconText: {
    fontSize: 32,
  },

  category: {
    color: "#3478F6",
    fontWeight: "bold",
  },

  title: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#172033",
    marginTop: 5,
  },

  price: {
    color: "#3478F6",
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 12,
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 22,
  },

  label: {
    fontWeight: "bold",
    color: "#172033",
    marginTop: 10,
    marginBottom: 5,
  },

  description: {
    color: "#64748B",
    lineHeight: 23,
  },

  stock: {
    color: "#16A34A",
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#3478F6",
    padding: 15,
    borderRadius: 13,
    marginTop: 18,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});