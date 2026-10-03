import React from 'react';
import { OverlayConfig } from '../types';
import { Eye, ShieldCheck, AlignLeft, QrCode, Maximize2, Sparkles } from 'lucide-react';

interface OverlayControlsProps {
  overlays: OverlayConfig;
  setOverlays: React.Dispatch<React.SetStateAction<OverlayConfig>>;
  magnifierActive: boolean;
  setMagnifierActive: (val: boolean) => void;
  resetAll: () => void;
}

export const OverlayControls: React.FC<OverlayControlsProps> = ({
  overlays,
  setOverlays,
  magnifierActive,
  setMagnifierActive,
  resetAll
}) => {
  const toggle = (key: keyof OverlayConfig) => {
    setOverlays((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const hasAnyActive = Object.values(overlays).some(Boolean);

  return (
    <div className="bg-[#FAF6EE] border border-[#2F4B8A]/20 rounded-2xl p-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3 pb-3 border-b border-[#2F4B8A]/10">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#2E9E8F]" />
          <h3 className="font-bold text-sm text-[#2F4B8A]">
            Print Safe Zones & Composition Guides
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setMagnifierActive(!magnifierActive)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border transition cursor-pointer ${
              magnifierActive
                ? 'bg-[#F2A93B] text-amber-950 border-[#F2A93B]'
                : 'border-[#2F4B8A]/30 text-[#2F4B8A] hover:bg-[#2F4B8A]/5'
            }`}
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>2.5x Loupe Magnifier: {magnifierActive ? 'ON' : 'OFF'}</span>
          </button>

          {hasAnyActive && (
            <button
              onClick={resetAll}
              className="text-xs text-[#2F4B8A]/70 hover:text-[#2F4B8A] underline cursor-pointer"
            >
              Clear Guides
            </button>
          )}
        </div>
      </div>

      {/* Buttons Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {/* Spine Gutter */}
        <button
          onClick={() => toggle('showSpine')}
          className={`flex items-center gap-1.5 px-2.5 py-2 rounded-xl text-xs font-semibold border transition cursor-pointer text-left ${
            overlays.showSpine
              ? 'bg-[#2F4B8A] text-white border-[#2F4B8A] shadow-xs'
              : 'bg-white/80 border-[#2F4B8A]/20 text-[#2F4B8A] hover:bg-white'
          }`}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#F2A93B]" />
          <span className="truncate">4% Spine Gutter</span>
        </button>

        {/* 94% x 90% Trim Safe */}
        <button
          onClick={() => toggle('showTrim')}
          className={`flex items-center gap-1.5 px-2.5 py-2 rounded-xl text-xs font-semibold border transition cursor-pointer text-left ${
            overlays.showTrim
              ? 'bg-[#2F4B8A] text-white border-[#2F4B8A] shadow-xs'
              : 'bg-white/80 border-[#2F4B8A]/20 text-[#2F4B8A] hover:bg-white'
          }`}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#2E9E8F]" />
          <span className="truncate">94%×90% Trim Safe</span>
        </button>

        {/* Left Title Area */}
        <button
          onClick={() => toggle('showTitleArea')}
          className={`flex items-center gap-1.5 px-2.5 py-2 rounded-xl text-xs font-semibold border transition cursor-pointer text-left ${
            overlays.showTitleArea
              ? 'bg-[#2F4B8A] text-white border-[#2F4B8A] shadow-xs'
              : 'bg-white/80 border-[#2F4B8A]/20 text-[#2F4B8A] hover:bg-white'
          }`}
        >
          <AlignLeft className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Left Title (28%)</span>
        </button>

        {/* Right Barcode Area */}
        <button
          onClick={() => toggle('showBarcodeArea')}
          className={`flex items-center gap-1.5 px-2.5 py-2 rounded-xl text-xs font-semibold border transition cursor-pointer text-left ${
            overlays.showBarcodeArea
              ? 'bg-[#2F4B8A] text-white border-[#2F4B8A] shadow-xs'
              : 'bg-white/80 border-[#2F4B8A]/20 text-[#2F4B8A] hover:bg-white'
          }`}
        >
          <QrCode className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Barcode (15%×12%)</span>
        </button>

        {/* Character Clearance */}
        <button
          onClick={() => toggle('showCharacterMargins')}
          className={`flex items-center gap-1.5 px-2.5 py-2 rounded-xl text-xs font-semibold border transition cursor-pointer text-left ${
            overlays.showCharacterMargins
              ? 'bg-[#2F4B8A] text-white border-[#2F4B8A] shadow-xs'
              : 'bg-white/80 border-[#2F4B8A]/20 text-[#2F4B8A] hover:bg-white'
          }`}
        >
          <Eye className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">15% Character Margins</span>
        </button>

        {/* Top Ray Motif */}
        <button
          onClick={() => toggle('showRayMotifGuide')}
          className={`flex items-center gap-1.5 px-2.5 py-2 rounded-xl text-xs font-semibold border transition cursor-pointer text-left ${
            overlays.showRayMotifGuide
              ? 'bg-[#2F4B8A] text-white border-[#2F4B8A] shadow-xs'
              : 'bg-white/80 border-[#2F4B8A]/20 text-[#2F4B8A] hover:bg-white'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">5% Top Ray Motif</span>
        </button>
      </div>
    </div>
  );
};
