import { Colors } from "@/constants/theme";
import { rf, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-paper";

function BtnSend() {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon source={"send"} color="#fff" size={rf(32)} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: rf(52),
    height: rf(52),
    borderRadius: rf(99),
    backgroundColor: Colors.primaryButton,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: rw(3),
  },
});

export default memo(BtnSend);
