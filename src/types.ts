export interface SpreadItem {
  id: string;
  pageNumber: number;
  title: string;
  arabicTitle: string;
  subtitle: string;
  imagePath: string;
  aspectRatio: string;
  description: string;
  promptUsed?: string;
  sceneDetails: {
    leftZone: string;
    rightZone: string;
    magicalElement: string;
    spineClearance: string;
  };
}

export interface CharacterSpec {
  name: string;
  arabicName: string;
  role: string;
  age: string;
  visualTraits: string[];
  clothing: {
    item: string;
    colorHex: string;
    colorName: string;
    notes: string;
  }[];
  prop?: string;
  lore: string;
  quote: string;
}

export interface PaletteColor {
  name: string;
  arabicName: string;
  hex: string;
  rgb: string;
  cmyk: string;
  symbolism: string;
  usage: string[];
  tints: string[];
}

export interface OverlayConfig {
  showSpine: boolean;
  showTrim: boolean;
  showTitleArea: boolean;
  showBarcodeArea: boolean;
  showCharacterMargins: boolean;
  showRayMotifGuide: boolean;
  showTextGuide: boolean;
}

export interface StoryTextConfig {
  titleArabic: string;
  titleEnglish: string;
  storyArabic: string;
  storyEnglish: string;
  fontSize: 'sm' | 'md' | 'lg';
  activeLanguage: 'ar' | 'en' | 'bilingual';
  showOnSpread: boolean;
}
