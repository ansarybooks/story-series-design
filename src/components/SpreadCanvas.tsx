import React, { useState, useRef, MouseEvent } from 'react';
import { SpreadItem, OverlayConfig, StoryTextConfig } from '../types';
import { Maximize2, Minimize2, ZoomIn, Info, CheckCircle2 } from 'lucide-react';

interface SpreadCanvasProps {
  spread: SpreadItem;
  overlays: OverlayConfig;
  magnifierActive: boolean;
  storyConfig: StoryTextConfig;
}

export const SpreadCanvas: React.FC<SpreadCanvasProps> = ({
  spread,
  overlays,
  magnifierActive,
  storyConfig
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Loupe state
  const [loupePos, setLoupePos] = useState<{ x: number; y: number; show: boolean }>({
    x: 0,
    y: 0,
    show: false
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!magnifierActive || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
      setLoupePos({ x, y, show: true });
    } else {
      setLoupePos((prev) => ({ ...prev, show: false }));
    }
  };

  const handleMouseLeave = () => {
    setLoupePos((prev) => ({ ...prev, show: false }));
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  return (
    <div className="space-y-4">
      {/* Canvas Frame Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-[#2F4B8A]/20 bg-[#FAF6EE] shadow-xl transition-all duration-300 ${
          isFullscreen ? 'fixed inset-0 z-50 rounded-none border-none p-4 flex items-center justify-center bg-black/90' : ''
        }`}
      >
        {/* The Continuous Painting Image */}
        <div className="relative w-full aspect-[16/9] select-none">
          <img
            src={spread.imagePath}
            alt={spread.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover rounded-xl transition-transform duration-200"
            style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
          />

          {/* OVERLAY GUIDES */}

          {/* 1. 4% Central Spine Strip */}
          {overlays.showSpine && (
            <div
              className="absolute top-0 bottom-0 pointer-events-none z-20 flex flex-col items-center justify-between border-x border-dashed border-[#F2A93B]/90 bg-[#F2A93B]/15 backdrop-blur-[0.5px]"
              style={{ left: '48%', width: '4%' }}
            >
              <div className="bg-[#2F4B8A] text-[#FAF6EE] text-[9px] font-bold px-1.5 py-0.5 rounded-b shadow-sm whitespace-nowrap">
                Spine Gutter (4%)
              </div>
              <div className="h-full flex items-center justify-center">
                <span className="text-[10px] text-[#2F4B8A] font-bold tracking-widest [writing-mode:vertical-rl] rotate-180 opacity-80">
                  FOLD LINE — NO FACES
                </span>
              </div>
              <div className="bg-[#2F4B8A] text-[#FAF6EE] text-[9px] font-bold px-1.5 py-0.5 rounded-t shadow-sm">
                4%
              </div>
            </div>
          )}

          {/* 2. 94% x 90% Safe Trim Zone */}
          {overlays.showTrim && (
            <div
              className="absolute pointer-events-none z-10 border-2 border-emerald-600/80 rounded-sm"
              style={{
                top: '5%',
                bottom: '5%',
                left: '3%',
                right: '3%'
              }}
            >
              <span className="absolute top-1 left-2 bg-emerald-800 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                Safe Live Area (94% W × 90% H)
              </span>
              <span className="absolute bottom-1 right-2 bg-emerald-800 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                Outer 3-5% Bleed Trim Line
              </span>
            </div>
          )}

          {/* 3. Left Zone: Title Safe Area (Top 28% of Left Half) */}
          {overlays.showTitleArea && (
            <div
              className="absolute pointer-events-none z-10 border-2 border-amber-600/70 bg-amber-500/10 rounded-lg p-2"
              style={{
                top: '5%',
                height: '28%',
                left: '4%',
                width: '43%'
              }}
            >
              <div className="flex items-center justify-between text-amber-950 font-bold text-[10px] bg-amber-200/90 px-2 py-0.5 rounded w-max">
                Left Zone Title Reserve (Top 28% Cream Paper)
              </div>
            </div>
          )}

          {/* 4. Right Zone: Barcode Reserve (Bottom-Right 15%W x 12%H) */}
          {overlays.showBarcodeArea && (
            <div
              className="absolute pointer-events-none z-10 border-2 border-indigo-700/70 bg-indigo-500/10 rounded-lg"
              style={{
                bottom: '4%',
                right: '4%',
                width: '15%',
                height: '12%'
              }}
            >
              <div className="text-[9px] text-[#2F4B8A] font-bold bg-[#FAF6EE]/95 border border-[#2F4B8A]/30 px-1 py-0.5 rounded m-1 text-center">
                Barcode Space (15%×12%)
              </div>
            </div>
          )}

          {/* 5. 15% Character Margins Indicator */}
          {overlays.showCharacterMargins && (
            <div
              className="absolute pointer-events-none z-10 border-2 border-dashed border-[#2F4B8A]/50 rounded-lg"
              style={{
                top: '30%',
                bottom: '8%',
                left: '15%',
                width: '33%'
              }}
            >
              <div className="absolute top-1 left-2 text-[9px] font-bold text-[#2F4B8A] bg-white/90 px-1.5 py-0.5 rounded">
                Characters Centered Safe Zone (≥15% Margin)
              </div>
            </div>
          )}

          {/* 6. Top Ray Motif Guide on Right Half */}
          {overlays.showRayMotifGuide && (
            <div
              className="absolute pointer-events-none z-10 border-t-2 border-dashed border-[#F2A93B]"
              style={{
                top: '5%',
                right: '5%',
                width: '42%'
              }}
            >
              <span className="text-[9px] font-bold text-[#8F550A] bg-[#F2A93B]/30 px-1 rounded absolute -top-4 right-2">
                5% Inset Amber-Gold Ray Motif
              </span>
            </div>
          )}

          {/* 7. Story Text Overlay (When Enabled) */}
          {storyConfig.showOnSpread && (
            <div className="absolute inset-0 pointer-events-none z-30">
              {/* Left Zone Title */}
              <div
                className="absolute text-center flex flex-col items-center justify-center p-3"
                style={{ top: '6%', height: '26%', left: '5%', width: '41%' }}
              >
                {(storyConfig.activeLanguage === 'ar' || storyConfig.activeLanguage === 'bilingual') && (
                  <h1 className="font-amiri font-bold text-xl sm:text-2xl lg:text-3xl text-[#2F4B8A] drop-shadow-xs">
                    {storyConfig.titleArabic}
                  </h1>
                )}
                {(storyConfig.activeLanguage === 'en' || storyConfig.activeLanguage === 'bilingual') && (
                  <p className="font-fredoka text-xs sm:text-sm lg:text-base font-semibold text-[#8F550A] tracking-wider mt-0.5">
                    {storyConfig.titleEnglish}
                  </p>
                )}
              </div>

              {/* Right Zone Narrative Text */}
              <div
                className="absolute flex flex-col justify-start p-4 sm:p-6"
                style={{
                  top: '12%',
                  right: '6%',
                  width: '40%',
                  height: '70%'
                }}
              >
                {(storyConfig.activeLanguage === 'ar' || storyConfig.activeLanguage === 'bilingual') && (
                  <div
                    dir="rtl"
                    className="font-amiri text-[#2F4B8A] leading-relaxed text-right font-medium text-xs sm:text-sm lg:text-base mb-3"
                    style={{ whiteSpace: 'pre-line' }}
                  >
                    {storyConfig.storyArabic}
                  </div>
                )}

                {(storyConfig.activeLanguage === 'en' || storyConfig.activeLanguage === 'bilingual') && (
                  <div
                    dir="ltr"
                    className="font-sans-story text-[#2F4B8A]/90 leading-snug text-left text-[11px] sm:text-xs lg:text-sm"
                    style={{ whiteSpace: 'pre-line' }}
                  >
                    {storyConfig.storyEnglish}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 8. Interactive Loupe Magnifier */}
          {magnifierActive && loupePos.show && (
            <div
              className="absolute pointer-events-none z-50 w-44 h-44 rounded-full border-4 border-[#F2A93B] shadow-2xl overflow-hidden bg-[#FAF6EE]"
              style={{
                left: `${loupePos.x - 88}px`,
                top: `${loupePos.y - 88}px`,
                boxShadow: '0 10px 35px -5px rgba(47, 75, 138, 0.4)'
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${spread.imagePath})`,
                  backgroundPosition: `${-(loupePos.x * 2.5 - 88)}px ${-(loupePos.y * 2.5 - 88)}px`,
                  backgroundSize: `${containerRef.current ? containerRef.current.clientWidth * 2.5 : 2400}px auto`,
                  backgroundRepeat: 'no-repeat'
                }}
              />
              <div className="absolute inset-0 rounded-full border border-white/50 pointer-events-none" />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#2F4B8A]/90 text-white text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                2.5× Ink & Wash Grain
              </div>
            </div>
          )}
        </div>

        {/* Floating Quick Action Overlay inside canvas */}
        <div className="absolute bottom-3 left-3 z-30 flex items-center gap-1.5 bg-[#FAF6EE]/90 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-[#2F4B8A]/20 shadow-md">
          <button
            onClick={() => setZoomLevel((z) => Math.max(1, z - 0.25))}
            disabled={zoomLevel <= 1}
            className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-[#2F4B8A]/10 text-[#2F4B8A] disabled:opacity-30 cursor-pointer"
            title="Zoom out"
          >
            -
          </button>
          <span className="text-xs font-bold text-[#2F4B8A] px-1">
            {Math.round(zoomLevel * 100)}%
          </span>
          <button
            onClick={() => setZoomLevel((z) => Math.min(2, z + 0.25))}
            disabled={zoomLevel >= 2}
            className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-[#2F4B8A]/10 text-[#2F4B8A] disabled:opacity-30 cursor-pointer"
            title="Zoom in"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <div className="h-4 w-px bg-[#2F4B8A]/20 mx-1" />
          <button
            onClick={toggleFullscreen}
            className="p-1 rounded-lg hover:bg-[#2F4B8A]/10 text-[#2F4B8A] cursor-pointer"
            title="Toggle fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>

        {/* RTL Flow Indicator Tag */}
        <div className="absolute top-3 right-3 z-30 bg-[#2F4B8A] text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-md flex items-center gap-1.5">
          <span>قراءة من اليمين إلى اليسار (RTL Spread)</span>
          <span className="w-2 h-2 rounded-full bg-[#F2A93B] animate-pulse" />
        </div>
      </div>

      {/* Spread Information & Zones Key */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Zone Spec Card */}
        <div className="bg-[#FAF6EE] border border-[#2F4B8A]/15 rounded-2xl p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#F2A93B]/20 text-[#8F550A] border border-[#F2A93B]/30">
              Left Zone (Main Climax Illustration)
            </span>
            <span className="text-xs text-[#2F4B8A]/60 font-medium">Page 2 of Spread</span>
          </div>
          <p className="text-xs text-[#2F4B8A]/90 leading-relaxed font-sans-story">
            {spread.sceneDetails.leftZone}
          </p>
          <div className="flex items-center gap-2 pt-1 text-[11px] text-[#2E9E8F] font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            <span>Characters centered with ≥15% safe margin from outer edge & spine</span>
          </div>
        </div>

        {/* Right Zone Spec Card */}
        <div className="bg-[#FAF6EE] border border-[#2F4B8A]/15 rounded-2xl p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#2F4B8A]/10 text-[#2F4B8A] border border-[#2F4B8A]/20">
              Right Zone (Read First • Story Text Area)
            </span>
            <span className="text-xs text-[#2F4B8A]/60 font-medium">Page 1 of Spread</span>
          </div>
          <p className="text-xs text-[#2F4B8A]/90 leading-relaxed font-sans-story">
            {spread.sceneDetails.rightZone}
          </p>
          <div className="flex items-center gap-2 pt-1 text-[11px] text-[#2E9E8F] font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            <span>Top golden ray motif + bottom-right barcode space preserved clean</span>
          </div>
        </div>
      </div>
    </div>
  );
};
