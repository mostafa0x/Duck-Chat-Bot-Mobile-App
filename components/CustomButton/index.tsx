import { Colors, Fonts } from "@/constants/theme";
import { rf, rh, rw } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import React, { useCallback } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CustomButton({
  label = "Welcome",
  type,
}: {
  label: string;
  type: number;
}) {
  const router = useRouter();
  const handlePress = useCallback((type: number) => {
    if (type === 1) {
      return router.replace("/");
    }
  }, []);
  return (
    <TouchableOpacity
      onPress={() => handlePress(type)}
      style={styles.container}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: rw(157),
    height: rh(64),
    borderRadius: rw(99),
    backgroundColor: Colors.primaryButton,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    textAlign: "center",
    color: Colors.primaryText,
    fontSize: rf(16),
    fontFamily: Fonts.RobotoMedium,
  },
});
