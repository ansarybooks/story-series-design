import React, { useState } from 'react';
import { CHARACTERS } from '../data/pictureBookData';
import { Users, CheckCircle, Sparkles, BookOpen, Heart } from 'lucide-react';

export const CharacterDossier: React.FC = () => {
  const [selectedCharIndex, setSelectedCharIndex] = useState(0);
  const character = CHARACTERS[selectedCharIndex];

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-[#FAF6EE] border border-[#2F4B8A]/20 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2E9E8F] to-[#2F4B8A] text-white flex items-center justify-center shadow-md">
              <Users className="w-6 h-6 text-amber-200" />
            </div>
            <div>
              <h2 className="font-bold text-lg text-[#2F4B8A]">
                Character Design & Model Sheets (Ages 4–7)
              </h2>
              <p className="text-xs text-[#2F4B8A]/80 font-sans-story">
                Exact character profiles matching the uploaded sheets for Nour, Anas, and Hibr.
              </p>
            </div>
          </div>

          {/* Character selection tabs */}
          <div className="flex items-center gap-2 bg-white/70 p-1.5 rounded-xl border border-[#2F4B8A]/15">
            {CHARACTERS.map((char, idx) => (
              <button
                key={char.name}
                onClick={() => setSelectedCharIndex(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                  selectedCharIndex === idx
                    ? 'bg-[#2F4B8A] text-white shadow-xs'
                    : 'text-[#2F4B8A] hover:bg-[#2F4B8A]/10'
                }`}
              >
                <span>{char.name}</span>
                <span className="font-amiri text-xs opacity-90">({char.arabicName})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Character Sheet Card */}
      <div className="bg-[#FAF6EE] border-2 border-[#2F4B8A]/20 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Character Visual Summary */}
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-white border border-[#2F4B8A]/15 shadow-sm text-center relative overflow-hidden">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#FAF6EE] to-[#E2D5BE] border-2 border-[#2F4B8A]/30 flex items-center justify-center shadow-inner mb-3">
                <span className="font-amiri text-3xl font-bold text-[#2F4B8A]">
                  {character.arabicName}
                </span>
              </div>

              <h3 className="font-bold text-2xl text-[#2F4B8A]">{character.name}</h3>
              <p className="text-xs font-semibold text-[#8F550A] uppercase tracking-wider mt-0.5">
                {character.role} • {character.age}
              </p>

              {character.prop && (
                <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2A93B]/20 text-[#8F550A] text-xs font-bold border border-[#F2A93B]/40">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Prop: {character.prop}</span>
                </div>
              )}
            </div>

            {/* Character Quote / Dialogue in Story */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-[#FAF6EE] to-[#F5EFE1] border border-[#F2A93B]/40 shadow-xs">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#8F550A] mb-1">
                <Heart className="w-3.5 h-3.5" />
                <span>Story Voice (حوار الشخصية)</span>
              </div>
              <p dir="rtl" className="font-amiri text-base font-semibold text-[#2F4B8A] leading-relaxed">
                "{character.quote}"
              </p>
            </div>
          </div>

          {/* Center Column: Visual Anatomy & Features Checklist */}
          <div className="space-y-4">
            <div className="bg-white/80 p-5 rounded-2xl border border-[#2F4B8A]/15 shadow-xs">
              <h4 className="font-bold text-sm text-[#2F4B8A] flex items-center gap-2 mb-3">
                <CheckCircle className="w-4 h-4 text-[#2E9E8F]" />
                <span>Distinctive Visual Traits</span>
              </h4>
              <ul className="space-y-2.5 text-xs text-[#2F4B8A]/90 font-sans-story">
                {character.visualTraits.map((trait, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F2A93B] mt-1.5 shrink-0" />
                    <span>{trait}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/80 p-5 rounded-2xl border border-[#2F4B8A]/15 shadow-xs">
              <h4 className="font-bold text-sm text-[#2F4B8A] flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#2F4B8A]" />
                <span>Character Narrative Lore</span>
              </h4>
              <p className="text-xs text-[#2F4B8A]/85 leading-relaxed font-sans-story">
                {character.lore}
              </p>
            </div>
          </div>

          {/* Right Column: Exact Costume & Palette Breakdown */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-[#2F4B8A] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#F2A93B]" />
              <span>Strict Costume Color Matching</span>
            </h4>

            <div className="space-y-2.5">
              {character.clothing.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/90 p-3 rounded-xl border border-[#2F4B8A]/15 shadow-xs flex items-center justify-between gap-3 text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-7 h-7 rounded-lg border border-black/15 shadow-xs shrink-0"
                      style={{ backgroundColor: item.colorHex }}
                    />
                    <div>
                      <span className="font-bold text-[#2F4B8A] block">{item.item}</span>
                      <span className="text-[11px] text-[#2F4B8A]/70">{item.notes}</span>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <code className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-stone-100 text-[#2F4B8A] font-bold">
                      {item.colorHex}
                    </code>
                    <span className="text-[10px] text-[#2F4B8A]/60 block font-medium">
                      {item.colorName}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Height & Scale Comparison Bar */}
      <div className="bg-[#FAF6EE] border border-[#2F4B8A]/15 rounded-2xl p-5 shadow-xs">
        <h4 className="font-bold text-xs uppercase tracking-wider text-[#2F4B8A]/70 mb-3">
          Relative Height & Scale Ratio
        </h4>
        <div className="flex items-end justify-center gap-12 sm:gap-24 h-40 border-b-2 border-[#D9A66B] pb-2">
          {/* Nour (Tallest child) */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-bold text-[#2F4B8A]">نـور (Nour)</span>
            <div className="w-14 h-32 rounded-t-2xl bg-gradient-to-t from-[#2F4B8A] to-[#2E9E8F] flex items-center justify-center text-white text-xs font-bold shadow-sm">
              100%
            </div>
            <span className="text-[9px] text-[#2F4B8A]/60">Age 6–7</span>
          </div>

          {/* Anas (Shoulder height) */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-bold text-[#8F550A]">أنـس (Anas)</span>
            <div className="w-14 h-24 rounded-t-2xl bg-gradient-to-t from-[#2F4B8A] to-[#F2A93B] flex items-center justify-center text-amber-950 text-xs font-bold shadow-sm">
              ~75%
            </div>
            <span className="text-[9px] text-[#2F4B8A]/60">Age 5 (Shoulder)</span>
          </div>

          {/* Hibr (Small cat) */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-bold text-[#1B263B]">حِـبـر (Hibr)</span>
            <div className="w-10 h-10 rounded-t-xl bg-[#1B263B] flex items-center justify-center text-amber-300 text-xs font-bold shadow-sm">
              🐱
            </div>
            <span className="text-[9px] text-[#2F4B8A]/60">Kitten Scale</span>
          </div>
        </div>
      </div>
    </div>
  );
};
