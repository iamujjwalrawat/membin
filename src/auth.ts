import NextAuth from "next-auth"
import Spotify from "next-auth/providers/spotify"
import LinkedIn from "next-auth/providers/linkedin"
import Email from "next-auth/providers/email"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const hasDb = process.env.DATABASE_URL && process.env.DATABASE_URL !== "dummy";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...(hasDb ? { adapter: PrismaAdapter(prisma) } : {}),
  session: { strategy: "jwt" },
  providers: [
    Spotify({
      clientId: process.env.SPOTIFY_CLIENT_ID || "dummy",
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET || "dummy",
    }),
    LinkedIn({
      clientId: process.env.LINKEDIN_CLIENT_ID || "dummy",
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET || "dummy",
    }),
    Email({
      server: process.env.EMAIL_SERVER || "smtp://localhost:1025",
      from: process.env.EMAIL_FROM || "noreply@example.com",
    }),
  ],
})
