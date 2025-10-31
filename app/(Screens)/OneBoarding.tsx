import CustomButton from "@/components/CustomButton";
import { Colors, Fonts } from "@/constants/theme";
import { rf, rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function OnBoardingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.upperSection}>
        <Image
          style={styles.img}
          source={require("@/assets/images/intro2.png")}
        />
      </View>
      <View style={styles.lowerSection}>
        <View style={styles.txtContainer}>
          <Text style={styles.mainLabel}>Welcome to Duck Ai</Text>
          <Text style={styles.secLabel}>
            help you to make your life easier and more fun
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <CustomButton label={"Next"} type={1} />
          <Text style={styles.policyLabel}>
            By Continuing , your agree to our Privacy Policy & Term Of Use
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primaryBg,
  },
  lowerSection: {
    flex: 1,
    backgroundColor: Colors.secondaryBg,
    paddingHorizontal: rw(34),
    paddingVertical: rh(36),
    justifyContent: "space-between",
  },
  img: {
    width: rw(300),
    height: rh(300),
  },
  txtContainer: {
    gap: rh(10),
  },
  mainLabel: {
    color: Colors.primaryText,
    fontFamily: Fonts.RobotoBold,
    fontSize: rf(32),
  },
  secLabel: {
    color: Colors.secondaryText,
    fontFamily: Fonts.RobotoRegular,
    fontSize: rf(16),
    width: rw(230),
  },
  policyLabel: {
    color: Colors.secondaryText,
    fontFamily: Fonts.RobotoRegular,
    fontSize: rf(14),
    textAlign: "center",
  },
  btnContainer: {
    alignItems: "center",
    gap: rh(20),
  },
});
