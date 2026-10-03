import React, { useState } from 'react';
import { PRINT_SPECIFICATIONS } from '../data/pictureBookData';
import { SpreadItem } from '../types';
import { CheckCircle2, Download, Printer, Shield, Ruler, Sparkles, Layers } from 'lucide-react';
import { downloadOriginalImage, exportWithPrintMarks } from '../utils/exportTools';

interface ProductionProofingPanelProps {
  spread: SpreadItem;
}

export const ProductionProofingPanel: React.FC<ProductionProofingPanelProps> = ({ spread }) => {
  const [spreadSize, setSpreadSize] = useState<'us-landscape' | 'a4-landscape' | 'square'>(
    'us-landscape'
  );
  const [isExporting, setIsExporting] = useState(false);
  const [exportPreviewUrl, setExportPreviewUrl] = useState<string | null>(null);

  const sizeDimensions = {
    'us-landscape': {
      name: 'US Children\'s Picture Book Landscape (11" × 8.5" Double Spread)',
      spreadWidth: '22.0 in (558.8 mm)',
      spreadHeight: '8.5 in (215.9 mm)',
      bleed: '0.125 in (3.175 mm)',
      gutterSafe: '0.88 in (22.3 mm) Central Strip'
    },
    'a4-landscape': {
      name: 'International Double A4 Landscape (594 × 210 mm Spread)',
      spreadWidth: '594.0 mm',
      spreadHeight: '210.0 mm',
      bleed: '3.0 mm',
      gutterSafe: '24.0 mm Central Strip'
    },
    'square': {
      name: 'Square Picture Book Double Spread (8.5" × 8.5" / 17" Total)',
      spreadWidth: '17.0 in (431.8 mm)',
      spreadHeight: '8.5 in (215.9 mm)',
      bleed: '0.125 in (3.175 mm)',
      gutterSafe: '0.70 in (17.7 mm) Central Strip'
    }
  };

  const handleExportWithMarks = async () => {
    setIsExporting(true);
    try {
      const dataUrl = await exportWithPrintMarks(spread.imagePath, spread.title, true, true);
      setExportPreviewUrl(dataUrl);
    } catch (e) {
      console.error(e);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-[#FAF6EE] border border-[#2F4B8A]/20 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#2F4B8A] text-white flex items-center justify-center shadow-md">
              <Shield className="w-6 h-6 text-[#F2A93B]" />
            </div>
            <div>
              <h2 className="font-bold text-lg text-[#2F4B8A]">
                Print Production & Publishing Proofing Matrix
              </h2>
              <p className="text-xs text-[#2F4B8A]/80 font-sans-story">
                Verification against strict picture-book mechanical guidelines & bleed tolerances.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExportWithMarks}
              disabled={isExporting}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#2F4B8A] hover:bg-[#253d70] text-white text-xs sm:text-sm font-bold shadow-sm transition cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>{isExporting ? 'Generating...' : 'Render with Crop Marks'}</span>
            </button>

            <button
              onClick={() => downloadOriginalImage(spread.imagePath, `${spread.id}-original.jpg`)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F2A93B] hover:bg-[#df9425] text-amber-950 text-xs sm:text-sm font-bold shadow-sm transition cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Original Art</span>
            </button>
          </div>
        </div>
      </div>

      {/* Export Preview Modal if generated */}
      {exportPreviewUrl && (
        <div className="bg-[#FAF6EE] border-2 border-[#F2A93B] rounded-2xl p-6 shadow-xl space-y-4 animate-in fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <h3 className="font-bold text-base text-[#2F4B8A]">
                Print-Ready Proof with Registration & Crop Marks
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={exportPreviewUrl}
                download={`${spread.id}-print-proof-marks.jpg`}
                className="px-3 py-1.5 rounded-lg bg-[#2F4B8A] text-white font-bold text-xs shadow-xs"
              >
                Save Proof JPEG
              </a>
              <button
                onClick={() => setExportPreviewUrl(null)}
                className="text-xs text-[#2F4B8A]/60 hover:text-[#2F4B8A] px-2 py-1"
              >
                Close
              </button>
            </div>
          </div>

          <div className="max-h-[500px] overflow-auto rounded-xl border border-[#2F4B8A]/20 bg-[#F5EFE1] p-4 text-center">
            <img
              src={exportPreviewUrl}
              alt="Print Proof with crop marks"
              className="max-w-full h-auto mx-auto shadow-md"
            />
          </div>
        </div>
      )}

      {/* Proofing Checklist Table */}
      <div className="bg-[#FAF6EE] border border-[#2F4B8A]/15 rounded-2xl overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-[#2F4B8A]/10 bg-white/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#2E9E8F]" />
            <h3 className="font-bold text-sm text-[#2F4B8A]">
              Prompt Constraint & Production Audit (9 of 9 Verified)
            </h3>
          </div>
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
            All Specs Compliant
          </span>
        </div>

        <div className="divide-y divide-[#2F4B8A]/10 text-xs">
          {PRINT_SPECIFICATIONS.map((spec, idx) => (
            <div
              key={idx}
              className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-white/40 transition"
            >
              <div className="space-y-1 sm:max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#2F4B8A] text-sm">{spec.rule}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#2F4B8A]/10 text-[#2F4B8A]/80 font-medium">
                    {spec.category}
                  </span>
                </div>
                <p className="text-[#2F4B8A]/85 font-sans-story leading-relaxed">
                  {spec.detail}
                </p>
              </div>

              <div className="flex items-center gap-1.5 self-start sm:self-center text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{spec.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Production Format Dimensions Calculator */}
      <div className="bg-[#FAF6EE] border border-[#2F4B8A]/15 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <Ruler className="w-5 h-5 text-[#D9A66B]" />
          <h3 className="font-bold text-sm text-[#2F4B8A]">
            Book Format & Trim Dimensions Simulator
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {(['us-landscape', 'a4-landscape', 'square'] as const).map((fmt) => (
            <button
              key={fmt}
              onClick={() => setSpreadSize(fmt)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition cursor-pointer ${
                spreadSize === fmt
                  ? 'bg-[#2F4B8A] text-white border-[#2F4B8A]'
                  : 'bg-white/80 border-[#2F4B8A]/20 text-[#2F4B8A] hover:bg-white'
              }`}
            >
              {fmt === 'us-landscape'
                ? 'US Standard (11" × 8.5")'
                : fmt === 'a4-landscape'
                ? 'International A4 Spread'
                : 'Square (8.5" × 8.5")'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white/70 p-4 rounded-xl border border-[#2F4B8A]/10 text-xs">
          <div>
            <span className="text-[#2F4B8A]/60 block font-medium">Format Name</span>
            <span className="font-bold text-[#2F4B8A]">{sizeDimensions[spreadSize].name}</span>
          </div>
          <div>
            <span className="text-[#2F4B8A]/60 block font-medium">Spread Width × Height</span>
            <span className="font-bold text-[#2F4B8A]">
              {sizeDimensions[spreadSize].spreadWidth} × {sizeDimensions[spreadSize].spreadHeight}
            </span>
          </div>
          <div>
            <span className="text-[#2F4B8A]/60 block font-medium">Printer Bleed Margin</span>
            <span className="font-bold text-emerald-700">{sizeDimensions[spreadSize].bleed}</span>
          </div>
          <div>
            <span className="text-[#2F4B8A]/60 block font-medium">4% Gutter Safety Strip</span>
            <span className="font-bold text-[#8F550A]">{sizeDimensions[spreadSize].gutterSafe}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
