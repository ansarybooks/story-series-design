import React, { useRef } from 'react';
import { IBN_HAYTHAM_STORY_SCRIPT, SPREADS } from '../data/pictureBookData';
import { Printer, Download, Sparkles, CheckCircle2, FileDown, Layers, BookOpen, X } from 'lucide-react';

interface FullBookPdfViewProps {
  onClose: () => void;
}

export const FullBookPdfView: React.FC<FullBookPdfViewProps> = ({ onClose }) => {
  const printContainerRef = useRef<HTMLDivElement>(null);

  const handleBrowserPrint = () => {
    window.print();
  };

  const handleDownloadCompositeImage = (
    imageSrc: string,
    title: string,
    textRight: string,
    textLeft?: string,
    filename = 'spread-with-text.jpg'
  ) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageSrc;

    img.onload = () => {
      canvas.width = img.naturalWidth || 1920;
      canvas.height = img.naturalHeight || 1080;

      // Draw original painting
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Setup typography style
      ctx.fillStyle = '#2F4B8A';
      ctx.direction = 'rtl';
      ctx.textAlign = 'right';

      // Title in left zone if spread
      if (title) {
        ctx.font = 'bold 36px serif';
        ctx.fillText(title, canvas.width * 0.42, canvas.height * 0.16);
      }

      // Narrative text in right zone
      ctx.font = '26px serif';
      const lines = textRight.split('\n');
      lines.forEach((line, idx) => {
        ctx.fillText(line, canvas.width * 0.92, canvas.height * 0.18 + idx * 42);
      });

      // Left zone text if present
      if (textLeft) {
        const leftLines = textLeft.split('\n');
        leftLines.forEach((line, idx) => {
          ctx.fillText(line, canvas.width * 0.45, canvas.height * 0.24 + idx * 40);
        });
      }

      // Convert to blob and download
      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
      }, 'image/jpeg', 0.95);
    };
  };

  // Structured pages data for the full book dummy
  const fullBookPages = [
    {
      pageNumber: 'الغلاف الممتد',
      type: 'spread',
      title: 'الغلاف الممتد: ابن الهيثم والغرفة المظلمة',
      subtitle: 'Cover Spread (Front Left, Back Right)',
      image: SPREADS[0]?.imagePath,
      textRight: '«مكتبة النور الصغيرة»\nسلسلة قصصية تحوّل كل كتاب إلى مغامرة يعيشها طفل مع مؤلفه.\n\nتأليف: الحسن بن الهيثم\nالرسوم: ألوان مائية تقليدية وحبر أسود\nالفئة: ٤–٧ سنوات',
      textLeft: 'ابْنُ الهَيْثَمِ وَالغُرْفَةُ المُظْلِمَة\nكَيْفَ نَرَى الأَشْيَاء؟',
      isCover: true
    },
    {
      pageNumber: 'صفحة ١',
      type: 'portrait',
      title: 'صفحة ١: العثور على الصندوق ذي الثقب',
      image: SPREADS[1]?.imagePath,
      textRight: IBN_HAYTHAM_STORY_SCRIPT.pages[0].textArabic,
      textEn: IBN_HAYTHAM_STORY_SCRIPT.pages[0].textEnglish
    },
    {
      pageNumber: 'صفحات ٢–٣',
      type: 'spread',
      title: 'صفحات ٢–٣: بساتين البصرة ولقاء ابن الهيثم',
      image: SPREADS[2]?.imagePath,
      textRight: IBN_HAYTHAM_STORY_SCRIPT.pages[1].textArabic,
      textLeft: IBN_HAYTHAM_STORY_SCRIPT.pages[2].textArabic,
      textEnRight: IBN_HAYTHAM_STORY_SCRIPT.pages[1].textEnglish,
      textEnLeft: IBN_HAYTHAM_STORY_SCRIPT.pages[2].textEnglish
    },
    {
      pageNumber: 'صفحات ٤–٥',
      type: 'spread',
      title: 'صفحات ٤–٥: نهر النيل ورحلة أسوان والاعتراف بالخطأ',
      image: SPREADS[3]?.imagePath,
      textRight: IBN_HAYTHAM_STORY_SCRIPT.pages[3].textArabic,
      textLeft: IBN_HAYTHAM_STORY_SCRIPT.pages[4].textArabic,
      textEnRight: IBN_HAYTHAM_STORY_SCRIPT.pages[3].textEnglish,
      textEnLeft: IBN_HAYTHAM_STORY_SCRIPT.pages[4].textEnglish
    },
    {
      pageNumber: 'صفحات ٦–٧',
      type: 'spread',
      title: 'صفحات ٦–٧: كيف نرى؟ ونظرية أشعة الشمس والعين',
      image: SPREADS[4]?.imagePath,
      textRight: IBN_HAYTHAM_STORY_SCRIPT.pages[5].textArabic,
      textLeft: IBN_HAYTHAM_STORY_SCRIPT.pages[6].textArabic,
      textEnRight: IBN_HAYTHAM_STORY_SCRIPT.pages[5].textEnglish,
      textEnLeft: IBN_HAYTHAM_STORY_SCRIPT.pages[6].textEnglish
    },
    {
      pageNumber: 'صفحات ٨–٩',
      type: 'spread',
      title: 'صفحات ٨–٩: الغرفة المظلمة وتكوّن الصورة المقلوبة',
      image: SPREADS[5]?.imagePath,
      textRight: IBN_HAYTHAM_STORY_SCRIPT.pages[7].textArabic,
      textLeft: IBN_HAYTHAM_STORY_SCRIPT.pages[8].textArabic,
      textEnRight: IBN_HAYTHAM_STORY_SCRIPT.pages[7].textEnglish,
      textEnLeft: IBN_HAYTHAM_STORY_SCRIPT.pages[8].textEnglish
    },
    {
      pageNumber: 'صفحات ١٠–١١',
      type: 'spread',
      title: 'صفحات ١٠–١١: تأليف كتاب المناظر واختراع الكاميرات',
      image: SPREADS[6]?.imagePath,
      textRight: IBN_HAYTHAM_STORY_SCRIPT.pages[9].textArabic,
      textLeft: IBN_HAYTHAM_STORY_SCRIPT.pages[10].textArabic,
      textEnRight: IBN_HAYTHAM_STORY_SCRIPT.pages[9].textEnglish,
      textEnLeft: IBN_HAYTHAM_STORY_SCRIPT.pages[10].textEnglish
    },
    {
      pageNumber: 'صفحات ١٢–١٣',
      type: 'spread',
      title: 'صفحات ١٢–١٣: العودة إلى المكتبة وتوارث المعرفة',
      image: SPREADS[7]?.imagePath,
      textRight: IBN_HAYTHAM_STORY_SCRIPT.pages[11].textArabic,
      textLeft: IBN_HAYTHAM_STORY_SCRIPT.pages[12].textArabic,
      textEnRight: IBN_HAYTHAM_STORY_SCRIPT.pages[11].textEnglish,
      textEnLeft: IBN_HAYTHAM_STORY_SCRIPT.pages[12].textEnglish
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/90 backdrop-blur-md p-4 sm:p-6 flex justify-center">
      {/* Modal Card */}
      <div className="bg-[#FAF6EE] w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden border-2 border-[#2F4B8A]/30 flex flex-col max-h-[92vh]">
        {/* Sticky Action Header */}
        <div className="sticky top-0 z-30 bg-[#FAF6EE]/95 border-b border-[#2F4B8A]/15 px-6 py-4 flex flex-wrap items-center justify-between gap-4 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2F4B8A] text-white flex items-center justify-center shadow-md">
              <BookOpen className="w-5 h-5 text-[#F2A93B]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-base sm:text-lg text-[#2F4B8A]">
                  تصدير النموذج الأولي الكامل للقصة (Complete Printable Story Dummy)
                </h2>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold border border-emerald-300">
                  مع النصوص المدمجة
                </span>
              </div>
              <p className="text-xs text-[#2F4B8A]/75 font-sans-story">
                احفظ الكتاب بالكامل كملف PDF واحد جاهز للطباعة والمراجعة أو حمّل السبريدات بنصوصها.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Print / Save as PDF Button */}
            <button
              onClick={handleBrowserPrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#2F4B8A] hover:bg-[#253d70] text-white text-xs sm:text-sm font-bold shadow-md transition cursor-pointer"
            >
              <Printer className="w-4 h-4 text-[#F2A93B]" />
              <span>طباعة / حفظ كملف PDF كامل</span>
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl border border-[#2F4B8A]/20 hover:bg-[#2F4B8A]/10 text-[#2F4B8A] transition cursor-pointer"
              title="إغلاق النافذة"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Pages Preview */}
        <div ref={printContainerRef} className="p-6 sm:p-8 overflow-y-auto space-y-12">
          {fullBookPages.map((page, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#2F4B8A]/20 shadow-md space-y-4 print:border-none print:shadow-none print:p-0 print:m-0 print:break-after-page"
            >
              {/* Header Info */}
              <div className="flex items-center justify-between pb-3 border-b border-[#2F4B8A]/15 text-xs text-[#2F4B8A]">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-[#2F4B8A] text-white font-bold text-xs">
                    {page.pageNumber}
                  </span>
                  <span className="font-bold text-sm text-[#8F550A]">{page.title}</span>
                </div>

                <div className="flex items-center gap-2 print:hidden">
                  <button
                    onClick={() =>
                      handleDownloadCompositeImage(
                        page.image,
                        page.isCover ? 'ابن الهيثم والغرفة المظلمة' : '',
                        page.textRight,
                        page.textLeft,
                        `nour-anas-${page.pageNumber.replace(/\s+/g, '-')}-with-text.jpg`
                      )
                    }
                    className="flex items-center gap-1 px-3 py-1 rounded-lg bg-[#FAF6EE] border border-[#2F4B8A]/30 hover:bg-[#F2A93B]/20 text-[#2F4B8A] font-bold text-xs transition cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-[#F2A93B]" />
                    <span>تحميل السبريد مدمجاً بالنص (JPG)</span>
                  </button>
                </div>
              </div>

              {/* Spread with Typeset Text Layout */}
              <div className="relative rounded-2xl overflow-hidden border border-[#2F4B8A]/20 shadow-inner bg-[#FAF6EE]">
                {/* Background Illustration */}
                <div className="relative w-full aspect-[16/9]">
                  <img
                    src={page.image}
                    alt={page.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />

                  {/* OVERLAID TYPESET ARABIC & ENGLISH TEXT */}
                  <div className="absolute inset-0 pointer-events-none p-4 sm:p-8 flex justify-between">
                    {/* LEFT ZONE TEXT (Read Second in RTL) */}
                    <div
                      className="w-[42%] flex flex-col justify-start text-center p-2 rounded-xl"
                      style={{ marginTop: '5%' }}
                    >
                      {page.isCover ? (
                        <div className="bg-[#FAF6EE]/85 backdrop-blur-[2px] p-4 rounded-2xl border border-[#F2A93B]/40 shadow-sm">
                          <h1 className="font-amiri font-bold text-xl sm:text-3xl text-[#2F4B8A] leading-tight drop-shadow-xs">
                            ابْنُ الهَيْثَمِ وَالغُرْفَةُ المُظْلِمَة
                          </h1>
                          <p className="font-fredoka text-xs sm:text-sm font-semibold text-[#8F550A] mt-1">
                            كَيْفَ نَرَى الأَشْيَاء؟
                          </p>
                        </div>
                      ) : (
                        page.textLeft && (
                          <div className="bg-[#FAF6EE]/90 backdrop-blur-[2px] p-3 sm:p-4 rounded-2xl border border-[#2F4B8A]/10 shadow-sm text-right">
                            <p
                              dir="rtl"
                              className="font-amiri text-xs sm:text-base font-bold text-[#2F4B8A] leading-relaxed whitespace-pre-line"
                            >
                              {page.textLeft}
                            </p>
                            {page.textEnLeft && (
                              <p className="font-sans-story text-[10px] sm:text-xs text-[#2F4B8A]/75 mt-2 pt-2 border-t border-[#2F4B8A]/10 text-left">
                                {page.textEnLeft}
                              </p>
                            )}
                          </div>
                        )
                      )}
                    </div>

                    {/* RIGHT ZONE TEXT (Read First in RTL) */}
                    <div
                      className="w-[42%] flex flex-col justify-start p-2 rounded-xl"
                      style={{ marginTop: '6%' }}
                    >
                      <div className="bg-[#FAF6EE]/90 backdrop-blur-[2px] p-3 sm:p-5 rounded-2xl border border-[#2F4B8A]/10 shadow-sm text-right">
                        <p
                          dir="rtl"
                          className="font-amiri text-xs sm:text-base font-bold text-[#2F4B8A] leading-relaxed whitespace-pre-line"
                        >
                          {page.textRight}
                        </p>
                        {page.textEnRight && (
                          <p className="font-sans-story text-[10px] sm:text-xs text-[#2F4B8A]/75 mt-2 pt-2 border-t border-[#2F4B8A]/10 text-left">
                            {page.textEnRight}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Interactive Corners & Parents Guide Printout */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#2F4B8A]/20 shadow-md space-y-6 print:break-before-page">
            <div className="flex items-center gap-2 pb-3 border-b border-[#2F4B8A]/15">
              <span className="px-2.5 py-1 rounded-lg bg-[#2E9E8F] text-white font-bold text-xs">
                صفحات ١٤–١٥
              </span>
              <h3 className="font-bold text-sm text-[#8F550A]">
                الأركان التفاعلية وملحق الوالدين المطبوع
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-4 bg-[#FAF6EE] rounded-2xl border border-[#2F4B8A]/15 space-y-2">
                <h4 className="font-bold text-sm text-[#2F4B8A]">
                  🔦 {IBN_HAYTHAM_STORY_SCRIPT.corners.tryItYourself.title}
                </h4>
                <p dir="rtl" className="font-amiri text-xs text-[#2F4B8A]/90 leading-relaxed">
                  {IBN_HAYTHAM_STORY_SCRIPT.corners.tryItYourself.description}
                </p>
                <div className="p-2 bg-amber-50 rounded-lg text-amber-950 font-bold">
                  {IBN_HAYTHAM_STORY_SCRIPT.corners.tryItYourself.discussionQuestion}
                </div>
              </div>

              <div className="p-4 bg-[#FAF6EE] rounded-2xl border border-[#2F4B8A]/15 space-y-2">
                <h4 className="font-bold text-sm text-[#2F4B8A]">📖 ملحق الوالدين والمربين</h4>
                {IBN_HAYTHAM_STORY_SCRIPT.corners.parentsGuide.prompts.map((p, i) => (
                  <p key={i} dir="rtl" className="font-amiri text-xs text-[#2F4B8A]/90 leading-relaxed">
                    • {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
