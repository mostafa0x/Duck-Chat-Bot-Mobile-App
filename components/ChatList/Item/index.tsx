import Logo from "@/components/Logo";
import { Colors, Fonts } from "@/constants/theme";
import { Message } from "@/types/AppSliceType";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

function Item_ChatList({ message }: { message: Message }) {
  const MyMessage = message?.role === "user" ? true : false;
  return (
    <View style={[styles.wrapperContainer, !MyMessage && styles.spacing]}>
      {!MyMessage && (
        <View style={styles.iconContainer}>
          <Logo size={32} />
        </View>
      )}
      <View style={[styles.container, MyMessage && styles.myMessage]}>
        <Text style={styles.messageLabel}>{message.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperContainer: {
    flexDirection: "row",
    gap: rw(10),
    alignItems: "flex-start",
  },
  spacing: {
    marginLeft: rw(10),
  },
  container: {
    backgroundColor: Colors.thirdButton,
    borderRadius: rw(20),
    width: "90%",
    height: "auto",
    padding: rw(15),
  },
  iconContainer: {
    paddingTop: rh(10),
  },
  myMessage: {
    backgroundColor: Colors.messageBg,
    width: "100%",
  },
  messageLabel: {
    fontFamily: Fonts.RobotoRegular,
    fontSize: rf(16),
    color: Colors.primaryText,
    width: "100%",
  },
});

export default memo(Item_ChatList);
