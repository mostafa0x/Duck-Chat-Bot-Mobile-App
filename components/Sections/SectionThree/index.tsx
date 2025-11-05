import BtnSend from "@/components/Buttons/BtnSend";
import InputMessage from "@/components/InputMessage";
import { Colors } from "@/constants/theme";
import { rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";

function SectionThree() {
  return (
    <View style={styles.sectionThree}>
      <InputMessage />
      <BtnSend />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionThree: {
    flex: 1.2,
    backgroundColor: Colors.secondaryBg,
    paddingHorizontal: rw(34),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: rw(20),
  },
});

export default memo(SectionThree);
