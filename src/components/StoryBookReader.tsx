import React, { useState } from 'react';
import { IBN_HAYTHAM_STORY_SCRIPT, SPREADS } from '../data/pictureBookData';
import { ChevronRight, ChevronLeft, Sparkles, BookOpen, HelpCircle, Lightbulb, Users, Heart, Bookmark } from 'lucide-react';
import { playPageTurnSound, playGoldenGlowChime } from '../utils/soundEffects';

interface StoryBookReaderProps {
  audioEnabled: boolean;
}

export const StoryBookReader: React.FC<StoryBookReaderProps> = ({ audioEnabled }) => {
  // 0 = Cover, 1 = Page 1, 2 = Pages 2-3, 3 = Pages 4-5, 4 = Pages 6-7, 5 = Pages 8-9, 6 = Pages 10-11, 7 = Pages 12-13, 8 = Pages 14-15 (Corners), 9 = Page 16 (Parents)
  const [currentStep, setCurrentStep] = useState<number>(0);

  const stepsInfo = [
    {
      step: 0,
      title: 'الغلاف الممتد (Cover Spread)',
      pagesLabel: 'الغلاف الأمامي والخلفي',
      type: 'spread',
      image: SPREADS[0]?.imagePath,
      textAr: 'مكتبة النور الصغيرة — حكايات الاكتشاف (٤–٧ سنوات)\nابن الهيثم والغرفة المظلمة',
      textEn: 'The Little Light Library: Tales of Discovery\nIbn al-Haytham and the Dark Room'
    },
    {
      step: 1,
      title: 'صفحة ١: العثور على الصندوق ذي الثقب',
      pagesLabel: 'صفحة ١ (رأسية)',
      type: 'portrait',
      image: SPREADS[1]?.imagePath,
      textAr: IBN_HAYTHAM_STORY_SCRIPT.pages[0].textArabic,
      textEn: IBN_HAYTHAM_STORY_SCRIPT.pages[0].textEnglish
    },
    {
      step: 2,
      title: 'صفحات ٢–٣: لقاء ابن الهيثم وبساتين البصرة',
      pagesLabel: 'صفحات ٢–٣ (سبريد)',
      type: 'spread',
      image: SPREADS[2]?.imagePath,
      textArRight: IBN_HAYTHAM_STORY_SCRIPT.pages[1].textArabic,
      textArLeft: IBN_HAYTHAM_STORY_SCRIPT.pages[2].textArabic,
      textEnRight: IBN_HAYTHAM_STORY_SCRIPT.pages[1].textEnglish,
      textEnLeft: IBN_HAYTHAM_STORY_SCRIPT.pages[2].textEnglish
    },
    {
      step: 3,
      title: 'صفحات ٤–٥: نهر النيل ومراكبه وأسوان والاعتراف بالخطأ',
      pagesLabel: 'صفحات ٤–٥ (سبريد)',
      type: 'spread',
      image: SPREADS[3]?.imagePath,
      textArRight: IBN_HAYTHAM_STORY_SCRIPT.pages[3].textArabic,
      textArLeft: IBN_HAYTHAM_STORY_SCRIPT.pages[4].textArabic,
      textEnRight: IBN_HAYTHAM_STORY_SCRIPT.pages[3].textEnglish,
      textEnLeft: IBN_HAYTHAM_STORY_SCRIPT.pages[4].textEnglish
    },
    {
      step: 4,
      title: 'صفحات ٦–٧: كيف نرى؟ ونظرية أشعة الشمس والعين',
      pagesLabel: 'صفحات ٦–٧ (سبريد)',
      type: 'spread',
      image: SPREADS[4]?.imagePath,
      textArRight: IBN_HAYTHAM_STORY_SCRIPT.pages[5].textArabic,
      textArLeft: IBN_HAYTHAM_STORY_SCRIPT.pages[6].textArabic,
      textEnRight: IBN_HAYTHAM_STORY_SCRIPT.pages[5].textEnglish,
      textEnLeft: IBN_HAYTHAM_STORY_SCRIPT.pages[6].textEnglish
    },
    {
      step: 5,
      title: 'صفحات ٨–٩: الغرفة المظلمة وتكوّن الصورة المقلوبة',
      pagesLabel: 'صفحات ٨–٩ (سبريد)',
      type: 'spread',
      image: SPREADS[5]?.imagePath,
      textArRight: IBN_HAYTHAM_STORY_SCRIPT.pages[7].textArabic,
      textArLeft: IBN_HAYTHAM_STORY_SCRIPT.pages[8].textArabic,
      textEnRight: IBN_HAYTHAM_STORY_SCRIPT.pages[7].textEnglish,
      textEnLeft: IBN_HAYTHAM_STORY_SCRIPT.pages[8].textEnglish
    },
    {
      step: 6,
      title: 'صفحات ١٠–١١: تأليف كتاب المناظر وتوارث الكاميرات',
      pagesLabel: 'صفحات ١٠–١١ (سبريد)',
      type: 'spread',
      image: SPREADS[6]?.imagePath,
      textArRight: IBN_HAYTHAM_STORY_SCRIPT.pages[9].textArabic,
      textArLeft: IBN_HAYTHAM_STORY_SCRIPT.pages[10].textArabic,
      textEnRight: IBN_HAYTHAM_STORY_SCRIPT.pages[9].textEnglish,
      textEnLeft: IBN_HAYTHAM_STORY_SCRIPT.pages[10].textEnglish
    },
    {
      step: 7,
      title: 'صفحات ١٢–١٣: العودة إلى المكتبة وتوارث المعرفة',
      pagesLabel: 'صفحات ١٢–١٣ (سبريد)',
      type: 'spread',
      image: SPREADS[7]?.imagePath,
      textArRight: IBN_HAYTHAM_STORY_SCRIPT.pages[11].textArabic,
      textArLeft: IBN_HAYTHAM_STORY_SCRIPT.pages[12].textArabic,
      textEnRight: IBN_HAYTHAM_STORY_SCRIPT.pages[11].textEnglish,
      textEnLeft: IBN_HAYTHAM_STORY_SCRIPT.pages[12].textEnglish
    },
    {
      step: 8,
      title: 'صفحات ١٤–١٥: الأركان التفاعلية وركن جرّبها بنفسك',
      pagesLabel: 'صفحات ١٤–١٥ (أركان الأنشطة)',
      type: 'corners',
      image: null
    },
    {
      step: 9,
      title: 'صفحة ١٦: ملحق الوالدين والمربين',
      pagesLabel: 'صفحة ١٦ (ملحق الوالدين)',
      type: 'parents',
      image: null
    }
  ];

  const current = stepsInfo[currentStep];

  const handleNext = () => {
    if (currentStep < stepsInfo.length - 1) {
      if (audioEnabled) {
        if (currentStep === 4) playGoldenGlowChime();
        else playPageTurnSound();
      }
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      if (audioEnabled) playPageTurnSound();
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Story Header & Progress Bar */}
      <div className="bg-[#FAF6EE] border border-[#2F4B8A]/20 rounded-3xl p-5 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#F2A93B]/20 text-[#8F550A] text-xs font-bold border border-[#F2A93B]/30">
              سلسلة حكايات الاكتشاف (٤–٧ سنوات)
            </span>
            <span className="text-xs text-[#2F4B8A]/60 font-semibold">• القصة الأولى</span>
          </div>
          <h2 className="font-amiri font-bold text-xl sm:text-2xl text-[#2F4B8A] mt-1">
            ابن الهيثم والغرفة المظلمة: كيف نرى الأشياء؟
          </h2>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-2">
          {/* RTL Back Button (Goes forward in story, to the left) */}
          <button
            onClick={handleNext}
            disabled={currentStep >= stepsInfo.length - 1}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#2F4B8A] hover:bg-[#253d70] disabled:opacity-30 text-white font-bold text-xs sm:text-sm shadow-sm transition cursor-pointer"
          >
            <span>الصفحة التالية</span>
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Indicator */}
          <span className="text-xs font-bold text-[#2F4B8A] px-2 py-1 bg-white/80 rounded-lg border border-[#2F4B8A]/20">
            {currentStep + 1} / {stepsInfo.length}
          </span>

          {/* RTL Forward Button (Goes backward in story, to the right) */}
          <button
            onClick={handlePrev}
            disabled={currentStep <= 0}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-[#2F4B8A]/30 hover:bg-[#FAF6EE] disabled:opacity-30 text-[#2F4B8A] font-bold text-xs sm:text-sm shadow-xs transition cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
            <span>الصفحة السابقة</span>
          </button>
        </div>
      </div>

      {/* Spreads Timeline Thumbnails */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {stepsInfo.map((s, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (audioEnabled) playPageTurnSound();
              setCurrentStep(idx);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer shrink-0 border ${
              currentStep === idx
                ? 'bg-[#2F4B8A] text-white border-[#2F4B8A] shadow-xs'
                : 'bg-[#FAF6EE] border-[#2F4B8A]/20 text-[#2F4B8A] hover:bg-white'
            }`}
          >
            {s.pagesLabel}
          </button>
        ))}
      </div>

      {/* MAIN BOOK DISPLAY */}
      {current.type === 'portrait' ? (
        /* SINGLE PORTRAIT PAGE (PAGE 1) */
        <div className="bg-[#FAF6EE] border-4 border-[#2F4B8A]/20 rounded-3xl p-6 sm:p-10 shadow-xl max-w-3xl mx-auto">
          <div className="space-y-6">
            {/* Top 38% Reserved Typeset Text on Plain Cream Paper */}
            <div className="p-6 rounded-2xl bg-white/70 border border-[#2F4B8A]/10 text-center space-y-3">
              <span className="text-[11px] font-bold text-[#8F550A] uppercase tracking-wider block">
                {current.pagesLabel}
              </span>
              <p
                dir="rtl"
                className="font-amiri text-lg sm:text-2xl text-[#2F4B8A] font-bold leading-relaxed whitespace-pre-line"
              >
                {current.textAr}
              </p>
              <p className="font-sans-story text-xs sm:text-sm text-[#2F4B8A]/75 pt-2 border-t border-[#2F4B8A]/10">
                {current.textEn}
              </p>
            </div>

            {/* Illustration Lower 60% */}
            {current.image && (
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-[#2F4B8A]/20">
                <img
                  src={current.image}
                  alt={current.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      ) : current.type === 'spread' ? (
        /* TWO-PAGE SPREAD (RTL: RIGHT PAGE READ FIRST, LEFT PAGE READ SECOND) */
        <div className="bg-[#FAF6EE] border-4 border-[#2F4B8A]/20 rounded-3xl p-4 sm:p-8 shadow-2xl relative">
          {/* Spine fold indicator */}
          <div className="hidden sm:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-6 bg-gradient-to-r from-transparent via-[#2F4B8A]/15 to-transparent pointer-events-none z-20" />

          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#2F4B8A]/10">
              <span className="font-bold text-sm text-[#2F4B8A] flex items-center gap-1.5">
                <Bookmark className="w-4 h-4 text-[#F2A93B]" />
                <span>{current.title}</span>
              </span>
              <span className="text-xs text-[#8F550A] font-semibold">
                اتجاه القراءة: يمين ← يسار
              </span>
            </div>

            {/* Continuous Painting Image */}
            {current.image && (
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-inner border border-[#2F4B8A]/20">
                <img
                  src={current.image}
                  alt={current.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Dual Page Text Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {/* LEFT PAGE (Read Second in RTL) */}
              <div className="bg-white/80 p-5 rounded-2xl border border-[#2F4B8A]/15 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#8F550A] block mb-2">
                    صفحة اليسار (الصفحة التالية)
                  </span>
                  <p
                    dir="rtl"
                    className="font-amiri text-base sm:text-lg text-[#2F4B8A] font-bold leading-relaxed whitespace-pre-line"
                  >
                    {current.textArLeft || current.textAr}
                  </p>
                </div>
                {(current.textEnLeft || current.textEn) && (
                  <p className="font-sans-story text-xs text-[#2F4B8A]/75 pt-3 mt-3 border-t border-[#2F4B8A]/10">
                    {current.textEnLeft || current.textEn}
                  </p>
                )}
              </div>

              {/* RIGHT PAGE (Read First in RTL) */}
              <div className="bg-white/80 p-5 rounded-2xl border border-[#2F4B8A]/15 shadow-xs flex flex-col justify-between order-first md:order-last">
                <div>
                  <span className="text-[11px] font-bold text-[#2E9E8F] block mb-2">
                    صفحة اليمين (تُقرأ أولاً)
                  </span>
                  <p
                    dir="rtl"
                    className="font-amiri text-base sm:text-lg text-[#2F4B8A] font-bold leading-relaxed whitespace-pre-line"
                  >
                    {current.textArRight || current.textAr}
                  </p>
                </div>
                {(current.textEnRight || current.textEn) && (
                  <p className="font-sans-story text-xs text-[#2F4B8A]/75 pt-3 mt-3 border-t border-[#2F4B8A]/10">
                    {current.textEnRight || current.textEn}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : current.type === 'corners' ? (
        /* INTERACTIVE CORNERS (PAGES 14-15) */
        <div className="bg-[#FAF6EE] border-4 border-[#2F4B8A]/20 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-bold text-[#8F550A] uppercase tracking-wider">
              صفحات ١٤–١٥ من كتاب حكايات الاكتشاف
            </span>
            <h3 className="font-amiri font-bold text-2xl sm:text-3xl text-[#2F4B8A]">
              الأركان التفاعلية وسؤال الاستكشاف
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Right: Try it yourself */}
            <div className="bg-white/90 p-6 rounded-2xl border-2 border-[#F2A93B]/40 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-[#8F550A]">
                <Lightbulb className="w-5 h-5 text-[#F2A93B]" />
                <h4 className="font-bold text-base">{IBN_HAYTHAM_STORY_SCRIPT.corners.tryItYourself.title}</h4>
              </div>
              <p dir="rtl" className="font-amiri text-sm leading-relaxed text-[#2F4B8A]">
                {IBN_HAYTHAM_STORY_SCRIPT.corners.tryItYourself.description}
              </p>
              <div className="p-3 bg-[#FAF6EE] rounded-xl border border-[#2F4B8A]/10 text-xs">
                <span className="font-bold text-[#2F4B8A] block mb-1">💡 كلمة جديدة:</span>
                <span className="text-[#2F4B8A]/80 font-medium">
                  {IBN_HAYTHAM_STORY_SCRIPT.corners.tryItYourself.newWord}
                </span>
              </div>
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 font-bold">
                ❓ {IBN_HAYTHAM_STORY_SCRIPT.corners.tryItYourself.discussionQuestion}
              </div>
            </div>

            {/* Left: Fact or Fiction & Ask the Author */}
            <div className="space-y-4">
              <div className="bg-white/90 p-5 rounded-2xl border border-[#2F4B8A]/15 shadow-sm space-y-3">
                <h4 className="font-bold text-sm text-[#2F4B8A] flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-[#2E9E8F]" />
                  <span>حقيقة أم خيال؟ (مع ابن الهيثم)</span>
                </h4>
                <div className="space-y-2 text-xs">
                  {IBN_HAYTHAM_STORY_SCRIPT.corners.factOrFiction.map((item, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-[#FAF6EE] border border-[#2F4B8A]/10 flex items-start gap-2"
                    >
                      <span
                        className={`px-1.5 py-0.5 rounded text-[10px] font-bold shrink-0 ${
                          item.type === 'fact'
                            ? 'bg-emerald-100 text-emerald-800'
                            : item.type === 'fiction'
                            ? 'bg-purple-100 text-purple-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {item.label}
                      </span>
                      <p dir="rtl" className="font-amiri text-xs text-[#2F4B8A] leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ask the Author */}
              <div className="bg-gradient-to-br from-[#FAF6EE] to-[#F5EFE1] p-5 rounded-2xl border border-[#2F4B8A]/20 shadow-xs">
                <span className="text-[11px] font-bold text-[#8F550A] flex items-center gap-1 mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>«اسأل المؤلف»</span>
                </span>
                <p dir="rtl" className="font-amiri text-sm font-bold text-[#2F4B8A] mb-1">
                  سؤال لنور: {IBN_HAYTHAM_STORY_SCRIPT.corners.askTheAuthor.question}
                </p>
                <p dir="rtl" className="font-amiri text-xs text-[#8F550A] leading-relaxed font-semibold">
                  {IBN_HAYTHAM_STORY_SCRIPT.corners.askTheAuthor.answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* PARENTS & EDUCATORS GUIDE (PAGE 16) */
        <div className="bg-[#FAF6EE] border-4 border-[#2F4B8A]/20 rounded-3xl p-6 sm:p-10 shadow-2xl max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2 pb-4 border-b border-[#2F4B8A]/15">
            <span className="text-xs font-bold text-[#2E9E8F] uppercase tracking-wider">
              الصفحة ١٦ الختامية
            </span>
            <h3 className="font-amiri font-bold text-2xl sm:text-3xl text-[#2F4B8A]">
              {IBN_HAYTHAM_STORY_SCRIPT.corners.parentsGuide.title}
            </h3>
            <p className="text-xs text-[#2F4B8A]/80 font-sans-story">
              أفكار وأسئلة حوارية تثري تجربة القراءة المشتركة بين الطفل ووالديه أو المعلم.
            </p>
          </div>

          <div className="space-y-4">
            {IBN_HAYTHAM_STORY_SCRIPT.corners.parentsGuide.prompts.map((prompt, i) => (
              <div
                key={i}
                className="bg-white/90 p-5 rounded-2xl border border-[#2F4B8A]/15 shadow-xs space-y-2"
              >
                <span className="font-bold text-xs text-[#8F550A] flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-[#F2A93B]" />
                  <span>سؤال حواري ومحور نقاش {i + 1}:</span>
                </span>
                <p dir="rtl" className="font-amiri text-base text-[#2F4B8A] leading-relaxed">
                  {prompt}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
