import { Colors } from "@/constants/theme";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import handlerSendMessage, {
  CancelRequest,
} from "@/services/handlerSendMessage";
import { rf, rw } from "@/utils/dimensions";
import React, { memo, useCallback } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-paper";

function BtnSend() {
  const dispatch = useAppDispatch();
  const { isLoadingChat, myMessage } = useAppSelector(
    (state) => state.AppReducer
  );

  const handlePress = useCallback(() => {
    !isLoadingChat && handlerSendMessage(dispatch, myMessage);
  }, [myMessage]);
  return isLoadingChat ? (
    <TouchableOpacity onPress={CancelRequest} style={styles.container}>
      <Icon source={"stop"} color="#fff" size={rf(36)} />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Icon source={"send"} color="#fff" size={rf(36)} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: rf(56),
    height: rf(56),
    borderRadius: rf(99),
    backgroundColor: Colors.primaryButton,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: rw(3),
  },
  loader: {
    width: rf(50),
    height: rf(50),
  },
});

export default memo(BtnSend);
