import { Colors, Fonts } from "@/constants/theme";
import { useAppDispatch } from "@/hooks/useRedux";
import { setCurrentChat } from "@/lib/store/AppSlice";
import { rf, rw } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import React, { useCallback } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-paper";

export default function BtnNewChat() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handlePress = useCallback(() => {
    dispatch(setCurrentChat(-1));
    router.navigate("/");
  }, []);

  return (
    <TouchableOpacity onPress={handlePress} style={styles.rightSide}>
      <Text style={styles.newLabel}>New Chat</Text>
      <Icon size={rf(28)} source={"open-in-new"} color={Colors.primaryText} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  rightSide: {
    flexDirection: "row",
    alignItems: "center",
    gap: rw(5),
  },
  newLabel: {
    color: Colors.primaryText,
    fontFamily: Fonts.RobotoRegular,
    fontSize: rf(14),
  },
});
