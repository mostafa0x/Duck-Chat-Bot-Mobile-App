import { rh } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import Item_ChatList from "./Item";
import ListHeader from "./ListHeader";

export default function ChatList() {
  const renderItem = useCallback(() => {
    return <Item_ChatList />;
  }, []);

  const itemSeparator = useCallback(() => {
    return <View style={styles.itemSeparator}></View>;
  }, []);

  return (
    <View style={styles.container}>
      <FlashList
        contentContainerStyle={styles.contentContainer}
        data={Array(50)}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={itemSeparator}
        numColumns={1}
        ListHeaderComponent={<ListHeader />}
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
  },
  itemSeparator: {
    height: rh(20),
  },
});
