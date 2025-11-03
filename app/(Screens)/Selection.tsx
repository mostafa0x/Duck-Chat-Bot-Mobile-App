import Appbar from "@/components/Appbar";
import CopyCodeSection from "@/components/CopyCodeSection";
import { Colors, Fonts } from "@/constants/theme";
import { useAppSelector } from "@/hooks/useRedux";
import { rf, rh, rw } from "@/utils/dimensions";
import * as Clipboard from "expo-clipboard";
import { useLocalSearchParams } from "expo-router";
import React, { useCallback } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

export default function SelectionScreen() {
  const { messId } = useLocalSearchParams();
  const messageId = Array.isArray(messId) ? messId[0] : messId;
  const { currentChat } = useAppSelector((state) => state.AppReducer);

  const currentMessage = currentChat?.messages.find(
    (message) => message.id === Number(messageId)
  );

  console.log(currentMessage);

  const content = currentMessage?.content ?? "";

  const parts = content.split(/```([\s\S]*?)```/g);

  const CopyAll = useCallback(async () => {
    await Clipboard.setStringAsync(content);
  }, [content]);

  return (
    <>
      <View style={styles.appbarContainer}>
        <Appbar from="selection" CopyAll={CopyAll} />
      </View>

      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
      >
        <View style={styles.outputContainer}>
          {parts.map((part, index) => {
            const isCode = index % 2 === 1; // 👈 فردي = كود
            return isCode ? (
              <View key={index} style={styles.codeBlock}>
                <CopyCodeSection code={part.trim()} />
                <TextInput
                  multiline
                  style={styles.codeText}
                  value={part.trim()}
                />
              </View>
            ) : (
              <TextInput
                multiline
                key={index}
                style={styles.normalText}
                value={part.trim()}
                selectionColor={Colors.messageBg}
              />
            );
          })}
        </View>
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
  contentContainer: {
    flexGrow: 1,
    paddingTop: rh(30),
    paddingBottom: rh(100),
  },
  outputContainer: {
    marginTop: rh(30),
  },
  normalText: {
    fontSize: rf(15),
    color: Colors.primaryText,
    fontFamily: Fonts.RobotoRegular,
    marginBottom: rh(10),
    lineHeight: rh(24),
  },
  codeBlock: {
    backgroundColor: "#1e1e1e",
    borderRadius: rw(10),
    padding: rw(12),
    marginVertical: rh(8),
  },
  codeText: {
    color: "#f8f8f2",
    fontFamily: Platform.select({
      ios: "Courier",
      android: "monospace",
    }),
    fontSize: rf(14),
    lineHeight: rh(22),
  },
});
