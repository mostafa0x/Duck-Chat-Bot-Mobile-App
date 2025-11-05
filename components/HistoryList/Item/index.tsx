import { Colors, Fonts } from "@/constants/theme";
import { useAppDispatch } from "@/hooks/useRedux";
import { setCurrentChat } from "@/lib/store/AppSlice";
import { currentChatType } from "@/types/AppSliceType";
import { rw } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import React, { memo, useCallback } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function HistoryList_Item({
  item,
  currentChat,
}: {
  item: currentChatType;
  currentChat: currentChatType | null;
}) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const active = item.id === currentChat?.id;

  const handlePress = useCallback(() => {
    router.navigate("/");
    dispatch(setCurrentChat(item));
  }, [dispatch, item, router]);

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.container, active && styles.activeBg]}
    >
      <Text style={styles.titleName} numberOfLines={1}>
        {item.name}
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
  activeBg: {
    backgroundColor: Colors.primaryButton,
  },
  titleName: {
    color: Colors.primaryText,
    fontSize: rw(14),
    fontFamily: Fonts.RobotoRegular,
  },
});

export default memo(HistoryList_Item, (prev, next) => {
  return (
    prev.item.id === next.item.id &&
    prev.currentChat?.id === next.currentChat?.id
  );
});
