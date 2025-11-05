import BtnGitHub from "@/components/Buttons/BtnGitHub";
import Logo from "@/components/Logo";
import { Colors, Fonts } from "@/constants/theme";
import { rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

function ListHeader() {
  return (
    <View style={styles.container}>
      <Logo size={64} />
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Developed by Mostafa Ahmed </Text>
        <BtnGitHub />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: rh(20),
    marginBottom: rh(30),
  },
  label: {
    fontFamily: Fonts.RobotoBold,
    fontSize: rh(16),
    color: Colors.secondaryText,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: rw(5),
  },
});

export default memo(ListHeader);
