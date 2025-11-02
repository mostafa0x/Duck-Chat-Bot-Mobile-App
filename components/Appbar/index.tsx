import { Colors, Fonts } from "@/constants/theme";
import { rf, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import BtnBack from "../Buttons/BtnBack";
import BtnHistory from "../Buttons/BtnHistory";
import Logo from "../Logo";

function Appbar({ from }: { from: "home" | "selection" }) {
  const inHome = from === "home";
  const title = inHome ? "Duck AI" : "Text Selection";
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        {inHome ? <Logo size={52} /> : <BtnBack />}
        <Text style={styles.label}>{title}</Text>
      </View>
      {inHome && (
        <View style={styles.rightSide}>
          <BtnHistory />
        </View>
      )}
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
