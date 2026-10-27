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

import { courses } from "../../data/courses";

export default function CourseDetailScreen() {
  const { id } = useLocalSearchParams();

  const course = courses.find(
    (item) => item.id === id
  );

  if (!course) {
    return (
      <View style={styles.container}>
        <View style={styles.warning}>
          <Text style={styles.warningIcon}>⚠️</Text>

          <Text style={styles.title}>
            Ders bulunamadı
          </Text>

          <Text style={styles.description}>
            Aradığınız ders programda bulunmuyor.
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

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.icon}>
          <Text style={styles.iconText}>📚</Text>
        </View>

        <Text style={styles.day}>
          {course.day}
        </Text>

        <Text style={styles.title}>
          {course.name}
        </Text>

        <View style={styles.divider} />

        <Text style={styles.label}>🕐 Ders Saati</Text>
        <Text style={styles.value}>{course.time}</Text>

        <Text style={styles.label}>📍 Derslik</Text>
        <Text style={styles.value}>
          {course.classroom}
        </Text>

        <Text style={styles.label}>👤 Öğretim Elemanı</Text>
        <Text style={styles.value}>
          {course.instructor}
        </Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>
          ← Ders Programına Dön
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    backgroundColor: "#F4FBF7",
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 25,
    borderWidth: 1,
    borderColor: "#D9F1E4",
  },

  icon: {
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: "#E8F8EF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },

  iconText: {
    fontSize: 32,
  },

  day: {
    color: "#16875D",
    fontWeight: "bold",
    fontSize: 16,
  },

  title: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#17352B",
    marginTop: 5,
  },

  divider: {
    height: 1,
    backgroundColor: "#E1EDE7",
    marginVertical: 22,
  },

  label: {
    color: "#16875D",
    fontWeight: "bold",
    marginTop: 13,
  },

  value: {
    color: "#4D625A",
    fontSize: 16,
    marginTop: 5,
  },

  description: {
    color: "#718078",
    marginTop: 8,
    textAlign: "center",
  },

  warning: {
    backgroundColor: "#FFFFFF",
    padding: 30,
    borderRadius: 20,
    alignItems: "center",
  },

  warningIcon: {
    fontSize: 40,
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#16875D",
    padding: 15,
    borderRadius: 13,
    marginTop: 18,
  },

  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
  },
});