import {
  receiveMessage,
  sendMessage,
  setErrorMessage,
} from "@/lib/store/AppSlice";
import axios from "axios";

async function talkingDuckAi(
  content: string,
  dispatch: any,
  messageId: number
) {
  try {
    const res = await axios.post(
      `${process.env.EXPO_PUBLIC_API_URL}`,
      `
      {
  "model": "mistralai/mistral-7b-instruct:free",
  "messages": [
    {
      "role": "user",
      "content": ${content}
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
    console.log(res.data);
    dispatch(
      receiveMessage({
        id: Date.now(),
        content: res.data.choices[0].message.content,
      })
    );
    return res.data;
  } catch (err: any) {
    console.log(err);
    dispatch(setErrorMessage(messageId));
    throw err;
  }
}

export default function handlerSendMessage(dispatch: any) {
  const messageId = Date.now();
  dispatch(sendMessage(messageId));
  talkingDuckAi("hi all how ", dispatch, messageId);
}
