'use client';

import React from 'react';
import { WeddingContent } from '../data/weddingData';
import { BotanicalWreath, CornerBotanicals, GoldLeafFlourish, GoldHeart, KitItemIcon } from './BotanicalAssets';

interface WeddingCardProps {
  content: WeddingContent;
}

export function WeddingCard({ content }: WeddingCardProps) {
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
          <div className="relative w-full mb-4">
            <BotanicalWreath className="max-w-[340px] sm:max-w-[420px] md:max-w-[460px]" />
          </div>

          {/* Title in spaced small-caps */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#20382e] tracking-[0.16em] uppercase font-medium max-w-xl mb-3 leading-snug">
            {content.cardTitle}
          </h2>

          {/* Delicate leaf flourish */}
          <GoldLeafFlourish className="w-28 sm:w-36 h-5 my-2.5 opacity-85" />

          {/* Intro Paragraphs */}
          <div className="max-w-xl space-y-2.5 mb-5 font-serif italic text-base sm:text-lg md:text-xl text-[#2d4738] leading-relaxed">
            <p>{content.introLines[0]}</p>
            <p>{content.introLines[1]}</p>
          </div>

          {/* Second leaf flourish */}
          <GoldLeafFlourish className="w-28 sm:w-36 h-5 my-2.5 opacity-85" />

          {/* 4 Kit Items */}
          <div className="w-full max-w-xl space-y-6 sm:space-y-7 my-5 text-left">
            {content.items.map((item) => (
              <div
                key={item.id}
                className="flex items-start space-x-4 sm:space-x-5 p-2 sm:p-2.5 rounded-xl"
              >
                {/* Circular Gold Icon */}
                <KitItemIcon
                  type={item.iconType}
                  className="w-14 h-14 sm:w-16 sm:h-16 mt-0.5 flex-shrink-0"
                />

                {/* Text Description */}
                <div className="flex-1 font-serif text-[#20382e] leading-relaxed">
                  <p className="text-base sm:text-lg md:text-xl text-[#142920]">
                    <span className="font-bold tracking-wide uppercase text-[#142920]">
                      {item.name}:
                    </span>{' '}
                    <span className="text-[#2d4738]">
                      {item.shortDesc}
                    </span>
                  </p>

                  {/* How to use text */}
                  {item.howToUse && (
                    <p className="mt-2.5 text-sm sm:text-base md:text-[17px] text-[#425e4e] italic leading-relaxed pl-1 sm:pl-2 border-l-2 border-[#c5a059]/40">
                      {item.howToUse}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Third leaf flourish */}
          <GoldLeafFlourish className="w-28 sm:w-36 h-5 my-3.5 opacity-85" />

          {/* Footer Closing Note */}
          <div className="space-y-3.5 font-serif mt-2">
            <p className="italic text-base sm:text-lg md:text-xl text-[#223d2f]">
              {content.closingMessage}
            </p>

            <div className="flex justify-center py-1.5">
              <GoldHeart className="w-5 h-5 text-[#c5a059] fill-[#c5a059]" />
            </div>

            <div className="space-y-1.5">
              <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#4f6e5c] font-semibold">
                {content.signaturePrefix}
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#20382e] tracking-[0.2em] font-serif">
                {content.signature}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
