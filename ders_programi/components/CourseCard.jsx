import { Pressable, Text, View, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function CourseCard({ course }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.pressed,
      ]}
      onPress={() => router.push(`/ders/${course.id}`)}
    >
      <View style={styles.dayBox}>
        <Text style={styles.day}>{course.day}</Text>
        <Text style={styles.time}>{course.time}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.name}>{course.name}</Text>

        <Text style={styles.info}>
          📍 {course.classroom}
        </Text>

        <Text style={styles.info}>
          👤 {course.instructor}
        </Text>

        <Text style={styles.detail}>Ders Detayı →</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#D9F1E4",
    overflow: "hidden",
  },

  pressed: {
    opacity: 0.7,
  },

  dayBox: {
    backgroundColor: "#E8F8EF",
    paddingHorizontal: 18,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  day: {
    color: "#16875D",
    fontWeight: "bold",
    fontSize: 15,
  },

  time: {
    color: "#16875D",
    fontWeight: "600",
  },

  content: {
    padding: 18,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#17352B",
    marginBottom: 12,
  },

  info: {
    color: "#64756F",
    marginBottom: 7,
  },

  detail: {
    color: "#16875D",
    fontWeight: "bold",
    alignSelf: "flex-end",
    marginTop: 8,
  },
});