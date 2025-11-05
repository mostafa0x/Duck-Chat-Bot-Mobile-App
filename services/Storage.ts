import { currentChatType } from "@/types/AppSliceType";
import AsyncStorage from "@react-native-async-storage/async-storage";
export async function setData(data: currentChatType[]) {
  try {
    return await AsyncStorage.setItem("history", JSON.stringify(data));
  } catch (error) {
    return "An error occurred";
  }
}

export async function getData(): Promise<currentChatType[]> {
  try {
    const store = await AsyncStorage.getItem("history");
    const data = JSON.parse(store ?? "[]");

    return data;
  } catch (error) {
    return [];
  }
}
