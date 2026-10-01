'use client';

import React from 'react';
import { X, Download, Share2 } from 'lucide-react';
import Image from 'next/image';

interface OriginalCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'es' | 'en';
}

export function OriginalCardModal({ isOpen, onClose, language }: OriginalCardModalProps) {
  if (!isOpen) return null;

  const isEs = language === 'es';
  const imageSrc = isEs ? '/esp.jpg' : '/eng.jpg';
  const downloadName = isEs ? 'Kit-Resaca-Casamiento-A&M.jpg' : 'Wedding-Recovery-Kit-A&M.jpg';

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: isEs ? 'Kit para la Resaca - Casamiento A & M' : 'Wedding Recovery Kit - A & M',
          text: isEs ? '¡Mirá la tarjeta del kit de recuperación de la boda de A & M! 🥂' : 'Check out the recovery kit card from A & M wedding! 🥂',
          url: window.location.href,
        });
      } catch {
        // Share cancelled or unavailable
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(isEs ? '¡Enlace copiado al portapapeles!' : 'Link copied to clipboard!');
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#162720]/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-xl w-full max-h-[92vh] flex flex-col bg-[#faf7f2] rounded-3xl overflow-hidden shadow-2xl border border-[#c5a059]/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-[#f4ede0] border-b border-[#c5a059]/30">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c5a059]" />
            <h3 className="font-serif font-bold text-sm sm:text-base text-[#20382e] tracking-wide">
              {isEs ? 'Tarjeta Impresa Original' : 'Original Printed Card'}
            </h3>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleShare}
              className="p-1.5 text-[#526f60] hover:text-[#20382e] hover:bg-[#e6dcce] rounded-full transition-colors cursor-pointer"
              title={isEs ? 'Compartir' : 'Share'}
            >
              <Share2 className="w-4 h-4" />
            </button>
            <a
              href={imageSrc}
              download={downloadName}
              className="p-1.5 text-[#526f60] hover:text-[#20382e] hover:bg-[#e6dcce] rounded-full transition-colors cursor-pointer"
              title={isEs ? 'Descargar imagen' : 'Download image'}
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-[#526f60] hover:text-[#20382e] hover:bg-[#e6dcce] rounded-full transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Container with Scroll/Zoom Support */}
        <div className="overflow-y-auto p-4 sm:p-6 flex items-center justify-center bg-[#faf7f2]">
          <div className="relative w-full max-w-md aspect-[848/1280] shadow-xl rounded-2xl overflow-hidden border border-[#c5a059]/40">
            <Image
              src={imageSrc}
              alt={isEs ? 'Tarjeta de casamiento kit resaca español' : 'Wedding recovery kit card english'}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-[#f7f2e7] border-t border-[#c5a059]/20 text-center text-xs text-[#526f60] flex items-center justify-center space-x-4">
          <a
            href={imageSrc}
            download={downloadName}
            className="inline-flex items-center space-x-1.5 text-[#8c6d32] hover:text-[#20382e] font-semibold text-xs transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isEs ? 'Descargar en alta resolución' : 'Download high resolution'}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
