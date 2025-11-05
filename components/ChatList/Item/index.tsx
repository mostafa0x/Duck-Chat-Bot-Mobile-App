import Logo from "@/components/Logo";
import MessageContent from "@/components/MessageContent";
import ErrorMessage from "@/components/MessageContent/ErrorMessage";
import { Colors } from "@/constants/theme";
import { Message } from "@/types/AppSliceType";
import { rh, rw } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import React, { memo, useCallback, useMemo } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

function Item_ChatList({ message }: { message: Message }) {
  const router = useRouter();
  const MyMessage = message?.role === "user";

  const handleSelect = useCallback(() => {
    router.push({ pathname: "/Selection", params: { messId: message.id } });
  }, []);

  const parts = useMemo(
    () => message.content?.split(/```([\s\S]*?)```/g) ?? [],
    [message]
  );

  return (
    <>
      <View style={[styles.wrapperContainer, !MyMessage && styles.spacing]}>
        {!MyMessage && (
          <View style={styles.iconContainer}>
            <Logo size={32} />
          </View>
        )}

        <TouchableOpacity
          disabled={MyMessage}
          onLongPress={handleSelect}
          style={[styles.container, MyMessage && styles.myMessage]}
        >
          {parts.map((part, index) => {
            const isCode = index % 2 === 1;
            return (
              <MessageContent
                key={index}
                isCode={isCode}
                index={index}
                part={part}
              />
            );
          })}
        </TouchableOpacity>
      </View>

      {message.status === "error" && <ErrorMessage message={message} />}
    </>
  );
}

const styles = StyleSheet.create({
  wrapperContainer: {
    flexDirection: "row",
    gap: rw(10),
    alignItems: "flex-start",
  },
  spacing: {
    marginLeft: rw(10),
  },
  container: {
    backgroundColor: Colors.thirdButton,
    borderRadius: rw(20),
    width: "90%",
    padding: rw(15),
  },
  iconContainer: {
    paddingTop: rh(10),
  },
  myMessage: {
    backgroundColor: Colors.messageBg,
    width: "100%",
  },
});

export default memo(Item_ChatList, (prev, next) => {
  return prev.message.id === next.message.id;
});
