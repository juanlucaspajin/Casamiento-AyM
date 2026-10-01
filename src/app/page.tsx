'use client';

import React, { useState } from 'react';
import { Language, weddingContent } from '../data/weddingData';
import { LanguageSelector } from '../components/LanguageSelector';
import { WeddingHeader } from '../components/WeddingHeader';
import { WeddingCard } from '../components/WeddingCard';
import { GuestbookForm } from '../components/GuestbookForm';

export default function WeddingPage() {
  // Always start with null so the user first sees the language selection screen
  const [language, setLanguage] = useState<Language | null>(null);
  const [activeTab, setActiveTab] = useState<'card' | 'guestbook'>('card');

  const handleSelectLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const handleResetLanguage = () => {
    setLanguage(null);
    setActiveTab('card');
  };

  // If no language chosen yet, show the welcoming language gateway screen
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
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Main Content Area: Switches between Wedding Card & Guestbook Form */}
      <main className="flex-1 flex items-center justify-center w-full px-2 sm:px-4 py-4 sm:py-8 animate-in fade-in duration-500">
        {activeTab === 'card' ? (
          <WeddingCard
            content={currentContent}
            onOpenGuestbook={() => setActiveTab('guestbook')}
          />
        ) : (
          <GuestbookForm
            content={currentContent}
            onBackToKit={() => setActiveTab('card')}
          />
        )}
      </main>
    </div>
  );
}
