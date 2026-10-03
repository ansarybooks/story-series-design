import { SpreadItem, CharacterSpec, PaletteColor } from '../types';

export const SPREADS: SpreadItem[] = [
  {
    id: 's01-cover',
    pageNumber: 0,
    title: 'Cover Spread: The Golden Chest & Pinhole (Landscape 4:3)',
    arabicTitle: 'الغلاف الممتد: ابن الهيثم والغرفة المظلمة',
    subtitle: 'Nour, Anas & Hibr outside the box observing the camera obscura',
    imagePath: '/src/assets/images/pinhole_spread_correct_1791049448505.jpg',
    aspectRatio: '16:9',
    description:
      'Nour, Anas, and Hibr are all standing outside the antique wooden box watching the golden light beam project onto the inner wall. Back cover on the right has clean space for summary and barcode.',
    sceneDetails: {
      leftZone: 'Nour, Anas and Hibr stand OUTSIDE the box, looking down at the inner projection.',
      rightZone: 'Minimalist cream watercolor wash, top ray motif, and lower-left kitten vignette.',
      magicalElement: 'Amber-gold radiance (#F2A93B) connecting across centuries.',
      spineClearance: 'Spine fold area kept completely clear of faces.'
    }
  },
  {
    id: 's01-p01',
    pageNumber: 1,
    title: 'Page 1: The Library Discovery & Pinhole Box (Portrait 3:4)',
    arabicTitle: 'صفحة ١: العثور على الصندوق ذي الثقب في المكتبة',
    subtitle: 'Nour, Anas with notebook, and Hibr calling by the box',
    imagePath: '/src/assets/images/p01_library_box_1791052921743.jpg',
    aspectRatio: '3:4',
    description:
      'In an old cozy library, Nour bends toward the wooden box with a small hole. Anas holds his notebook asking what it is, and Hibr meows as a ray of golden light emerges.',
    sceneDetails: {
      leftZone: 'Single page portrait: scene in lower 60%, top 38% empty cream paper for text.',
      rightZone: 'N/A (Single vertical portrait page).',
      magicalElement: 'Golden light ray emerging from the pinhole.',
      spineClearance: 'Safe margins inside 84% width and 92% height.'
    }
  },
  {
    id: 's01-p02-03',
    pageNumber: 2,
    title: 'Pages 2–3: Meeting Ibn Haytham in Basra (Spread 4:3)',
    arabicTitle: 'صفحات ٢–٣: لقاء الحسن بن الهيثم في بساتين البصرة',
    subtitle: 'Ibn Haytham welcoming Nour & Hibr across temporal light',
    imagePath: '/src/assets/images/p02_03_basra_river_1791052934815.jpg',
    aspectRatio: '4:3',
    description:
      'Ibn Haytham welcomes them by the palm grove of Basra. Nour and Hibr arrive surrounded by the gentle amber aura of the portal.',
    sceneDetails: {
      leftZone: 'Nour and Hibr arriving in wonder with faint amber glow in the lower left.',
      rightZone: 'Ibn Haytham standing warmly welcoming on the right bank in sand robe and turban.',
      magicalElement: 'Amber temporal glow connecting present and 11th century.',
      spineClearance: '4% central vertical strip kept clear.'
    }
  },
  {
    id: 's01-p04-05',
    pageNumber: 4,
    title: 'Pages 4–5: The Nile, Aswan & Learning from Mistakes (Spread 4:3)',
    arabicTitle: 'صفحات ٤–٥: نهر النيل ومراكبه وأسوان والاعتراف بالخطأ',
    subtitle: 'Hopeful on the Nile, and humble realization in rocky Aswan',
    imagePath: '/src/assets/images/p04_05_nile_aswan_1791054654042.jpg',
    aspectRatio: '4:3',
    description:
      'Right page: Ibn Haytham on the Nile bank with sailboats, hopeful hand raised, Nour and Hibr beside him. Left page: Ibn Haytham in rocky Aswan realizing the task is harder and smiling with humility.',
    sceneDetails: {
      leftZone: 'Ibn Haytham on a rock in Aswan with thoughtful pose, learning from his mistake.',
      rightZone: 'The Nile at midday with wooden sailboats; Ibn Haytham, Nour, and Hibr watching.',
      magicalElement: 'Turquoise river wash (#2E9E8F) and courage to admit errors.',
      spineClearance: 'Fold completely clear between the two moments.'
    }
  },
  {
    id: 's01-p06-07',
    pageNumber: 6,
    title: 'Pages 6–7: Quiet Home & How Do We See? (Spread 4:3)',
    arabicTitle: 'صفحات ٦–٧: كيف نرى؟ ونظرية أشعة الشمس والعين',
    subtitle: 'Ibn Haytham contemplating vision theories in his quiet home',
    imagePath: '/src/assets/images/p06_07_home_theory_1791054665502.jpg',
    aspectRatio: '4:3',
    description:
      'In his quiet sand-colored home, Ibn Haytham ponders vision by the window. Nour listens and Hibr rests near them. Two soft picture bubbles depict the ancient ray theory versus the incoming light truth.',
    sceneDetails: {
      leftZone: 'Picture bubble showing outgoing ray theory versus incoming light rays.',
      rightZone: 'Ibn Haytham thinking by the window, Nour listening, Hibr curled up.',
      magicalElement: 'Truth of light entering the eyes from outside.',
      spineClearance: 'Lower 58% height scene, central gutter clear.'
    }
  },
  {
    id: 's01-p08-09',
    pageNumber: 8,
    title: 'Pages 8–9: The Camera Obscura Dark Room (Spread 4:3)',
    arabicTitle: 'صفحات ٨–٩: الغرفة المظلمة وانعكاس الصورة المقلوبة',
    subtitle: 'Light travels in straight lines — inverted minaret experiment',
    imagePath: '/src/assets/images/p08_09_dark_room_1791052949280.jpg',
    aspectRatio: '4:3',
    description:
      'Inside the dark indigo room, a narrow golden beam enters through the pinhole, projecting an inverted image of the house and minaret onto the opposite wall. Nour laughs and Ibn Haytham explains.',
    sceneDetails: {
      leftZone: 'Opposite wall showing inverted minaret and house; Nour laughing with raised hands.',
      rightZone: 'Right wall with round pinhole beam entering; Ibn Haytham pointing gently; Hibr looking.',
      magicalElement: 'Optical straight-line amber beam forming inverted image.',
      spineClearance: 'Central 4% gutter clear of faces.'
    }
  },
  {
    id: 's01-p10-11',
    pageNumber: 10,
    title: 'Pages 10–11: Kitab al-Manazir & Camera Inventions (Spread 4:3)',
    arabicTitle: 'صفحات ١٠–١١: تأليف كتاب المناظر واختراع الكاميرات',
    subtitle: 'Writing with reed pen, connected by golden thread to modern cameras',
    imagePath: '/src/assets/images/p10_11_manazir_camera_1791054675706.jpg',
    aspectRatio: '4:3',
    description:
      'Right page: Ibn Haytham writing Kitab al-Manazir with a reed pen, candle, and pinhole box; Nour and Hibr watching. Left page: an antique wooden box camera beside a modern smartphone, linked by an amber light thread.',
    sceneDetails: {
      leftZone: 'Vignette of antique box camera and modern phone with glowing amber thread.',
      rightZone: 'Ibn Haytham writing at desk, candle, pinhole box, Nour and Hibr watching.',
      magicalElement: 'Golden thread connecting 11th-century optics to 21st-century cameras.',
      spineClearance: 'Thread crosses clear of faces and fold.'
    }
  },
  {
    id: 's01-p12-13',
    pageNumber: 12,
    title: 'Pages 12–13: Return to Library & Passing Knowledge (Spread 4:3)',
    arabicTitle: 'صفحات ١٢–١٣: العودة للمكتبة وتوارث المعرفة',
    subtitle: 'Nour tells Anas as knowledge passes generation to generation',
    imagePath: '/src/assets/images/p12_13_corrected_1791054690177.jpg',
    aspectRatio: '4:3',
    description:
      'Back in the cozy library, Nour tells the story to Anas, who listens wide-eyed and writes in his notebook. The golden thread passes from the box to Nour to Anas. Hibr the cat sits on a high shelf whispering.',
    sceneDetails: {
      leftZone: 'Calm wooden bookshelves with turquoise, indigo, sand and amber book spines; Hibr the cat on shelf.',
      rightZone: 'Nour narrating, Anas sketching in notebook, glowing box on table passing golden thread.',
      magicalElement: 'Golden light thread passing knowledge to Anas.',
      spineClearance: 'Spine fold completely clear.'
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
  },
  {
    name: 'Ibn Haytham',
    arabicName: 'الحَسَن ابْن الهَيْثَم',
    role: '11th-Century Scholar & Father of Modern Optics',
    age: 'Mid-Forties / Fifties',
    visualTraits: [
      'Kind scholar face with calm warm eyes and gentle smile',
      'Short neat gray beard and mustache',
      'Simple sand-colored (#D9A66B) turban',
      'Never depicted in blue: earth-brown or sand robe with indigo trim'
    ],
    clothing: [
      {
        item: 'Scholar Turban',
        colorHex: '#D9A66B',
        colorName: 'Warm Sand',
        notes: 'Classic 11th-century turban wrapped neatly'
      },
      {
        item: 'Long Outer Robe',
        colorHex: '#9C6F42',
        colorName: 'Earth-Toned Sand-Brown',
        notes: 'Always earth or sand, strictly never blue'
      },
      {
        item: 'Robe Trim & Lapels',
        colorHex: '#2F4B8A',
        colorName: 'Indigo Blue',
        notes: 'Delicate indigo border along the opening and cuffs'
      }
    ],
    prop: 'Reed pen and Kitab al-Manazir manuscript',
    lore: 'Born in Basra over a thousand years ago. He was an inquisitive thinker who tested every hypothesis with practical experiments. Creator of the camera obscura concept and author of Kitab al-Manazir.',
    quote: '«الضوء يسير في خطوط مستقيمة... وكلنا نخطئ، والخطأ بابٌ من أبواب التعلم!»'
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

export const IBN_HAYTHAM_STORY_SCRIPT = {
  series: 'مكتبة النور الصغيرة — حكايات الاكتشاف (٤–٧ سنوات)',
  storyTitle: 'ابن الهيثم والغرفة المظلمة',
  storySubtitle: 'كيف نرى الأشياء؟ وسر الضوء الذي يسير في خطوط مستقيمة',
  author: 'الحسن بن الهيثم',
  pages: [
    {
      page: 1,
      type: 'portrait',
      textArabic: 'فِي مَكْتَبَةٍ قَدِيمَة، وَجَدَتْ «نُور» صُنْدُوقاً صَغِيراً فِيهِ ثَقْب.\nوَسَأَلَهَا أَخُوهَا الصَّغِير «أَنَس»: مَا هَذَا يَا نُور؟\nجَاءَهَا قِطٌّ اسْمُهُ «حِبْر» وَمَوَاء: «انْظُرِي مِنَ الثَّقْب!»',
      textEnglish: 'In an old cozy library, Nour found a small wooden box with a round hole. Her little brother Anas asked: "What is this, Nour?" Hibr the cat meowed: "Look through the hole!"',
      note: 'ضوء ذهبي يخرج من ثقب الصندوق'
    },
    {
      page: 2,
      type: 'spread-right',
      textArabic: 'نَظَرَتْ نُور مِنَ الثَّقْبِ فَرَأَتْ صَحْرَاءَ وَنَهْراً كَبِيراً، وَأَمَامَهَا رَجُلٌ طَيِّبُ الوَجْهِ يَبْتَسِم:\n«أَنَا الحَسَنُ ابْنُ الهَيْثَم. هَلْ تُحِبِّينَ الأَسْئِلَة؟»',
      textEnglish: 'Looking through the hole, Nour saw a desert and a wide river. Before her stood a kind smiling man: "I am Al-Hasan Ibn al-Haytham. Do you love questions?"',
      note: 'لقاء ابن الهيثم في بساتين البصرة'
    },
    {
      page: 3,
      type: 'spread-left',
      textArabic: 'وُلِدَ ابْنُ الهَيْثَمِ قَبْلَ أَكْثَرَ مِنْ أَلْفِ سَنَةٍ فِي مَدِينَةِ البَصْرَة.\nكَانَ طِفْلاً يَسْأَل: «لِمَاذَا؟ وَكَيْف؟» وَلَا يَكْتَفِي بِالجَوَابِ الأَوَّل.',
      textEnglish: 'Ibn al-Haytham was born over a thousand years ago in Basra. As a boy, he always asked "Why?" and "How?" and was never satisfied with simple answers.',
      note: 'طفولة ابن الهيثم وفضوله'
    },
    {
      page: 4,
      type: 'spread-right',
      textArabic: 'ثُمَّ سَافَرَ إِلَى مِصْر، وَأَحَبَّ نَهْرَهَا العَظِيم.\nيُحْكَى أَنَّهُ قَالَ: «أَسْتَطِيعُ تَنْظِيمَ فَيَضَانِ النِّيل!»',
      textEnglish: 'He traveled to Egypt and fell in love with the great Nile. It is said he believed he could regulate its mighty annual flood.',
      note: 'نهر النيل ومراكب شراعية'
    },
    {
      page: 5,
      type: 'spread-left',
      textArabic: 'لَكِنَّهُ ذَهَبَ إِلَى أَسْوَانَ وَنَظَرَ وَفَكَّر، فَعَرَفَ أَنَّ الأَمْرَ أَصْعَبُ مِمَّا ظَنّ.\nقَالَ بِشَجَاعَة: «لَقَدْ أَخْطَأْت، وَسَأَتَعَلَّمُ مِنْ خَطَئِي!»',
      textEnglish: 'But in Aswan, upon observing the terrain, he realized the task was far greater than he imagined. Bravely he admitted: "I made a mistake, and I will learn from it!"',
      note: 'شجاعة الاعتراف بالخطأ والتعلم منه'
    },
    {
      page: 6,
      type: 'spread-right',
      textArabic: 'أَمْضَى ابْنُ الهَيْثَمِ بَعْدَهَا وَقْتاً هَادِئاً فِي بَيْتِه،\nوَهُنَاكَ بَدَأَ سُؤَالُهُ الكَبِير: كَيْفَ نَرَى الأَشْيَاء؟',
      textEnglish: 'Ibn al-Haytham then spent quiet contemplative days in his home, where his greatest question took root: How do we see the world around us?',
      note: 'التفكير والتأمل الهادئ'
    },
    {
      page: 7,
      type: 'spread-left',
      textArabic: 'كَانَ النَّاسُ يَقُولُونَ قَدِيماً إِنَّ عُيُونَنَا تُرْسِلُ أَشِعَّةً تَلْمَسُ الأَشْيَاء.\nلَكِنَّ ابْنَ الهَيْثَمِ سَأَل: «هَلْ نَرَى فِي الظَّلَامِ إِذَاً؟ لَا! فَلَا بُدَّ أَنَّ الضَّوْءَ هُوَ الَّذِي يَأْتِي إِلَيْنَا.»',
      textEnglish: 'People long ago believed our eyes shot beams to touch objects. But Ibn al-Haytham reasoned: "Do we see in pitch darkness then? No! Light must be traveling to our eyes from outside."',
      note: 'دحض نظرية الرؤية القديمة بالمنطق'
    },
    {
      page: 8,
      type: 'spread-right',
      textArabic: 'أَغْلَقَ نَوَافِذَ غُرْفَتِه، وَتَرَكَ ثَقْباً صَغِيراً فِي الجِدَار.\nفَظَهَرَتْ عَلَى الحَائِطِ صُورَةُ الشَّارِع، لَكِنَّهَا مَقْلُوبَة!',
      textEnglish: 'He darkened his room completely and left only a tiny pinhole in the wall. Behold—on the opposite wall appeared the street outside, projected upside down!',
      note: 'الغرفة المظلمة والصورة المقلوبة'
    },
    {
      page: 9,
      type: 'spread-left',
      textArabic: 'ضَحِكَتْ نُور: «الدُّنْيَا تَمْشِي عَلَى رَأْسِهَا!»\nفَقَالَ ابْنُ الهَيْثَم: «الضَّوْءُ يَسِيرُ فِي خُطُوطٍ مُسْتَقِيمَة، وَلِهَذَا انْقَلَبَتِ الصُّورَة.»',
      textEnglish: 'Nour laughed: "The world is standing on its head!" Ibn al-Haytham smiled: "Light travels in straight lines, and that is why the rays cross and the image turns upside down."',
      note: 'قانون سير الضوء في خطوط مستقيمة'
    },
    {
      page: 10,
      type: 'spread-right',
      textArabic: 'كَتَبَ ابْنُ الهَيْثَمِ مَا تَعَلَّمَهُ فِي كِتَابٍ اسْمُهُ «كِتَابُ المَنَاظِر»،\nوَقَدْ جَرَّبَ فِيهِ كُلَّ فِكْرَةٍ بِنَفْسِهِ قَبْلَ أَنْ يَكْتُبَهَا.',
      textEnglish: 'Ibn al-Haytham recorded his findings in his landmark book "Kitab al-Manazir" (The Book of Optics), proving every principle through experiments before penning it down.',
      note: 'تأليف كتاب المناظر والمنهج التجريبي'
    },
    {
      page: 11,
      type: 'spread-left',
      textArabic: 'بَعْدَ مِئَاتِ السِّنِين، قَرَأَ العُلَمَاءُ فِي العَالَمِ كِتَابَهُ وَتَعَلَّمُوا مِنْه،\nوَسَاعَدَتْ أَفْكَارُهُ عَلَى صُنْعِ الكَامِيرَاتِ وَالهَوَاتِفِ الحَدِيثَة.',
      textEnglish: 'Centuries later, scholars across the globe studied his treatise, using his principles of the dark room (camera obscura) to invent modern cameras and optical sensors.',
      note: 'توارث العلم واختراع الكاميرات'
    },
    {
      page: 12,
      type: 'spread-right',
      textArabic: 'عَادَتْ نُور إِلَى المَكْتَبَةِ وَفِي قَلْبِهَا سُؤَالٌ جَدِيد.\nفَأَمْسَكَ أَنَسٌ دَفْتَرَهُ وَقَالَ: «احْكِي لِي!» فَبَسَمَتْ نُور وَبَدَأَتْ تَحْكِي لَهُ كَمَا حَكَى لَهَا ابْنُ الهَيْثَم.',
      textEnglish: 'Back in the cozy library, Nour carried a new wonder in her heart. Anas opened his notebook: "Tell me everything!" and Nour smiled, sharing the story of light just as Ibn al-Haytham had taught her.',
      note: 'تمرير العلم ونور تحكي لأنس'
    },
    {
      page: 13,
      type: 'spread-left',
      textArabic: 'هَمَسَ القِطُّ حِبْر وَعَيْنَاهُ تَتَوَهَّجَانِ بِالضَّوْءِ العَنْبَرِيّ:\n«كُلُّ كِتَابٍ يَبْدَأُ بِسُؤَال...» 🌟',
      textEnglish: 'Hibr the cat purred softly with luminous amber eyes: "Every great book begins with a question..."',
      note: 'حكمة ختام القصة'
    }
  ],
  corners: {
    tryItYourself: {
      title: 'ركن «جرّبها بنفسك» 🔦',
      description: 'اصنع غرفتك المظلمة الصغيرة: خذ علبة كرتون، واصنع ثقباً صغيراً بحجم رأس الدبوس في أحد جانبيها، وورقة شفافة رقيقة على الجانب المقابل. وجّه الثقب نحو نافذة مضيئة وانظر: ستظهر صورة الشارع أو الحديقة مقلوبة تماماً!',
      discussionQuestion: 'سؤال للنقاش مع الوالدين: لماذا لا نرى شيئاً في الغرفة المظلمة تماماً دون أي مصدر للضوء؟',
      newWord: '«مَنَاظِر» = علم النظر والبصريات (Optics)، وهي جمع منظر.'
    },
    factOrFiction: [
      { type: 'fact', label: 'حقيقة', text: 'كتب ابن الهيثم «كتاب المناظر» وأجرى فيه تجارب عملية دقيقة أحدثت ثورة في تاريخ العلم.' },
      { type: 'fact', label: 'حقيقة', text: 'الضوء ينتقل في خطوط مستقيمة، وتقاطع الأشعة عبر الثقب هو سر انقلاب الصورة.' },
      { type: 'fiction', label: 'خيال', text: 'لقاء الطفلة نور بابن الهيثم عبر بوابة النور والقط حِبر هو وسيلتنا الخيالية لربط أطفال اليوم بالعلماء.' },
      { type: 'traditional', label: 'يُحكى', text: 'قصة مشروع تنظيم فيضان النيل في مصر ورواية أسوان، وهي رواية تاريخية متداولة تختلف المصادر في تفاصيلها.' }
    ],
    askTheAuthor: {
      question: '«هل كنتَ تخاف من الوقوع في الخطأ؟»',
      answer: '«كلنا نخطئ يا أحبائي... والخطأ ليس نهاية المطاف، بل هو أشجع بابٍ من أبواب التعلم الحقيقي!» — الحسن بن الهيثم'
    },
    parentsGuide: {
      title: 'ملحق الوالدين والمربين 📖',
      prompts: [
        'متى ارتكب طفلك خطأً وكان هذا الخطأ بداية لفهم شيء جديد؟ ناقش معه فكرة الاعتراف بالخطأ كشجاعة علمية.',
        'كيف تنمي فضول طفلك عندما يسأل "لماذا وكيف؟" دون التسرع في إسكاته أو إعطائه جواباً جاهزاً سريعاً؟'
      ]
    }
  }
};

