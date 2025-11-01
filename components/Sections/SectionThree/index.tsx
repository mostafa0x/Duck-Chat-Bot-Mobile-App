import BtnSend from "@/components/Buttons/BtnSend";
import InputMessage from "@/components/InputMessage";
import { Colors } from "@/constants/theme";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function SectionThree() {
  const dispatch = useAppDispatch();
  const { myMessage } = useAppSelector((state) => state.AppReducer);

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
