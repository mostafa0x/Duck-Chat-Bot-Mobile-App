import { Colors, Fonts } from "@/constants/theme";
import { useAppDispatch } from "@/hooks/useRedux";
import { setCurrentChat } from "@/lib/store/AppSlice";
import { currentChatType } from "@/types/AppSliceType";
import { rw } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import React, { memo, useCallback } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function HistoryList_Item({ item }: { item: currentChatType }) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handlePress = useCallback(() => {
    dispatch(setCurrentChat(item));
    router.push("/");
  }, []);

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
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
  titleName: {
    color: Colors.primaryText,
    fontSize: rw(14),
    fontFamily: Fonts.RobotoRegular,
  },
});

export default memo(HistoryList_Item);
