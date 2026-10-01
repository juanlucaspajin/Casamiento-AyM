'use client';

import React, { useState, useEffect } from 'react';
import { Language, weddingContent, RecoveryItem } from '../data/weddingData';
import { LanguageSelector } from '../components/LanguageSelector';
import { WeddingHeader } from '../components/WeddingHeader';
import { WeddingCard } from '../components/WeddingCard';
import { InteractiveKit } from '../components/InteractiveKit';
import { ItemDetailModal } from '../components/ItemDetailModal';
import { OriginalCardModal } from '../components/OriginalCardModal';
import { GoldHeart, GoldLeafFlourish } from '../components/BotanicalAssets';

export default function WeddingPage() {
  const [language, setLanguage] = useState<Language | null>(null);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [isOriginalCardOpen, setIsOriginalCardOpen] = useState<boolean>(false);

  // Check saved language preference on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('wedding_preferred_language') as Language;
      if (saved && (saved === 'es' || saved === 'en')) {
        setLanguage(saved);
      }
    } catch {
      // fallback
    }
  }, []);

  const handleSelectLanguage = (lang: Language) => {
    setLanguage(lang);
    try {
      localStorage.setItem('wedding_preferred_language', lang);
    } catch {
      // fallback
    }
  };

  const handleResetLanguage = () => {
    setLanguage(null);
    try {
      localStorage.removeItem('wedding_preferred_language');
    } catch {
      // fallback
    }
  };

  // If no language chosen, show the welcoming gateway screen
  if (!language) {
    return <LanguageSelector onSelectLanguage={handleSelectLanguage} />;
  }

  const currentContent = weddingContent[language];
  const selectedItem: RecoveryItem | null =
    currentContent.items.find((i) => i.id === selectedItemId) || null;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#20382E] relative selection:bg-[#c5a059]/25">
      {/* Sticky Header with Controls */}
      <WeddingHeader
        language={language}
        onLanguageChange={handleSelectLanguage}
        onResetLanguage={handleResetLanguage}
        onOpenOriginalCard={() => setIsOriginalCardOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-3 sm:px-6 py-4 sm:py-8 space-y-8 animate-in fade-in duration-500">
        
        {/* The Wedding Card replicating esp.jpg and eng.jpg */}
        <WeddingCard
          content={currentContent}
          selectedItemId={selectedItemId}
          onOpenDetails={(itemId) => setSelectedItemId(itemId)}
        />

        {/* Leaf Flourish separator */}
        <div className="max-w-md mx-auto py-2">
          <GoldLeafFlourish className="w-36 h-5 opacity-70" />
        </div>

        {/* Interactive Companion Features */}
        <InteractiveKit
          content={currentContent}
          language={language}
          onOpenOriginalCard={() => setIsOriginalCardOpen(true)}
        />

      </main>

      {/* Item Detail Modal */}
      <ItemDetailModal
        item={selectedItem}
        onClose={() => setSelectedItemId(null)}
        language={language}
      />

      {/* Original Scanned Card Modal */}
      <OriginalCardModal
        isOpen={isOriginalCardOpen}
        onClose={() => setIsOriginalCardOpen(false)}
        language={language}
      />

      {/* Footer */}
      <footer className="mt-16 border-t border-[#c5a059]/25 bg-[#f6efe4] py-8 text-center text-xs text-[#5f7a6c]">
        <div className="max-w-md mx-auto px-4 space-y-3">
          <div className="flex items-center justify-center space-x-1.5 font-serif text-[#20382e]">
            <span className="text-base font-semibold">A</span>
            <span className="italic text-[#c5a059]">&</span>
            <span className="text-base font-semibold">M</span>
          </div>

          <p className="italic font-serif text-[#415e50]">
            {language === 'es'
              ? 'Esperamos que disfrutes cada instante de esta fiesta.'
              : 'We hope you cherish every single moment of this celebration.'}
          </p>

          <div className="flex items-center justify-center space-x-1 text-[11px] text-[#789183] pt-1">
            <span>Celebrated with</span>
            <GoldHeart className="w-3 h-3 text-[#c5a059] fill-[#c5a059]" />
            <span>forever</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
