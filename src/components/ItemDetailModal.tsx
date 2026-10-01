'use client';

import React from 'react';
import { RecoveryItem } from '../data/weddingData';
import { KitItemIcon, GoldLeafFlourish } from './BotanicalAssets';
import { X, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

interface ItemDetailModalProps {
  item: RecoveryItem | null;
  onClose: () => void;
  language: 'es' | 'en';
}

export function ItemDetailModal({ item, onClose, language }: ItemDetailModalProps) {
  if (!item) return null;

  const isEs = language === 'es';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#20382e]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#c5a059]/40 text-[#20382e] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle inner gold frame */}
        <div className="absolute inset-3 rounded-2xl border border-[#c5a059]/20 pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#6b8577] hover:text-[#20382e] hover:bg-[#e9dfce] transition-colors z-20 cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Icon and Title */}
        <div className="text-center relative z-10 pt-2">
          <div className="inline-block relative">
            <KitItemIcon type={item.iconType} className="w-18 h-18 mx-auto" />
            {item.badge && (
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#20382e] text-[#fbf8f2] shadow-sm">
                {item.badge}
              </span>
            )}
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#20382e] mt-4 tracking-wider uppercase">
            {item.name}
          </h3>

          <p className="text-sm font-serif italic text-[#4a6857] mt-1 max-w-md mx-auto">
            {item.shortDesc}
          </p>

          <GoldLeafFlourish className="w-24 h-4 my-3 opacity-75" />
        </div>

        {/* How to use highlighted box */}
        {item.howToUse && (
          <div className="my-4 p-4 rounded-2xl bg-[#f2eade] border border-[#c5a059]/30 relative z-10">
            <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#a37c35] mb-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{isEs ? 'Modo de Uso Oficial' : 'Official Instructions'}</span>
            </div>
            <p className="font-serif text-sm text-[#243d30] italic leading-relaxed">
              {item.howToUse}
            </p>
          </div>
        )}

        {/* Extended Details */}
        {item.details && (
          <p className="text-xs sm:text-sm text-[#3b5748] font-sans leading-relaxed mb-4 relative z-10">
            {item.details}
          </p>
        )}

        {/* Practical tips */}
        {item.tips && item.tips.length > 0 && (
          <div className="space-y-2 relative z-10">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#698576]">
              {isEs ? 'Recomendaciones Prácticas:' : 'Practical Recommendations:'}
            </h4>
            <div className="space-y-1.5">
              {item.tips.map((tip, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-xs text-[#2b4436]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#a37c35] flex-shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Special advice for Resaquit */}
        {item.id === 'resaquit' && (
          <div className="mt-4 p-3 rounded-xl bg-[#fff9ed] border border-[#f0c36d]/50 flex items-start space-x-2 text-xs text-[#8c6519]">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#bfa14c]" />
            <span>
              {isEs
                ? 'Medicamento para mayores de 15 años. No superar 4 comprimidos en 24h ni usar por más de 2 días.'
                : 'For individuals 15 years and older. Do not exceed 4 tablets in 24 hours or use for more than 2 consecutive days.'}
            </span>
          </div>
        )}

        {/* Close button at bottom */}
        <div className="mt-6 pt-4 border-t border-[#c5a059]/20 text-center relative z-10">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-8 py-2.5 rounded-full bg-[#20382e] hover:bg-[#2c4d3f] text-[#fbf8f2] text-xs uppercase tracking-widest font-medium transition-all shadow-md cursor-pointer"
          >
            {isEs ? 'Entendido / Cerrar' : 'Understood / Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
