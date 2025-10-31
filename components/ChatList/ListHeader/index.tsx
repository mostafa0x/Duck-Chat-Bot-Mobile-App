import Logo from "@/components/Logo";
import { Colors, Fonts } from "@/constants/theme";
import { rh } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

function ListHeader() {
  return (
    <View style={styles.container}>
      <Logo size={64} />
      <Text style={styles.label}>What’s on the agenda today?</Text>
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
    fontSize: rh(20),
    color: Colors.secondaryText,
  },
});

export default memo(ListHeader);
