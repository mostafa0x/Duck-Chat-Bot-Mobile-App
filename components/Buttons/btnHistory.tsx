import { rf } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-paper";

export default function BtnHistory() {
  return (
    <TouchableOpacity>
      <Icon size={rf(40)} source={"history"} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
