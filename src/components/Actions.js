import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default function Actions({
  isActive,
  onStartStop,
  detailColor,
  bgColor,
}) {
  return (
    <View style={styles.actionsContainer}>
      <TouchableOpacity
        style={[styles.mainButton, { backgroundColor: detailColor }]}
        onPress={onStartStop}
      >
        <Text style={[styles.buttonText, { color: bgColor }]}>
          {isActive ? "PAUSA" : "INICIAR"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  actionsContainer: {
    width: "100%",
    alignItems: "center",
  },
  mainButton: {
    width: "80%",
    paddingVertical: 18,
    borderRadius: 15,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: "900",
  },
});
