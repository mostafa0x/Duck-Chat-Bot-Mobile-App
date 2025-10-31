import { Colors, Fonts } from "@/constants/theme";
import { rf, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import BtnHistory from "../Buttons/BtnHistory";
import Logo from "../Logo";

function Appbar() {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <Logo size={52} />
        <Text style={styles.label}>Duck AI</Text>
      </View>
      <View style={styles.rightSide}>
        <BtnHistory />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    color: Colors.primaryText,
    fontFamily: Fonts.RobotoMedium,
    fontSize: rf(18),
  },
  leftSide: {
    flexDirection: "row",
    gap: rw(10),
    alignItems: "center",
  },
  rightSide: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default memo(Appbar);
