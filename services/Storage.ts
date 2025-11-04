import { currentChatType } from "@/types/AppSliceType";
import AsyncStorage from "@react-native-async-storage/async-storage";
export async function setData(data: currentChatType[]) {
  try {
    return await AsyncStorage.setItem("history", JSON.stringify(data));
  } catch (error) {
    console.log(error);
    return "An error occurred";
  }
}

export async function getData() {
  try {
    const store = await AsyncStorage.getItem("history");
    const data = JSON.parse(store ?? "[]");

    return data;
  } catch (error) {
    console.log(error);
    return "An error occurred";
  }
}
