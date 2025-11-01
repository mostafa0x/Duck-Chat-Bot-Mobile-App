import { Colors, Fonts } from "@/constants/theme";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { setMyMessage } from "@/lib/store/AppSlice";
import handlerSendMessage from "@/services/handlerSendMessage";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo, useCallback } from "react";
import { StyleSheet, TextInput, View } from "react-native";

function InputMessage() {
  const dispatch = useAppDispatch();
  const { myMessage, isLoadingChat } = useAppSelector(
    (state) => state.AppReducer
  );

  const handlePress = useCallback(() => {
    !isLoadingChat && handlerSendMessage(dispatch);
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        onSubmitEditing={handlePress}
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
