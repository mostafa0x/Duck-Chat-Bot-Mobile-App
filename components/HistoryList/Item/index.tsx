import { Colors, Fonts } from "@/constants/theme";
import { currentChatType } from "@/types/AppSliceType";
import { rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function HistoryList_Item({ item }: { item: currentChatType }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.titleName} numberOfLines={1}>
        HistoryList_Item
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.thirdButton,
    padding: rw(10),
    borderRadius: rw(10),
    flexShrink: 1,
  },
  titleName: {
    color: Colors.primaryText,
    fontSize: rw(14),
    fontFamily: Fonts.RobotoRegular,
  },
});
