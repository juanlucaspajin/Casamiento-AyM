'use client';

import React, { useState, useEffect } from 'react';
import { Language, weddingContent } from '../data/weddingData';
import { LanguageSelector } from '../components/LanguageSelector';
import { WeddingHeader } from '../components/WeddingHeader';
import { WeddingCard } from '../components/WeddingCard';

export default function WeddingPage() {
  const [language, setLanguage] = useState<Language | null>(null);

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

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#20382E] relative selection:bg-[#c5a059]/25">
      {/* Sticky Header with Controls */}
      <WeddingHeader
        language={language}
        onLanguageChange={handleSelectLanguage}
        onResetLanguage={handleResetLanguage}
      />

      {/* Main Content Area: Only the Wedding Card */}
      <main className="flex-1 flex items-center justify-center w-full px-2 sm:px-4 py-4 sm:py-8 animate-in fade-in duration-500">
        <WeddingCard content={currentContent} />
      </main>
    </div>
  );
}
