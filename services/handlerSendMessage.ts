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
  console.log(content);

  try {
    const res = await axios.post(
      `${process.env.EXPO_PUBLIC_API_URL}`,
      `
      {
  "model": "mistralai/mistral-7b-instruct:free",
  "messages": [
    {
      "role": "user",
      "content": "${content}"
    }
  ]
}
`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
        },
      }
    );
    const data: ResMessageAi = res.data;
    dispatch(
      receiveMessage({
        id: Date.now(),
        content: data.choices[0].message.content,
      })
    );
    return res.data;
  } catch (err: any) {
    const code = err.response?.data.error.code;
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
