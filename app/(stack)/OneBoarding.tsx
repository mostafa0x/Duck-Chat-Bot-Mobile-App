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
          cachePolicy={"memory-disk"}
          style={styles.img}
          source={require("@/assets/images/intro1.png")}
        />
      </View>
      <View style={styles.lowerSection}>
        <View style={styles.txtContainer}>
          <Text style={styles.mainLabel}>Welcome to Duck AI</Text>
          <Text style={styles.secLabel}>
            Your smart assistant that makes every day simpler, smarter, and a
            little more fun.
          </Text>
        </View>

        <View style={styles.btnContainer}>
          <CustomButton label={"Get Started"} type={1} />
          <Text style={styles.policyLabel}>
            By continuing, you agree to our{" "}
            <Text style={{ fontFamily: Fonts.RobotoBold }}>Privacy Policy</Text>{" "}
            and{" "}
            <Text style={{ fontFamily: Fonts.RobotoBold }}>Terms of Use</Text>.
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
    paddingVertical: rh(50),
    justifyContent: "space-between",
  },
  img: {
    width: rw(250),
    height: rh(250),
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
    width: rw(330),
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
