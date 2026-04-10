import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Vibration,
  Platform,
} from "react-native";
import { Audio } from "expo-av";
import { options } from "./src/constants/theme";
import Header from "./src/components/Header";
import Timer from "./src/components/Timer";
import Actions from "./src/components/Actions";

export default function App() {
  const [time, setTime] = useState(options[0].time);
  const [currentTab, setCurrentTab] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const [clickSound, setClickSound] = useState(null);
  const [alarmSound, setAlarmSound] = useState(null);

  // 🔊 Inicializar audio
  useEffect(() => {
    const loadSounds = async () => {
      try {
        await Audio.setAudioModeAsync({
          playsInSilentModeIOS: true,
          staysActiveInBackground: true,
          shouldDuckAndroid: true,
        });

        const { sound: click } = await Audio.Sound.createAsync(
          require("./assets/click.mp3"),
        );

        const { sound: alarm } = await Audio.Sound.createAsync(
          require("./assets/alarm.mp3"),
        );

        setClickSound(click);
        setAlarmSound(alarm);

        console.log("✅ sonidos cargados");
      } catch (error) {
        console.log("❌ error audio:", error);
      }
    };

    loadSounds();

    // test automático
    setTimeout(() => {
      console.log("🔊 probando click...");
      clickSound?.replayAsync();
    }, 3000);

    return () => {
      clickSound?.unloadAsync();
      alarmSound?.unloadAsync();
    };
  }, []);

  // ⏱️ Timer
  useEffect(() => {
    let interval = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    if (time === 0 && isActive) {
      alarmSound?.replayAsync();
      Vibration.vibrate([500, 1000, 500]);
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const currentOption = options[currentTab];

  const handleTabChange = (index) => {
    clickSound?.replayAsync();
    setCurrentTab(index);
    setTime(options[index].time);
    setIsActive(false);
  };

  const handleToggle = () => {
    clickSound?.replayAsync();
    setIsActive(!isActive);
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: currentOption.bg }]}
    >
      <View style={styles.content}>
        <Timer time={time} detailColor={currentOption.detail} />

        <Header
          currentTab={currentTab}
          onTabChange={handleTabChange}
          detailColor={currentOption.detail}
          bgColor={currentOption.bg}
        />

        <Actions
          isActive={isActive}
          onStartStop={handleToggle}
          detailColor={currentOption.detail}
          bgColor={currentOption.bg}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    flex: 1,
    padding: 20,
    paddingTop: Platform.OS === "android" ? 40 : 0,
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },
});
