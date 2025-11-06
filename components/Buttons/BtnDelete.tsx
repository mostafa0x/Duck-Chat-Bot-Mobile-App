import { Colors } from "@/constants/theme";
import { useAppDispatch } from "@/hooks/useRedux";
import { deleteChat } from "@/lib/store/AppSlice";
import { rf } from "@/utils/dimensions";
import React, { memo, useCallback } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-paper";

function BtnDelete({ chatId = 0 }: { chatId: number | undefined }) {
  const dispatch = useAppDispatch();

  const handlePress = useCallback(() => {
    dispatch(deleteChat(chatId));
  }, [chatId]);

  return (
    <TouchableOpacity onPress={handlePress}>
      <Icon
        source={"delete-outline"}
        size={rf(36)}
        color={Colors.primaryText}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});

export default memo(BtnDelete);
