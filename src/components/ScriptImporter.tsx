import React, { useState } from 'react';
import { FileText, Upload, Sparkles, CheckCircle2, Copy, BookOpen, ArrowRight, Play, Download } from 'lucide-react';
import { playGoldenGlowChime } from '../utils/soundEffects';

interface ScriptImporterProps {
  onLoadScript?: (parsedData: any) => void;
  audioEnabled: boolean;
}

export const ScriptImporter: React.FC<ScriptImporterProps> = ({ audioEnabled }) => {
  const [inputText, setInputText] = useState('');
  const [parsedSpreads, setParsedSpreads] = useState<Array<{
    spreadNumber: number;
    title: string;
    scriptText: string;
    prompt: string;
  }>>([]);
  const [activeTab, setActiveTab] = useState<'paste' | 'guide' | 'preview'>('paste');

  const exampleTemplate = `--- السبريد الأول (الصفحة 1 - 2) ---
العنوان: بداية المغامرة وسر الصندوق
نص القصة:
فِي زَاوِيَةِ الغُرفَةِ العَتِيقَة، وَقَفَتْ نُور وَأَنَس وَالقِطُّ حِبْر...
البرومبت:
Children's picture-book illustration in transparent watercolor with thin consistent black ink outlines...

--- السبريد الثاني (الصفحة 3 - 4) ---
العنوان: شعاع القُمرة والصورة المعكوسة
نص القصة:
مَرَّ شُعَاعُ الضَّوْءِ الذَّهَبِيِّ عَبْرَ ثَقْبِ الصُّنْدُوق...
البرومبت:
Children's picture-book illustration in transparent watercolor...`;

  const handleParse = () => {
    if (!inputText.trim()) return;

    // Split by spread markers or dividers
    const rawChunks = inputText.split(/(?:---|\n\n(?=السبريد|الصفحة|Spread|Page))/i).filter(c => c.trim().length > 10);
    
    const results = rawChunks.map((chunk, idx) => {
      // Extract title
      const titleMatch = chunk.match(/(?:العنوان|Title):\s*(.+)/i);
      const title = titleMatch ? titleMatch[1].trim() : `السبريد رقم ${idx + 1}`;

      // Extract script / story text
      const scriptMatch = chunk.match(/(?:نص القصة|السكريبت|النص|Script|Story):\s*([\s\S]*?)(?=(?:البرومبت|Prompt|$))/i);
      const scriptText = scriptMatch ? scriptMatch[1].trim() : chunk.slice(0, 150) + '...';

      // Extract prompt
      const promptMatch = chunk.match(/(?:البرومبت|Prompt):\s*([\s\S]*)/i);
      const prompt = promptMatch ? promptMatch[1].trim() : 'لم يتم تحديد برومبت مخصص بعد';

      return {
        spreadNumber: idx + 1,
        title,
        scriptText,
        prompt
      };
    });

    setParsedSpreads(results.length > 0 ? results : [{
      spreadNumber: 1,
      title: 'السبريد المخصص',
      scriptText: inputText,
      prompt: 'برومبت مخصص'
    }]);

    if (audioEnabled) playGoldenGlowChime();
    setActiveTab('preview');
  };

  const handleLoadExample = () => {
    setInputText(exampleTemplate);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#FAF6EE] to-[#F5EFE1] border-2 border-[#2F4B8A]/20 rounded-3xl p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#2F4B8A] text-white flex items-center justify-center shadow-md">
              <FileText className="w-6 h-6 text-[#F2A93B]" />
            </div>
            <div>
              <h2 className="font-bold text-lg text-[#2F4B8A]">
                منصة استيراد وتنفيذ سكريبت القصة والبرومبتات
              </h2>
              <p className="text-xs text-[#2F4B8A]/80 font-sans-story mt-0.5">
                حوّل ملف السكريبت والبرومبتات لديك مباشرة إلى صفحات كتاب مصورة متكاملة نصاً ورسماً.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('paste')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === 'paste' ? 'bg-[#2F4B8A] text-white shadow-xs' : 'bg-white text-[#2F4B8A]'
              }`}
            >
              لصق أو رفع الملف
            </button>
            <button
              onClick={() => setActiveTab('guide')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeTab === 'guide' ? 'bg-[#2F4B8A] text-white shadow-xs' : 'bg-white text-[#2F4B8A]'
              }`}
            >
              كيف نستفيد منه؟ (الدليل)
            </button>
            {parsedSpreads.length > 0 && (
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  activeTab === 'preview' ? 'bg-[#2E9E8F] text-white shadow-xs' : 'bg-white text-[#2F4B8A]'
                }`}
              >
                معاينة الصفحات المُدرجة ({parsedSpreads.length})
              </button>
            )}
          </div>
        </div>
      </div>

      {/* TAB 1: PASTE / UPLOAD */}
      {activeTab === 'paste' && (
        <div className="bg-[#FAF6EE] border border-[#2F4B8A]/15 rounded-3xl p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-bold text-[#2F4B8A] flex items-center gap-2">
              <Upload className="w-4 h-4 text-[#F2A93B]" />
              <span>الصق محتوى ملف البرومبتات والسكريبت هنا:</span>
            </label>
            <button
              type="button"
              onClick={handleLoadExample}
              className="text-xs text-[#8F550A] hover:underline font-semibold cursor-pointer"
            >
              تحميل نموذج توضيحي
            </button>
          </div>

          <textarea
            dir="auto"
            rows={10}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="الصق هنا سكريبت القصة وبرومبتات الصفحات (بأي صيغة كانت سواء نصية، أو مرقمة بالصفحات، أو مفصولة بفواصل)..."
            className="w-full p-4 rounded-2xl border border-[#2F4B8A]/20 bg-white font-sans-story text-xs text-[#2F4B8A] focus:outline-none focus:ring-2 focus:ring-[#F2A93B] shadow-inner"
          />

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <span className="text-[11px] text-[#2F4B8A]/70">
              يمكنك أيضاً نسخ أي جزء ومشاركته معي مباشرة في الدردشة، وسأقوم بتحليله فوراً!
            </span>
            <button
              onClick={handleParse}
              disabled={!inputText.trim()}
              className="px-6 py-2.5 rounded-xl bg-[#2F4B8A] hover:bg-[#253d70] disabled:opacity-40 text-white font-bold text-xs sm:text-sm shadow-md transition cursor-pointer flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#F2A93B]" />
              <span>تحليل وتقسيم صفحات القصة (Parse Spreads)</span>
            </button>
          </div>
        </div>
      )}

      {/* TAB 2: STEP-BY-STEP BENEFIT GUIDE */}
      {activeTab === 'guide' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#FAF6EE] border-2 border-[#2F4B8A]/15 rounded-3xl p-6 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#2F4B8A] text-white flex items-center justify-center font-bold text-base shadow-sm">
              1
            </div>
            <h3 className="font-bold text-base text-[#2F4B8A]">
              توليد الرسوم بالتتابع (Sequential Generation)
            </h3>
            <p className="text-xs text-[#2F4B8A]/85 leading-relaxed font-sans-story">
              تعطيني برومبت كل صفحة (أو نأخذها من الملف صفحة صفحة)، وأقوم بتوليد اللوحة المائية بدقة مع مطابقة تامة للشخصيات، الألوان الأربعة، وقواعد الهوامش وخط المنتصف.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FAF6EE] border-2 border-[#2F4B8A]/15 rounded-3xl p-6 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#F2A93B] text-amber-950 flex items-center justify-center font-bold text-base shadow-sm">
              2
            </div>
            <h3 className="font-bold text-base text-[#2F4B8A]">
              دمج نص السكريبت في المساحات السلبية
            </h3>
            <p className="text-xs text-[#2F4B8A]/85 leading-relaxed font-sans-story">
              يتم وضع نصوص السكريبت والحوارات مباشرة في المساحات الورقية الفارغة المخصصة لها (صفحة اليمين للنص، وصفحة اليسار للعنوان) بخط عربي مشكول مخصص لكتب الأطفال.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FAF6EE] border-2 border-[#2F4B8A]/15 rounded-3xl p-6 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#2E9E8F] text-white flex items-center justify-center font-bold text-base shadow-sm">
              3
            </div>
            <h3 className="font-bold text-base text-[#2F4B8A]">
              تصفح وتصدير الكتاب بالكامل (Complete Book Dummy)
            </h3>
            <p className="text-xs text-[#2F4B8A]/85 leading-relaxed font-sans-story">
              يتحول التطبيق إلى ماكيت كتاب متكامل (Dummy Book): تتصفحه صفحة بصفحة من اليمين لليسار، وتصدره للمطبعة بملفات عالية الجودة مع علامات القص (Crop Marks).
            </p>
          </div>
        </div>
      )}

      {/* TAB 3: PARSED SPREADS PREVIEW */}
      {activeTab === 'preview' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base text-[#2F4B8A]">
              صفحات القصة المستخرجة من ملفك ({parsedSpreads.length} سبريد)
            </h3>
            <span className="text-xs text-[#2E9E8F] font-bold">جاهزة للتنفيذ والتوليد تباعاً</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {parsedSpreads.map((spread) => (
              <div
                key={spread.spreadNumber}
                className="bg-[#FAF6EE] border border-[#2F4B8A]/20 rounded-2xl p-5 shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between pb-2 border-b border-[#2F4B8A]/10">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#2F4B8A] text-white font-bold text-xs">
                    السبريد {spread.spreadNumber}
                  </span>
                  <span className="font-bold text-xs text-[#8F550A]">{spread.title}</span>
                </div>

                {/* Script text snippet */}
                <div>
                  <span className="text-[10px] font-bold text-[#2F4B8A]/60 block mb-1">
                    نص السكريبت المقابل:
                  </span>
                  <p dir="rtl" className="font-amiri text-xs text-[#2F4B8A] bg-white/70 p-2.5 rounded-xl border border-[#2F4B8A]/10 leading-relaxed max-h-24 overflow-y-auto">
                    {spread.scriptText}
                  </p>
                </div>

                {/* Prompt snippet */}
                <div>
                  <span className="text-[10px] font-bold text-[#2F4B8A]/60 block mb-1">
                    البرومبت المقابل للمشهد:
                  </span>
                  <pre className="text-[10px] font-mono text-[#2F4B8A]/80 bg-white/70 p-2.5 rounded-xl border border-[#2F4B8A]/10 whitespace-pre-wrap max-h-24 overflow-y-auto">
                    {spread.prompt}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
