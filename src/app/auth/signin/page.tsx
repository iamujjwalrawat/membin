"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Mail } from "lucide-react";
import Link from "next/link";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  // Note: For a true 2FA sequence, it requires an intermediate OTP verification screen.
  // We're visualizing the "Opt-in" here.

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="glass w-full max-w-md p-8 rounded-3xl border border-white/10"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-white tracking-tighter">Membin.</h1>
          <p className="text-white/60 mt-2 text-sm">Join the apex social tier.</p>
        </div>

        <div className="space-y-4">
          <button 
            onClick={() => signIn("google")}
            className="w-full flex items-center justify-center space-x-3 py-3 rounded-xl bg-white text-black font-bold hover:bg-white/90 transition-colors"
          >
            {/* Simple G Icon placeholder */}
            <span className="font-extrabold">G</span>
            <span>Continue with Google</span>
          </button>

          <button 
            onClick={() => signIn("facebook")}
            className="w-full flex items-center justify-center space-x-3 py-3 rounded-xl bg-[#1877F2] text-white font-bold hover:bg-[#1877F2]/90 transition-colors"
          >
            <span className="font-extrabold text-lg">f</span>
            <span>Continue with Facebook</span>
          </button>

          <button 
            onClick={() => signIn("instagram")}
            className="w-full flex items-center justify-center space-x-3 py-3 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F56040] text-white font-bold hover:opacity-90 transition-opacity"
          >
            <span className="font-extrabold text-lg">IG</span>
            <span>Continue with Instagram</span>
          </button>
        </div>

        <div className="my-6 flex items-center text-white/40 before:flex-1 before:border-t before:border-white/10 after:flex-1 after:border-t after:border-white/10">
          <span className="px-4 text-xs font-semibold uppercase tracking-wider">Or</span>
        </div>

        <form 
          onSubmit={(e) => {
            e.preventDefault();
            signIn("email", { email });
          }}
          className="space-y-4"
        >
          <div>
            <label className="text-xs text-white/50 uppercase font-bold mb-1 block">Email address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@corporate.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00FFD1] transition-colors"
              required
            />
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
             <div className="flex items-center space-x-3">
               <ShieldCheck className="w-5 h-5 text-[#00FFD1]" />
               <div>
                  <p className="text-sm font-semibold text-white">Enable 2FA</p>
                  <p className="text-xs text-white/50">Extra security layer</p>
               </div>
             </div>
             <button 
                type="button"
                onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                className={`w-10 h-6 rounded-full transition-colors relative ${twoFactorEnabled ? 'bg-[#00FFD1]' : 'bg-white/20'}`}
             >
                <span className={`block w-4 h-4 rounded-full bg-black absolute top-1 transition-all ${twoFactorEnabled ? 'left-5' : 'left-1'}`} />
             </button>
          </div>

          <button 
            type="submit"
            className="w-full py-3 rounded-xl bg-[#00FFD1] text-[#08080A] font-bold mt-4 hover:opacity-90 transition-opacity"
          >
            Send Magic Link
          </button>
        </form>

        <p className="text-center text-xs text-white/40 mt-6">
          By signing up, you agree to our <Link href="/terms" className="underline hover:text-[#00FFD1]">Terms</Link> and <Link href="/privacy" className="underline hover:text-[#00FFD1]">Privacy Policy</Link>.
        </p>
      </motion.div>
    </main>
  );
}
