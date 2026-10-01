'use client';

import React, { useState, useEffect } from 'react';
import { WeddingContent, Language } from '../data/weddingData';
import { GlassWater, Clock, Plus, RotateCcw, ShieldCheck, Car, Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface InteractiveKitProps {
  content: WeddingContent;
  language: Language;
  onOpenOriginalCard: () => void;
}

export function InteractiveKit({ content, language, onOpenOriginalCard }: InteractiveKitProps) {
  const isEs = language === 'es';

  // Dosimeter state with localStorage persistence
  const [doseCount, setDoseCount] = useState<number>(0);
  const [lastDoseTime, setLastDoseTime] = useState<number | null>(null);
  const [timeLeftStr, setTimeLeftStr] = useState<string | null>(null);
  const [isNextDoseReady, setIsNextDoseReady] = useState<boolean>(true);

  // Water hydration tracker
  const [waterGlasses, setWaterGlasses] = useState<number>(0);

  // Confetti toast message
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedCount = localStorage.getItem('wedding_resaquit_count');
      const savedTime = localStorage.getItem('wedding_resaquit_last_time');
      const savedWater = localStorage.getItem('wedding_water_glasses');

      if (savedCount) setDoseCount(parseInt(savedCount, 10));
      if (savedTime) setLastDoseTime(parseInt(savedTime, 10));
      if (savedWater) setWaterGlasses(parseInt(savedWater, 10));
    } catch {
      // LocalStorage fallback
    }
  }, []);

  // Update timer every 10 seconds
  useEffect(() => {
    if (!lastDoseTime) {
      setIsNextDoseReady(true);
      setTimeLeftStr(null);
      return;
    }

    const interval = setInterval(() => {
      const SIX_HOURS_MS = 6 * 60 * 60 * 1000;
      const nextTime = lastDoseTime + SIX_HOURS_MS;
      const now = Date.now();
      const diff = nextTime - now;

      if (diff <= 0) {
        setIsNextDoseReady(true);
        setTimeLeftStr(null);
      } else {
        setIsNextDoseReady(false);
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        setTimeLeftStr(`${hours}h ${minutes}m`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [lastDoseTime]);

  const handleLogDose = () => {
    if (doseCount >= 4) {
      alert(isEs ? 'Has alcanzado el límite máximo diario sugerido de 4 comprimidos.' : 'You have reached the maximum daily recommended dose of 4 tablets.');
      return;
    }
    const newCount = doseCount + 1;
    const now = Date.now();
    setDoseCount(newCount);
    setLastDoseTime(now);

    try {
      localStorage.setItem('wedding_resaquit_count', newCount.toString());
      localStorage.setItem('wedding_resaquit_last_time', now.toString());
    } catch {
      // fallback
    }

    // Gentle mini confetti
    confetti({
      particleCount: 25,
      spread: 45,
      origin: { y: 0.8 },
      colors: ['#c5a059', '#e8d5b5', '#ffffff']
    });
  };

  const handleResetDoses = () => {
    if (confirm(isEs ? '¿Deseas reiniciar el contador de dosis?' : 'Do you want to reset the dose tracker?')) {
      setDoseCount(0);
      setLastDoseTime(null);
      try {
        localStorage.removeItem('wedding_resaquit_count');
        localStorage.removeItem('wedding_resaquit_last_time');
      } catch {
        // fallback
      }
    }
  };

  const handleAddWater = () => {
    const newCount = waterGlasses + 1;
    setWaterGlasses(newCount);
    try {
      localStorage.setItem('wedding_water_glasses', newCount.toString());
    } catch {
      // fallback
    }

    confetti({
      particleCount: 15,
      spread: 35,
      origin: { y: 0.85 },
      colors: ['#67b2d7', '#9ee4ff', '#ffffff']
    });
  };

  const triggerNewlywedToast = () => {
    // Grand celebration confetti
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#c5a059', '#20382e', '#fdfbf7', '#d4af37', '#e8d5b5']
    });

    setToastMessage(content.actions.toastSuccess);
    setTimeout(() => setToastMessage(null), 4500);
  };

  return (
    <section className="w-full max-w-4xl mx-auto my-8 px-4 space-y-8">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#20382e] text-[#fdfbf7] border border-[#c5a059] px-5 py-3.5 rounded-2xl shadow-2xl flex items-center space-x-3 animate-in slide-in-from-bottom-5 duration-300">
          <Heart className="w-5 h-5 text-[#c5a059] fill-[#c5a059]" />
          <span className="text-xs sm:text-sm font-serif">{toastMessage}</span>
        </div>
      )}

      {/* Interactive Action Hub */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1: Resaquit Dosage Tracker */}
        <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-7 shadow-lg border border-[#c5a059]/35 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a059]/5 rounded-bl-full pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#f3ecdf] text-[#8c6d32] border border-[#c5a059]/40">
                <Clock className="w-3.5 h-3.5 text-[#a37c35]" />
                <span>{isEs ? 'Asistente de Tomas' : 'Dosage Assistant'}</span>
              </span>
              <button
                onClick={handleResetDoses}
                title={content.actions.resetDoses}
                className="text-[#8a9e93] hover:text-[#20382e] p-1 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            <h3 className="text-lg sm:text-xl font-serif font-bold text-[#20382e] tracking-wide">
              {content.actions.doseTrackerTitle}
            </h3>
            
            <p className="text-xs text-[#526f60] font-sans mt-1">
              {isEs 
                ? 'Lleva el control de tus tomas para respetar el intervalo de 6 horas y el máximo de 4 al día.' 
                : 'Keep track of your tablets to ensure a 6-hour interval and maximum of 4 per day.'}
            </p>

            {/* Dose Counter Visualizer */}
            <div className="my-5 p-4 rounded-2xl bg-[#ffffff] border border-[#c5a059]/20 shadow-inner flex items-center justify-between">
              <div>
                <p className="text-xs text-[#698576] font-medium">
                  {content.actions.dosesTakenToday}:
                </p>
                <p className="text-2xl font-serif font-bold text-[#20382e]">
                  {doseCount} <span className="text-sm font-normal text-[#8c6d32]">/ 4 {isEs ? 'máx' : 'max'}</span>
                </p>
              </div>

              {/* Status Badge */}
              <div className="text-right">
                {doseCount === 0 ? (
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-[#f0f5f2] text-[#2c4d3d] font-medium">
                    {isEs ? 'Sin tomas aún' : 'No doses taken yet'}
                  </span>
                ) : isNextDoseReady ? (
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-[#eaf7ee] text-[#1b6b37] font-medium flex items-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{content.actions.readyForNextDose}</span>
                  </span>
                ) : (
                  <div className="text-xs">
                    <span className="text-[#a37c35] font-semibold block">{content.actions.nextDoseAvailableIn}</span>
                    <span className="font-mono text-sm font-bold text-[#20382e]">{timeLeftStr}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={handleLogDose}
            disabled={doseCount >= 4}
            className={`w-full py-3 px-4 rounded-xl flex items-center justify-center space-x-2 text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-md ${
              doseCount >= 4
                ? 'bg-[#d8d3c8] text-[#736e65] cursor-not-allowed'
                : 'bg-[#20382e] hover:bg-[#2e5241] text-[#fbf8f2] hover:shadow-lg cursor-pointer'
            }`}
          >
            <Plus className="w-4 h-4" />
            <span>{content.actions.logDoseBtn}</span>
          </button>
        </div>

        {/* Card 2: Hydration Counter */}
        <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-7 shadow-lg border border-[#c5a059]/35 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4a90e2]/5 rounded-bl-full pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#edf7fc] text-[#236b94] border border-[#a2d4ef]/50">
                <GlassWater className="w-3.5 h-3.5 text-[#2b7ca9]" />
                <span>{isEs ? 'El Mejor Remedio' : 'Key Recovery Secret'}</span>
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-serif font-bold text-[#20382e] tracking-wide">
              {content.actions.waterReminderTitle}
            </h3>

            <p className="text-xs text-[#526f60] font-sans mt-1">
              {content.actions.waterReminderDesc}
            </p>

            {/* Water Visualizer */}
            <div className="my-5 p-4 rounded-2xl bg-[#ffffff] border border-[#a2d4ef]/40 shadow-inner flex items-center justify-between">
              <div>
                <p className="text-xs text-[#698576] font-medium">
                  {content.actions.glassesOfWater}:
                </p>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-serif font-bold text-[#1f5b7c]">
                    {waterGlasses}
                  </span>
                  <span className="text-xs text-[#4b7a95]">
                    {waterGlasses >= 6 
                      ? (isEs ? '¡Meta alcanzada! 🌟' : 'Goal reached! 🌟') 
                      : (isEs ? 'Meta: 6-8 vasos' : 'Goal: 6-8 glasses')}
                  </span>
                </div>
              </div>

              {/* Water droplet visual */}
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((idx) => (
                  <span
                    key={idx}
                    className={`text-lg transition-transform duration-300 ${
                      waterGlasses >= idx ? 'scale-110 opacity-100' : 'opacity-25 grayscale'
                    }`}
                  >
                    💧
                  </span>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={handleAddWater}
            className="w-full py-3 px-4 rounded-xl flex items-center justify-center space-x-2 text-xs uppercase tracking-widest font-semibold bg-gradient-to-r from-[#2a6d91] to-[#3b87b0] hover:from-[#235b7a] hover:to-[#2e749a] text-white shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>{content.actions.waterDrankBtn}</span>
          </button>
        </div>

      </div>

      {/* Quick Action Ribbon: Original Card & Newlywed Toast */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <button
          onClick={onOpenOriginalCard}
          className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-[#fdfbf7] border-2 border-[#c5a059]/60 hover:border-[#b38e46] text-[#20382e] hover:text-[#8c6d32] text-xs uppercase tracking-wider font-semibold shadow-sm hover:shadow-md transition-all cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-[#c5a059]" />
          <span>{content.actions.viewOriginal}</span>
        </button>

        <button
          onClick={triggerNewlywedToast}
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#c5a059] to-[#d8b776] hover:from-[#b38e46] hover:to-[#c5a059] text-[#20382e] text-xs uppercase tracking-wider font-bold shadow-md hover:shadow-lg transition-all cursor-pointer transform hover:scale-105"
        >
          <span>🥂</span>
          <span>{content.actions.celebrateToast}</span>
        </button>
      </div>

      {/* Morning After Tips Section */}
      <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#c5a059]/35 shadow-md">
        <div className="text-center max-w-md mx-auto mb-6">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#a37c35]">
            {isEs ? 'Cuidado Post-Fiesta' : 'Post-Party Care'}
          </span>
          <h3 className="text-xl sm:text-2xl font-serif text-[#20382e] font-semibold mt-1">
            {content.actions.morningTipsHeading}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {content.actions.morningTips.map((tip, i) => (
            <div key={i} className="p-4 rounded-2xl bg-[#ffffff]/80 border border-[#c5a059]/20 hover:border-[#c5a059]/50 transition-colors">
              <h4 className="font-serif font-bold text-sm text-[#20382e] flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#c5a059]" />
                <span>{tip.title}</span>
              </h4>
              <p className="text-xs text-[#526f60] font-sans mt-1.5 leading-relaxed pl-4">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Safe Transportation / Ride Assist */}
      <div className="bg-gradient-to-r from-[#20382e] to-[#2c4e40] rounded-3xl p-6 sm:p-8 text-[#FAF7F2] shadow-xl border border-[#c5a059]/40 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5 text-center md:text-left">
          <div className="inline-flex items-center space-x-1.5 text-xs text-[#d8b776] uppercase tracking-wider font-semibold">
            <Car className="w-4 h-4" />
            <span>{content.actions.emergencyHeading}</span>
          </div>
          <h4 className="text-xl font-serif font-semibold text-[#fdfbf7]">
            {content.actions.needRide}
          </h4>
          <p className="text-xs text-[#a2baa8] max-w-md leading-relaxed font-sans">
            {content.actions.needRideDesc}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://m.uber.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#FAF7F2] text-[#20382e] hover:bg-[#ffffff] text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
          >
            {content.actions.callUber}
          </a>
          <a
            href="https://cabify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#7b4397] hover:bg-[#683681] text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
          >
            {content.actions.callCabify}
          </a>
        </div>
      </div>

    </section>
  );
}
