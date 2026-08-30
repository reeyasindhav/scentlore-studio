export type NotePhase = "top" | "heart" | "base";

export type ScentNote = {
  name: string;
  phase: NotePhase;
  intensity: number; // 0-100
  family: string;
};

export type Perfume = {
  id: string;
  name: string;
  house: string;
  year: number;
  concentration: string;
  price: number;
  size: string;
  rating: number;
  reviewCount: number;
  family: string;
  accentFrom: string;
  accentTo: string;
  tagline: string;
  story: string;
  moods: string[];
  occasions: string[];
  seasons: string[];
  longevity: number; // hours
  sillage: number; // 0-100
  notes: ScentNote[];
};

export const MOODS = [
  { id: "sensual", label: "Sensual", glyph: "❦", blurb: "Warm, skin-close, magnetic" },
  { id: "serene", label: "Serene", glyph: "☾", blurb: "Airy, clean, meditative" },
  { id: "audacious", label: "Audacious", glyph: "✦", blurb: "Loud, spiced, unmissable" },
  { id: "melancholy", label: "Melancholy", glyph: "❈", blurb: "Damp woods, ink, rain" },
  { id: "radiant", label: "Radiant", glyph: "☀", blurb: "Citrus lift, sparkling" },
  { id: "mysterious", label: "Mysterious", glyph: "◈", blurb: "Incense, resin, smoke" },
];

export const OCCASIONS = [
  "Date Night",
  "Office",
  "Black Tie",
  "Everyday",
  "Summer Travel",
  "Winter Evening",
];

export const FAMILIES = ["Amber", "Woody", "Floral", "Chypre", "Citrus", "Gourmand"];
export const SEASONS = ["Spring", "Summer", "Autumn", "Winter"];

export const PERFUMES: Perfume[] = [
  {
    id: "noir-oud",
    name: "Noir Oud",
    house: "Maison Vireil",
    year: 2019,
    concentration: "Extrait de Parfum",
    price: 320,
    size: "75ml",
    rating: 4.7,
    reviewCount: 1284,
    family: "Amber",
    accentFrom: "oklch(0.62 0.14 62)",
    accentTo: "oklch(0.32 0.08 40)",
    tagline: "A cathedral of smoke and resin.",
    story:
      "Built around a Laotian oud distillation aged four years, Noir Oud opens with a lick of saffron before collapsing into a slow, devotional burn of amber and labdanum.",
    moods: ["sensual", "mysterious"],
    occasions: ["Date Night", "Black Tie", "Winter Evening"],
    seasons: ["Autumn", "Winter"],
    longevity: 11,
    sillage: 82,
    notes: [
      { name: "Saffron", phase: "top", intensity: 74, family: "Spicy" },
      { name: "Pink Pepper", phase: "top", intensity: 52, family: "Spicy" },
      { name: "Bulgarian Rose", phase: "heart", intensity: 68, family: "Floral" },
      { name: "Oud", phase: "heart", intensity: 95, family: "Woody" },
      { name: "Labdanum", phase: "base", intensity: 80, family: "Amber" },
      { name: "Vanilla Absolute", phase: "base", intensity: 61, family: "Gourmand" },
    ],
  },
  {
    id: "vetiver-atlas",
    name: "Vétiver Atlas",
    house: "Corvin & Fils",
    year: 2021,
    concentration: "Eau de Parfum",
    price: 185,
    size: "100ml",
    rating: 4.4,
    reviewCount: 842,
    family: "Woody",
    accentFrom: "oklch(0.62 0.09 150)",
    accentTo: "oklch(0.3 0.05 160)",
    tagline: "Dry earth after the first rain.",
    story:
      "Haitian vetiver is stripped of its sweetness and set against grapefruit peel and mineral ambergris — a scent that reads like slate warmed by afternoon sun.",
    moods: ["serene", "melancholy"],
    occasions: ["Office", "Everyday"],
    seasons: ["Spring", "Autumn"],
    longevity: 8,
    sillage: 54,
    notes: [
      { name: "Grapefruit", phase: "top", intensity: 70, family: "Citrus" },
      { name: "Juniper", phase: "top", intensity: 45, family: "Aromatic" },
      { name: "Vetiver", phase: "heart", intensity: 92, family: "Woody" },
      { name: "Iris Root", phase: "heart", intensity: 55, family: "Powdery" },
      { name: "Ambergris", phase: "base", intensity: 66, family: "Mineral" },
      { name: "Cedar", phase: "base", intensity: 58, family: "Woody" },
    ],
  },
  {
    id: "fleur-de-sel",
    name: "Fleur de Sel",
    house: "Atelier Loriaux",
    year: 2022,
    concentration: "Eau de Toilette",
    price: 140,
    size: "50ml",
    rating: 4.2,
    reviewCount: 613,
    family: "Citrus",
    accentFrom: "oklch(0.78 0.09 210)",
    accentTo: "oklch(0.4 0.06 230)",
    tagline: "Salt air on sun-bleached linen.",
    story:
      "A saline neroli accord suspended over driftwood. Deliberately weightless — designed to disappear and reappear on the wearer through the day.",
    moods: ["serene", "radiant"],
    occasions: ["Summer Travel", "Everyday", "Office"],
    seasons: ["Spring", "Summer"],
    longevity: 5,
    sillage: 38,
    notes: [
      { name: "Bergamot", phase: "top", intensity: 84, family: "Citrus" },
      { name: "Sea Salt", phase: "top", intensity: 62, family: "Mineral" },
      { name: "Neroli", phase: "heart", intensity: 72, family: "Floral" },
      { name: "Fig Leaf", phase: "heart", intensity: 48, family: "Green" },
      { name: "Driftwood", phase: "base", intensity: 50, family: "Woody" },
      { name: "White Musk", phase: "base", intensity: 57, family: "Musk" },
    ],
  },
  {
    id: "velours-rouge",
    name: "Velours Rouge",
    house: "Maison Vireil",
    year: 2017,
    concentration: "Extrait de Parfum",
    price: 410,
    size: "50ml",
    rating: 4.8,
    reviewCount: 2093,
    family: "Floral",
    accentFrom: "oklch(0.58 0.19 18)",
    accentTo: "oklch(0.28 0.1 20)",
    tagline: "Roses crushed under a velvet glove.",
    story:
      "Three rose absolutes layered over raspberry and patchouli. Opulent, unapologetic, and famously divisive — worn best when you intend to be remembered.",
    moods: ["sensual", "audacious"],
    occasions: ["Date Night", "Black Tie"],
    seasons: ["Autumn", "Winter"],
    longevity: 12,
    sillage: 90,
    notes: [
      { name: "Raspberry", phase: "top", intensity: 66, family: "Fruity" },
      { name: "Clove", phase: "top", intensity: 49, family: "Spicy" },
      { name: "Turkish Rose", phase: "heart", intensity: 96, family: "Floral" },
      { name: "Jasmine Sambac", phase: "heart", intensity: 71, family: "Floral" },
      { name: "Patchouli", phase: "base", intensity: 78, family: "Woody" },
      { name: "Tonka Bean", phase: "base", intensity: 64, family: "Gourmand" },
    ],
  },
  {
    id: "cendre-blanche",
    name: "Cendre Blanche",
    house: "Studio Ashgrove",
    year: 2023,
    concentration: "Eau de Parfum",
    price: 230,
    size: "100ml",
    rating: 4.5,
    reviewCount: 476,
    family: "Chypre",
    accentFrom: "oklch(0.72 0.03 250)",
    accentTo: "oklch(0.3 0.03 260)",
    tagline: "Incense drifting through an empty hall.",
    story:
      "Frankincense and cold stone, softened by orris butter. A minimalist chypre that reads as architecture rather than perfume.",
    moods: ["mysterious", "melancholy"],
    occasions: ["Office", "Winter Evening", "Everyday"],
    seasons: ["Autumn", "Winter", "Spring"],
    longevity: 9,
    sillage: 60,
    notes: [
      { name: "Elemi", phase: "top", intensity: 58, family: "Resinous" },
      { name: "Cardamom", phase: "top", intensity: 44, family: "Spicy" },
      { name: "Frankincense", phase: "heart", intensity: 88, family: "Resinous" },
      { name: "Orris Butter", phase: "heart", intensity: 63, family: "Powdery" },
      { name: "Oakmoss", phase: "base", intensity: 70, family: "Mossy" },
      { name: "Grey Amber", phase: "base", intensity: 55, family: "Amber" },
    ],
  },
  {
    id: "miel-sauvage",
    name: "Miel Sauvage",
    house: "Corvin & Fils",
    year: 2020,
    concentration: "Eau de Parfum",
    price: 165,
    size: "75ml",
    rating: 4.1,
    reviewCount: 388,
    family: "Gourmand",
    accentFrom: "oklch(0.8 0.14 85)",
    accentTo: "oklch(0.38 0.08 70)",
    tagline: "Wild honey poured over warm skin.",
    story:
      "Beeswax absolute, immortelle and a whisper of tobacco. Sweet, but with an animalic edge that keeps it from ever feeling like dessert.",
    moods: ["sensual", "radiant"],
    occasions: ["Date Night", "Everyday", "Winter Evening"],
    seasons: ["Autumn", "Winter"],
    longevity: 10,
    sillage: 72,
    notes: [
      { name: "Orange Blossom", phase: "top", intensity: 68, family: "Floral" },
      { name: "Honey", phase: "top", intensity: 82, family: "Gourmand" },
      { name: "Immortelle", phase: "heart", intensity: 75, family: "Aromatic" },
      { name: "Beeswax", phase: "heart", intensity: 70, family: "Gourmand" },
      { name: "Tobacco", phase: "base", intensity: 62, family: "Smoky" },
      { name: "Sandalwood", phase: "base", intensity: 59, family: "Woody" },
    ],
  },
  {
    id: "iris-nocturne",
    name: "Iris Nocturne",
    house: "Studio Ashgrove",
    year: 2018,
    concentration: "Extrait de Parfum",
    price: 295,
    size: "50ml",
    rating: 4.6,
    reviewCount: 951,
    family: "Floral",
    accentFrom: "oklch(0.66 0.1 300)",
    accentTo: "oklch(0.28 0.07 300)",
    tagline: "Powder, cold metal, and quiet rooms.",
    story:
      "An iris that refuses to be pretty: carrot seed and violet leaf give it a raw, rooty bite before suede smooths everything into shadow.",
    moods: ["melancholy", "mysterious"],
    occasions: ["Black Tie", "Office", "Winter Evening"],
    seasons: ["Winter", "Spring"],
    longevity: 9,
    sillage: 48,
    notes: [
      { name: "Violet Leaf", phase: "top", intensity: 60, family: "Green" },
      { name: "Carrot Seed", phase: "top", intensity: 47, family: "Rooty" },
      { name: "Iris Pallida", phase: "heart", intensity: 94, family: "Powdery" },
      { name: "Heliotrope", phase: "heart", intensity: 56, family: "Powdery" },
      { name: "Suede", phase: "base", intensity: 73, family: "Leather" },
      { name: "Musk", phase: "base", intensity: 52, family: "Musk" },
    ],
  },
  {
    id: "soleil-vert",
    name: "Soleil Vert",
    house: "Atelier Loriaux",
    year: 2024,
    concentration: "Eau de Toilette",
    price: 120,
    size: "100ml",
    rating: 4.0,
    reviewCount: 214,
    family: "Citrus",
    accentFrom: "oklch(0.84 0.15 120)",
    accentTo: "oklch(0.4 0.09 140)",
    tagline: "Bitten lime and cut grass at noon.",
    story:
      "A shameless mood-lifter. Petitgrain and galbanum snap open like a window; basil keeps it herbal rather than sugary.",
    moods: ["radiant", "audacious"],
    occasions: ["Summer Travel", "Everyday", "Office"],
    seasons: ["Spring", "Summer"],
    longevity: 4,
    sillage: 44,
    notes: [
      { name: "Lime", phase: "top", intensity: 90, family: "Citrus" },
      { name: "Galbanum", phase: "top", intensity: 66, family: "Green" },
      { name: "Basil", phase: "heart", intensity: 58, family: "Aromatic" },
      { name: "Petitgrain", phase: "heart", intensity: 64, family: "Citrus" },
      { name: "Vetiver", phase: "base", intensity: 46, family: "Woody" },
      { name: "Clean Musk", phase: "base", intensity: 40, family: "Musk" },
    ],
  },
];

export type Review = {
  id: string;
  perfumeId: string;
  author: string;
  initials: string;
  rating: number;
  date: string;
  title: string;
  body: string;
  helpful: number;
  skinType: string;
};

export const REVIEWS: Review[] = [
  {
    id: "r1",
    perfumeId: "noir-oud",
    author: "Amara Fitch",
    initials: "AF",
    rating: 5,
    date: "12 Mar 2026",
    title: "The saffron opening is worth the price alone",
    body: "First twenty minutes are almost medicinal, then it settles into this warm resinous hum that lasts through dinner and the taxi home. Not an office scent.",
    helpful: 214,
    skinType: "Dry skin",
  },
  {
    id: "r2",
    perfumeId: "noir-oud",
    author: "Devin Roy",
    initials: "DR",
    rating: 4,
    date: "28 Feb 2026",
    title: "Beautiful but demands commitment",
    body: "Two sprays is a statement, three is a scene. The rose keeps it from going full barnyard, which I appreciate.",
    helpful: 88,
    skinType: "Oily skin",
  },
  {
    id: "r3",
    perfumeId: "velours-rouge",
    author: "Iman Sadeq",
    initials: "IS",
    rating: 5,
    date: "04 Apr 2026",
    title: "My signature for three winters running",
    body: "Raspberry gives it a modern lift so it never reads dated. Projection is enormous — I keep it to one spray on the chest.",
    helpful: 331,
    skinType: "Normal skin",
  },
  {
    id: "r4",
    perfumeId: "fleur-de-sel",
    author: "Noor Bengtsson",
    initials: "NB",
    rating: 4,
    date: "19 Jan 2026",
    title: "Weightless in the best way",
    body: "Vanishes after four hours but I don't mind — it's the closest thing to wearing clean sea air. Perfect for travel.",
    helpful: 62,
    skinType: "Sensitive skin",
  },
  {
    id: "r5",
    perfumeId: "iris-nocturne",
    author: "Theo Marchetti",
    initials: "TM",
    rating: 5,
    date: "07 Feb 2026",
    title: "Cold, rooty, gorgeous",
    body: "If you think you dislike iris, this is the one that changes your mind. The suede drydown is unreal.",
    helpful: 147,
    skinType: "Dry skin",
  },
  {
    id: "r6",
    perfumeId: "vetiver-atlas",
    author: "Priya Raman",
    initials: "PR",
    rating: 4,
    date: "22 Mar 2026",
    title: "The most wearable vetiver I own",
    body: "Grapefruit keeps it bright for the first hour. Wore it to three client meetings and got two compliments.",
    helpful: 95,
    skinType: "Normal skin",
  },
];

export type JournalEntry = {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
};

export const JOURNAL: JournalEntry[] = [
  {
    id: "j1",
    title: "How to Read a Fragrance Pyramid Without Being Lied To",
    category: "Fundamentals",
    readTime: "6 min",
    date: "18 Apr 2026",
    excerpt:
      "Marketing pyramids are art direction, not chemistry. Here is what actually changes on your skin in the first hour.",
  },
  {
    id: "j2",
    title: "The Quiet Return of Oakmoss",
    category: "Materials",
    readTime: "9 min",
    date: "02 Apr 2026",
    excerpt:
      "Regulation nearly killed the chypre. A generation of perfumers rebuilt it from synthetics — and some say it's better.",
  },
  {
    id: "j3",
    title: "Building a Six-Bottle Wardrobe",
    category: "Collecting",
    readTime: "7 min",
    date: "21 Mar 2026",
    excerpt:
      "You do not need forty bottles. You need one for heat, one for cold, one for work, and three for the person you're becoming.",
  },
  {
    id: "j4",
    title: "Why Oud Smells Different on Everyone",
    category: "Science",
    readTime: "5 min",
    date: "09 Mar 2026",
    excerpt:
      "Skin pH, sebum and even diet reshape resinous materials. A short field guide to your own chemistry.",
  },
];

export const getPerfume = (id: string) => PERFUMES.find((p) => p.id === id);
export const reviewsFor = (id: string) => REVIEWS.filter((r) => r.perfumeId === id);
