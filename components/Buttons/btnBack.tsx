import { Colors } from "@/constants/theme";
import { handlerBack } from "@/services/handlerBack";
import { rf, rh, rw } from "@/utils/dimensions";
import { usePathname, useRouter } from "expo-router";
import React, { memo } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
function BtnBack() {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <TouchableOpacity
      onPress={() => handlerBack(router, pathName)}
      style={styles.container}
    >
      <ArrowLeftIcon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: rf(40),
    height: rf(40),
    borderRadius: rf(99),
    backgroundColor: Colors.thirdButton,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: rw(6),
    paddingTop: rh(2),
  },
});

export default memo(BtnBack);
