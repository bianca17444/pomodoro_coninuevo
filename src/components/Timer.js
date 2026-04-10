import { StyleSheet, View, Text } from "react-native";
import { formatTime } from "../utils/timeFormat"; // <--- Importamos la utilidad

export default function Timer({ time, detailColor }) {
  return (
    <View style={[styles.timerBox, { borderColor: detailColor }]}>
      <Text style={[styles.timerText, { color: detailColor }]}>
        {formatTime(time)} {/* <--- Usamos la utilidad aquí */}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  timerBox: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    width: "100%",
    paddingVertical: 60,
    borderRadius: 20,
    alignItems: "center",
    borderWidth: 3,
  },
  timerText: {
    fontSize: 85,
    fontWeight: "bold",
  },
});
