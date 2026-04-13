"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Square } from "lucide-react";
import { motion } from "framer-motion";

interface WaveformPlayerProps {
  audioUrl: string;
  transcript: string;
}

export function WaveformPlayer({ audioUrl, transcript }: WaveformPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(audioUrl);
    audioRef.current.onended = () => setIsPlaying(false);
    return () => {
      audioRef.current?.pause();
    };
  }, [audioUrl]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="glass p-4 rounded-xl flex flex-col space-y-3 w-full border border-white/10">
      <div className="flex items-center space-x-4">
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-[#00FFD1] text-[#08080A] flex items-center justify-center hover:scale-105 transition-transform"
        >
          {isPlaying ? <Square className="w-4 h-4 fill-current" /> : <Play className="w-5 h-5 ml-1 fill-current" />}
        </button>

        {/* Fake waveform animation that reacts to play state */}
        <div className="flex-1 flex items-center justify-between h-8 space-x-1 overflow-hidden">
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-1 rounded-full bg-[#00FFD1]"
              initial={{ height: "4px" }}
              animate={{ 
                height: isPlaying ? [`${Math.random() * 20 + 4}px`, `${Math.random() * 30 + 4}px`, "4px"] : "4px",
                opacity: isPlaying ? [0.7, 1, 0.7] : 0.3
              }}
              transition={{
                repeat: Infinity,
                duration: Math.random() * 0.5 + 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
      
      {transcript && (
        <div className="text-sm text-white/80 italic border-l-2 border-[#00FFD1]/50 pl-3">
          &quot;{transcript}&quot;
        </div>
      )}
    </div>
  );
}
