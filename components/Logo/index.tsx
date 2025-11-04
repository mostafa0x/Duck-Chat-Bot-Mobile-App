import { Colors } from "@/constants/theme";
import { rf, rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";

function Logo({ size = 64 }: { size: number }) {
  return (
    <View
      style={[
        styles.container,
        {
          width: rf(size),
          height: rf(size),
        },
      ]}
    >
      <Image
        cachePolicy={"memory-disk"}
        style={{
          width: rw(size),
          height: rh(size),
        }}
        source={require("@/assets/images/duckIcon.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.thirdButton,
    borderRadius: rf(99),
    paddingTop: rh(5),
  },
});

export default memo(Logo);
