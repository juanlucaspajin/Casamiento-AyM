import React from 'react';

// Spain Flag badge with refined gold rim
export function SpainFlag({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`relative inline-flex items-center justify-center rounded-full p-[2px] bg-gradient-to-tr from-[#9c7329] via-[#d8b776] to-[#f3ecdf] shadow-md ${className}`}>
      <div className="w-full h-full rounded-full overflow-hidden flex flex-col border border-[#fff]/40">
        <div className="w-full h-[25%] bg-[#C60B1E]" />
        <div className="w-full h-[50%] bg-[#FFC400] relative flex items-center justify-center">
          {/* Subtle Spanish coat of arms representation */}
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
        {/* Stripes */}
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
        {/* Canton (Blue field with stars) */}
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
        {/* Left line */}
        <line x1="0" y1="12" x2="60" y2="12" stroke="#d4af37" strokeWidth="0.8" strokeOpacity="0.6" strokeDasharray="3 2" />
        <circle cx="62" cy="12" r="1.5" fill="#c5a059" />
        {/* Center twin leaves */}
        <path d="M72 12C74 8 80 7 84 9C82 13 77 14 72 12Z" fill="#bfa175" />
        <path d="M88 12C86 8 80 7 76 9C78 13 83 14 88 12Z" fill="#a4814d" />
        <path d="M80 7V17" stroke="#8c6d32" strokeWidth="0.8" strokeLinecap="round" />
        <circle cx="98" cy="12" r="1.5" fill="#c5a059" />
        {/* Right line */}
        <line x1="100" y1="12" x2="160" y2="12" stroke="#d4af37" strokeWidth="0.8" strokeDasharray="3 2" />
      </svg>
    </div>
  );
}

// Circular Gold Outline Icons matching the exact 4 icons from esp.jpg and eng.jpg
export function KitItemIcon({ type, className = "w-16 h-16" }: { type: 'pill' | 'stomach' | 'mint' | 'bandage'; className?: string }) {
  return (
    <div className={`flex-shrink-0 flex items-center justify-center rounded-full border border-[#c5a059]/75 bg-gradient-to-b from-[#faf6ef] to-[#f4eedf] p-2.5 shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:border-[#b38e46] ${className}`}>
      {type === 'pill' && (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-[#a37c35]" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {/* Capsule pill rotated 45 deg */}
          <rect x="8" y="16" width="24" height="11" rx="5.5" transform="rotate(-45 20 20)" fill="none" />
          <line x1="16.5" y1="16.5" x2="24.5" y2="24.5" stroke="#a37c35" strokeWidth="1.4" />
          {/* subtle shine */}
          <line x1="13" y1="21" x2="15" y2="19" stroke="#c5a059" strokeWidth="1" strokeLinecap="round" />
        </svg>
      )}
      {type === 'stomach' && (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-[#a37c35]" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {/* Stomach silhouette outline */}
          <path d="M22 6V12C20 14 14 15 12 21C9.5 28.5 16 34 22 34C28 34 31 29 31 23C31 16 26 14 26 10" />
          <path d="M19 12C20 17 26 18 26 23" stroke="#b38e46" strokeWidth="1.2" strokeDasharray="1.5 2" />
        </svg>
      )}
      {type === 'mint' && (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-[#a37c35]" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {/* Botanical mint leaf with veins */}
          <path d="M12 28C10 20 16 10 28 8C27 20 20 28 12 28Z" fill="none" />
          <path d="M12 28C17 23 23 15 28 8" stroke="#a37c35" strokeWidth="1.4" />
          <path d="M16 22C19 22 22 23 23 23" stroke="#b38e46" strokeWidth="1.1" />
          <path d="M20 17C23 16 25 17 26 16" stroke="#b38e46" strokeWidth="1.1" />
          {/* Little stem */}
          <path d="M12 28L8 32" stroke="#a37c35" strokeWidth="1.6" />
        </svg>
      )}
      {type === 'bandage' && (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-[#a37c35]" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {/* Bandage strip rotated */}
          <rect x="9" y="15" width="22" height="10" rx="4.5" transform="rotate(-45 20 20)" fill="none" />
          {/* Center pad */}
          <rect x="16" y="16" width="8" height="8" transform="rotate(-45 20 20)" stroke="#b38e46" strokeWidth="1.2" strokeDasharray="1 1.5" />
          {/* Perforation dots */}
          <circle cx="13" cy="27" r="0.8" fill="#a37c35" />
          <circle cx="16" cy="30" r="0.8" fill="#a37c35" />
          <circle cx="24" cy="10" r="0.8" fill="#a37c35" />
          <circle cx="27" cy="13" r="0.8" fill="#a37c35" />
        </svg>
      )}
    </div>
  );
}

// Watercolor Botanical Wreath for the Monogram
export function BotanicalWreath() {
  return (
    <div className="relative w-full max-w-[280px] h-[170px] mx-auto pointer-events-none select-none flex items-center justify-center">
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
        <defs>
          <radialGradient id="leafGrad1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#678a76" />
            <stop offset="100%" stopColor="#253e32" />
          </radialGradient>
          <radialGradient id="leafGrad2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8ea89a" />
            <stop offset="100%" stopColor="#3d594b" />
          </radialGradient>
          <radialGradient id="flowerPetal" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="70%" stopColor="#fdf8ee" />
            <stop offset="100%" stopColor="#e9dfcd" />
          </radialGradient>
          <radialGradient id="flowerCenter" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e5c158" />
            <stop offset="70%" stopColor="#bfa14c" />
            <stop offset="100%" stopColor="#7a6023" />
          </radialGradient>
        </defs>

        {/* Delicate golden circular arc guiding wreath */}
        <path d="M 80 120 C 100 170, 220 170, 240 120" stroke="#d4af37" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.6" />

        {/* Left branch foliage */}
        <g transform="translate(45, 20)">
          {/* Leaves */}
          <path d="M50 80 C40 70, 30 50, 42 35 C52 45, 55 65, 50 80 Z" fill="url(#leafGrad1)" opacity="0.9" />
          <path d="M40 95 C25 90, 15 75, 22 60 C32 68, 38 85, 40 95 Z" fill="url(#leafGrad2)" opacity="0.85" />
          <path d="M58 110 C45 110, 35 125, 40 138 C52 130, 56 120, 58 110 Z" fill="url(#leafGrad1)" opacity="0.85" />
          <path d="M70 70 C75 55, 68 40, 60 45 C55 58, 62 68, 70 70 Z" fill="#4d6f5f" opacity="0.75" />
          <path d="M78 95 C90 85, 88 70, 80 72 C75 80, 74 90, 78 95 Z" fill="#698b79" opacity="0.8" />
          {/* Fine golden stems */}
          <path d="M30 65 Q 55 90 75 115" stroke="#bfa14c" strokeWidth="0.8" opacity="0.7" fill="none" />
        </g>

        {/* Right branch foliage */}
        <g transform="translate(195, 20)">
          {/* Leaves mirrored */}
          <path d="M30 80 C40 70, 50 50, 38 35 C28 45, 25 65, 30 80 Z" fill="url(#leafGrad1)" opacity="0.9" />
          <path d="M40 95 C55 90, 65 75, 58 60 C48 68, 42 85, 40 95 Z" fill="url(#leafGrad2)" opacity="0.85" />
          <path d="M22 110 C35 110, 45 125, 40 138 C28 130, 24 120, 22 110 Z" fill="url(#leafGrad1)" opacity="0.85" />
          <path d="M10 70 C5 55, 12 40, 20 45 C25 58, 18 68, 10 70 Z" fill="#4d6f5f" opacity="0.75" />
          <path d="M2 95 C-10 85, -8 70, 0 72 C5 80, 6 90, 2 95 Z" fill="#698b79" opacity="0.8" />
          {/* Fine golden stems */}
          <path d="M50 65 Q 25 90 5 115" stroke="#bfa14c" strokeWidth="0.8" opacity="0.7" fill="none" />
        </g>

        {/* Center Main White Flower below monogram */}
        <g transform="translate(160, 142)">
          {/* Flower Petals */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <ellipse
              key={i}
              cx="0"
              cy="-16"
              rx="9"
              ry="16"
              fill="url(#flowerPetal)"
              stroke="#e4d7c2"
              strokeWidth="0.5"
              transform={`rotate(${angle})`}
              opacity="0.95"
            />
          ))}
          {/* Inner Petal Ring */}
          {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, i) => (
            <ellipse
              key={`inner-${i}`}
              cx="0"
              cy="-11"
              rx="6"
              ry="11"
              fill="url(#flowerPetal)"
              stroke="#decbb0"
              strokeWidth="0.4"
              transform={`rotate(${angle})`}
              opacity="0.92"
            />
          ))}
          {/* Golden Center Pistil */}
          <circle cx="0" cy="0" r="7" fill="url(#flowerCenter)" />
          {/* Fine stamen dots (precomputed static coordinates to eliminate hydration float precision differences) */}
          {[
            { cx: 4.5, cy: 0 },
            { cx: 3.45, cy: 2.89 },
            { cx: 0.78, cy: 4.43 },
            { cx: -2.25, cy: 3.9 },
            { cx: -4.23, cy: 1.54 },
            { cx: -4.23, cy: -1.54 },
            { cx: -2.25, cy: -3.9 },
            { cx: 0.78, cy: -4.43 },
            { cx: 3.45, cy: -2.89 },
          ].map((pt, j) => (
            <circle
              key={`stamen-${j}`}
              cx={pt.cx}
              cy={pt.cy}
              r="1"
              fill="#ffffff"
              opacity="0.85"
            />
          ))}
        </g>

        {/* Secondary subtle left flower bud */}
        <g transform="translate(118, 128) scale(0.65)">
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <ellipse key={i} cx="0" cy="-12" rx="7" ry="12" fill="url(#flowerPetal)" transform={`rotate(${angle})`} />
          ))}
          <circle cx="0" cy="0" r="5" fill="url(#flowerCenter)" />
        </g>

        {/* Secondary subtle right flower bud */}
        <g transform="translate(202, 128) scale(0.65)">
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <ellipse key={i} cx="0" cy="-12" rx="7" ry="12" fill="url(#flowerPetal)" transform={`rotate(${angle})`} />
          ))}
          <circle cx="0" cy="0" r="5" fill="url(#flowerCenter)" />
        </g>
      </svg>
    </div>
  );
}

// Side and Bottom Watercolor Floral Vines matching the physical card
export function CornerBotanicals() {
  return (
    <>
      {/* Bottom Left Corner Floral Spray */}
      <div className="absolute -bottom-6 -left-6 w-48 h-64 pointer-events-none select-none z-10 opacity-90 transition-opacity duration-500">
        <svg viewBox="0 0 180 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Eucalyptus stem climbing up */}
          <path d="M 20 220 Q 30 140 45 40" stroke="#bfa14c" strokeWidth="1" opacity="0.6" fill="none" />
          {/* Leaves */}
          <path d="M 45 40 C 35 25, 20 30, 25 45 C 32 50, 42 48, 45 40 Z" fill="#365445" opacity="0.85" />
          <path d="M 40 70 C 25 60, 15 70, 20 85 C 30 88, 38 80, 40 70 Z" fill="#507261" opacity="0.9" />
          <path d="M 48 95 C 60 85, 75 90, 70 105 C 58 110, 50 102, 48 95 Z" fill="#3b5b4a" opacity="0.85" />
          <path d="M 35 125 C 20 115, 10 130, 18 145 C 28 145, 33 135, 35 125 Z" fill="#597e6c" opacity="0.9" />
          <path d="M 42 160 C 58 150, 70 160, 65 175 C 52 180, 45 170, 42 160 Z" fill="#2d483b" opacity="0.95" />
          {/* Large bottom flower */}
          <g transform="translate(60, 195) scale(0.9)">
            {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((angle, i) => (
              <ellipse key={i} cx="0" cy="-16" rx="8" ry="16" fill="#fcf9f2" stroke="#dcd0bc" strokeWidth="0.5" transform={`rotate(${angle})`} />
            ))}
            <circle cx="0" cy="0" r="7" fill="#bfa14c" />
            <circle cx="0" cy="0" r="4" fill="#8c6d32" />
          </g>
        </svg>
      </div>

      {/* Bottom Right Corner Floral Spray */}
      <div className="absolute -bottom-6 -right-6 w-48 h-64 pointer-events-none select-none z-10 opacity-90 transition-opacity duration-500">
        <svg viewBox="0 0 180 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full scale-x-[-1]">
          {/* Eucalyptus stem climbing up mirrored */}
          <path d="M 20 220 Q 30 140 45 40" stroke="#bfa14c" strokeWidth="1" opacity="0.6" fill="none" />
          {/* Leaves */}
          <path d="M 45 40 C 35 25, 20 30, 25 45 C 32 50, 42 48, 45 40 Z" fill="#365445" opacity="0.85" />
          <path d="M 40 70 C 25 60, 15 70, 20 85 C 30 88, 38 80, 40 70 Z" fill="#507261" opacity="0.9" />
          <path d="M 48 95 C 60 85, 75 90, 70 105 C 58 110, 50 102, 48 95 Z" fill="#3b5b4a" opacity="0.85" />
          <path d="M 35 125 C 20 115, 10 130, 18 145 C 28 145, 33 135, 35 125 Z" fill="#597e6c" opacity="0.9" />
          <path d="M 42 160 C 58 150, 70 160, 65 175 C 52 180, 45 170, 42 160 Z" fill="#2d483b" opacity="0.95" />
          {/* Large bottom flower */}
          <g transform="translate(60, 195) scale(0.9)">
            {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((angle, i) => (
              <ellipse key={i} cx="0" cy="-16" rx="8" ry="16" fill="#fcf9f2" stroke="#dcd0bc" strokeWidth="0.5" transform={`rotate(${angle})`} />
            ))}
            <circle cx="0" cy="0" r="7" fill="#bfa14c" />
            <circle cx="0" cy="0" r="4" fill="#8c6d32" />
          </g>
        </svg>
      </div>
    </>
  );
}

// Gold Heart with subtle shimmer
export function GoldHeart({ className = "w-4 h-4 text-[#c5a059]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}
