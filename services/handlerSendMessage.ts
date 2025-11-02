import {
  receiveMessage,
  sendMessage,
  setErrorMessage,
} from "@/lib/store/AppSlice";
import { Message } from "@/types/AppSliceType";
import { ResMessageAi } from "@/types/ResMessageAi";
import axios from "axios";

async function talkingDuckAi(
  content: string,
  dispatch: any,
  messageId: number
) {
  try {
    const res = await axios.post(
      `${process.env.EXPO_PUBLIC_API_URL}`,
      {
        model: "openai/gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: content.toString(),
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
        },
      }
    );

    const data: ResMessageAi = res.data;

    let text = data.choices?.[0]?.message?.content ?? "";

    console.log(text);

    dispatch(
      receiveMessage({
        id: Date.now(),
        content: text,
      })
    );

    return res.data;
  } catch (err: any) {
    console.log(err.response?.data);

    const code = err.response?.data?.error?.code;
    const errorTxt =
      code === 429 ? "Rate limit exceeded" : "Connection problem";
    dispatch(setErrorMessage({ id: messageId, error: errorTxt }));
    throw errorTxt;
  }
}

export default async function handlerSendMessage(
  dispatch: any,
  content: string,
  message?: Message
) {
  const messageId = Date.now();
  message
    ? dispatch(sendMessage({ id: messageId, message: message }))
    : dispatch(sendMessage({ id: messageId }));
  try {
    await talkingDuckAi(content, dispatch, messageId);
    return "";
  } catch (err: any) {
    throw err;
  }
}
