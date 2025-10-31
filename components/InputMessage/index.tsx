import { Colors, Fonts } from "@/constants/theme";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { setMyMessage } from "@/lib/store/AppSlice";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, TextInput, View } from "react-native";

function InputMessage() {
  const dispatch = useAppDispatch();
  const { myMessage } = useAppSelector((state) => state.AppReducer);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Write To Send Massage"
        placeholderTextColor={Colors.secondaryText}
        value={myMessage}
        onChangeText={(text: string) => dispatch(setMyMessage(text))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  input: {
    backgroundColor: Colors.thirdButton,
    borderRadius: rw(99),
    paddingHorizontal: rw(20),
    width: rw(275),
    height: rh(56),
    fontFamily: Fonts.RobotoMedium,
    color: Colors.primaryText,
    fontSize: rf(16),
  },
});

export default memo(InputMessage);
