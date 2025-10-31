export interface ResMessageAi {
  id: string;
  provider: string;
  model: string;
  object: string;
  created: number;
  choices: [
    {
      finish_reason: string;
      native_finish_reason: string;
      index: number;
      message: {
        role: "assistant" | "user";
        content: string;
      };
    }
  ];
}
