import React from 'react';
import { BookOpen, Sparkles, Sliders, Palette, Users, Download, Volume2, VolumeX, Eye } from 'lucide-react';
import { playGoldenGlowChime } from '../utils/soundEffects';

interface HeaderProps {
  activeTab: 'canvas' | 'story' | 'pages' | 'importer' | 'proof' | 'characters' | 'palette';
  setActiveTab: (tab: 'canvas' | 'story' | 'pages' | 'importer' | 'proof' | 'characters' | 'palette') => void;
  audioEnabled: boolean;
  setAudioEnabled: (val: boolean) => void;
  onQuickDownload: () => void;
  onOpenFullBookPdf: () => void;
  spreadCount: number;
  currentSpreadIndex: number;
  onSelectSpread: (index: number) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  audioEnabled,
  setAudioEnabled,
  onQuickDownload,
  onOpenFullBookPdf,
  spreadCount,
  currentSpreadIndex,
  onSelectSpread
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF6EE]/95 backdrop-blur-md border-b border-[#2F4B8A]/15 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Series Info */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (audioEnabled) playGoldenGlowChime();
                setActiveTab('canvas');
              }}
              className="flex items-center gap-3 text-left group transition cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F2A93B] to-[#D9A66B] flex items-center justify-center text-white shadow-md shadow-[#F2A93B]/20 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5 text-amber-950" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-amiri text-lg font-bold text-[#2F4B8A] tracking-wide">
                    نُور وَأَنَس
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#F2A93B]/20 text-[#8F550A] font-semibold border border-[#F2A93B]/40">
                    The Golden Light
                  </span>
                </div>
                <p className="text-xs text-[#2F4B8A]/75 font-sans-story hidden sm:block">
                  Children's Picture-Book Spread & Production Studio (Ages 4–7)
                </p>
              </div>
            </button>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setActiveTab('canvas')}
              className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                activeTab === 'canvas'
                  ? 'bg-[#2F4B8A] text-white shadow-sm'
                  : 'text-[#2F4B8A]/80 hover:bg-[#2F4B8A]/10'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>Spread Canvas</span>
            </button>

            <button
              onClick={() => {
                if (audioEnabled) playGoldenGlowChime();
                setActiveTab('story');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                activeTab === 'story'
                  ? 'bg-[#2F4B8A] text-white shadow-sm'
                  : 'text-[#2F4B8A]/80 hover:bg-[#2F4B8A]/10'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden md:inline">RTL Story Mode</span>
              <span className="md:hidden">Story</span>
            </button>

            <button
              onClick={() => setActiveTab('pages')}
              className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                activeTab === 'pages'
                  ? 'bg-[#2F4B8A] text-white shadow-sm'
                  : 'text-[#2F4B8A]/80 hover:bg-[#2F4B8A]/10'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#F2A93B]" />
              <span className="hidden md:inline">الصفحات ({spreadCount})</span>
              <span className="md:hidden">Pages</span>
            </button>

            <button
              onClick={() => setActiveTab('importer')}
              className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                activeTab === 'importer'
                  ? 'bg-[#2F4B8A] text-white shadow-sm'
                  : 'text-[#2F4B8A]/80 hover:bg-[#2F4B8A]/10'
              }`}
            >
              <span className="text-[#F2A93B] font-bold">★</span>
              <span className="hidden lg:inline">استيراد السكريبت</span>
              <span className="lg:hidden">السكريبت</span>
            </button>

            <button
              onClick={() => setActiveTab('proof')}
              className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                activeTab === 'proof'
                  ? 'bg-[#2F4B8A] text-white shadow-sm'
                  : 'text-[#2F4B8A]/80 hover:bg-[#2F4B8A]/10'
              }`}
            >
              <Sliders className="w-4 h-4" />
              <span className="hidden md:inline">Print Proofing</span>
              <span className="md:hidden">Proof</span>
            </button>

            <button
              onClick={() => setActiveTab('characters')}
              className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                activeTab === 'characters'
                  ? 'bg-[#2F4B8A] text-white shadow-sm'
                  : 'text-[#2F4B8A]/80 hover:bg-[#2F4B8A]/10'
              }`}
            >
              <Users className="w-4 h-4" />
              <span className="hidden lg:inline">Characters</span>
            </button>

            <button
              onClick={() => setActiveTab('palette')}
              className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                activeTab === 'palette'
                  ? 'bg-[#2F4B8A] text-white shadow-sm'
                  : 'text-[#2F4B8A]/80 hover:bg-[#2F4B8A]/10'
              }`}
            >
              <Palette className="w-4 h-4" />
              <span className="hidden lg:inline">4-Color Palette</span>
            </button>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {/* Audio Toggle */}
            <button
              onClick={() => setAudioEnabled(!audioEnabled)}
              title={audioEnabled ? 'Mute story ambience sounds' : 'Enable ambient sounds'}
              className="p-2 rounded-xl border border-[#2F4B8A]/20 text-[#2F4B8A] hover:bg-[#2F4B8A]/10 transition cursor-pointer"
            >
              {audioEnabled ? <Volume2 className="w-4 h-4 text-[#2E9E8F]" /> : <VolumeX className="w-4 h-4 text-[#2F4B8A]/50" />}
            </button>

            {/* Full Book Printable Dummy Export */}
            <button
              onClick={onOpenFullBookPdf}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#2F4B8A] hover:bg-[#253d70] text-white font-bold text-xs sm:text-sm shadow-sm transition cursor-pointer"
              title="تصدير ماكيت الكتاب كاملاً مع النصوص المدمجة"
            >
              <BookOpen className="w-4 h-4 text-[#F2A93B]" />
              <span className="hidden sm:inline">الكتاب كاملاً (PDF)</span>
            </button>

            {/* Quick High-Res Download */}
            <button
              onClick={onQuickDownload}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#F2A93B] hover:bg-[#df9425] text-amber-950 font-bold text-xs sm:text-sm shadow-sm transition cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download Art</span>
            </button>
          </div>
        </div>

        {/* Sub-bar for Spread Switcher */}
        <div className="py-2 border-t border-[#2F4B8A]/10 flex items-center justify-between text-xs text-[#2F4B8A]/80">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#2F4B8A]">Illustration Spread:</span>
            {Array.from({ length: spreadCount }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => onSelectSpread(idx)}
                className={`px-2.5 py-0.5 rounded-full font-medium transition cursor-pointer ${
                  currentSpreadIndex === idx
                    ? 'bg-[#2F4B8A] text-white font-bold'
                    : 'bg-[#FAF6EE] border border-[#2F4B8A]/20 text-[#2F4B8A] hover:bg-[#2F4B8A]/10'
                }`}
              >
                Variation {idx + 1}
              </button>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[11px] text-[#2F4B8A]/70">
            <span>RTL Continuous Painting</span>
            <span>•</span>
            <span>4-Color Limited Palette</span>
            <span>•</span>
            <span>Transparent Watercolor</span>
          </div>
        </div>
      </div>
    </header>
  );
};
