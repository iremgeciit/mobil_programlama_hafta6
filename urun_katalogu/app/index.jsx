import { View, Text, FlatList, StyleSheet } from "react-native";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ürünlerimiz</Text>

      <Text style={styles.subtitle}>
        Katalogdaki ürünleri inceleyebilirsiniz.
      </Text>

      <View style={styles.count}>
        <Text style={styles.countText}>
          {products.length} ürün listeleniyor
        </Text>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard product={item} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F8FF",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#172033",
  },

  subtitle: {
    color: "#718096",
    marginTop: 5,
    marginBottom: 14,
  },

  count: {
    backgroundColor: "#EAF2FF",
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 15,
    marginBottom: 20,
  },

  countText: {
    color: "#3478F6",
    fontWeight: "bold",
  },
});