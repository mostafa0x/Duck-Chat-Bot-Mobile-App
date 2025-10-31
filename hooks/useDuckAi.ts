import { axiosClint } from "@/lib/api/axiosClint";
import { useQuery } from "@tanstack/react-query";

async function talkingDuckAi(content: string) {
  try {
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
    return res.data;
  } catch (err: any) {
    throw err;
  }
}
export default function useDuckAi(content: string) {
  return useQuery({
    queryKey: ["duckAi", content],
    queryFn: () => talkingDuckAi(content),
    enabled: content.length > 0,
  });
}
