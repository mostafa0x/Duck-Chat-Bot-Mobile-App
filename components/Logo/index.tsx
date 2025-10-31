import { Colors } from "@/constants/theme";
import { rf, rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";

function Logo() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("@/assets/images/duckIcon.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: rf(64),
    height: rf(64),
    backgroundColor: Colors.thirdButton,
    borderRadius: rf(99),
    paddingTop: rh(7),
  },
  img: {
    width: rw(64),
    height: rh(64),
  },
});

export default memo(Logo);
