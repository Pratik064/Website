
import { GoogleGenAI, Type } from "@google/genai";

export const generateRelatedWords = async (inputWord: string): Promise<string[]> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate exactly 12 related words for the word: "${inputWord}".
                 Rules:
                 1. Strictly NO nouns. 
                 2. Focus on verbs and adjectives.
                 3. Focus on semantic relationships (synonyms, intensity variations, antonyms that share context).
                 4. No definitions.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.STRING,
          },
          description: "A list of 12 related non-noun words.",
        },
      },
    });

    const words = JSON.parse(response.text || '[]');
    return words.slice(0, 12);
  } catch (error) {
    console.error("Gemini Error:", error);
    // Fallback static words for demo if API fails
    return [
      "Vibrant", "Resonate", "Evolve", "Stark", 
      "Envelop", "Intense", "Pulsate", "Flow", 
      "Subtle", "Ascend", "Radiate", "Pierce"
    ];
  }
};
