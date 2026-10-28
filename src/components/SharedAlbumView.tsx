'use client';

import React, { useState } from 'react';
import { WeddingContent } from '../data/weddingData';
import { GOOGLE_PHOTOS_ALBUM_URL } from '../data/albumConfig';
import { BotanicalWreath, CornerBotanicals, GoldLeafFlourish, GoldHeart } from './BotanicalAssets';

interface SharedAlbumViewProps {
  content: WeddingContent;
  onBackToKit: () => void;
}

export function SharedAlbumView({ content, onBackToKit }: SharedAlbumViewProps) {
  const [showNotice, setShowNotice] = useState(false);
  const isEn = content.languageName === 'English';

  const handleOpenAlbum = () => {
    const url = GOOGLE_PHOTOS_ALBUM_URL.trim();
    if (url && url !== '#' && (url.startsWith('http://') || url.startsWith('https://'))) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      setShowNotice(true);
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto my-3 sm:my-8 px-2 sm:px-4">
      {/* Paper Card Background with Luxury Shadows & Border */}
      <div className="relative bg-[#FAF7F2] text-[#20382E] rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl overflow-hidden border border-[#d8c7a6]/70 transition-all duration-300">
        
        {/* Subtle Paper Texture Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-multiply"
          style={{
            backgroundImage: `radial-gradient(#20382e 1px, transparent 1px)`,
            backgroundSize: '16px 16px',
          }}
        />

        {/* Double Gold Arched Outer & Inner Frame */}
        <div className="absolute inset-3 sm:inset-5 rounded-[2rem] sm:rounded-[2.5rem] border border-[#c5a059]/45 pointer-events-none" />
        <div className="absolute inset-4 sm:inset-6 rounded-[1.75rem] sm:rounded-[2.25rem] border border-[#c5a059]/25 pointer-events-none" />

        {/* Corner Botanicals on bottom corners */}
        <CornerBotanicals />

        {/* Content Container */}
        <div className="relative z-10 px-6 sm:px-12 md:px-16 pt-9 sm:pt-14 pb-14 sm:pb-20 flex flex-col items-center text-center">

          {/* Monogram Section with Original Wreath & Logo */}
          <div className="relative w-full mb-3">
            <BotanicalWreath className="max-w-[320px] sm:max-w-[380px]" />
          </div>

          {/* Top Decorative Badge */}
          <div className="flex items-center justify-center space-x-2 text-[#c5a059] text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold font-serif mb-2">
            <span className="w-6 h-[1px] bg-[#c5a059]/50" />
            <span>{content.album.badge}</span>
            <span className="w-6 h-[1px] bg-[#c5a059]/50" />
          </div>

          {/* Title in spaced small-caps */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#20382e] tracking-[0.16em] uppercase font-medium max-w-xl mb-3 leading-snug">
            {content.album.title}
          </h2>

          {/* Delicate leaf flourish */}
          <GoldLeafFlourish className="w-28 sm:w-36 h-5 my-2.5 opacity-85" />

          {/* Subtitle / Intro */}
          <p className="max-w-lg font-serif italic text-base sm:text-lg md:text-xl text-[#2d4738] leading-relaxed mb-6">
            {content.album.subtitle}
          </p>

          {/* MAIN CALL TO ACTION: Google Photos Button */}
          <div className="w-full max-w-md my-3">
            <button
              type="button"
              onClick={handleOpenAlbum}
              className="group w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#20382E] to-[#2e4d40] hover:from-[#172b23] hover:to-[#243e33] active:scale-[0.99] text-[#fcf9f2] font-serif text-base sm:text-lg tracking-wider uppercase font-semibold border border-[#c5a059]/70 shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300 cursor-pointer flex items-center justify-center space-x-3"
            >
              {/* Camera Icon */}
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#c5a059] group-hover:scale-110 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={1.8}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{content.album.openAlbumBtn}</span>
              <span className="text-[#c5a059] group-hover:translate-x-1 transition-transform">→</span>
            </button>

            {/* Friendly notification if link is pending */}
            {showNotice && (
              <div className="mt-4 p-4 rounded-xl bg-gradient-to-b from-[#faf5ea] to-[#f4ede0] border border-[#c5a059]/60 shadow-xs text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="flex items-center justify-center space-x-1.5 text-[#20382e] mb-1">
                  <GoldHeart className="w-4 h-4 text-[#c5a059]" />
                  <span className="font-serif font-bold text-sm tracking-wide">
                    {isEn ? 'Coming Very Soon!' : '¡Muy pronto disponible!'}
                  </span>
                </div>
                <p className="font-serif italic text-xs sm:text-sm text-[#3b5547] leading-relaxed">
                  {content.album.comingSoonNotice}
                </p>
              </div>
            )}
          </div>

          {/* Leaf flourish divider */}
          <GoldLeafFlourish className="w-28 sm:w-36 h-5 my-5 opacity-85" />

          {/* 3 Step Instructions Guide */}
          <div className="w-full max-w-xl text-left my-2 space-y-3.5">
            <h3 className="font-serif text-center sm:text-left text-base sm:text-lg font-semibold text-[#20382e] tracking-wide border-b border-[#c5a059]/30 pb-2">
              {content.album.instructionsTitle}
            </h3>

            <div className="grid grid-cols-1 gap-3 pt-1">
              {content.album.steps.map((step, idx) => (
                <div 
                  key={idx}
                  className="flex items-start space-x-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#ffffff]/70 backdrop-blur-xs border border-[#d8c7a6]/60 shadow-xs"
                >
                  <div className="w-10 h-10 rounded-full bg-[#f4ede0] border border-[#c5a059]/50 flex items-center justify-center flex-shrink-0 text-[#20382e] mt-0.5">
                    {step.icon === 'camera' && (
                      <svg className="w-5 h-5 text-[#8c6d32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                    {step.icon === 'link' && (
                      <svg className="w-5 h-5 text-[#8c6d32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    )}
                    {step.icon === 'upload' && (
                      <svg className="w-5 h-5 text-[#8c6d32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    )}
                  </div>

                  <div className="flex-1 font-serif">
                    <h4 className="font-semibold text-sm sm:text-base text-[#162920]">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#3f5a4a] italic mt-0.5 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-xs font-serif italic text-[#5b7868] pt-2">
              {content.album.googlePhotosNotice}
            </p>
          </div>

          {/* Bottom Back Button */}
          <div className="mt-8 pt-4 border-t border-[#c5a059]/20 w-full max-w-xl flex justify-center">
            <button
              type="button"
              onClick={onBackToKit}
              className="inline-flex items-center space-x-2 text-sm sm:text-base font-serif text-[#20382e] hover:text-[#8c6d32] font-medium tracking-wide underline underline-offset-4 decoration-[#c5a059]/50 hover:decoration-[#8c6d32] transition-colors cursor-pointer"
            >
              <span>← {content.album.backToKitBtn}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
