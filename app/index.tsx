import Appbar from "@/components/Appbar";
import { Colors } from "@/constants/theme";
import { rh, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.sectionOne}>
        <Appbar />
      </View>
      <View style={styles.sectionTwo}></View>
      <View style={styles.sectionThree}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  sectionOne: {
    flex: 0.5,
    backgroundColor: Colors.secondaryBg,
    paddingHorizontal: rw(34),
    paddingVertical: rh(36),
  },
  sectionTwo: {
    flex: 6,
  },
  sectionThree: {
    flex: 0.5,
    backgroundColor: Colors.secondaryBg,
    paddingHorizontal: rw(34),
    paddingVertical: rh(36),
  },
});
