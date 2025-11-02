import Appbar from "@/components/Appbar";
import { Colors } from "@/constants/theme";
import { rh, rw } from "@/utils/dimensions";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SelectionScreen() {
  const { id } = useLocalSearchParams();
  const messageId = Array.isArray(id) ? id[0] : id;
  return (
    <View style={styles.container}>
      <View style={styles.appbarContainer}>
        <Appbar from="selection" />
      </View>
      <Text>Selection</Text>
      <Text>Selection</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  appbarContainer: {
    paddingHorizontal: rw(34),
    paddingVertical: rh(36),
    backgroundColor: Colors.secondaryBg,
  },
});
