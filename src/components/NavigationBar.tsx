"use client";

import Link from "next/link";
import { Home, Music, Sparkles, LogIn } from "lucide-react";
import { usePathname } from "next/navigation";

export function NavigationBar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Pulse", path: "/", icon: Home },
    { name: "Music", path: "/music", icon: Music },
    { name: "AI Studio", path: "/ai-studio", icon: Sparkles },
    { name: "Sign In", path: "/auth/signin", icon: LogIn },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 glass px-6 py-3 rounded-full border border-white/10 flex items-center space-x-8">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.path;
        return (
          <Link 
            key={item.path} 
            href={item.path}
            className={`flex flex-col items-center space-y-1 transition-colors ${isActive ? "text-[#00FFD1]" : "text-white/60 hover:text-white"}`}
          >
            <Icon className="w-5 h-5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">{item.name}</span>
          </Link>
        )
      })}
    </nav>
  );
}
