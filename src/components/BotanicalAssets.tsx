import React from 'react';
import Image from 'next/image';

// Spain Flag badge with refined gold rim
export function SpainFlag({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`relative inline-flex items-center justify-center rounded-full p-[2px] bg-gradient-to-tr from-[#9c7329] via-[#d8b776] to-[#f3ecdf] shadow-md ${className}`}>
      <div className="w-full h-full rounded-full overflow-hidden flex flex-col border border-[#fff]/40">
        <div className="w-full h-[25%] bg-[#C60B1E]" />
        <div className="w-full h-[50%] bg-[#FFC400] relative flex items-center justify-center">
          <div className="w-3.5 h-3.5 rounded-sm bg-[#ad1b1d]/20 border border-[#9b1517]/50 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#ad1b1d]/60" />
          </div>
        </div>
        <div className="w-full h-[25%] bg-[#C60B1E]" />
      </div>
    </div>
  );
}

// USA Flag badge with refined gold rim
export function USAFlag({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`relative inline-flex items-center justify-center rounded-full p-[2px] bg-gradient-to-tr from-[#9c7329] via-[#d8b776] to-[#f3ecdf] shadow-md ${className}`}>
      <div className="w-full h-full rounded-full overflow-hidden relative border border-[#fff]/40">
        <div className="w-full h-full flex flex-col justify-between bg-white">
          <div className="h-[7.7%] w-full bg-[#B22234]" />
          <div className="h-[7.7%] w-full bg-white" />
          <div className="h-[7.7%] w-full bg-[#B22234]" />
          <div className="h-[7.7%] w-full bg-white" />
          <div className="h-[7.7%] w-full bg-[#B22234]" />
          <div className="h-[7.7%] w-full bg-white" />
          <div className="h-[7.7%] w-full bg-[#B22234]" />
          <div className="h-[7.7%] w-full bg-white" />
          <div className="h-[7.7%] w-full bg-[#B22234]" />
          <div className="h-[7.7%] w-full bg-white" />
          <div className="h-[7.7%] w-full bg-[#B22234]" />
          <div className="h-[7.7%] w-full bg-white" />
          <div className="h-[7.7%] w-full bg-[#B22234]" />
        </div>
        <div className="absolute top-0 left-0 w-[45%] h-[54%] bg-[#3C3B6E] flex items-center justify-center p-0.5">
          <svg viewBox="0 0 20 20" className="w-full h-full text-white/90 fill-current">
            <circle cx="5" cy="5" r="1.2" />
            <circle cx="10" cy="5" r="1.2" />
            <circle cx="15" cy="5" r="1.2" />
            <circle cx="7.5" cy="10" r="1.2" />
            <circle cx="12.5" cy="10" r="1.2" />
            <circle cx="5" cy="15" r="1.2" />
            <circle cx="10" cy="15" r="1.2" />
            <circle cx="15" cy="15" r="1.2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Gold flourish divider matching the leaf divider in the cards
export function GoldLeafFlourish({ className = "w-28 h-5 my-4" }: { className?: string }) {
  return (
    <div className={`mx-auto flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 160 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-[#c5a059]">
        <line x1="0" y1="12" x2="60" y2="12" stroke="#d4af37" strokeWidth="0.8" strokeOpacity="0.6" strokeDasharray="3 2" />
        <circle cx="62" cy="12" r="1.5" fill="#c5a059" />
        <path d="M72 12C74 8 80 7 84 9C82 13 77 14 72 12Z" fill="#bfa175" />
        <path d="M88 12C86 8 80 7 76 9C78 13 83 14 88 12Z" fill="#a4814d" />
        <path d="M80 7V17" stroke="#8c6d32" strokeWidth="0.8" strokeLinecap="round" />
        <circle cx="98" cy="12" r="1.5" fill="#c5a059" />
        <line x1="100" y1="12" x2="160" y2="12" stroke="#d4af37" strokeWidth="0.8" strokeDasharray="3 2" />
      </svg>
    </div>
  );
}

// Exact 4 icons extracted directly from the original stationery cards
export function KitItemIcon({ type, className = "w-16 h-16" }: { type: 'pill' | 'stomach' | 'mint' | 'bandage'; className?: string }) {
  const iconSrc = {
    pill: '/icon-pill-original.png',
    stomach: '/icon-stomach-original.png',
    mint: '/icon-leaf-original.png',
    bandage: '/icon-bandage-original.png',
  }[type];

  return (
    <div className={`flex-shrink-0 relative ${className}`}>
      <Image
        src={iconSrc}
        alt={type}
        width={75}
        height={75}
        className="w-full h-full object-contain drop-shadow-xs"
      />
    </div>
  );
}

// The EXACT watercolor floral wreath and A & M monogram from the official logo
export function BotanicalWreath({ className = "max-w-[320px] sm:max-w-[380px] md:max-w-[420px]" }: { className?: string }) {
  return (
    <div className={`relative w-full mx-auto pointer-events-none select-none ${className}`}>
      <Image
        src="/wedding-logo-transparent.png"
        alt="A & M Monograma y Guirnalda Floral Oficial"
        width={1024}
        height={1024}
        priority
        className="w-full h-auto object-contain mx-auto drop-shadow-xs"
      />
    </div>
  );
}

// Side and Bottom Watercolor Floral Vines from the original card
export function CornerBotanicals() {
  return (
    <>
      {/* Bottom Left Corner Original Floral Spray */}
      <div className="absolute bottom-0 -left-1 sm:-left-3 w-28 sm:w-36 md:w-44 pointer-events-none select-none z-0 opacity-95">
        <Image
          src="/transparent-floral-left.png"
          alt="Flores izquierda"
          width={170}
          height={780}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Bottom Right Corner Original Floral Spray */}
      <div className="absolute bottom-0 -right-1 sm:-right-3 w-28 sm:w-36 md:w-44 pointer-events-none select-none z-0 opacity-95">
        <Image
          src="/transparent-floral-right.png"
          alt="Flores derecha"
          width={170}
          height={780}
          className="w-full h-auto object-contain"
        />
      </div>
    </>
  );
}

// Gold Heart
export function GoldHeart({ className = "w-4 h-4 text-[#c5a059]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}
