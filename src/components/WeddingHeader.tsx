'use client';

import React from 'react';
import { Language } from '../data/weddingData';
import { SpainFlag, USAFlag, GoldHeart } from './BotanicalAssets';

interface WeddingHeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onResetLanguage: () => void;
}

export function WeddingHeader({
  language,
  onLanguageChange,
  onResetLanguage,
}: WeddingHeaderProps) {
  const isEs = language === 'es';

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#faf7f2]/90 border-b border-[#c5a059]/25 shadow-xs transition-all">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        
        {/* Monogram Brand */}
        <button 
          onClick={onResetLanguage}
          className="flex items-center space-x-2 group cursor-pointer text-left bg-transparent border-none p-0"
          title={isEs ? 'Volver a selección de idioma' : 'Back to language selection'}
        >
          <div className="font-serif tracking-widest text-[#20382e] group-hover:text-[#8c6d32] transition-colors flex items-center">
            <span className="text-xl sm:text-2xl font-bold font-serif">A</span>
            <span className="text-lg sm:text-xl italic text-[#c5a059] px-0.5">&</span>
            <span className="text-xl sm:text-2xl font-bold font-serif">M</span>
          </div>
          <GoldHeart className="w-3.5 h-3.5 text-[#c5a059] opacity-75 group-hover:scale-125 transition-transform" />
        </button>

        {/* Language Switcher Pill */}
        <div className="flex items-center bg-[#f0e7d8] p-1 rounded-full border border-[#c5a059]/40 shadow-xs">
          {/* Spanish Toggle */}
          <button
            onClick={() => onLanguageChange('es')}
            className={`flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-serif transition-all cursor-pointer ${
              language === 'es'
                ? 'bg-[#ffffff] text-[#20382e] font-bold shadow-xs'
                : 'text-[#627b6d] hover:text-[#20382e]'
            }`}
            title="Español"
          >
            <SpainFlag className="w-4 h-4" />
            <span className="text-[11px] font-semibold">ES</span>
          </button>

          {/* English Toggle */}
          <button
            onClick={() => onLanguageChange('en')}
            className={`flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-serif transition-all cursor-pointer ${
              language === 'en'
                ? 'bg-[#ffffff] text-[#20382e] font-bold shadow-xs'
                : 'text-[#627b6d] hover:text-[#20382e]'
            }`}
            title="English"
          >
            <USAFlag className="w-4 h-4" />
            <span className="text-[11px] font-semibold">EN</span>
          </button>
        </div>

      </div>
    </header>
  );
}
