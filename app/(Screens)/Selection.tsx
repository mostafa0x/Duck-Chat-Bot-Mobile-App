import Appbar from "@/components/Appbar";
import CopyCodeSection from "@/components/CopyCodeSection";
import { Colors, Fonts } from "@/constants/theme";
import { useAppSelector } from "@/hooks/useRedux";
import { rf, rh, rw } from "@/utils/dimensions";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function SelectionScreen() {
  const { messId } = useLocalSearchParams();
  const messageId = Array.isArray(messId) ? messId[0] : messId;
  const [height, setHeight] = useState(100);
  const { currentChat } = useAppSelector((state) => state.AppReducer);

  const currentMessage = currentChat?.messages.find(
    (message) => message.id === Number(messageId)
  );

  const content = currentMessage?.content ?? "";
  console.log(currentMessage);

  const parts = content.split(/```([\s\S]*?)```/g);

  return (
    <>
      <View style={styles.appbarContainer}>
        <Appbar from="selection" />
      </View>

      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
      >
        <View style={styles.outputContainer}>
          {parts.map((part, index) => {
            const isCode = content.includes("```" + part + "```");
            return isCode ? (
              <View key={index} style={styles.codeBlock}>
                <CopyCodeSection />
                <TextInput
                  style={[styles.textArea, { height }]}
                  multiline
                  onContentSizeChange={(e) =>
                    setHeight(e.nativeEvent.contentSize.height)
                  }
                  placeholder="Wait for response..."
                  placeholderTextColor={Colors.secondaryText}
                  textAlignVertical="top"
                  value={part.trim()}
                  selectionColor={Colors.primaryButton}
                />
              </View>
            ) : (
              <Text key={index} style={styles.normalText}>
                {part.trim()}
              </Text>
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
  textArea: {
    height: rh(150),
    fontSize: rf(16),
    fontFamily: Fonts.RobotoRegular,
    color: Colors.primaryText,
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
