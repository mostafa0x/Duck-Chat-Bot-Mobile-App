import { rf } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import React, { useCallback } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-paper";

export default function BtnHistory() {
  const router = useRouter();
  const handlePress = useCallback(() => {
    router.navigate("/History");
  }, []);
  return (
    <TouchableOpacity onPress={handlePress}>
      <Icon size={rf(40)} source={"history"} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
