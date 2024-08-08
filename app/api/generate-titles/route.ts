import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  const { idea, tone, character, emoji, question, mood, language, model } = await req.json();

  if (!idea || !tone || !character || !emoji || !question || !mood || !language || !model) {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
  }

  try {
    const messages = [
      {
        role: "system",
        content: "You're an experienced content writer specializing in creating engaging and optimized YouTube titles."
      },
      {
        role: "user",
        content: `Generate a YouTube title based on the following details:
        - Title idea: ${idea}
        - Tone: ${tone}
        - Character limit: ${character}
        - Emojis: ${emoji}
        - Include a question: ${question}
        - Mood: ${mood}
        - Language: ${language}`
      }
    ];

    const response = await openai.chat.completions.create({
      model: model,
      messages: messages as any,
      max_tokens: 50,
      n: 5,
      temperature: 0.7,
    });

    const titles = response.choices.map((choice: any) => choice.message.content.trim());

    return NextResponse.json({ generatedTitles: titles });
  } catch (error) {
    console.error('Error generating titles:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
