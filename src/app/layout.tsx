import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Cursor } from "@/components/Cursor";
import { PageTransition } from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Membin | Hybrid Social",
  description: "Disrupt social landscape with hybrid platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-obsidian`}>
        <div className="vsco-grain" />
        <div className="custom-cursor" id="global-cursor" />
        <Cursor />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
