import { Colors } from "@/constants/theme";
import { handlerBack } from "@/services/handlerBack";
import { rf } from "@/utils/dimensions";
import { usePathname, useRouter } from "expo-router";
import React, { memo } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-paper";
function BtnBack() {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <TouchableOpacity
      onPress={() => handlerBack(router, pathName)}
      style={styles.container}
    >
      <Icon size={rf(30)} source={"less-than"} color="#fff" />
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
  },
});

export default memo(BtnBack);
