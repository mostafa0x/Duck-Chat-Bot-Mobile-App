import Logo from "@/components/Logo";
import { Colors, Fonts } from "@/constants/theme";
import { useAppDispatch } from "@/hooks/useRedux";
import { retryErrorMessage } from "@/lib/store/AppSlice";
import handlerSendMessage from "@/services/handlerSendMessage";
import { Message } from "@/types/AppSliceType";
import { rf, rh, rw } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import React, { memo, useCallback, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";

function Item_ChatList({ message }: { message: Message }) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const MyMessage = message?.role === "user" ? true : false;

  const handlerRetry = useCallback(async () => {
    dispatch(retryErrorMessage(message.id));
    await handlerSendMessage(dispatch, message.content, message);
  }, [message]);

  const handleSelect = useCallback(() => {
    router.push({ pathname: "/Selection", params: { messageId: message.id } });
  }, []);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <View style={[styles.wrapperContainer, !MyMessage && styles.spacing]}>
        {!MyMessage && (
          <View style={styles.iconContainer}>
            <Logo size={32} />
          </View>
        )}
        <TouchableOpacity
          disabled={MyMessage}
          onLongPress={handleSelect}
          style={[styles.container, MyMessage && styles.myMessage]}
        >
          <Text style={styles.messageLabel}>{message.content}</Text>
        </TouchableOpacity>
      </View>
      {message.status === "error" && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorLabel}>{message.error}</Text>
          <Button
            onPress={handlerRetry}
            style={styles.errorBtn}
            labelStyle={styles.errorBtnLabel}
          >
            Retry
          </Button>
        </View>
      )}
    </>
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
  errorContainer: {
    marginTop: rh(10),
    alignItems: "center",
    flexDirection: "row",
  },
  errorLabel: {
    fontFamily: Fonts.RobotoRegular,
    fontSize: rf(14),
    color: Colors.primaryText,
  },
  errorBtn: {},
  errorBtnLabel: {
    color: "#e01919ff",
    fontFamily: Fonts.RobotoBold,
    fontSize: rf(16),
  },
});

export default memo(Item_ChatList);
