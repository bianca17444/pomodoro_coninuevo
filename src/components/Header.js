import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { options } from "../constants/theme";

export default function Header({
  currentTab,
  onTabChange,
  detailColor,
  bgColor,
}) {
  return (
    <View style={styles.header}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onTabChange(index)}
          style={[
            styles.tab,
            { borderColor: detailColor },
            currentTab === index && { backgroundColor: detailColor },
          ]}
        >
          <Text
            style={[
              styles.tabText,
              { color: currentTab === index ? bgColor : detailColor },
            ]}
          >
            {option.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  tab: {
    padding: 8,
    borderRadius: 8,
    borderWidth: 2,
    width: "32%",
    alignItems: "center",
  },
  tabText: { fontWeight: "bold", fontSize: 10, textAlign: "center" },
});
