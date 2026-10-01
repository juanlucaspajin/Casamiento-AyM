'use client';

import React from 'react';
import { SpainFlag, USAFlag, BotanicalWreath, GoldHeart } from './BotanicalAssets';
import { Language } from '../data/weddingData';

interface LanguageSelectorProps {
  onSelectLanguage: (lang: Language) => void;
  currentLanguage?: Language | null;
}

export function LanguageSelector({ onSelectLanguage }: LanguageSelectorProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-10 relative overflow-hidden bg-gradient-to-b from-[#faf6ef] via-[#f7f2e7] to-[#eee5d3]">
      {/* Background ambient decorative circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#c5a059]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#20382e]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#e8d5b5]/20 blur-3xl pointer-events-none" />

      {/* Main Luxury Frame Card */}
      <div className="w-full max-w-xl relative z-10 bg-[#fdfbf7] rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl border border-[#c5a059]/35 text-center transition-all duration-700 animate-in fade-in zoom-in-95">
        {/* Double gold arched inner border effect */}
        <div className="absolute inset-3 sm:inset-4 rounded-2xl border border-[#c5a059]/30 pointer-events-none" />
        <div className="absolute inset-4 sm:inset-5 rounded-2xl border border-[#c5a059]/15 pointer-events-none" />

        {/* Monogram Section with Original Wreath & Logo */}
        <div className="relative mb-4">
          <BotanicalWreath className="max-w-[300px] sm:max-w-[360px]" />
        </div>

        {/* Welcome Headers */}
        <div className="space-y-2.5 mb-8">
          <div className="flex items-center justify-center space-x-2 text-[#c5a059] text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold font-serif">
            <span className="w-8 h-[1px] bg-[#c5a059]/50" />
            <span>Celebración & Recuperación</span>
            <span className="w-8 h-[1px] bg-[#c5a059]/50" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#20382e] font-normal tracking-wide">
            Bienvenidos <span className="text-[#c5a059] italic">&</span> Welcome
          </h1>

          <p className="text-sm sm:text-base text-[#3d594a] max-w-md mx-auto italic font-serif leading-relaxed pt-1.5">
            Por favor, elige tu idioma para ver la tarjeta.<br />
            <span className="text-xs sm:text-sm text-[#5f7a6c]">Please select your language to view the card.</span>
          </p>
        </div>

        {/* Language Selection Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto relative z-20">
          {/* Spanish Option */}
          <button
            onClick={() => onSelectLanguage('es')}
            className="group relative flex flex-col items-center justify-center p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#ffffff] to-[#faf6ef] border-2 border-[#c5a059]/40 hover:border-[#b38e46] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#c5a059]/50"
          >
            <div className="relative mb-3 transform transition-transform duration-300 group-hover:scale-110">
              <SpainFlag className="w-16 h-16" />
              <div className="absolute -inset-1 rounded-full bg-[#c5a059]/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <span className="text-2xl sm:text-3xl font-serif font-semibold text-[#20382e] group-hover:text-[#9c7329] transition-colors tracking-wide">
              Español
            </span>
            <span className="text-xs sm:text-sm text-[#4d695b] text-center mt-1 font-medium">
              Leer en español
            </span>

            <div className="mt-4 inline-flex items-center text-xs sm:text-sm font-semibold text-[#a37c35] tracking-wider uppercase group-hover:translate-x-0.5 transition-transform">
              <span>Ingresar</span>
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          {/* English Option */}
          <button
            onClick={() => onSelectLanguage('en')}
            className="group relative flex flex-col items-center justify-center p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#ffffff] to-[#faf6ef] border-2 border-[#c5a059]/40 hover:border-[#b38e46] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#c5a059]/50"
          >
            <div className="relative mb-3 transform transition-transform duration-300 group-hover:scale-110">
              <USAFlag className="w-16 h-16" />
              <div className="absolute -inset-1 rounded-full bg-[#c5a059]/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <span className="text-2xl sm:text-3xl font-serif font-semibold text-[#20382e] group-hover:text-[#9c7329] transition-colors tracking-wide">
              English
            </span>
            <span className="text-xs sm:text-sm text-[#4d695b] text-center mt-1 font-medium">
              Read in English
            </span>

            <div className="mt-4 inline-flex items-center text-xs sm:text-sm font-semibold text-[#a37c35] tracking-wider uppercase group-hover:translate-x-0.5 transition-transform">
              <span>Enter</span>
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        {/* Card Footer Note */}
        <div className="mt-8 pt-6 border-t border-[#c5a059]/20 flex flex-col items-center justify-center space-y-1 text-xs sm:text-sm text-[#6c8577]">
          <div className="flex items-center space-x-1.5">
            <span>Con amor</span>
            <GoldHeart className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>With love</span>
          </div>
          <p className="font-serif tracking-widest text-[#a37c35] font-semibold text-sm sm:text-base">
            A & M
          </p>
        </div>
      </div>
    </div>
  );
}
