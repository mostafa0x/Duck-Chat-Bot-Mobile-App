import { currentChatType } from "@/types/AppSliceType";
import AsyncStorage from "@react-native-async-storage/async-storage";
export async function setData(data: currentChatType[]) {
  try {
    const value = await AsyncStorage.setItem("history", JSON.stringify(data));
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log(error);
    return "An error occurred";
  }
}

export async function getData() {
  try {
    const store = await AsyncStorage.getItem("history");
    const data = JSON.parse(store ?? "[]");
    if (data !== null) {
      return data;
    }
  } catch (error) {
    console.log(error);
    return "An error occurred";
  }
}
