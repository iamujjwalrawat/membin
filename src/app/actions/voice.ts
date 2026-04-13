"use server";

import OpenAI from "openai";
import { PrismaClient } from "@prisma/client";

const openai = process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY !== "dummy"
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

const hasDb = process.env.DATABASE_URL && process.env.DATABASE_URL !== "dummy";
const prisma = hasDb ? new PrismaClient() : null;

export async function processVoiceNote(formData: FormData) {
  try {
    const audioFile = formData.get("audio") as File;
    const postId = formData.get("postId") as string;
    const authorId = formData.get("authorId") as string;

    if (!audioFile) {
      throw new Error("No audio file provided");
    }

    let transcript = "This is an AI-generated mock transcript of your audio because the OpenAI API key is not configured yet.";
    let mockAudioUrl = `https://actions.google.com/sounds/v1/water/waves_crashing_on_rock_beach.ogg`;

    // 1. Send to OpenAI Whisper for transcription if key exists
    if (openai) {
      const transcription = await openai.audio.transcriptions.create({
        file: audioFile,
        model: "whisper-1",
      });
      transcript = transcription.text;
    }

    // 3. Save to database if configured, otherwise return mock
    if (prisma && hasDb) {
      const comment = await prisma.comment.create({
        data: {
          text: transcript,
          transcript: transcript,
          audioUrl: mockAudioUrl,
          postId: postId,
          authorId: authorId,
        },
      });
      return { success: true, comment };
    }

    return { 
      success: true, 
      comment: { 
        id: "mock-" + Date.now(), 
        text: transcript, 
        transcript, 
        audioUrl: mockAudioUrl,
        authorId,
        postId
      } 
    };
  } catch (error) {
    console.error("Failed to process voice note:", error);
    return { success: false, error: "Failed to process voice note" };
  }
}
