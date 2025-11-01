import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { setCurrentChat } from "@/lib/store/AppSlice";
import { Message } from "@/types/AppSliceType";
import { rh, rw } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { useCallback, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Item_ChatList from "./Item";
import ListFooter from "./ListFooter";
import ListHeader from "./ListHeader";

export default function ChatList() {
  const dispatch = useAppDispatch();
  const { currentChat, isLoadingChat } = useAppSelector(
    (state) => state.AppReducer
  );
  const renderItem = useCallback(
    ({ item, index }: { item: Message; index: number }) => {
      return <Item_ChatList message={item} key={index} />;
    },
    []
  );

  const itemSeparator = useCallback(() => {
    return <View style={styles.itemSeparator}></View>;
  }, []);

  useEffect(() => {
    !currentChat && dispatch(setCurrentChat({ id: Date.now(), messages: [] }));
    return () => {};
  }, []);

  return (
    <View style={styles.container}>
      <FlashList
        contentContainerStyle={styles.contentContainer}
        data={currentChat ? currentChat.messages : []}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={itemSeparator}
        numColumns={1}
        ListHeaderComponent={<ListHeader />}
        ListFooterComponent={<ListFooter isLoading={isLoadingChat} />}
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
