import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Teknik Destek Sistemi</Text>

      <Text style={styles.subtitle}>
        Arıza kayıtlarını görüntüleyebilir ve yeni bir arıza oluşturabilirsiniz.
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/ariza")}
      >
        <Text style={styles.buttonText}>Arıza Kayıtlarını Gör</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/ariza/yeni")}
      >
        <Text style={styles.buttonText}>Yeni Arıza Oluştur</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
    backgroundColor: "#f4f6f8",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#2563eb",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});