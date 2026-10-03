import React, { useState } from 'react';
import { SpreadItem, StoryTextConfig } from '../types';
import { BookOpen, Sparkles, ChevronRight, ChevronLeft, Volume2, ArrowRight } from 'lucide-react';
import { playPageTurnSound, playGoldenGlowChime } from '../utils/soundEffects';

interface StoryReaderViewProps {
  spread: SpreadItem;
  storyConfig: StoryTextConfig;
  setStoryConfig: React.Dispatch<React.SetStateAction<StoryTextConfig>>;
  audioEnabled: boolean;
}

export const StoryReaderView: React.FC<StoryReaderViewProps> = ({
  spread,
  storyConfig,
  setStoryConfig,
  audioEnabled
}) => {
  const [activeStep, setActiveStep] = useState<'right-page' | 'left-page' | 'both'>('both');

  const goTo = (step: 'right-page' | 'left-page' | 'both') => {
    if (audioEnabled) {
      if (step === 'left-page') {
        playGoldenGlowChime();
      } else {
        playPageTurnSound();
      }
    }
    setActiveStep(step);
  };

  return (
    <div className="space-y-6">
      {/* Top Controller Bar */}
      <div className="bg-[#FAF6EE] border border-[#2F4B8A]/15 rounded-2xl p-4 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#2F4B8A]" />
            <h2 className="font-bold text-base text-[#2F4B8A]">
              RTL Picture-Book Reading Flow Simulator
            </h2>
          </div>
          <p className="text-xs text-[#2F4B8A]/75 mt-0.5 font-sans-story">
            Experience the spread as young readers (ages 4–7) do in right-to-left orientation.
          </p>
        </div>

        {/* View Switcher: Right Page (First) -> Left Page (Climax) -> Full Spread */}
        <div className="flex items-center gap-1.5 bg-white/80 p-1 rounded-xl border border-[#2F4B8A]/20">
          <button
            onClick={() => goTo('right-page')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1 ${
              activeStep === 'right-page'
                ? 'bg-[#2F4B8A] text-white shadow-xs'
                : 'text-[#2F4B8A] hover:bg-[#2F4B8A]/10'
            }`}
          >
            <span>1. صفحة اليمين (البداية)</span>
          </button>

          <button
            onClick={() => goTo('left-page')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1 ${
              activeStep === 'left-page'
                ? 'bg-[#F2A93B] text-amber-950 shadow-xs'
                : 'text-[#2F4B8A] hover:bg-[#2F4B8A]/10'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>2. صفحة اليسار (المفاجأة)</span>
          </button>

          <button
            onClick={() => goTo('both')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              activeStep === 'both'
                ? 'bg-[#2E9E8F] text-white shadow-xs'
                : 'text-[#2F4B8A] hover:bg-[#2F4B8A]/10'
            }`}
          >
            <span>كلا الصفحتين (Full Spread)</span>
          </button>
        </div>

        {/* Language selector */}
        <div className="flex items-center gap-1 bg-white/80 p-1 rounded-xl border border-[#2F4B8A]/20 text-xs">
          <button
            onClick={() => setStoryConfig((prev) => ({ ...prev, activeLanguage: 'ar' }))}
            className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
              storyConfig.activeLanguage === 'ar' ? 'bg-[#2F4B8A] text-white' : 'text-[#2F4B8A]'
            }`}
          >
            العربية
          </button>
          <button
            onClick={() => setStoryConfig((prev) => ({ ...prev, activeLanguage: 'en' }))}
            className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
              storyConfig.activeLanguage === 'en' ? 'bg-[#2F4B8A] text-white' : 'text-[#2F4B8A]'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setStoryConfig((prev) => ({ ...prev, activeLanguage: 'bilingual' }))}
            className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
              storyConfig.activeLanguage === 'bilingual' ? 'bg-[#2F4B8A] text-white' : 'text-[#2F4B8A]'
            }`}
          >
            Bilingual
          </button>
        </div>
      </div>

      {/* Book Spread Presentation Display */}
      <div className="bg-[#FAF6EE] border-4 border-[#2F4B8A]/20 rounded-3xl p-4 sm:p-8 shadow-2xl relative">
        {/* Central Book Spine Visual Crease */}
        <div className="hidden sm:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-transparent via-[#2F4B8A]/10 to-transparent pointer-events-none z-20" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {/* LEFT PAGE (Read Second in RTL): Climax - Box with Round Hole & Amber Glow */}
          <div
            className={`transition-all duration-300 rounded-2xl p-4 flex flex-col justify-between border border-[#2F4B8A]/10 bg-white/60 relative overflow-hidden ${
              activeStep === 'right-page' ? 'opacity-30 blur-[1px]' : 'opacity-100'
            }`}
          >
            {/* Title Area (Top 28% reserved on plain cream paper) */}
            <div className="text-center py-4 border-b border-[#F2A93B]/30 mb-4 bg-[#FAF6EE]/80 rounded-xl">
              {(storyConfig.activeLanguage === 'ar' || storyConfig.activeLanguage === 'bilingual') && (
                <h2 className="font-amiri font-bold text-2xl sm:text-3xl text-[#2F4B8A] drop-shadow-xs">
                  {storyConfig.titleArabic}
                </h2>
              )}
              {(storyConfig.activeLanguage === 'en' || storyConfig.activeLanguage === 'bilingual') && (
                <p className="font-fredoka text-sm sm:text-base font-semibold text-[#8F550A] mt-1">
                  {storyConfig.titleEnglish}
                </p>
              )}
              <span className="inline-block mt-2 text-[10px] uppercase tracking-widest text-[#F2A93B] font-bold">
                ★ فصل النور والعجائب ★
              </span>
            </div>

            {/* Illustration Crop for Left Half Focus */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-inner border border-[#2F4B8A]/15 bg-[#FAF6EE]">
              <img
                src={spread.imagePath}
                alt="Left Page Illustration"
                referrerPolicy="no-referrer"
                className="w-[200%] max-w-none h-full object-cover object-left"
              />
              <div className="absolute bottom-2 left-2 bg-[#FAF6EE]/90 px-2 py-0.5 rounded text-[10px] font-bold text-[#2F4B8A]">
                نور وأنس وحِبر عند الصندوق الذهبي
              </div>
            </div>

            {/* Bottom Caption & Pagination */}
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#2F4B8A]/10 text-xs text-[#2F4B8A]/70">
              <span className="font-bold text-[#F2A93B]">صفحة ۲ (الصفحة الرئيسية)</span>
              <button
                onClick={() => goTo('right-page')}
                className="flex items-center gap-1 text-[#2F4B8A] hover:underline font-semibold cursor-pointer"
              >
                <span>العودة للبداية</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT PAGE (Read First in RTL): Narrative Text & Vignette */}
          <div
            className={`transition-all duration-300 rounded-2xl p-4 flex flex-col justify-between border border-[#2F4B8A]/10 bg-white/60 relative overflow-hidden order-first md:order-last ${
              activeStep === 'left-page' ? 'opacity-30 blur-[1px]' : 'opacity-100'
            }`}
          >
            {/* Top Amber Light Ray Motif Visual */}
            <div className="w-full flex items-center justify-center gap-2 py-1 mb-2">
              <div className="h-px bg-gradient-to-r from-transparent via-[#F2A93B] to-transparent w-full" />
              <Sparkles className="w-4 h-4 text-[#F2A93B] shrink-0" />
              <div className="h-px bg-gradient-to-r from-transparent via-[#F2A93B] to-transparent w-full" />
            </div>

            {/* Story Text Box (Narrative Space) */}
            <div className="p-4 sm:p-6 bg-[#FAF6EE]/90 rounded-2xl border border-[#2F4B8A]/10 shadow-xs my-auto">
              {(storyConfig.activeLanguage === 'ar' || storyConfig.activeLanguage === 'bilingual') && (
                <div
                  dir="rtl"
                  className="font-amiri text-[#2F4B8A] leading-relaxed text-right font-medium text-base sm:text-lg mb-4"
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {storyConfig.storyArabic}
                </div>
              )}

              {(storyConfig.activeLanguage === 'en' || storyConfig.activeLanguage === 'bilingual') && (
                <div
                  dir="ltr"
                  className="font-sans-story text-[#2F4B8A]/85 leading-relaxed text-left text-xs sm:text-sm pt-2 border-t border-[#2F4B8A]/10"
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {storyConfig.storyEnglish}
                </div>
              )}
            </div>

            {/* Soft Vignette Area of Hibr Kitten */}
            <div className="mt-4 flex items-center justify-between">
              {/* Lower-left Hibr Vignette Crop */}
              <div className="relative w-28 h-24 rounded-xl overflow-hidden border border-[#2F4B8A]/15 bg-[#FAF6EE] shadow-xs">
                <img
                  src={spread.imagePath}
                  alt="Hibr Vignette"
                  referrerPolicy="no-referrer"
                  className="w-[200%] max-w-none h-full object-cover object-right-bottom scale-125"
                />
                <span className="absolute bottom-1 left-1 bg-black/60 text-white text-[8px] px-1 rounded">
                  حِـبْر
                </span>
              </div>

              {/* Barcode Safe Space (Bottom-right 15%x12% Simulation) */}
              <div className="w-24 h-16 rounded border border-dashed border-[#2F4B8A]/30 bg-[#FAF6EE] flex flex-col items-center justify-center p-1 text-center">
                <span className="text-[8px] font-bold text-[#2F4B8A]/50">ISBN 978-0-12345</span>
                <div className="w-16 h-4 bg-repeat-x opacity-40 mt-1" style={{ backgroundImage: 'linear-gradient(to right, #2F4B8A 2px, transparent 2px, transparent 4px)' }} />
                <span className="text-[7px] text-[#2F4B8A]/40">Clean Barcode Reserve</span>
              </div>
            </div>

            {/* Bottom Pagination & Next Button */}
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#2F4B8A]/10 text-xs text-[#2F4B8A]/70">
              <button
                onClick={() => goTo('left-page')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F2A93B] hover:bg-[#df9425] text-amber-950 font-bold shadow-xs cursor-pointer"
              >
                <span>اقلب الصفحة للمفاجأة</span>
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-bold text-[#2F4B8A]">صفحة ١ (تُقرأ أولاً)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
