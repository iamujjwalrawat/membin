"use server";

import OpenAI from "openai";
import { PrismaClient } from "@prisma/client";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const prisma = new PrismaClient();

export async function processVoiceNote(formData: FormData) {
  try {
    const audioFile = formData.get("audio") as File;
    const postId = formData.get("postId") as string;
    const authorId = formData.get("authorId") as string;

    if (!audioFile) {
      throw new Error("No audio file provided");
    }

    // 1. Send to OpenAI Whisper for transcription
    // Note: OpenAI API expects a File object which corresponds to the Blob interface
    const transcription = await openai.audio.transcriptions.create({
      file: audioFile,
      model: "whisper-1",
    });

    const transcript = transcription.text;

    // 2. Mock saving to S3 / Uploadthing and get audio URL
    // In a full environment, you would upload `audioFile` to a bucket.
    const mockAudioUrl = `https://mock-storge.com/${Date.now()}.mp3`;

    // 3. Save to database
    const comment = await prisma.comment.create({
      data: {
        text: transcript,
        transcript: transcript, // store both or just transcript
        audioUrl: mockAudioUrl,
        postId: postId,
        authorId: authorId,
      },
    });

    return { success: true, comment };
  } catch (error) {
    console.error("Failed to process voice note:", error);
    return { success: false, error: "Failed to process voice note" };
  }
}
