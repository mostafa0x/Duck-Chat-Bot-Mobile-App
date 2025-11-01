import Logo from "@/components/Logo";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { BarIndicator } from "react-native-indicators";
function ListFooter({ isLoading }: { isLoading: boolean }) {
  return isLoading ? (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Logo size={32} />
      </View>
      <View style={styles.loader}>
        <BarIndicator color="#fff" size={rf(36)} key={"loader-footer"} />
      </View>
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    gap: rw(10),
    marginTop: rh(20),
  },
  iconContainer: {
    paddingTop: rh(10),
    width: rw(20),
  },
  loader: {},
});

export default memo(ListFooter);
