import { Colors, Fonts } from "@/constants/theme";
import { rf, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-paper";
import BtnBack from "../Buttons/BtnBack";
import BtnHistory from "../Buttons/BtnHistory";
import BtnNewChat from "../Buttons/BtnNewChat";
import Logo from "../Logo";

function Appbar({
  from,
  CopyAll,
}: {
  from: "home" | "selection" | "history";
  CopyAll?: () => Promise<void>;
}) {
  const inHome = from === "home";
  const inSelection = from === "selection";
  const inHistory = from === "history";

  const title = inHome ? "Duck AI" : inSelection ? "Text Selection" : "History";
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
      {inSelection && (
        <TouchableOpacity onPress={CopyAll} style={styles.rightSide}>
          <Icon
            size={rf(30)}
            source={"content-copy"}
            color={Colors.primaryText}
          />
        </TouchableOpacity>
      )}
      {inHistory && <BtnNewChat />}
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
    gap: rw(5),
  },
});

export default memo(Appbar);
