"use client";

import { Sparkles, Bot, Zap, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function AIStudio() {
  const [prompt, setPrompt] = useState("");
  const [model, setModel] = useState<"openai" | "claude" | "gemini">("openai");

  return (
    <main className="min-h-screen p-6 sm:p-12 pb-32 max-w-3xl mx-auto w-full">
      <header className="mb-10 text-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#00FFD1] to-blue-600 flex items-center justify-center mx-auto mb-4 animate-pulse shadow-[0_0_30px_rgba(0,255,209,0.3)]">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tighter">AI Studio</h1>
        <p className="text-white/50 mt-2">Generate exhibits, craft network approaches, and compose pulses using state-of-the-art LLMs.</p>
      </header>

      <div className="glass p-2 rounded-2xl flex items-center justify-between space-x-2 border border-white/10 mb-8 bg-black/40">
        <button 
          onClick={() => setModel("openai")}
          className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl font-bold transition-all ${model === "openai" ? "bg-white/10 text-white" : "text-white/40 hover:text-white"}`}
        >
          <Bot className="w-4 h-4" />
          <span>OpenAI GPT-4o</span>
        </button>
        <button 
          onClick={() => setModel("claude")}
          className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl font-bold transition-all ${model === "claude" ? "bg-[#D97757]/20 text-[#D97757]" : "text-white/40 hover:text-white"}`}
        >
          <MessageSquare className="w-4 h-4" />
          <span>Claude 3.5</span>
        </button>
        <button 
          onClick={() => setModel("gemini")}
          className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl font-bold transition-all ${model === "gemini" ? "bg-[#1A73E8]/20 text-[#1A73E8]" : "text-white/40 hover:text-white"}`}
        >
          <Zap className="w-4 h-4" />
          <span>Google Gemini</span>
        </button>
      </div>

      <div className="glass p-6 rounded-2xl border border-white/10 space-y-4">
        <label className="text-sm font-bold text-white/70 uppercase tracking-widest">Composer</label>
        <textarea 
          placeholder="What kind of post or message do you want to create?"
          rows={5}
          className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00FFD1] resize-none"
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
        />
        <button className="w-full py-4 rounded-xl bg-[#00FFD1] text-black font-extrabold flex items-center justify-center space-x-2 hover:opacity-90">
          <Sparkles className="w-5 h-5" />
          <span>Generate with {model.charAt(0).toUpperCase() + model.slice(1)}</span>
        </button>
      </div>
    </main>
  );
}
