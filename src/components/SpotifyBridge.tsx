"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface SpotifyBridgeProps {
  trackId: string;
  albumArtUrl: string;
  trackName: string;
  artistName: string;
}

export function SpotifyBridge({ trackId, albumArtUrl, trackName, artistName }: SpotifyBridgeProps) {
  const [dominantColor, setDominantColor] = useState<string>("#08080A");
  const imgRef = useRef<HTMLImageElement>(null);

  const extractColor = () => {
    const img = imgRef.current;
    if (!img) return;

    try {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      if (!ctx) return;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      
      let r = 0, g = 0, b = 0;
      let count = 0;
      // sampling pixels for dominant color
      for (let i = 0; i < imageData.length; i += 16) {
        r += imageData[i];
        g += imageData[i + 1];
        b += imageData[i + 2];
        count++;
      }
      r = Math.floor(r / count);
      g = Math.floor(g / count);
      b = Math.floor(b / count);

      const color = `rgba(${r}, ${g}, ${b}, 0.2)`; // Muted for background vibe
      setDominantColor(color);
      document.documentElement.style.setProperty("--vibe-color", color);
    } catch (err) {
      console.warn("CORS or rendering issue extracting color", err);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass p-4 rounded-xl flex items-center space-x-4 max-w-sm"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={albumArtUrl}
        alt={trackName}
        width={48}
        height={48}
        className="rounded shadow-lg w-12 h-12 object-cover"
        crossOrigin="anonymous"
        onLoad={extractColor}
      />
      <div className="flex flex-col">
        <span className="text-white font-bold text-sm leading-tight">{trackName}</span>
        <span className="text-white/70 text-xs">{artistName}</span>
      </div>
      <div className="ml-auto flex items-center justify-center space-x-1">
        <motion.div
          className="w-1 bg-[#00FFD1] rounded-full"
          animate={{ height: ["4px", "16px", "4px"] }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
        />
        <motion.div
          className="w-1 bg-[#00FFD1] rounded-full"
          animate={{ height: ["4px", "24px", "4px"] }}
          transition={{ repeat: Infinity, duration: 1, delay: 0.2, ease: "easeInOut" }}
        />
        <motion.div
          className="w-1 bg-[#00FFD1] rounded-full"
          animate={{ height: ["4px", "12px", "4px"] }}
          transition={{ repeat: Infinity, duration: 1, delay: 0.4, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
