import { Colors } from "@/constants/theme";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export default function RootLayout() {
  const [isLoadFonts] = useFonts({
    RobotoBold: require("@/assets/fonts/Roboto-Bold.ttf"),
    RobotoSemiBold: require("@/assets/fonts/Roboto-SemiBold.ttf"),
    RobotoMedium: require("@/assets/fonts/Roboto-Medium.ttf"),
    RobotoLight: require("@/assets/fonts/Roboto-Light.ttf"),
    RobotoRegular: require("@/assets/fonts/Roboto-Regular.ttf"),
  });
  if (!isLoadFonts) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Colors.primaryBg,
        }}
      >
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: Colors.primaryBg },
          }}
        />
        <StatusBar style="light" backgroundColor={Colors.primaryBg} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
