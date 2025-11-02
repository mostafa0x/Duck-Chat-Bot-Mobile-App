import Appbar from "@/components/Appbar";
import { Colors, Fonts } from "@/constants/theme";
import { useAppSelector } from "@/hooks/useRedux";
import { rf, rh, rw } from "@/utils/dimensions";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function SelectionScreen() {
  const { messId } = useLocalSearchParams();
  const messageId = Array.isArray(messId) ? messId[0] : messId;
  const [height, setHeight] = useState(100);
  const { currentChat } = useAppSelector((state) => state.AppReducer);

  const currentMessage = currentChat?.messages.find(
    (message) => message.id === Number(messageId)
  );

  return (
    <>
      <View style={styles.appbarContainer}>
        <Appbar from="selection" />
      </View>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
      >
        <TextInput
          style={[styles.textArea, { height }]}
          multiline
          onContentSizeChange={(e) =>
            setHeight(e.nativeEvent.contentSize.height)
          }
          placeholder="Wait for response..."
          placeholderTextColor={Colors.secondaryText}
          textAlignVertical="top"
          value={currentMessage?.content ?? ""}
          selectionColor={Colors.primaryButton}
        />
        <Text>Selection</Text>
        <Text>Selection</Text>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: rw(10),
  },
  appbarContainer: {
    paddingHorizontal: rw(34),
    paddingVertical: rh(36),
    backgroundColor: Colors.secondaryBg,
  },
  textArea: {
    height: rh(150),
    borderColor: "#ccc",
    borderWidth: rw(1),
    borderRadius: rw(10),
    padding: rw(10),
    fontSize: rf(16),
    fontFamily: Fonts.RobotoRegular,
    color: Colors.primaryText,
  },
  contentContainer: {
    flexGrow: 1,
    paddingTop: rh(30),
    paddingBottom: rh(100),
  },
});
