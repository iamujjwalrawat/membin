"use client";

import { Play, Heart, MoreHorizontal, Shuffle } from "lucide-react";
import Image from "next/image";

const trendingTracks = [
  { id: 1, title: "Blinding Lights", artist: "The Weeknd", streams: "3.2B", cover: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36" },
  { id: 2, title: "Feather", artist: "Sabrina Carpenter", streams: "1.4B", cover: "https://i.scdn.co/image/ab67616d0000b2730f9d98418ff8cc0ee18af6b9" },
  { id: 3, title: "Lover", artist: "Taylor Swift", streams: "2.1B", cover: "https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647" },
  { id: 4, title: "STARGAZING", artist: "Travis Scott", streams: "1.8B", cover: "https://i.scdn.co/image/ab67616d0000b273072e9faef2ef7b6db63834a3" },
];

export default function MusicLibrary() {
  return (
    <main className="min-h-screen p-6 sm:p-12 pb-32 max-w-4xl mx-auto w-full">
      <header className="mb-12 flex items-end justify-between">
        <div>
          <h1 className="text-4xl font-extrabold text-white tracking-tighter mb-2">Global Charts</h1>
          <p className="text-white/50">Top 50 trending globally. Powered by Spotify Connect.</p>
        </div>
        <button className="w-14 h-14 rounded-full bg-[#00FFD1] text-black flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,255,209,0.4)]">
          <Play className="w-6 h-6 fill-current ml-1" />
        </button>
      </header>

      <div className="space-y-4">
        {trendingTracks.map((track, i) => (
          <div key={track.id} className="group flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 cursor-pointer">
            <div className="flex items-center space-x-4">
              <span className="text-white/40 w-4 font-bold text-center">{i + 1}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={track.cover} alt={track.title} className="w-12 h-12 rounded-md object-cover shadow-lg" crossOrigin="anonymous" />
              <div>
                <h3 className="text-white font-bold">{track.title}</h3>
                <p className="text-white/50 text-sm">{track.artist}</p>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-white/50">
              <span className="text-sm font-medium tracking-wide">{track.streams}</span>
              <button className="hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"><Heart className="w-5 h-5" /></button>
              <button className="hover:text-white opacity-0 group-hover:opacity-100 transition-all"><MoreHorizontal className="w-5 h-5" /></button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
