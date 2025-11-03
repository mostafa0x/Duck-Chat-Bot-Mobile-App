import Appbar from "@/components/Appbar";
import { Colors } from "@/constants/theme";
import { rh, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HistoryScreen() {
  return (
    <>
      <View style={styles.appbarContainer}>
        <Appbar from="history" />
      </View>
      <View style={styles.container}>
        <Text>HistoryScreen</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: rw(10),
  },
  appbarContainer: {
    paddingHorizontal: rw(34),
    paddingVertical: rh(36),
    backgroundColor: Colors.secondaryBg,
  },
});
