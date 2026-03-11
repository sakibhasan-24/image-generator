"use client";

import type { ReactNode } from "react";
import { Providers } from "~/components/providers";
import { Zap, ArrowRight, Star, Disc, Layers3 } from "lucide-react";
import Link from "next/link";

// Custom Logo Component
function ArtSynthLogo() {
  return (
    <div className="relative group flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-900 shadow-xl transition-all hover:scale-105">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 opacity-20 blur-lg group-hover:opacity-40 transition-opacity" />
      <div className="relative flex items-center justify-center">
        <div className="h-7 w-1.5 rounded-full bg-violet-400 -rotate-12 translate-x-0.5" />
        <div className="h-9 w-1.5 rounded-full bg-fuchsia-500 rotate-12 -translate-x-0.5" />
        <div className="absolute h-1.5 w-4 bg-white/80 rounded-full -rotate-12" />
      </div>
    </div>
  );
}

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <div className="flex min-h-screen bg-white selection:bg-violet-100">
        
        {/* Left Side: Visual Hero */}
        <div className="relative hidden lg:flex lg:w-1/2 flex-col justify-between p-16 overflow-hidden bg-[#09090b]">
          {/* Animated Background Blobs */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-violet-600/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[100px] animate-pulse delay-1000" />
          </div>

          {/* Nav/Logo */}
          <Link href="/" className="relative z-10 flex items-center gap-4 group">
            <ArtSynthLogo />
            <span className="text-2xl font-black tracking-tighter text-white">
              ART<span className="text-violet-500">SYNTH</span>
            </span>
          </Link>

          {/* Hero Content */}
          <div className="relative z-10 max-w-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-bold tracking-widest uppercase mb-8 animate-bounce">
              <Zap className="w-3 h-3 fill-current" />
              v2.0 Engine Active
            </div>
            
            <h1 className="text-6xl font-extrabold text-white tracking-tighter leading-[0.9] mb-6">
              Imagine it. <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent italic">
                Synth it.
              </span>
            </h1>
            
            <p className="text-lg text-neutral-400 font-medium mb-10 leading-relaxed">
              The world's most powerful AI image generation tool for professional creators. 
            </p>

            <div className="grid gap-4">
              {[
                { icon: Layers3, title: "Neural Layers", color: "text-violet-400" },
                { icon: Disc, title: "8K Resolution", color: "text-fuchsia-400" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                  <div className="p-2 rounded-lg bg-neutral-800">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <span className="text-white font-semibold">{item.title}</span>
                  <ArrowRight className="ml-auto w-4 h-4 text-neutral-600 group-hover:text-white transition-all group-hover:translate-x-1" />
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="relative z-10 flex items-center gap-10 border-t border-white/10 pt-10">
            <div>
              <p className="text-2xl font-bold text-white">250K+</p>
              <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Creations</p>
            </div>
            <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-lg">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span className="text-amber-200 font-bold">4.9</span>
            </div>
          </div>
        </div>

        {/* Right Side: Auth Form */}
        <div className="flex-1 flex flex-col justify-center items-center p-8 lg:p-24 bg-neutral-50">
          <div className="w-full max-w-sm">
            {/* Mobile Logo */}
            <div className="lg:hidden flex flex-col items-center mb-10">
              <ArtSynthLogo />
              <h2 className="mt-4 text-2xl font-black tracking-tighter text-neutral-900">ARTSYNTH</h2>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-200/60">
              {children}
            </div>

            <div className="mt-8 text-center">
              <Link href="/" className="text-sm font-semibold text-neutral-400 hover:text-violet-600 transition-colors flex items-center justify-center gap-2">
                <div className="h-px w-4 bg-neutral-300" />
                Go back home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Providers>
  );
}