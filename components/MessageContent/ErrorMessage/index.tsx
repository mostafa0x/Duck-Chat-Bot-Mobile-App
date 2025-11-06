import { Colors, Fonts } from "@/constants/theme";
import { useAppDispatch } from "@/hooks/useRedux";
import { retryErrorMessage } from "@/lib/store/AppSlice";
import handlerSendMessage from "@/services/handlerSendMessage";
import { Message } from "@/types/AppSliceType";
import { rf, rh } from "@/utils/dimensions";
import React, { memo, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

function ErrorMessage({ message }: { message: Message }) {
  const dispatch = useAppDispatch();
  const handlerRetry = useCallback(async () => {
    dispatch(retryErrorMessage(message.id));
    await handlerSendMessage(dispatch, message.content, message);
  }, [message]);
  return (
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
  );
}

const styles = StyleSheet.create({
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

export default memo(ErrorMessage, (prev, next) => {
  return prev.message.id === next.message.id;
});
