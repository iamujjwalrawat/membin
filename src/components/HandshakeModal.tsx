"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Handshake as HandshakeIcon, X, CheckCircle2 } from "lucide-react";

interface HandshakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetUser: {
    name: string;
    role: string;
  };
}

export function HandshakeModal({ isOpen, onClose, targetUser }: HandshakeModalProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleConnect = () => {
    setStatus("loading");
    // Simulate network request
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-hidden="true"
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={onClose}
          />
          
          <motion.div
            layoutId="handshake-modal"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="glass w-full max-w-sm rounded-[24px] p-6 relative z-10 border border-white/10 shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#00FFD1]/20 flex items-center justify-center border border-[#00FFD1]/50">
                {status === "success" ? (
                  <CheckCircle2 className="w-8 h-8 text-[#00FFD1]" />
                ) : (
                  <HandshakeIcon className="w-8 h-8 text-[#00FFD1]" />
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {status === "success" ? "Handshake Sent" : "Initiate Handshake"}
                </h3>
                <p className="text-white/60 text-sm">
                  {status === "success" 
                    ? `You've invited ${targetUser.name} to connect.`
                    : `Connect with ${targetUser.name}, ${targetUser.role}`}
                </p>
              </div>

              {status !== "success" ? (
                <button
                  onClick={handleConnect}
                  disabled={status === "loading"}
                  className="w-full py-3 rounded-full bg-[#00FFD1] text-[#08080A] font-bold mt-4 hover:opacity-90 transition-opacity disabled:opacity-50"
                  onMouseEnter={() => {
                    const cursor = document.querySelector('.custom-cursor');
                    if(cursor) cursor.classList.add('hovering');
                  }}
                  onMouseLeave={() => {
                    const cursor = document.querySelector('.custom-cursor');
                    if(cursor) cursor.classList.remove('hovering');
                  }}
                >
                  {status === "loading" ? "Proposing..." : "Send Handshake"}
                </button>
              ) : (
                <button
                  onClick={onClose}
                  className="w-full py-3 rounded-full glass text-white font-medium mt-4 hover:bg-white/10 transition-colors border border-white/20"
                >
                  Close
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
