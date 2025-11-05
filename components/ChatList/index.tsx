import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { setCurrentChat } from "@/lib/store/AppSlice";
import { Message } from "@/types/AppSliceType";
import { rh, rw } from "@/utils/dimensions";
import { FlashList, FlashListRef } from "@shopify/flash-list";
import React, { memo, useCallback, useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import Item_ChatList from "./Item";
import ListFooter from "./ListFooter";
import ListHeader from "./ListHeader";

function ChatList() {
  const dispatch = useAppDispatch();
  const listRef = useRef<FlashListRef<Message> | null>(null);
  const { currentChat, isLoadingChat } = useAppSelector(
    (state) => state.AppReducer
  );
  const renderItem = useCallback(({ item }: { item: Message }) => {
    return <Item_ChatList message={item} />;
  }, []);

  const itemSeparator = useCallback(() => {
    return <View style={styles.itemSeparator}></View>;
  }, []);

  useEffect(() => {
    !currentChat && dispatch(setCurrentChat({ id: Date.now(), messages: [] }));
    return () => {};
  }, []);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollToEnd({ animated: false });
    }
    return () => {};
  }, [currentChat?.messages]);

  return (
    <View style={styles.container}>
      <FlashList
        ref={listRef}
        contentContainerStyle={styles.contentContainer}
        data={currentChat ? currentChat.messages : []}
        renderItem={renderItem}
        keyExtractor={(item) => item?.id.toString()}
        ItemSeparatorComponent={itemSeparator}
        numColumns={1}
        ListHeaderComponent={<ListHeader />}
        ListFooterComponent={<ListFooter isLoading={isLoadingChat} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    paddingBottom: rh(50),
    paddingTop: rh(50),
    paddingHorizontal: rw(20),
  },
  itemSeparator: {
    height: rh(20),
  },
});

export default memo(ChatList);
