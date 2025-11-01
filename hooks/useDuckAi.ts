import { axiosClint } from "@/lib/api/axiosClint";
import handlerSendMessage from "@/services/handlerSendMessage";
import { ResMessageAi } from "@/types/ResMessageAi";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

async function talkingDuckAi(
  content: string,
  dispatch: any
): Promise<ResMessageAi> {
  try {
    handlerSendMessage(dispatch);
    console.log(content);

    const res = await axiosClint.post(`
          {
        "model": "mistralai/mistral-7b-instruct:free",
        "messages": [
          {
            "role": "user",
            "content": ${content}
          }
        ]
      }
      `);
    console.log(res.data);

    return res.data;
  } catch (err: any) {
    console.log(err);

    throw err;
  }
}
export default function useDuckAi(
  content: string,
  dispatch: any
): UseQueryResult<ResMessageAi> {
  return useQuery({
    queryKey: ["duckAi", content],
    queryFn: () => talkingDuckAi(content, dispatch),
    enabled: false,
  });
}
