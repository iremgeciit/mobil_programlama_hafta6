import { Text, View, StyleSheet } from "react-native";

export default function StatusBadge({ status }) {
  const getColors = () => {
    if (status === "Çözüldü") {
      return {
        backgroundColor: "#DCFCE7",
        color: "#15803D",
      };
    }

    if (status === "İşlemde") {
      return {
        backgroundColor: "#FEF3C7",
        color: "#B45309",
      };
    }

    return {
      backgroundColor: "#FEE2E2",
      color: "#DC2626",
    };
  };

  const colors = getColors();

  return (
    <View
      style={[
        styles.badge,
        { backgroundColor: colors.backgroundColor },
      ]}
    >
      <Text style={[styles.text, { color: colors.color }]}>
        {status}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: "flex-start",
  },

  text: {
    fontWeight: "bold",
    fontSize: 13,
  },
});