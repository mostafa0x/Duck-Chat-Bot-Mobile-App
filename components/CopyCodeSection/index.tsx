import { Colors, Fonts } from "@/constants/theme";
import { rf, rh, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-paper";

export default function CopyCodeSection() {
  return (
    <TouchableOpacity style={styles.copyContainer}>
      <Text style={styles.copyLabel}>Copy Code</Text>
      <Icon size={rf(20)} source={"content-copy"} color={Colors.primaryText} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  copyContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: rw(5),
    marginBottom: rh(10),
    justifyContent: "flex-end",
  },
  copyLabel: {
    fontFamily: Fonts.RobotoMedium,
    fontSize: rf(12),
    color: Colors.primaryText,
  },
});
