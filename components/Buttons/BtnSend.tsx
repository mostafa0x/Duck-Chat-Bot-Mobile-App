import { Colors } from "@/constants/theme";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { sendMessage } from "@/lib/store/AppSlice";
import { rf, rw } from "@/utils/dimensions";
import React, { memo, useCallback } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { BarIndicator } from "react-native-indicators";
import { Icon } from "react-native-paper";

function BtnSend() {
  const dispatch = useAppDispatch();
  const { isLoadingChat } = useAppSelector((state) => state.AppReducer);

  const handlePress = useCallback(() => {
    !isLoadingChat && dispatch(sendMessage());
  }, []);
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      {isLoadingChat ? (
        <BarIndicator color="#fff" size={rf(36)} />
      ) : (
        <Icon source={"send"} color="#fff" size={rf(36)} />
      )}
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
