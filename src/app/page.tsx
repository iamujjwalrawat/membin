"use client";

import { useState } from "react";
import { SpotifyBridge } from "@/components/SpotifyBridge";
import { WaveformPlayer } from "@/components/WaveformPlayer";
import { HandshakeModal } from "@/components/HandshakeModal";
import { UserPlus, MessageCircle, Heart, Repeat2, Image as ImageIcon } from "lucide-react";

export default function Home() {
  const [isHandshakeOpen, setHandshakeOpen] = useState(false);

  return (
    <main className="flex-1 flex flex-col items-center p-4 sm:p-8 relative z-10">
      <header className="w-full max-w-2xl flex justify-between items-center mb-12">
        <h1 className="text-2xl font-bold tracking-tighter text-white">Membin.</h1>
        <button 
          onClick={() => setHandshakeOpen(true)}
          className="flex items-center space-x-2 glass px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
          onMouseEnter={() => {
            const cursor = document.querySelector('.custom-cursor');
            if(cursor) cursor.classList.add('hovering');
          }}
          onMouseLeave={() => {
            const cursor = document.querySelector('.custom-cursor');
            if(cursor) cursor.classList.remove('hovering');
          }}
        >
          <UserPlus className="w-4 h-4 text-[#00FFD1]" />
          <span className="text-sm font-medium">Connect</span>
        </button>
      </header>

      <div className="w-full max-w-2xl space-y-8">
        {/* Make a Post component mock */}
        <div className="glass p-6 rounded-2xl w-full border border-white/10 space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#00FFD1] to-purple-500 p-[2px]">
              <div className="w-full h-full bg-black rounded-full border-2 border-transparent"></div>
            </div>
            <div>
              <h3 className="font-bold text-white leading-tight">Ujjwal Rawat</h3>
              <p className="text-white/50 text-xs">AI and Technology Strategist</p>
            </div>
          </div>

          <div className="text-white/90 text-lg">
            Building the next generation of social networking. Pulse + Exhibits + Voice.
          </div>

          {/* Spotify Bridge attached to this post */}
          <SpotifyBridge 
            trackId="5Z01UMAQhP28"
            albumArtUrl="https://i.scdn.co/image/ab67616d0000b2737359994525d3d9f071be68e8"
            trackName="Starboy"
            artistName="The Weeknd, Daft Punk"
          />

          {/* Action Row */}
          <div className="flex items-center space-x-6 text-white/50 pt-4 border-t border-white/10">
            <button className="hover:text-[#00FFD1] transition-colors"><MessageCircle className="w-5 h-5" /></button>
            <button className="hover:text-[#00FFD1] transition-colors"><Repeat2 className="w-5 h-5" /></button>
            <button className="hover:text-red-500 transition-colors"><Heart className="w-5 h-5" /></button>
          </div>
          
          {/* Comments Section */}
          <div className="pt-4 space-y-3 pl-4 border-l border-white/10">
            <WaveformPlayer 
              audioUrl="https://actions.google.com/sounds/v1/water/waves_crashing_on_rock_beach.ogg"
              transcript="This is a voice note processed by Whisper AI. It sounds incredible."
            />
          </div>
        </div>
      </div>

      <HandshakeModal 
        isOpen={isHandshakeOpen} 
        onClose={() => setHandshakeOpen(false)}
        targetUser={{ name: "Ujjwal Rawat", role: "AI Strategist" }}
      />
    </main>
  );
}
