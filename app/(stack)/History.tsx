import Appbar from "@/components/Appbar";
import HistoryList from "@/components/HistoryList";
import { Colors } from "@/constants/theme";
import { rh, rw } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";

export default function HistoryScreen() {
  const router = useRouter();
  useEffect(() => {
    router.prefetch("/");

    return () => {};
  }, []);
  return (
    <>
      <View style={styles.appbarContainer}>
        <Appbar from="history" />
      </View>
      <View style={styles.container}>
        <HistoryList />
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
