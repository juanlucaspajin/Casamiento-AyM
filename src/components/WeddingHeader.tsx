'use client';

import React from 'react';
import { Language } from '../data/weddingData';
import { SpainFlag, USAFlag } from './BotanicalAssets';

interface WeddingHeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onResetLanguage: () => void;
  activeTab: 'card' | 'album';
  onTabChange: (tab: 'card' | 'album') => void;
}

export function WeddingHeader({
  language,
  onLanguageChange,
  onResetLanguage,
  activeTab,
  onTabChange,
}: WeddingHeaderProps) {
  const isEs = language === 'es';

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#faf7f2]/92 border-b border-[#c5a059]/25 shadow-xs transition-all">
      <div className="max-w-3xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2">
        
        {/* Monogram Brand */}
        <button 
          onClick={onResetLanguage}
          className="flex items-center space-x-2 group cursor-pointer text-left bg-transparent border-none p-0 flex-shrink-0"
          title={isEs ? 'Volver a selección de idioma' : 'Back to language selection'}
        >
          <div className="w-8 h-8 rounded-full overflow-hidden border border-[#c5a059]/40 bg-[#FAF7F2] p-0.5 shadow-xs group-hover:scale-105 transition-transform flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/wedding-logo-transparent.png" alt="A & M" className="w-full h-full object-contain" />
          </div>
          <div className="font-serif tracking-widest text-[#20382e] group-hover:text-[#8c6d32] transition-colors flex items-center">
            <span className="text-lg sm:text-2xl font-bold font-serif">A</span>
            <span className="text-base sm:text-xl italic text-[#c5a059] px-0.5">&</span>
            <span className="text-lg sm:text-2xl font-bold font-serif">M</span>
          </div>
        </button>

        {/* View Switcher Tabs: Kit vs Shared Album */}
        <nav className="flex items-center bg-[#f0e7d8]/90 p-1 rounded-full border border-[#c5a059]/40 shadow-xs">
          <button
            onClick={() => onTabChange('card')}
            className={`flex items-center space-x-1 sm:space-x-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-serif transition-all cursor-pointer ${
              activeTab === 'card'
                ? 'bg-[#ffffff] text-[#20382e] font-bold shadow-xs'
                : 'text-[#627b6d] hover:text-[#20382e]'
            }`}
          >
            <span>🌿</span>
            <span>{isEs ? 'Kit' : 'Kit'}</span>
          </button>

          <button
            onClick={() => onTabChange('album')}
            className={`flex items-center space-x-1 sm:space-x-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-serif transition-all cursor-pointer ${
              activeTab === 'album'
                ? 'bg-[#ffffff] text-[#20382e] font-bold shadow-xs'
                : 'text-[#627b6d] hover:text-[#20382e]'
            }`}
          >
            <span>📸</span>
            <span>{isEs ? 'Fotos' : 'Photos'}</span>
          </button>
        </nav>

        {/* Language Switcher Pill */}
        <div className="flex items-center bg-[#f0e7d8]/90 p-1 rounded-full border border-[#c5a059]/40 shadow-xs flex-shrink-0">
          {/* Spanish Toggle */}
          <button
            onClick={() => onLanguageChange('es')}
            className={`flex items-center space-x-1 px-2 sm:px-2.5 py-1 rounded-full text-xs font-serif transition-all cursor-pointer ${
              language === 'es'
                ? 'bg-[#ffffff] text-[#20382e] font-bold shadow-xs'
                : 'text-[#627b6d] hover:text-[#20382e]'
            }`}
            title="Español"
          >
            <SpainFlag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="text-[11px] font-semibold">ES</span>
          </button>

          {/* English Toggle */}
          <button
            onClick={() => onLanguageChange('en')}
            className={`flex items-center space-x-1 px-2 sm:px-2.5 py-1 rounded-full text-xs font-serif transition-all cursor-pointer ${
              language === 'en'
                ? 'bg-[#ffffff] text-[#20382e] font-bold shadow-xs'
                : 'text-[#627b6d] hover:text-[#20382e]'
            }`}
            title="English"
          >
            <USAFlag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="text-[11px] font-semibold">EN</span>
          </button>
        </div>

      </div>
    </header>
  );
}
