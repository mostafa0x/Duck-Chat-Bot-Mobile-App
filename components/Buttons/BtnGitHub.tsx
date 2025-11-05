import React, { memo, useCallback } from "react";
import { Linking, StyleSheet, TouchableOpacity } from "react-native";
import GitHubIcon from "../icons/GitHubIcon";

function BtnGitHub() {
  const handlePress = useCallback(() => {
    Linking.openURL("https://github.com/mostafa0x");
  }, []);
  return (
    <TouchableOpacity onPress={handlePress}>
      <GitHubIcon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});

export default memo(BtnGitHub);
