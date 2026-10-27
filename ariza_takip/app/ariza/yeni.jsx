import { useState } from "react";

import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
} from "react-native";

import { router } from "expo-router";
import { useTickets } from "../../context/TicketContext";

export default function NewTicketScreen() {
  const { addTicket } = useTickets();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const saveTicket = () => {
    if (
      !title.trim() ||
      !category.trim() ||
      !description.trim()
    ) {
      Alert.alert(
        "Eksik Bilgi",
        "Lütfen tüm alanları doldurun."
      );
      return;
    }

    addTicket({
      title: title.trim(),
      category: category.trim(),
      description: description.trim(),
    });

    Alert.alert(
      "Başarılı",
      "Arıza kaydınız oluşturuldu."
    );

    router.replace("/ariza");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Yeni Arıza Bildirimi
      </Text>

      <Text style={styles.subtitle}>
        Yaşadığınız problemi aşağıdaki alanlara girin.
      </Text>

      <Text style={styles.label}>Arıza Başlığı</Text>

      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Örn: Bilgisayar açılmıyor"
        placeholderTextColor="#AAA6B8"
      />

      <Text style={styles.label}>Kategori</Text>

      <TextInput
        style={styles.input}
        value={category}
        onChangeText={setCategory}
        placeholder="Örn: Donanım, Ağ, Yazılım"
        placeholderTextColor="#AAA6B8"
      />

      <Text style={styles.label}>Açıklama</Text>

      <TextInput
        style={[styles.input, styles.area]}
        value={description}
        onChangeText={setDescription}
        placeholder="Problemi kısaca açıklayın..."
        placeholderTextColor="#AAA6B8"
        multiline
      />

      <Pressable
        style={styles.button}
        onPress={saveTicket}
      >
        <Text style={styles.buttonText}>
          Arıza Kaydını Oluştur
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#F6F5FF",
  },

  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#25233A",
  },

  subtitle: {
    color: "#77738A",
    marginTop: 7,
    marginBottom: 22,
  },

  label: {
    fontWeight: "bold",
    color: "#39364F",
    marginBottom: 7,
    marginTop: 15,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DED9FF",
    borderRadius: 13,
    padding: 14,
    fontSize: 15,
    outlineStyle: "none",
  },

  area: {
    height: 120,
    textAlignVertical: "top",
  },

  button: {
    backgroundColor: "#6D5DFB",
    padding: 16,
    borderRadius: 13,
    marginTop: 28,
  },

  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});