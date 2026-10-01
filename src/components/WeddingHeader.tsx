'use client';

import React from 'react';
import { Language } from '../data/weddingData';
import { SpainFlag, USAFlag, GoldHeart } from './BotanicalAssets';
import { Image as ImageIcon, Sparkles, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';

interface WeddingHeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onResetLanguage: () => void;
  onOpenOriginalCard: () => void;
}

export function WeddingHeader({
  language,
  onLanguageChange,
  onResetLanguage,
  onOpenOriginalCard,
}: WeddingHeaderProps) {
  const isEs = language === 'es';

  const triggerToast = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.1 },
      colors: ['#c5a059', '#20382e', '#fdfbf7', '#d4af37'],
    });
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#faf7f2]/90 border-b border-[#c5a059]/25 shadow-xs transition-all">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between">
        
        {/* Monogram Brand */}
        <div 
          onClick={onResetLanguage}
          className="flex items-center space-x-2 cursor-pointer group"
          title={isEs ? 'Volver a selección de idioma' : 'Back to language selection'}
        >
          <div className="font-serif tracking-widest text-[#20382e] group-hover:text-[#8c6d32] transition-colors flex items-center">
            <span className="text-xl sm:text-2xl font-bold font-serif">A</span>
            <span className="text-lg sm:text-xl italic text-[#c5a059] px-0.5">&</span>
            <span className="text-xl sm:text-2xl font-bold font-serif">M</span>
          </div>
          <GoldHeart className="w-3.5 h-3.5 text-[#c5a059] opacity-75 group-hover:scale-125 transition-transform" />
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          
          {/* Quick Toast Sparkle */}
          <button
            onClick={triggerToast}
            className="p-2 sm:px-3 sm:py-1.5 rounded-full text-[#8c6d32] hover:bg-[#f2e9db] transition-colors flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider cursor-pointer"
            title={isEs ? 'Brindar por los novios' : 'Toast the couple'}
          >
            <Sparkles className="w-4 h-4 text-[#c5a059]" />
            <span className="hidden md:inline">{isEs ? 'Brindis' : 'Toast'}</span>
          </button>

          {/* View Original Card Button */}
          <button
            onClick={onOpenOriginalCard}
            className="p-2 sm:px-3 sm:py-1.5 rounded-full text-[#526f60] hover:text-[#20382e] hover:bg-[#f2e9db] transition-colors flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider cursor-pointer"
            title={isEs ? 'Ver tarjeta original' : 'View original card'}
          >
            <ImageIcon className="w-4 h-4 text-[#c5a059]" />
            <span className="hidden sm:inline">{isEs ? 'Foto Tarjeta' : 'Original Card'}</span>
          </button>

          {/* Language Switcher Pill */}
          <div className="flex items-center bg-[#f0e7d8] p-1 rounded-full border border-[#c5a059]/40 shadow-xs">
            {/* Spanish Toggle */}
            <button
              onClick={() => onLanguageChange('es')}
              className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-serif transition-all cursor-pointer ${
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
              className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-serif transition-all cursor-pointer ${
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

          {/* Reset Language portal button */}
          <button
            onClick={onResetLanguage}
            className="p-2 rounded-full text-[#6b8577] hover:text-[#20382e] hover:bg-[#f2e9db] transition-colors cursor-pointer hidden lg:inline-flex"
            title={isEs ? 'Pantalla de bienvenida' : 'Welcome screen'}
          >
            <Globe className="w-4 h-4" />
          </button>

        </div>

      </div>
    </header>
  );
}
