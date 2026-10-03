import React from 'react';
import { StoryTextConfig } from '../types';
import { STORY_PRESETS } from '../data/pictureBookData';
import { Edit3, Type, RotateCcw, Check, Eye } from 'lucide-react';

interface StoryEditorProps {
  storyConfig: StoryTextConfig;
  setStoryConfig: React.Dispatch<React.SetStateAction<StoryTextConfig>>;
}

export const StoryEditor: React.FC<StoryEditorProps> = ({ storyConfig, setStoryConfig }) => {
  const handleResetToPreset = () => {
    setStoryConfig((prev) => ({
      ...prev,
      titleArabic: STORY_PRESETS.ar.title,
      titleEnglish: STORY_PRESETS.en.title,
      storyArabic: STORY_PRESETS.ar.text,
      storyEnglish: STORY_PRESETS.en.text
    }));
  };

  return (
    <div className="bg-[#FAF6EE] border border-[#2F4B8A]/20 rounded-2xl p-5 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#2F4B8A]/10">
        <div className="flex items-center gap-2">
          <Edit3 className="w-5 h-5 text-[#2E9E8F]" />
          <div>
            <h3 className="font-bold text-sm text-[#2F4B8A]">
              Editorial Typography & Story Overlay Studio
            </h3>
            <p className="text-[11px] text-[#2F4B8A]/70 font-sans-story">
              Test typography inside the dedicated left title (28%) & right narrative negative spaces.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Overlay Toggle */}
          <button
            onClick={() =>
              setStoryConfig((prev) => ({ ...prev, showOnSpread: !prev.showOnSpread }))
            }
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border ${
              storyConfig.showOnSpread
                ? 'bg-[#2E9E8F] text-white border-[#2E9E8F] shadow-xs'
                : 'bg-white text-[#2F4B8A] border-[#2F4B8A]/30 hover:bg-[#FAF6EE]'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Show Text on Spread: {storyConfig.showOnSpread ? 'ON' : 'OFF'}</span>
          </button>

          <button
            onClick={handleResetToPreset}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs text-[#2F4B8A]/70 hover:text-[#2F4B8A] hover:bg-white/60 transition cursor-pointer"
            title="Reset to default story preset"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Editor Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        {/* Left Zone: Title Inputs */}
        <div className="bg-white/80 p-4 rounded-xl border border-[#2F4B8A]/15 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-bold text-[#2F4B8A] flex items-center gap-1.5">
              <Type className="w-4 h-4 text-[#F2A93B]" />
              Left Zone Title (Top 28% Safe Area)
            </span>
            <span className="text-[10px] text-[#2F4B8A]/50">Heading Reserve</span>
          </div>

          <div>
            <label className="text-[11px] font-semibold text-[#2F4B8A] block mb-1">
              Arabic Title (العنوان بالعربية)
            </label>
            <input
              type="text"
              dir="rtl"
              value={storyConfig.titleArabic}
              onChange={(e) =>
                setStoryConfig((prev) => ({ ...prev, titleArabic: e.target.value }))
              }
              className="w-full px-3 py-2 rounded-lg border border-[#2F4B8A]/20 bg-[#FAF6EE] font-amiri font-bold text-base text-[#2F4B8A] focus:outline-none focus:ring-2 focus:ring-[#F2A93B]"
            />
          </div>

          <div>
            <label className="text-[11px] font-semibold text-[#2F4B8A] block mb-1">
              English Subtitle / Title
            </label>
            <input
              type="text"
              value={storyConfig.titleEnglish}
              onChange={(e) =>
                setStoryConfig((prev) => ({ ...prev, titleEnglish: e.target.value }))
              }
              className="w-full px-3 py-2 rounded-lg border border-[#2F4B8A]/20 bg-[#FAF6EE] font-fredoka text-xs text-[#2F4B8A] focus:outline-none focus:ring-2 focus:ring-[#F2A93B]"
            />
          </div>
        </div>

        {/* Right Zone: Story Narrative Inputs */}
        <div className="bg-white/80 p-4 rounded-xl border border-[#2F4B8A]/15 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-bold text-[#2F4B8A] flex items-center gap-1.5">
              <Type className="w-4 h-4 text-[#2E9E8F]" />
              Right Zone Narration (Read First)
            </span>
            <span className="text-[10px] text-[#2F4B8A]/50">Paragraph Reserve</span>
          </div>

          <div>
            <label className="text-[11px] font-semibold text-[#2F4B8A] block mb-1">
              Arabic Narrative (نص القصة)
            </label>
            <textarea
              dir="rtl"
              rows={3}
              value={storyConfig.storyArabic}
              onChange={(e) =>
                setStoryConfig((prev) => ({ ...prev, storyArabic: e.target.value }))
              }
              className="w-full px-3 py-2 rounded-lg border border-[#2F4B8A]/20 bg-[#FAF6EE] font-amiri text-sm leading-relaxed text-[#2F4B8A] focus:outline-none focus:ring-2 focus:ring-[#F2A93B] resize-none"
            />
          </div>

          <div>
            <label className="text-[11px] font-semibold text-[#2F4B8A] block mb-1">
              English Translation
            </label>
            <textarea
              rows={2}
              value={storyConfig.storyEnglish}
              onChange={(e) =>
                setStoryConfig((prev) => ({ ...prev, storyEnglish: e.target.value }))
              }
              className="w-full px-3 py-1.5 rounded-lg border border-[#2F4B8A]/20 bg-[#FAF6EE] font-sans-story text-xs text-[#2F4B8A] focus:outline-none focus:ring-2 focus:ring-[#F2A93B] resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
