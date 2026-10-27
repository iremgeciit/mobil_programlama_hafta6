import { View, Text, FlatList, StyleSheet } from "react-native";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Haftalık Ders Programım</Text>

      <Text style={styles.subtitle}>
        Bu haftaki derslerinizi aşağıdan inceleyebilirsiniz.
      </Text>

      <View style={styles.summary}>
        <Text style={styles.summaryNumber}>{courses.length}</Text>

        <View>
          <Text style={styles.summaryTitle}>Ders</Text>
          <Text style={styles.summaryText}>
            Bu hafta programınızda bulunuyor.
          </Text>
        </View>
      </View>

      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CourseCard course={item} />
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
    backgroundColor: "#F4FBF7",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#17352B",
  },

  subtitle: {
    color: "#718078",
    marginTop: 6,
    marginBottom: 18,
  },

  summary: {
    backgroundColor: "#16875D",
    borderRadius: 18,
    padding: 18,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  summaryNumber: {
    color: "#FFFFFF",
    fontSize: 36,
    fontWeight: "bold",
    marginRight: 15,
  },

  summaryTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },

  summaryText: {
    color: "#D9F5E9",
    marginTop: 2,
  },
});