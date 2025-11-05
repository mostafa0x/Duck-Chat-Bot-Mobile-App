import { Colors, Fonts } from "@/constants/theme";
import { currentChatType } from "@/types/AppSliceType";
import { rh, rw } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { memo, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import HistoryList_Item from "./Item";

function HistoryList({ data }: { data: currentChatType[] }) {
  const renderItem = useCallback(({ item }: { item: currentChatType }) => {
    return <HistoryList_Item item={item} />;
  }, []);

  const itemSeparator = useCallback(() => {
    return <View style={styles.itemSeparator}></View>;
  }, []);

  const listEmpty = useCallback(() => {
    return (
      <View style={styles.listEmpty}>
        <Text style={styles.emptyLabel}>
          No History , Start Conversation , It's Free
        </Text>
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlashList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => String(item.id ? item.id : index)}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={itemSeparator}
        ListEmptyComponent={listEmpty}
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
    paddingVertical: rh(50),
    paddingHorizontal: rw(20),
  },
  itemSeparator: {
    height: rh(20),
  },
  listEmpty: {
    marginTop: rh(200),
    alignItems: "center",
    justifyContent: "center",
  },
  emptyLabel: {
    color: Colors.secondaryText,
    fontSize: rw(18),
    fontFamily: Fonts.RobotoRegular,
    textAlign: "center",
  },
});

export default memo(HistoryList);
