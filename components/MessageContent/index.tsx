import { Colors, Fonts } from "@/constants/theme";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import CopyCodeSection from "../CopyCodeSection";

function MessageContent({
  isCode,
  index,
  part,
}: {
  isCode: boolean;
  index: number;
  part: string;
}) {
  return isCode ? (
    <View key={index} style={styles.codeBlock}>
      <CopyCodeSection code={part.trim()} />
      <Text selectable style={styles.codeText}>
        {part.trim()}
      </Text>
    </View>
  ) : (
    <Text key={index} style={styles.messageLabel}>
      {part.trim()}
    </Text>
  );
}

const styles = StyleSheet.create({
  messageLabel: {
    fontFamily: Fonts.RobotoRegular,
    fontSize: rf(16),
    color: Colors.primaryText,
    width: "100%",
    lineHeight: rh(22),
  },
  codeBlock: {
    backgroundColor: "#1e1e1e",
    borderRadius: rw(10),
    padding: rw(12),
    marginVertical: rh(8),
  },
  codeText: {
    color: "#f8f8f2",
    fontFamily: Fonts.RobotoLight,
    fontSize: rf(14),
    lineHeight: rh(22),
  },
  errorContainer: {
    marginTop: rh(10),
    alignItems: "center",
    flexDirection: "row",
  },
});

export default memo(MessageContent);
