/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SPREADS, STORY_PRESETS } from './data/pictureBookData';
import { OverlayConfig, StoryTextConfig } from './types';
import { Header } from './components/Header';
import { SpreadCanvas } from './components/SpreadCanvas';
import { OverlayControls } from './components/OverlayControls';
import { StoryReaderView } from './components/StoryReaderView';
import { StoryBookReader } from './components/StoryBookReader';
import { ProductionProofingPanel } from './components/ProductionProofingPanel';
import { CharacterDossier } from './components/CharacterDossier';
import { PaletteStudio } from './components/PaletteStudio';
import { StoryEditor } from './components/StoryEditor';
import { PagesSequenceManager } from './components/PagesSequenceManager';
import { ScriptImporter } from './components/ScriptImporter';
import { FullBookPdfView } from './components/FullBookPdfView';
import { downloadOriginalImage } from './utils/exportTools';
import { Sparkles, Heart } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'canvas' | 'story' | 'pages' | 'importer' | 'proof' | 'characters' | 'palette'>('canvas');
  const [currentSpreadIndex, setCurrentSpreadIndex] = useState(0);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [magnifierActive, setMagnifierActive] = useState(false);
  const [showFullBookPdf, setShowFullBookPdf] = useState(false);

  // Print overlays
  const [overlays, setOverlays] = useState<OverlayConfig>({
    showSpine: true,
    showTrim: false,
    showTitleArea: false,
    showBarcodeArea: false,
    showCharacterMargins: false,
    showRayMotifGuide: false,
    showTextGuide: false
  });

  // Story text config
  const [storyConfig, setStoryConfig] = useState<StoryTextConfig>({
    titleArabic: STORY_PRESETS.ar.title,
    titleEnglish: STORY_PRESETS.en.title,
    storyArabic: STORY_PRESETS.ar.text,
    storyEnglish: STORY_PRESETS.en.text,
    fontSize: 'md',
    activeLanguage: 'bilingual',
    showOnSpread: false
  });

  const currentSpread = SPREADS[currentSpreadIndex] || SPREADS[0];

  const handleQuickDownload = () => {
    downloadOriginalImage(
      currentSpread.imagePath,
      `nour-anas-${currentSpread.id}-spread.jpg`
    );
  };

  const resetAllOverlays = () => {
    setOverlays({
      showSpine: false,
      showTrim: false,
      showTitleArea: false,
      showBarcodeArea: false,
      showCharacterMargins: false,
      showRayMotifGuide: false,
      showTextGuide: false
    });
  };

  return (
    <div className="min-h-screen bg-[#F5EFE1] text-[#2F4B8A] paper-grain flex flex-col justify-between selection:bg-[#F2A93B]/30 selection:text-[#2F4B8A]">
      {/* Top Header */}
      <div>
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          audioEnabled={audioEnabled}
          setAudioEnabled={setAudioEnabled}
          onQuickDownload={handleQuickDownload}
          onOpenFullBookPdf={() => setShowFullBookPdf(true)}
          spreadCount={SPREADS.length}
          currentSpreadIndex={currentSpreadIndex}
          onSelectSpread={setCurrentSpreadIndex}
        />

        {/* Full Book Printable PDF Modal */}
        {showFullBookPdf && (
          <FullBookPdfView onClose={() => setShowFullBookPdf(false)} />
        )}

        {/* Main Workspace Area */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
          {/* TAB 1: SPREAD CANVAS */}
          {activeTab === 'canvas' && (
            <div className="space-y-6">
              {/* Overlay Controls */}
              <OverlayControls
                overlays={overlays}
                setOverlays={setOverlays}
                magnifierActive={magnifierActive}
                setMagnifierActive={setMagnifierActive}
                resetAll={resetAllOverlays}
              />

              {/* Spread Canvas */}
              <SpreadCanvas
                spread={currentSpread}
                overlays={overlays}
                magnifierActive={magnifierActive}
                storyConfig={storyConfig}
              />

              {/* Story Typography Customizer */}
              <StoryEditor
                storyConfig={storyConfig}
                setStoryConfig={setStoryConfig}
              />
            </div>
          )}

          {/* TAB 2: STORY READER MODE (RTL COMPLETE BOOK) */}
          {activeTab === 'story' && (
            <StoryBookReader
              audioEnabled={audioEnabled}
            />
          )}

          {/* TAB 3: INTERIOR PAGES SEQUENCE MANAGER */}
          {activeTab === 'pages' && (
            <PagesSequenceManager
              spreads={SPREADS}
              currentSpreadIndex={currentSpreadIndex}
              onSelectSpread={(idx) => {
                setCurrentSpreadIndex(idx);
                setActiveTab('canvas');
              }}
              audioEnabled={audioEnabled}
            />
          )}

          {/* TAB 4: SCRIPT & PROMPTS IMPORTER */}
          {activeTab === 'importer' && (
            <ScriptImporter
              audioEnabled={audioEnabled}
            />
          )}

          {/* TAB 5: PRINT PROOFING */}
          {activeTab === 'proof' && (
            <ProductionProofingPanel spread={currentSpread} />
          )}

          {/* TAB 4: CHARACTER DOSSIER */}
          {activeTab === 'characters' && <CharacterDossier />}

          {/* TAB 5: 4-COLOR PALETTE STUDIO */}
          {activeTab === 'palette' && <PaletteStudio />}
        </main>
      </div>

      {/* Warm Picture Book Footer */}
      <footer className="mt-12 border-t border-[#2F4B8A]/15 bg-[#FAF6EE]/80 py-6 text-xs text-[#2F4B8A]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-amiri text-base font-bold text-[#2F4B8A]">نُور وَأَنَس وحِـبْر</span>
            <span>•</span>
            <span className="font-sans-story">
              Transparent Watercolor Series in 4 Limited Pigments: #F2A93B, #2F4B8A, #D9A66B, #2E9E8F
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[#8F550A] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#F2A93B]" />
            <span>Right-to-Left Picture Book Spread Studio</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
