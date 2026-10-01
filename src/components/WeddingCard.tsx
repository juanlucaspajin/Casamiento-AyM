'use client';

import React from 'react';
import { WeddingContent } from '../data/weddingData';
import { BotanicalWreath, CornerBotanicals, GoldLeafFlourish, GoldHeart, KitItemIcon } from './BotanicalAssets';

interface WeddingCardProps {
  content: WeddingContent;
}

export function WeddingCard({ content }: WeddingCardProps) {
  return (
    <div className="relative w-full max-w-xl mx-auto my-2 sm:my-6 px-1 sm:px-4">
      {/* Paper Card Background with Luxury Shadows & Border */}
      <div className="relative bg-[#FAF7F2] text-[#20382E] rounded-[2.5rem] shadow-2xl overflow-hidden border border-[#d8c7a6]/70 transition-all duration-300">
        
        {/* Subtle Paper Texture Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-multiply"
          style={{
            backgroundImage: `radial-gradient(#20382e 1px, transparent 1px)`,
            backgroundSize: '16px 16px',
          }}
        />

        {/* Double Gold Arched Outer & Inner Frame */}
        <div className="absolute inset-3 sm:inset-5 rounded-[2rem] border border-[#c5a059]/45 pointer-events-none" />
        <div className="absolute inset-4 sm:inset-6 rounded-[1.75rem] border border-[#c5a059]/25 pointer-events-none" />

        {/* Corner Botanicals on bottom corners */}
        <CornerBotanicals />

        {/* Content Container */}
        <div className="relative z-10 px-6 sm:px-12 md:px-14 pt-8 sm:pt-12 pb-12 sm:pb-16 flex flex-col items-center text-center">

          {/* Monogram Section with Wreath */}
          <div className="relative w-full mb-3">
            <BotanicalWreath />
            <div className="absolute inset-0 flex items-center justify-center -translate-y-5">
              <div className="flex items-center space-x-1 font-serif select-none">
                <span className="text-4xl sm:text-5xl md:text-6xl font-normal text-[#20382e] tracking-tight">
                  A
                </span>
                <span className="text-3xl sm:text-4xl md:text-5xl italic text-[#c5a059] px-1 font-serif font-light">
                  &
                </span>
                <span className="text-4xl sm:text-5xl md:text-6xl font-normal text-[#20382e] tracking-tight">
                  M
                </span>
              </div>
            </div>
          </div>

          {/* Title in spaced small-caps */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#20382e] tracking-[0.16em] uppercase font-medium max-w-lg mb-2">
            {content.cardTitle}
          </h2>

          {/* Delicate leaf flourish */}
          <GoldLeafFlourish className="w-24 sm:w-32 h-4 my-2 opacity-85" />

          {/* Intro Paragraphs */}
          <div className="max-w-lg space-y-2 mb-4 font-serif italic text-sm sm:text-base md:text-lg text-[#324b3d] leading-relaxed">
            <p>{content.introLines[0]}</p>
            <p>{content.introLines[1]}</p>
          </div>

          {/* Second leaf flourish */}
          <GoldLeafFlourish className="w-24 sm:w-32 h-4 my-2 opacity-85" />

          {/* 4 Kit Items */}
          <div className="w-full max-w-lg space-y-5 sm:space-y-6 my-4 text-left">
            {content.items.map((item) => (
              <div
                key={item.id}
                className="flex items-start space-x-3.5 sm:space-x-4 p-1.5 sm:p-2 rounded-xl"
              >
                {/* Circular Gold Icon */}
                <KitItemIcon
                  type={item.iconType}
                  className="w-13 h-13 sm:w-14 sm:h-14 mt-0.5 flex-shrink-0"
                />

                {/* Text Description */}
                <div className="flex-1 font-serif text-[#263e32] leading-snug">
                  <p className="text-sm sm:text-base text-[#1b3328]">
                    <span className="font-semibold tracking-wide uppercase text-[#1b3328]">
                      {item.name}:
                    </span>{' '}
                    <span className="text-[#324b3d]">
                      {item.shortDesc}
                    </span>
                  </p>

                  {/* How to use text */}
                  {item.howToUse && (
                    <p className="mt-2 text-xs sm:text-[13px] text-[#4d6657] italic leading-relaxed pl-1">
                      {item.howToUse}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Third leaf flourish */}
          <GoldLeafFlourish className="w-24 sm:w-32 h-4 my-3 opacity-85" />

          {/* Footer Closing Note */}
          <div className="space-y-3 font-serif mt-2">
            <p className="italic text-sm sm:text-base md:text-lg text-[#2a4335]">
              {content.closingMessage}
            </p>

            <div className="flex justify-center py-1">
              <GoldHeart className="w-4 h-4 text-[#c5a059] fill-[#c5a059]" />
            </div>

            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.25em] text-[#556f61] font-semibold">
                {content.signaturePrefix}
              </p>
              <p className="text-xl sm:text-2xl font-normal text-[#20382e] tracking-[0.2em] font-serif">
                {content.signature}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
