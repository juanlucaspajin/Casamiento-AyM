'use client';

import React, { useActionState, useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { WeddingContent } from '../data/weddingData';
import { BotanicalWreath, CornerBotanicals, GoldLeafFlourish, GoldHeart } from './BotanicalAssets';
import { submitMessageAction, MessageActionState } from '../app/actions/messages';

interface GuestbookFormProps {
  content: WeddingContent;
  onBackToKit: () => void;
}

const initialState: MessageActionState = {
  success: false,
};

export function GuestbookForm({ content, onBackToKit }: GuestbookFormProps) {
  const [state, formAction, isPending] = useActionState(submitMessageAction, initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // Reaccionar al éxito del Server Action
  useEffect(() => {
    if (state.success) {
      setIsSubmitted(true);
      setName('');
      setMessage('');
      try {
        confetti({
          particleCount: 85,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#c5a059', '#20382E', '#e8d5b5', '#b38e46', '#f3ecdf'],
        });
      } catch {
        // Ignorar si el entorno bloquea canvas
      }
    }
  }, [state.success]);

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
            <span>{content.guestbook.badge}</span>
            <span className="w-6 h-[1px] bg-[#c5a059]/50" />
          </div>

          {/* Title in spaced small-caps */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#20382e] tracking-[0.16em] uppercase font-medium max-w-xl mb-3 leading-snug">
            {content.guestbook.title}
          </h2>

          {/* Delicate leaf flourish */}
          <GoldLeafFlourish className="w-28 sm:w-36 h-5 my-2.5 opacity-85" />

          {/* Subtitle / Intro */}
          <p className="max-w-lg font-serif italic text-base sm:text-lg md:text-xl text-[#2d4738] leading-relaxed mb-6">
            {content.guestbook.subtitle}
          </p>

          {/* FORM OR SUCCESS STATE */}
          <div className="w-full max-w-xl my-2 text-left">
            {isSubmitted ? (
              /* Success Confirmation Banner */
              <div className="bg-gradient-to-b from-[#fbf8f0] to-[#f4ede0] border border-[#c5a059]/60 rounded-2xl p-6 sm:p-8 text-center shadow-md animate-in fade-in zoom-in-95 duration-400">
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-[#20382e]/10 border border-[#c5a059]/40 flex items-center justify-center">
                  <GoldHeart className="w-7 h-7 text-[#c5a059]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#20382e] mb-2 tracking-wide">
                  {content.guestbook.successTitle}
                </h3>
                <p className="font-serif italic text-base sm:text-lg text-[#2d4738] mb-6 leading-relaxed">
                  {content.guestbook.successMessage}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-[#c5a059] bg-[#ffffff] hover:bg-[#faf7f2] text-[#20382e] font-serif text-sm font-semibold tracking-wide transition-all shadow-xs cursor-pointer"
                  >
                    {content.guestbook.sendAnotherBtn}
                  </button>
                  <button
                    type="button"
                    onClick={onBackToKit}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#20382e] hover:bg-[#182c24] text-[#faf7f2] font-serif text-sm font-semibold tracking-wide transition-all shadow-xs cursor-pointer"
                  >
                    {content.guestbook.backToKitBtn}
                  </button>
                </div>
              </div>
            ) : (
              /* Form */
              <form 
                action={formAction} 
                className="space-y-5 bg-[#ffffff]/60 backdrop-blur-xs p-5 sm:p-7 rounded-2xl border border-[#d8c7a6]/50 shadow-xs"
              >
                {/* Campo Honeypot para neutralizar bots (oculto y fuera del flujo accesible) */}
                <div 
                  style={{ 
                    position: 'absolute', 
                    left: '-9999px', 
                    width: '1px', 
                    height: '1px', 
                    opacity: 0, 
                    overflow: 'hidden' 
                  }} 
                  aria-hidden="true"
                >
                  <label htmlFor="website-hp">Website</label>
                  <input
                    id="website-hp"
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {state.error && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg font-serif animate-in fade-in duration-200">
                    {state.error}
                  </div>
                )}

                {/* Input: Nombre */}
                <div>
                  <label htmlFor="guest-name" className="block font-serif font-medium text-sm sm:text-base text-[#20382e] tracking-wide mb-1.5">
                    {content.guestbook.nameLabel} <span className="text-[#c5a059]">*</span>
                  </label>
                  <input
                    id="guest-name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={content.guestbook.namePlaceholder}
                    required
                    maxLength={60}
                    disabled={isPending}
                    className="w-full px-4 py-3 rounded-xl bg-[#FCFAF7] border border-[#c5a059]/45 text-[#20382e] placeholder:text-[#8a9e93] font-serif text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-[#c5a059] focus:border-transparent transition-all shadow-inner disabled:opacity-60"
                  />
                </div>

                {/* Textarea: Mensaje */}
                <div>
                  <label htmlFor="guest-message" className="block font-serif font-medium text-sm sm:text-base text-[#20382e] tracking-wide mb-1.5">
                    {content.guestbook.messageLabel} <span className="text-[#c5a059]">*</span>
                  </label>
                  <textarea
                    id="guest-message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={content.guestbook.messagePlaceholder}
                    required
                    rows={4}
                    maxLength={1000}
                    disabled={isPending}
                    className="w-full px-4 py-3 rounded-xl bg-[#FCFAF7] border border-[#c5a059]/45 text-[#20382e] placeholder:text-[#8a9e93] font-serif text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-[#c5a059] focus:border-transparent transition-all shadow-inner resize-y leading-relaxed disabled:opacity-60"
                  />
                  <div className="text-right mt-1">
                    <span className="text-xs text-[#708a7c] font-serif">
                      {message.length} / 1000
                    </span>
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#20382E] to-[#2e4d40] hover:from-[#172b23] hover:to-[#243e33] active:scale-[0.99] text-[#fcf9f2] font-serif text-base sm:text-lg tracking-wider uppercase font-medium border border-[#c5a059]/60 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer disabled:opacity-60 flex items-center justify-center space-x-2"
                  >
                    {isPending ? (
                      <span className="flex items-center space-x-2">
                        <svg className="animate-spin h-5 w-5 text-[#c5a059]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                        </svg>
                        <span>{content.guestbook.submittingBtn}</span>
                      </span>
                    ) : (
                      <span>{content.guestbook.submitBtn}</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Bottom Back Button */}
          <div className="mt-8 pt-4 border-t border-[#c5a059]/20 w-full max-w-xl flex justify-center">
            <button
              type="button"
              onClick={onBackToKit}
              className="inline-flex items-center space-x-2 text-sm sm:text-base font-serif text-[#20382e] hover:text-[#8c6d32] font-medium tracking-wide underline underline-offset-4 decoration-[#c5a059]/50 hover:decoration-[#8c6d32] transition-colors cursor-pointer"
            >
              <span>← {content.guestbook.backToKitBtn}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
