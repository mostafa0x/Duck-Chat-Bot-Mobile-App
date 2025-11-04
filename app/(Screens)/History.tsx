import Appbar from "@/components/Appbar";
import HistoryList from "@/components/HistoryList";
import { Colors } from "@/constants/theme";
import { useAppSelector } from "@/hooks/useRedux";
import { rh, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HistoryScreen() {
  const { currentChat, history } = useAppSelector((state) => state.AppReducer);
  return (
    <>
      <View style={styles.appbarContainer}>
        <Appbar from="history" />
      </View>
      <View style={styles.container}>
        <HistoryList />
        <Text style={{ color: "#fff" }}>{currentChat?.name}</Text>
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
