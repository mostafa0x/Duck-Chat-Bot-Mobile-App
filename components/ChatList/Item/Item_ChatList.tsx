import Logo from "@/components/Logo";
import MessageContent from "@/components/MessageContent";
import ErrorMessage from "@/components/MessageContent/ErrorMessage";
import { Message } from "@/types/AppSliceType";
import { useRouter } from "expo-router";
import React, { useCallback } from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from ".";

export function Item_ChatList({ message }: { message: Message }) {
  const router = useRouter();
  const MyMessage = message?.role === "user";

  const handleSelect = useCallback(() => {
    router.push({ pathname: "/Selection", params: { messId: message.id } });
  }, []);

  const parts = message.content?.split(/```([\s\S]*?)```/g) ?? [];

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

      {message.status === "error" && <ErrorMessage />}
    </>
  );
}
