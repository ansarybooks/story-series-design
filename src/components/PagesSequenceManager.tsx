import React, { useState } from 'react';
import { SpreadItem } from '../types';
import { BookOpen, PlusCircle, Sparkles, CheckCircle2, Copy, Check, ArrowRight, Layers, FileText } from 'lucide-react';
import { playGoldenGlowChime } from '../utils/soundEffects';

interface PagesSequenceManagerProps {
  spreads: SpreadItem[];
  currentSpreadIndex: number;
  onSelectSpread: (index: number) => void;
  audioEnabled: boolean;
}

export const PagesSequenceManager: React.FC<PagesSequenceManagerProps> = ({
  spreads,
  currentSpreadIndex,
  onSelectSpread,
  audioEnabled
}) => {
  const [newPromptTitle, setNewPromptTitle] = useState('');
  const [newPromptScene, setNewPromptScene] = useState('');
  const [pageSide, setPageSide] = useState<'spread' | 'single'>('spread');
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  // Auto-generate the full prompt complying with all series rules
  const compiledPrompt = `Reference characters: Nour (6-7yo girl, round face, big brown eyes, wheat skin, soft turquoise #2E9E8F hijab framing face with no hair showing, indigo #2F4B8A dress with sand hem), Anas (5yo boy, shorter reaching Nour's shoulder, short curly black hair, round face, round glasses, amber-gold #F2A93B shirt, indigo trousers, holding notebook), Hibr (small black cat, glowing amber eyes #F2A93B).

Style: Children's picture-book illustration in transparent watercolor with thin consistent black ink outlines on textured warm cream paper. Soft daylight, hand-painted feel, visible paper grain. Suitable for ages 4-7.

Limited 4-color palette: Amber gold #F2A93B (series magical light), Indigo blue #2F4B8A (shadows & clothing), Warm sand #D9A66B (wood & earth), Turquoise green #2E9E8F (hijab & plants). No red, pink, orange, or purple.

Scene: ${newPromptScene || '[Describe your scene here: e.g. Anas sketching the optical diagram in his notebook while Nour and Hibr watch the amber light beam illuminate the wall]'}

Composition: Wide continuous landscape spread for right-to-left (RTL) reading. Central 4% spine strip kept empty of faces and critical objects. All important elements inside 94% width by 90% height safe live area. Empty text areas on plain cream paper with no artificial boxes. Clean margins, no text, no captions.`;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(compiledPrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Introduction Banner addressing the user's question directly */}
      <div className="bg-gradient-to-r from-[#FAF6EE] to-[#F5EFE1] border-2 border-[#2F4B8A]/20 rounded-3xl p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#2F4B8A] text-white flex items-center justify-center shadow-md">
              <BookOpen className="w-6 h-6 text-[#F2A93B]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-lg text-[#2F4B8A]">
                  تسلسل الصفحات الداخلية للقصة (Interior Pages Sequence)
                </h2>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold border border-emerald-300">
                  جاهز لإضافة صفحاتك
                </span>
              </div>
              <p className="text-xs text-[#2F4B8A]/80 font-sans-story mt-1 max-w-2xl leading-relaxed">
                <strong>نعم بالتأكيد!</strong> يمكنك تزويدي بأي عدد من برومبتات الصفحات الداخلية المتعاقبة، وسيتم إدراجها وعرضها بالتوالي ككتاب كامل مع الحفاظ الصارم على نمط الألوان الأربعة، شخصيات نور وأنس وحِبر، ومقاييس الطباعة.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-white/90 px-3 py-1.5 rounded-xl border border-[#2F4B8A]/15 text-xs text-[#2F4B8A] font-bold">
              إجمالي السبريدات: {spreads.length}
            </div>
          </div>
        </div>
      </div>

      {/* Sequential Spread Gallery (Treated like consecutive book spreads) */}
      <div className="bg-[#FAF6EE] border border-[#2F4B8A]/15 rounded-3xl p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#2E9E8F]" />
            <h3 className="font-bold text-sm text-[#2F4B8A]">
              تصفح سبريدات الكتاب بالتتابع (Book Spreads Timeline)
            </h3>
          </div>
          <span className="text-xs text-[#2F4B8A]/70 font-sans-story">
            اضغط على أي صفحة لعرضها في لوحة التفتيش الرئيسية
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {spreads.map((s, idx) => {
            const isSelected = currentSpreadIndex === idx;
            return (
              <div
                key={s.id}
                onClick={() => {
                  if (audioEnabled) playGoldenGlowChime();
                  onSelectSpread(idx);
                }}
                className={`group rounded-2xl border-2 transition-all p-3 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#2F4B8A] bg-white shadow-lg scale-[1.02]'
                    : 'border-[#2F4B8A]/15 bg-white/60 hover:bg-white hover:border-[#F2A93B]'
                }`}
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-2.5 bg-[#FAF6EE] border border-black/10">
                    <img
                      src={s.imagePath}
                      alt={s.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-md bg-[#2F4B8A]/90 text-white text-[10px] font-bold">
                      السبريد 0{idx + 1}
                    </div>
                    {idx === 0 && (
                      <div className="absolute bottom-1.5 right-1.5 px-2 py-0.5 rounded-md bg-[#2E9E8F] text-white text-[9px] font-bold shadow-xs">
                        المعتمد (خارج الصندوق) ✓
                      </div>
                    )}
                  </div>

                  {/* Title & Info */}
                  <h4 className="font-amiri font-bold text-sm text-[#2F4B8A] group-hover:text-[#8F550A] transition">
                    {s.arabicTitle}
                  </h4>
                  <p className="text-[11px] text-[#2F4B8A]/75 line-clamp-2 mt-0.5 font-sans-story">
                    {s.description}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-[#2F4B8A]/10 flex items-center justify-between text-[10px]">
                  <span className="font-semibold text-[#8F550A]">{s.subtitle}</span>
                  <span className={`font-bold ${isSelected ? 'text-[#2F4B8A]' : 'text-[#2F4B8A]/50'}`}>
                    {isSelected ? '● معروض الآن' : 'عرض'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Generator & Assistant for Next Interior Page Prompts */}
      <div className="bg-[#FAF6EE] border border-[#2F4B8A]/15 rounded-3xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#F2A93B]" />
          <div>
            <h3 className="font-bold text-sm text-[#2F4B8A]">
              مساعد إعداد برومبتات الصفحات التالية (Next Page Prompt Generator)
            </h3>
            <p className="text-xs text-[#2F4B8A]/75 font-sans-story">
              اكتب فكرة المشهد القادم وسيقوم المساعد بصياغة البرومبت بالكامل وفقاً لنفس القواعد المعيارية لسلسلة «نور وأنس».
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div>
              <label className="text-xs font-bold text-[#2F4B8A] block mb-1">
                عنوان المشهد أو رقم الصفحة:
              </label>
              <input
                type="text"
                placeholder="مثال: السبريد ٥: أنس يرسم مخطط مرور الضوء ونور تتأمل"
                value={newPromptTitle}
                onChange={(e) => setNewPromptTitle(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#2F4B8A]/20 bg-white text-xs font-medium text-[#2F4B8A] focus:outline-none focus:ring-2 focus:ring-[#F2A93B]"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#2F4B8A] block mb-1">
                وصف حركة وموقع الشخصيات والحدث في المشهد:
              </label>
              <textarea
                rows={4}
                placeholder="مثال: أنس يجلس على الأرض ممسكاً دفتيره وقلمه الخشبي يرسم تجربة الصندوق، بينما نور تقف بجانبه تشير بابتسامة نحو شعاع الضوء، وحبر القط يلعب بكرة خيط نيلي بجوار الصندوق..."
                value={newPromptScene}
                onChange={(e) => setNewPromptScene(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#2F4B8A]/20 bg-white text-xs font-sans-story text-[#2F4B8A] focus:outline-none focus:ring-2 focus:ring-[#F2A93B] resize-none"
              />
            </div>

            <div className="flex items-center gap-3 text-xs text-[#2F4B8A]/80">
              <span className="font-semibold">نوع التخطيط:</span>
              <button
                type="button"
                onClick={() => setPageSide('spread')}
                className={`px-2.5 py-1 rounded-lg border font-bold transition ${
                  pageSide === 'spread'
                    ? 'bg-[#2F4B8A] text-white border-[#2F4B8A]'
                    : 'bg-white text-[#2F4B8A] border-[#2F4B8A]/20'
                }`}
              >
                سبريد كامل (Double Spread 16:9)
              </button>
              <button
                type="button"
                onClick={() => setPageSide('single')}
                className={`px-2.5 py-1 rounded-lg border font-bold transition ${
                  pageSide === 'single'
                    ? 'bg-[#2F4B8A] text-white border-[#2F4B8A]'
                    : 'bg-white text-[#2F4B8A] border-[#2F4B8A]/20'
                }`}
              >
                صفحة مفردة (Single Page)
              </button>
            </div>
          </div>

          {/* Compiled Prompt Output ready to copy or give to me in chat */}
          <div className="bg-white/90 p-4 rounded-2xl border border-[#2F4B8A]/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#2F4B8A] flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-[#2E9E8F]" />
                  <span>البرومبت الجاهز مطابقاً للشخصيات والألوان الأربعة:</span>
                </span>
                <button
                  onClick={handleCopyPrompt}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#F2A93B] hover:bg-[#df9425] text-amber-950 text-xs font-bold transition cursor-pointer"
                >
                  {copiedPrompt ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPrompt ? 'تم النسخ!' : 'نسخ البرومبت'}</span>
                </button>
              </div>

              <div className="max-h-48 overflow-y-auto p-2.5 rounded-xl bg-[#FAF6EE] border border-[#2F4B8A]/10 text-[11px] font-mono text-[#2F4B8A]/90 leading-relaxed whitespace-pre-wrap select-all">
                {compiledPrompt}
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-[#2F4B8A]/10 flex items-center justify-between text-[11px] text-[#2F4B8A]/75">
              <span>يمكنك كتابة هذا البرومبت في رسالتك القادمة وسأقوم فوراً بتوليده وعرضه!</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
