'use client';

import React from 'react';
import { SpainFlag, USAFlag, BotanicalWreath, CornerBotanicals, GoldLeafFlourish, GoldHeart } from './BotanicalAssets';
import { Language } from '../data/weddingData';

interface LanguageSelectorProps {
  onSelectLanguage: (lang: Language) => void;
  currentLanguage?: Language | null;
}

export function LanguageSelector({ onSelectLanguage }: LanguageSelectorProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-3 sm:p-6 md:p-10 relative overflow-hidden bg-gradient-to-b from-[#faf6ef] via-[#f7f2e7] to-[#eee5d3]">
      {/* Background ambient lighting */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#c5a059]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#20382e]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#e8d5b5]/20 blur-3xl pointer-events-none" />

      {/* Main Luxury Frame Card */}
      <div className="w-full max-w-2xl relative z-10 bg-[#FAF7F2] rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 md:p-14 shadow-2xl border border-[#d8c7a6]/75 text-center overflow-hidden transition-all duration-700 animate-in fade-in zoom-in-95">
        
        {/* Paper texture overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-multiply"
          style={{
            backgroundImage: `radial-gradient(#20382e 1px, transparent 1px)`,
            backgroundSize: '16px 16px',
          }}
        />

        {/* Double gold arched inner border effect */}
        <div className="absolute inset-3 sm:inset-5 rounded-[2rem] sm:rounded-[2.5rem] border border-[#c5a059]/45 pointer-events-none" />
        <div className="absolute inset-4 sm:inset-6 rounded-[1.75rem] sm:rounded-[2.25rem] border border-[#c5a059]/25 pointer-events-none" />

        {/* Authentic watercolor corner florals */}
        <CornerBotanicals />

        {/* Monogram Section with Original Wreath & Logo */}
        <div className="relative mb-3 z-10">
          <BotanicalWreath className="max-w-[280px] sm:max-w-[340px]" />
        </div>

        {/* Welcome Headers */}
        <div className="space-y-2 mb-6 z-10 relative">
          <div className="flex items-center justify-center space-x-2 text-[#c5a059] text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold font-serif">
            <span className="w-8 h-[1px] bg-[#c5a059]/50" />
            <span>Celebración & Recuperación</span>
            <span className="w-8 h-[1px] bg-[#c5a059]/50" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#20382e] font-normal tracking-wide">
            Bienvenidos <span className="text-[#c5a059] italic">&</span> Welcome
          </h1>

          <GoldLeafFlourish className="w-24 sm:w-32 h-4 my-2 opacity-85" />

          <p className="text-sm sm:text-base md:text-lg text-[#324b3d] max-w-md mx-auto italic font-serif leading-relaxed">
            Por favor, elige tu idioma para ver la tarjeta.<br />
            <span className="text-xs sm:text-sm text-[#5a7667]">Please select your language to view the card.</span>
          </p>
        </div>

        {/* Language Selection Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-lg mx-auto relative z-20 my-4">
          
          {/* Spanish Option */}
          <button
            onClick={() => onSelectLanguage('es')}
            className="group relative flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#ffffff] to-[#faf6ef] border-2 border-[#c5a059]/40 hover:border-[#b38e46] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#c5a059]/50"
          >
            <div className="relative mb-3 transform transition-transform duration-300 group-hover:scale-110">
              <SpainFlag className="w-16 h-16 sm:w-18 sm:h-18" />
              <div className="absolute -inset-1 rounded-full bg-[#c5a059]/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <span className="text-2xl sm:text-3xl font-serif font-semibold text-[#20382e] group-hover:text-[#9c7329] transition-colors tracking-wide">
              Español
            </span>
            <span className="text-xs sm:text-sm text-[#4d695b] text-center mt-1 font-medium">
              Leer en español
            </span>

            <div className="mt-4 inline-flex items-center text-xs sm:text-sm font-semibold text-[#a37c35] tracking-wider uppercase group-hover:translate-x-1 transition-transform">
              <span>Ingresar</span>
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          {/* English Option */}
          <button
            onClick={() => onSelectLanguage('en')}
            className="group relative flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#ffffff] to-[#faf6ef] border-2 border-[#c5a059]/40 hover:border-[#b38e46] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#c5a059]/50"
          >
            <div className="relative mb-3 transform transition-transform duration-300 group-hover:scale-110">
              <USAFlag className="w-16 h-16 sm:w-18 sm:h-18" />
              <div className="absolute -inset-1 rounded-full bg-[#c5a059]/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <span className="text-2xl sm:text-3xl font-serif font-semibold text-[#20382e] group-hover:text-[#9c7329] transition-colors tracking-wide">
              English
            </span>
            <span className="text-xs sm:text-sm text-[#4d695b] text-center mt-1 font-medium">
              Read in English
            </span>

            <div className="mt-4 inline-flex items-center text-xs sm:text-sm font-semibold text-[#a37c35] tracking-wider uppercase group-hover:translate-x-1 transition-transform">
              <span>Enter</span>
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        {/* Card Footer Note */}
        <div className="mt-8 pt-6 border-t border-[#c5a059]/20 flex flex-col items-center justify-center space-y-1 text-xs sm:text-sm text-[#6c8577] relative z-10">
          <div className="flex items-center space-x-1.5">
            <span>Con amor</span>
            <GoldHeart className="w-4 h-4 text-[#c5a059] fill-[#c5a059]" />
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
