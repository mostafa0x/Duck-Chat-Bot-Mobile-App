import Appbar from "@/components/Appbar";
import ChatList from "@/components/ChatList";
import SectionThree from "@/components/Sections/SectionThree";
import { Colors } from "@/constants/theme";
import { rh, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, View } from "react-native";
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.sectionOne}>
        <Appbar from="home" />
      </View>
      <View style={styles.sectionTwo}>
        <ChatList />
      </View>
      <SectionThree />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  sectionOne: {
    flex: 0.4,
    backgroundColor: Colors.secondaryBg,
    paddingHorizontal: rw(34),
    paddingVertical: rh(36),
  },
  sectionTwo: {
    flex: 6,
  },
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
