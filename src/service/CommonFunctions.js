import { geminiChatSession } from "@/service/Gemini";

export const GenerateSummaryUsingAI = async (experienceTitle, prompt) => {
  try {
    const PROMPT = prompt.replace("{jobTitle}", experienceTitle);
    const result = await geminiChatSession.sendMessage(PROMPT);
    return result.response.text();
  } catch (error) {
    console.log("ERROR: ");
    console.log(error);
  }
};
