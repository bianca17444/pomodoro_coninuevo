import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default function Actions({
  isActive,
  onStartStop,
  onStopAlarm,
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

      <TouchableOpacity
        style={[
          styles.mainButton,
          styles.stopAlarmButton,
          { borderColor: detailColor },
        ]}
        onPress={onStopAlarm}
      >
        <Text style={[styles.buttonText, { color: detailColor }]}>
          SILENCIAR
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  actionsContainer: {
    width: "100%",
    alignItems: "center",
    gap: 15,
  },
  mainButton: {
    width: "80%",
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 999,
    alignItems: "center",
    elevation: 5,
  },
  stopAlarmButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: "900",
  },
});