import { SpreadItem, CharacterSpec, PaletteColor } from '../types';

export const SPREADS: SpreadItem[] = [
  {
    id: 'spread-pinhole-correct',
    pageNumber: 1,
    title: 'Spread 01: The Camera Obscura Discovery (Corrected)',
    arabicTitle: 'السبريد ١: اكتشاف الصندوق المظلم (القُمرة)',
    subtitle: 'Nour, Anas & Hibr outside the box observing the internal projection',
    imagePath: '/src/assets/images/pinhole_spread_correct_1791049448505.jpg',
    aspectRatio: '16:9',
    description:
      'The modest-sized wooden dark box (camera obscura) rests on the floor. A tiny pinhole lets in a ray of golden light, projecting the outer scene onto the opposite interior wall. Nour, Anas, and Hibr are all standing outside behind the box, looking down with wide-eyed curiosity.',
    sceneDetails: {
      leftZone: 'Nour, Anas and Hibr stand together OUTSIDE the modest-sized wooden box, peering over the top edge to watch the golden projection forming on the inner opposite wall.',
      rightZone: 'Clean cream watercolor paper, delicate amber-gold top ray motif, and soft vignette of Hibr in the lower-left area with ample text space.',
      magicalElement: 'Pinhole optics: amber light beam entering the small hole and projecting an inverted glowing image onto the inner wall.',
      spineClearance: 'Spine gutter (4%) completely free of characters and box geometry.'
    }
  },
  {
    id: 'spread-camera-obscura',
    pageNumber: 2,
    title: 'Spread 02: Ray of Amber & Inverted Light',
    arabicTitle: 'السبريد ٢: شعاع العنبر وتكوّن الصورة',
    subtitle: 'Alternative Watercolor Angle with Trio Looking In from Outside',
    imagePath: '/src/assets/images/camera_obscura_spread_1791049460241.jpg',
    aspectRatio: '16:9',
    description:
      'Atmospheric watercolor rendering showing the three companions standing outside the cedar pinhole box, observing the warm golden ray passing through the small aperture and casting light onto the interior.',
    sceneDetails: {
      leftZone: 'The three characters positioned fully outside the box, marveling at the scientific & magical optical phenomenon inside.',
      rightZone: 'Pristine paper texture, top amber filament, and lower-left kitten vignette with barcode reserve intact.',
      magicalElement: 'Golden optical projection connecting physical light with timeless wonder.',
      spineClearance: 'Preserved 4% vertical strip down the center binding.'
    }
  },
  {
    id: 'spread-1',
    pageNumber: 3,
    title: 'Spread 03: Radiant Discovery (Initial Concept)',
    arabicTitle: 'السبريد ٣: إشعاع الصندوق (المفهوم الأولي)',
    subtitle: 'Previous variation with glowing chest illumination',
    imagePath: '/src/assets/images/storybook_spread_1791046758939.jpg',
    aspectRatio: '16:9',
    description:
      'Initial dramatic watercolor spread showing the warm golden illumination radiating outward from the box opening.',
    sceneDetails: {
      leftZone: 'Characters clustered near the large illuminated chest.',
      rightZone: 'Cream paper background with top ray motif and Hibr vignette.',
      magicalElement: 'Amber-gold radiance (#F2A93B).',
      spineClearance: 'Central binding safe area respected.'
    }
  },
  {
    id: 'spread-2',
    pageNumber: 4,
    title: 'Spread 04: Soft Ambient Dust (Initial Concept B)',
    arabicTitle: 'السبريد ٤: غبار الضوء (المفهوم الأولي ب)',
    subtitle: 'Soft watercolor wash variation',
    imagePath: '/src/assets/images/book_cover_spread_1791046769561.jpg',
    aspectRatio: '16:9',
    description:
      'Early study focusing on paper texture, color bleeds, and ambient watercolor transparency.',
    sceneDetails: {
      leftZone: 'Warm atmospheric glow and golden light rays.',
      rightZone: 'Minimalist cream negative space.',
      magicalElement: 'Soft golden dust in the air.',
      spineClearance: 'Central gutter clearance maintained.'
    }
  }
];

export const CHARACTERS: CharacterSpec[] = [
  {
    name: 'Nour',
    arabicName: 'نـور',
    role: 'Elder Sister & Explorer',
    age: '6–7 years old',
    visualTraits: [
      'Round friendly face with warm wheat-toned skin',
      'Large, expressive brown dot-like eyes with gentle wonder',
      'Soft smile and delicate button nose',
      'Taller than Anas by a head'
    ],
    clothing: [
      {
        item: 'Soft Hijab',
        colorHex: '#2E9E8F',
        colorName: 'Turquoise Green',
        notes: 'Neatly frames her face, completely covering hair'
      },
      {
        item: 'Long-Sleeved Dress',
        colorHex: '#2F4B8A',
        colorName: 'Indigo Blue',
        notes: 'Floor-grazing watercolor wash with gentle folds'
      },
      {
        item: 'Dress Hem Accent',
        colorHex: '#D9A66B',
        colorName: 'Warm Sand',
        notes: 'Distinct decorative band along the lower hem'
      },
      {
        item: 'Shoes',
        colorHex: '#9C6F42',
        colorName: 'Light Brown Tint',
        notes: 'Simple rounded children shoes'
      }
    ],
    lore: 'Nour is observant, thoughtful, and instinctively notices the faint golden threads that hint at past memories. She guides Anas with calm patience.',
    quote: 'انظر يا أنس... هناك خيطٌ من نورٍ ذهبي يخرج من ثقب الصندوق!'
  },
  {
    name: 'Anas',
    arabicName: 'أنـس',
    role: 'Little Brother & Note-Keeper',
    age: '5 years old',
    visualTraits: [
      'Noticeably shorter than Nour (head reaches her shoulder)',
      'Short curly black hair with soft watercolor texture',
      'Small round spectacles resting on a round face',
      'Curious wide eyes behind his lenses and a gentle smile'
    ],
    clothing: [
      {
        item: 'Button-Up Shirt',
        colorHex: '#F2A93B',
        colorName: 'Amber Gold',
        notes: 'Vibrant amber tone mirroring the magical light'
      },
      {
        item: 'Trousers',
        colorHex: '#2F4B8A',
        colorName: 'Indigo Blue',
        notes: 'Sturdy trousers with soft ink outlines'
      },
      {
        item: 'Shoes',
        colorHex: '#9C6F42',
        colorName: 'Light Brown Tint',
        notes: 'Neat leather shoes'
      }
    ],
    prop: 'Small spiral notebook held firmly in hand to sketch their findings',
    lore: 'Anas records every peculiar detail in his pocket notebook. His round spectacles often catch the reflection of the golden beam.',
    quote: 'سأرسم شكل هذا الصندوق فوراً في دفتري الصغير!'
  },
  {
    name: 'Hibr',
    arabicName: 'حِـبـر',
    role: 'The Companion Cat (Ink)',
    age: 'Playful Kitten',
    visualTraits: [
      'Small sleek black cat rendered in layered indigo-black ink wash',
      'Large, luminous amber-gold eyes (#F2A93B)',
      'Long expressive tail with agile posture',
      'Mischievous, curious, affectionate expression'
    ],
    clothing: [
      {
        item: 'Coat',
        colorHex: '#1B263B',
        colorName: 'Deep Ink Black',
        notes: 'Delicate ink line with soft watercolor transparency'
      },
      {
        item: 'Eyes',
        colorHex: '#F2A93B',
        colorName: 'Luminous Amber Gold',
        notes: 'Matches the series magical light frequency'
      }
    ],
    lore: 'Named "Hibr" (Arabic for Ink) after a calligrapher’s inkwell. Hibr detects the magical threshold before anyone else and curls up near ancient artifacts.',
    quote: 'مياو... (عيناه تتوهجان بلون الذهب الدافئ)'
  }
];

export const PALETTE: PaletteColor[] = [
  {
    name: 'Amber Gold',
    arabicName: 'الذهب العنبري',
    hex: '#F2A93B',
    rgb: 'rgb(242, 169, 59)',
    cmyk: 'C:0 M:38 Y:85 K:0',
    symbolism: 'The series magical light. Appears exclusively where the story crosses between present and past, and as a thread connecting characters.',
    usage: ['Magical light beams', 'Box aperture glow', "Anas's shirt", "Hibr's glowing eyes", 'Top ray motif on right page'],
    tints: ['#F2A93B', '#F5BC66', '#F8CF91', '#FCE2BD']
  },
  {
    name: 'Indigo Blue',
    arabicName: 'الأزرق النيلي',
    hex: '#2F4B8A',
    rgb: 'rgb(47, 75, 138)',
    cmyk: 'C:85 M:65 Y:15 K:20',
    symbolism: 'Depth, twilight shadows, grounding stability, and quiet ink outlines.',
    usage: ["Nour's long-sleeved dress", "Anas's trousers", 'Gentle watercolor shadows', 'Hibr dark tones'],
    tints: ['#2F4B8A', '#4F6BA6', '#728DC2', '#9DB1DE']
  },
  {
    name: 'Warm Sand',
    arabicName: 'رمل دافئ',
    hex: '#D9A66B',
    rgb: 'rgb(217, 166, 107)',
    cmyk: 'C:15 M:35 Y:65 K:5',
    symbolism: 'Earth, ancient mudbrick buildings, carved cedar wood, and warm timeless memories.',
    usage: ['Wooden box structure', "Nour's dress hem accent", 'Floor & terrain washes', 'Old storybook paper tint'],
    tints: ['#D9A66B', '#E2B887', '#ECCBA5', '#F5DEC3']
  },
  {
    name: 'Turquoise Green',
    arabicName: 'الأخضر الفيروزي',
    hex: '#2E9E8F',
    rgb: 'rgb(46, 158, 143)',
    cmyk: 'C:70 M:10 Y:45 K:10',
    symbolism: 'Water, life, spring leaves, freshness, and protection.',
    usage: ["Nour's framing hijab", 'Potted plants', 'Oasis streams', 'Fresh botanical touches'],
    tints: ['#2E9E8F', '#4AB4A6', '#6FCCC0', '#9BE2D9']
  }
];

export const PRINT_SPECIFICATIONS = [
  {
    category: 'Composition & Safe Areas',
    rule: 'Right-to-Left (RTL) Reading Flow',
    status: 'Pass',
    detail: 'Right half read first (intro & text reserve), Left half holds the dramatic climax (peeking over glowing box).'
  },
  {
    category: 'Composition & Safe Areas',
    rule: 'Spine Gutter Clearance (4%)',
    status: 'Pass',
    detail: 'The central vertical strip (4% width) is completely free of faces, eyes, and critical elements for safe bookbinding.'
  },
  {
    category: 'Composition & Safe Areas',
    rule: 'Trim & Bleed Safe Zone (94%W x 90%H)',
    status: 'Pass',
    detail: 'All vital content remains safely within 94% width and 90% height to survive mechanical blade trimming.'
  },
  {
    category: 'Composition & Safe Areas',
    rule: 'Character Margin Clearance (>=15%)',
    status: 'Pass',
    detail: 'Nour, Anas, and Hibr are centered in the left zone, >=15% away from both left edge and central fold.'
  },
  {
    category: 'Typography Safe Zones',
    rule: 'Left Zone Title Reserve (Top 28%)',
    status: 'Pass',
    detail: 'Top 28% of the left page is reserved as unblemished cream watercolor paper for book title placement.'
  },
  {
    category: 'Typography Safe Zones',
    rule: 'Right Zone Text Reserve',
    status: 'Pass',
    detail: 'Expansive quiet cream paper for narrative paragraphs with no harsh boxes or artificial frames.'
  },
  {
    category: 'Commercial Standards',
    rule: 'Barcode Space Reserve (15%W x 12%H)',
    status: 'Pass',
    detail: 'Bottom-right corner of right page kept completely pristine and unpainted for ISBN/barcode sticker.'
  },
  {
    category: 'Aesthetic & Palette',
    rule: 'Strict 4-Color Limited Palette',
    status: 'Pass',
    detail: 'Zero red, orange, purple, or pink. 100% adherence to Amber Gold, Indigo Blue, Warm Sand, and Turquoise Green.'
  },
  {
    category: 'Art Style Verification',
    rule: 'Transparent Watercolor & Fine Ink',
    status: 'Pass',
    detail: 'Visible fine paper grain, delicate black ink contour lines, hand-painted wash bleeds, child-friendly dot eyes.'
  }
];

export const STORY_PRESETS = {
  ar: {
    title: 'نُـورٌ وَأَنَـس: سِـرُّ القُـمْرَةِ وَالصُّنـدُوقِ العَجِـيب',
    subtitle: 'حِكَايَةٌ عَن الضَّوْءِ وَتَكَوُّنِ الصُّوَر',
    text: 'وَقَفَتْ «نُور» وَبِجَانِبِهَا «أَنَس» وَالقِطُّ «حِبْر» خَارِجَ الصُّنْدُوقِ الخَشَبِيِّ الصَّغِير، يَنْظُرُونَ فِي دَهْشَةٍ بَالِغَة.\n\nكَانَ ثَقْبٌ صَغِيرٌ فِي جِدَارِ الصُّنْدُوقِ يَمُرُّ مِنهُ شُعَاعٌ دَافِئٌ مِنَ الضَّوْءِ الذَّهَبِيّ، لِيَعْكِسَ صُورَةَ العَالَمِ الخَارِجِيِّ مَقْلُوبَةً عَلَى الجِدَارِ الدَّاخِلِيِّ المُقَابِل!\n\nفَتَحَ «أَنَس» دَفْتَرَهُ بِسُرْعَةٍ وَقَالَ: «انْظُرِي يَا نُور! الضَّوْءُ يَرْسُمُ الصُّورَةَ بِدَاخِلِ الصُّنْدُوقِ تَمَاماً كَمَا فَعَلَ ابْنُ الهَيْثَم!»'
  },
  en: {
    title: 'Nour & Anas: The Secret of the Camera Obscura',
    subtitle: 'How Light Paints an Image Inside the Box',
    text: 'Outside the cedar box, Nour, little Anas, and Hibr the cat leaned in together with wide-eyed curiosity.\n\nThrough a tiny pinhole on the side, a warm amber-gold beam of light pierced into the dark chamber, magically projecting the scene from outside onto the opposite inner wall.\n\nAnas eagerly opened his notebook: "Look, Nour! The light is painting a picture on the inside wall—just like the ancient experiment of the dark room!"'
  }
};
