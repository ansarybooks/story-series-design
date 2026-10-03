import React, { useState } from 'react';
import { PALETTE } from '../data/pictureBookData';
import { Palette, Copy, Check, Sparkles, AlertCircle, Droplets } from 'lucide-react';

export const PaletteStudio: React.FC = () => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-[#FAF6EE] border border-[#2F4B8A]/20 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F2A93B] to-[#2E9E8F] text-white flex items-center justify-center shadow-md">
              <Palette className="w-6 h-6 text-amber-950" />
            </div>
            <div>
              <h2 className="font-bold text-lg text-[#2F4B8A]">
                Limited 4-Color Picture-Book Palette
              </h2>
              <p className="text-xs text-[#2F4B8A]/80 font-sans-story">
                The series color hierarchy: transparent watercolor washes, soft bleeds, and ink outlines.
              </p>
            </div>
          </div>

          {/* Quick Swatch Bar */}
          <div className="flex items-center gap-2 p-2 bg-white/80 rounded-xl border border-[#2F4B8A]/15 shadow-xs">
            {PALETTE.map((color) => (
              <button
                key={color.hex}
                onClick={() => copyToClipboard(color.hex)}
                className="w-7 h-7 rounded-lg border border-black/10 transition transform hover:scale-110 cursor-pointer shadow-xs"
                style={{ backgroundColor: color.hex }}
                title={`${color.name} (${color.hex})`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* The 4 Dominant Pigments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {PALETTE.map((color) => (
          <div
            key={color.hex}
            className="bg-[#FAF6EE] border-2 border-[#2F4B8A]/15 rounded-3xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              {/* Large Color Swatch with Watercolor Texture */}
              <div
                className="w-full h-28 rounded-2xl shadow-inner relative overflow-hidden mb-4 border border-black/10 flex items-center justify-center"
                style={{ backgroundColor: color.hex }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/20 pointer-events-none" />
                <span className="font-amiri text-2xl font-bold text-white drop-shadow-md">
                  {color.arabicName}
                </span>

                <button
                  onClick={() => copyToClipboard(color.hex)}
                  className="absolute bottom-2 right-2 px-2 py-1 rounded-md bg-white/90 hover:bg-white text-stone-900 text-[10px] font-mono font-bold flex items-center gap-1 shadow-xs cursor-pointer"
                >
                  {copiedHex === color.hex ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>{color.hex}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Title & Specs */}
              <div className="space-y-1 mb-3">
                <h3 className="font-bold text-base text-[#2F4B8A]">{color.name}</h3>
                <div className="flex items-center gap-2 text-[10px] text-[#2F4B8A]/70 font-mono">
                  <span>{color.rgb}</span>
                  <span>•</span>
                  <span>{color.cmyk}</span>
                </div>
              </div>

              {/* Series Symbolism */}
              <div className="p-3 bg-white/80 rounded-xl border border-[#2F4B8A]/10 mb-3 text-xs">
                <span className="font-bold text-[#8F550A] block text-[10px] uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Series Role
                </span>
                <p className="text-[#2F4B8A]/90 text-[11px] leading-relaxed font-sans-story">
                  {color.symbolism}
                </p>
              </div>

              {/* Applications */}
              <div className="space-y-1 text-xs">
                <span className="font-semibold text-[#2F4B8A] text-[11px] block">
                  Mandatory Usage:
                </span>
                <ul className="space-y-1 text-[11px] text-[#2F4B8A]/80">
                  {color.usage.map((u, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#2F4B8A]/50" />
                      <span>{u}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Watercolor Wash Tints */}
            <div className="mt-4 pt-3 border-t border-[#2F4B8A]/10">
              <span className="text-[10px] text-[#2F4B8A]/60 font-semibold block mb-1.5 flex items-center gap-1">
                <Droplets className="w-3 h-3 text-[#2E9E8F]" />
                Wash Dilutions (100% → 25% tint):
              </span>
              <div className="grid grid-cols-4 gap-1.5">
                {color.tints.map((tint, i) => (
                  <button
                    key={i}
                    onClick={() => copyToClipboard(tint)}
                    className="h-6 rounded-md border border-black/10 transition hover:scale-105 cursor-pointer"
                    style={{ backgroundColor: tint }}
                    title={`Tint ${i + 1}: ${tint}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Strict Color Rule Banner (No Red, Pink, Orange, Purple) */}
      <div className="bg-amber-50/80 border-2 border-amber-300 rounded-2xl p-5 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-950 font-sans-story">
            <span className="font-bold text-sm block mb-0.5">
              Strict 4-Color Discipline & Exclusion Rule
            </span>
            <span>
              Every object, including the books on shelves, furniture, clothing, and backgrounds,
              must use <strong>only the four palette colors and their soft tints</strong>.
              Strictly prohibited across the entire series: <em>no red, orange, purple, or pink</em>.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 bg-amber-100/80 px-3 py-1.5 rounded-xl border border-amber-200 text-xs font-bold text-amber-900 shrink-0">
          <span>Rule: 100% Enforced</span>
        </div>
      </div>
    </div>
  );
};
