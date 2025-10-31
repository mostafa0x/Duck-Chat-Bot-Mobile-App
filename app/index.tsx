import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  console.log(process.env.EXPO_PUBLIC_API_URL);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
