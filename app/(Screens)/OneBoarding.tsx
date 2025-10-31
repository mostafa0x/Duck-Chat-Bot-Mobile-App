import { Colors, Fonts } from "@/constants/theme";
import { rf, rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function OneBoarding() {
  return (
    <View style={styles.container}>
      <View style={styles.upperSection}>
        <Image
          style={styles.img}
          source={require("@/assets/images/intro2.png")}
        />
      </View>
      <View style={styles.lowerSection}></View>

      <Text style={styles.mainLabel}>OneBoardingx</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperSection: {
    flex: 1,
  },
  lowerSection: {
    flex: 1,
    backgroundColor: Colors.secondaryBg,
  },
  img: {
    width: rw(500),
    height: rh(500),
  },
  mainLabel: {
    color: Colors.primaryText,
    fontFamily: Fonts.RobotoBold,
    fontSize: rf(40),
  },
});
