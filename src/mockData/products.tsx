export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductFeature {
  icon: string;
  title: string;
  text: string;
}

export interface ProductType {
  id: number;
  title: string;
  thumbnail: string;
  gallery?: string[];
  description: string;
  price: number;

  tag: string | null;
  discount: number | null;

  categories: string[];
  filter?: string;
  backgroundColor?: string;

  brand?: string;
  model?: string;
  color?: string;

  availability?: string;
  warranty?: string;

  specifications?: ProductSpecification[];
  features?: ProductFeature[];

  // Temporary legacy fields
  storage?: string;
  display?: string;
  processor?: string;
  camera?: string;
  battery?: string;
  os?: string;

overview?: string;

whyChoose?: string[];

perfectFor?: string[];

inTheBox?: string[];
productType?: "phone" | "headphones" | "smartwatch" | "accessory" | "camera";

}
type ProductContentTemplate = {
  perfectFor: string[];
  defaultBoxItems: string[];
};

const productContentTemplates: Record<
  NonNullable<ProductType["productType"]>,
  ProductContentTemplate
> = {
  phone: {
    perfectFor: [
      "Arbete och studier",
      "Fotografering och video",
      "Appar och multitasking",
      "Underhållning och gaming",
    ],
    defaultBoxItems: [
      "Mobiltelefon",
      "USB-C-kabel",
      "Dokumentation",
      "Garantiinformation",
    ],
  },

  headphones: {
    perfectFor: [
      "Musik och poddar",
      "Arbete och samtal",
      "Resor och pendling",
      "Träning och vardagsanvändning",
    ],
    defaultBoxItems: [
      "Hörlurar",
      "Laddningskabel",
      "Dokumentation",
      "Garantiinformation",
    ],
  },

  smartwatch: {
    perfectFor: [
      "Träning och aktivitet",
      "Hälsa och återhämtning",
      "Notiser och kommunikation",
      "Daglig användning",
    ],
    defaultBoxItems: [
      "Smartklocka",
      "Laddningskabel",
      "Dokumentation",
      "Garantiinformation",
    ],
  },

  accessory: {
    perfectFor: [
      "Daglig användning",
      "Arbete och studier",
      "Kompatibla enheter",
      "Resor och fritid",
    ],
    defaultBoxItems: [
      "Produkt",
      "Tillhörande tillbehör",
      "Dokumentation",
      "Garantiinformation",
    ],
  },

  camera: {
    perfectFor: [
      "Foto och video",
      "Resor och aktiviteter",
      "Kreativt innehåll",
      "Daglig dokumentation",
    ],
    defaultBoxItems: [
      "Kamera",
      "Laddningskabel",
      "Dokumentation",
      "Garantiinformation",
    ],
  },
};

export const getProductContentTemplate = (
  productType?: ProductType["productType"]
): ProductContentTemplate => {
  return productContentTemplates[productType ?? "accessory"];
};


export interface Products {
  hotDealProducts: ProductType[];
  newStockProducts: ProductType[];
  bestProductsData: ProductType[];
  headphonesData: ProductType[];
}

/* =========================================================
   PRODUCT DATA
========================================================= */

const sonyWH1000XM6: ProductType = {
  id: 101,
  title: "Sony WH-1000XM6",
  thumbnail: "/images/headphones/WH1000XM6-shop-ornexa.webp",

  gallery: [
    "/images/headphones/WH1000XM6-shop-ornexa.webp",
    "/images/headphones/WH1000XM6-shop-ornexa1.webp",
    "/images/headphones/WH1000XM6-shop-ornexa2.webp",
  ],

  description:
    "Sony WH-1000XM6 är premiumhörlurar med avancerad brusreducering, kraftfullt ljud och lång batteritid. Perfekta för arbete, resor, musik och fokuserad användning i vardagen.",

  price: 4490,
  tag: "Ny",
  discount: null,

  categories: ["headphones"],
  filter: "headphones",

  brand: "Sony",
  model: "WH-1000XM6",
  color: "Platinsilver",

  battery: "Upp till 30 timmars batteritid",
  os: "Bluetooth",

  warranty: "2 års garanti",
  availability: "Finns i lager",

  specifications: [
    {
      label: "Typ",
      value: "Trådlösa over-ear-hörlurar",
    },
    {
      label: "Anslutning",
      value: "Bluetooth 5.3",
    },
    {
      label: "Brusreducering",
      value: "Avancerad aktiv brusreducering",
    },
    {
      label: "Batteritid",
      value: "Upp till 30 timmar",
    },
    {
      label: "Laddning",
      value: "USB-C med stöd för snabbladdning",
    },
    {
      label: "Mikrofon",
      value: "Integrerade mikrofoner för samtal",
    },
    {
      label: "Färg",
      value: "Platinsilver",
    },
    {
      label: "Kompatibilitet",
      value: "iOS, Android, Windows och macOS",
    },
    {
      label: "Lagerstatus",
      value: "Finns i lager",
    },
    {
      label: "Garanti",
      value: "2 års garanti",
    },
  ],

  backgroundColor: "#FFF9F5",

  features: [
    {
      icon: "check",
      title: "Avancerad brusreducering",
      text: "Reducerar störande bakgrundsljud för arbete, resor och fokuserad lyssning.",
    },
    {
      icon: "check",
      title: "Premiumljud",
      text: "Kraftfullt och balanserat ljud för musik, samtal och media.",
    },
    {
      icon: "check",
      title: "Lång batteritid",
      text: "Upp till 30 timmars användning med stöd för snabbladdning.",
    },
  ],
};

const samsungGalaxyBuds4Pro: ProductType = {
  id: 12,
  title: "Samsung Galaxy Buds4 Pro",
  thumbnail: "/images/headphones/galaxy buds4 pro-shop-ornexa1.webp",

  gallery: [
    "/images/headphones/galaxy buds4 pro-shop-ornexa1.webp",
  ],

  description:
    "Galaxy Buds4 Pro erbjuder kristallklart ljud, aktiv brusreducering och bekväm passform för arbete, träning och vardag.",

  price: 2490,
  tag: "Ny",
  discount: null,

  categories: ["headphones", "accessories"],
  filter: "headphones",
  productType: "headphones",


  brand: "Samsung",
  model: "Galaxy Buds4 Pro",
  color: "Vit",

  battery: "Upp till 30 timmar med laddningsetuiet",
  os: "Android",

  warranty: "2 års garanti",
  availability: "Finns i lager",

  specifications: [
    {
      label: "Typ",
      value: "Trådlösa in-ear-hörlurar",
    },
    {
      label: "Anslutning",
      value: "Bluetooth",
    },
    {
      label: "Brusreducering",
      value: "Aktiv brusreducering",
    },
    {
      label: "Batteritid",
      value: "Upp till 30 timmar med laddningsetuiet",
    },
    {
      label: "Laddning",
      value: "USB-C och trådlös laddning",
    },
    {
      label: "Mikrofon",
      value: "Integrerade mikrofoner för samtal",
    },
    {
      label: "Färg",
      value: "Vit",
    },
    {
      label: "Kompatibilitet",
      value: "Android-enheter",
    },
    {
      label: "Lagerstatus",
      value: "Finns i lager",
    },
    {
      label: "Garanti",
      value: "2 års garanti",
    },
  ],

  backgroundColor: "#F4FCFC",

  features: [
    {
      icon: "check",
      title: "Aktiv brusreducering",
      text: "Reducerar omgivningsljud för en bättre lyssningsupplevelse.",
    },
    {
      icon: "check",
      title: "Klart ljud",
      text: "Högkvalitativt ljud för musik, filmer och samtal.",
    },
    {
      icon: "check",
      title: "Lång batteritid",
      text: "Upp till 30 timmars användning med laddningsetuiet.",
    },
  ],
};

const appleWatchUltra3: ProductType = {
  id: 16,
  title: "Apple Watch Ultra 3",
  thumbnail: "/images/smarta-klockor/apple-watch-ultra3.webp",

  gallery: [
    "/images/smarta-klockor/apple-watch-ultra3.webp",
  ],

  description:
    "Apple Watch Ultra 3 är en robust och avancerad smartklocka för träning, äventyr och vardag med stark prestanda och tydlig skärm.",

  price: 9990,
  tag: "Ny",
  discount: null,

  categories: ["smartWatch"],
  filter: "smartWatch",
  productType: "smartwatch",


  brand: "Apple",
  model: "Watch Ultra 3",
  color: "Titan",

  battery: "Upp till 36 timmars batteritid",
  os: "watchOS",

  warranty: "2 års garanti",
  availability: "Finns i lager",

  specifications: [
    {
      label: "Typ",
      value: "Smartklocka",
    },
    {
      label: "Material",
      value: "Titan",
    },
    {
      label: "Skärm",
      value: "Stor och ljusstark display",
    },
    {
      label: "Anslutning",
      value: "Bluetooth, Wi-Fi och mobilanslutning",
    },
    {
      label: "Träningsfunktioner",
      value: "Aktivitet, puls, GPS och träningsspårning",
    },
    {
      label: "Batteritid",
      value: "Upp till 36 timmar",
    },
    {
      label: "Operativsystem",
      value: "watchOS",
    },
    {
      label: "Kompatibilitet",
      value: "iPhone",
    },
    {
      label: "Lagerstatus",
      value: "Finns i lager",
    },
    {
      label: "Garanti",
      value: "2 års garanti",
    },
  ],

  backgroundColor: "#F6F9FF",

  features: [
    {
      icon: "check",
      title: "Robust design",
      text: "Byggd för träning, äventyr och tuffare användning.",
    },
    {
      icon: "check",
      title: "Tydlig skärm",
      text: "Stor och ljusstark display för enkel användning utomhus.",
    },
    {
      icon: "check",
      title: "Lång batteritid",
      text: "Upp till 36 timmars användning beroende på läge.",
    },
  ],
};

const samsungGalaxyS25: ProductType = {
  id: 3,
  title: "Samsung Galaxy S25",
  thumbnail: "/images/mobiles/samsung-galaxy-s25-1.png",

  gallery: [
    "/images/mobiles/samsung-galaxy-s25-1.png",
    "/images/mobiles/samsung-galaxy-s25-2.png",
  ],

  description:
    "Samsung Galaxy S25 med modern design, skarp AMOLED-skärm och kraftfull prestanda för arbete, foto, appar och vardagsanvändning.",

  price: 10990,
  tag: null,
  discount: null,

  categories: ["mobiler"],
  filter: "mobiler",
  productType: "phone",


  brand: "Samsung",
  model: "Galaxy S25",
  storage: "256 GB",
  color: "Svart",
  display: "6.2-tums Dynamic AMOLED",
  processor: "Snapdragon / Exynos premiumprocessor",
  camera: "50 MP huvudkamera",
  battery: "Batteri för hela dagen",
  os: "Android 15",

  warranty: "2 års garanti",
  availability: "Finns i lager",

  specifications: [
    {
      label: "Lagring",
      value: "256 GB",
    },
    {
      label: "Färg",
      value: "Svart",
    },
    {
      label: "Skärm",
      value: "6.2-tums Dynamic AMOLED",
    },
    {
      label: "Processor",
      value: "Snapdragon / Exynos premiumprocessor",
    },
    {
      label: "Kamera",
      value: "50 MP huvudkamera",
    },
    {
      label: "Batteri",
      value: "Batteri för hela dagen",
    },
    {
      label: "Operativsystem",
      value: "Android 15",
    },
    {
      label: "Lagerstatus",
      value: "Finns i lager",
    },
    {
      label: "Garanti",
      value: "2 års garanti",
    },
  ],

  backgroundColor: "#ECF2F9",

  features: [
    {
      icon: "display",
      title: "AMOLED-skärm",
      text: "Skarp och ljusstark skärm för video, bilder och vardag.",
    },
    {
      icon: "camera",
      title: "Kraftfull kamera",
      text: "50 MP huvudkamera för tydliga bilder och video.",
    },
    {
      icon: "performance",
      title: "Snabb prestanda",
      text: "Byggd för appar, multitasking och smidig användning.",
    },
  ],
};

const samsungGalaxyWatchUltra: ProductType = {
  id: 18,
  title: "Samsung Galaxy Watch Ultra",
  thumbnail: "/images/smarta-klockor/galaxy-watch-ultra-1.webp",

  gallery: [
    "/images/smarta-klockor/galaxy-watch-ultra-1.webp",
  ],

  description:
    "Samsung Galaxy Watch Ultra är en kraftfull smartklocka med tålig design, tydlig skärm och avancerade funktioner för träning och vardag.",

  price: 5990,
  tag: "Ny",
  discount: null,

  categories: ["smartWatch"],
  filter: "smartWatch",
  productType: "smartwatch",

  brand: "Samsung",
  model: "Galaxy Watch Ultra",
  color: "Orange",

  battery: "Upp till 48 timmars batteritid",
  os: "Wear OS",

  warranty: "2 års garanti",
  availability: "Finns i lager",

  specifications: [
    {
      label: "Typ",
      value: "Smartklocka",
    },
    {
      label: "Färg",
      value: "Orange",
    },
    {
      label: "Skärm",
      value: "Ljusstark AMOLED-skärm",
    },
    {
      label: "Anslutning",
      value: "Bluetooth, Wi-Fi och GPS",
    },
    {
      label: "Sensorer",
      value: "Puls, aktivitet, sömn och träningsmätning",
    },
    {
      label: "Batteritid",
      value: "Upp till 48 timmar",
    },
    {
      label: "Operativsystem",
      value: "Wear OS",
    },
    {
      label: "Kompatibilitet",
      value: "Android",
    },
    {
      label: "Lagerstatus",
      value: "Finns i lager",
    },
    {
      label: "Garanti",
      value: "2 års garanti",
    },
  ],

  backgroundColor: "#ECF2F9",

  features: [
    {
      icon: "check",
      title: "Tålig design",
      text: "Byggd för aktiv användning, träning och utomhusmiljöer.",
    },
    {
      icon: "check",
      title: "Avancerad träning",
      text: "Följ aktivitet, puls och träningsdata direkt från handleden.",
    },
    {
      icon: "check",
      title: "Lång batteritid",
      text: "Upp till 48 timmars användning beroende på läge.",
    },
  ],
};

const iphone16Plus: ProductType = {
  id: 1,
  title: "iPhone 16 Plus",
  thumbnail: "/images/mobiles/iphone-16-plus-ornexa-shop2.webp",

  gallery: [
    "/images/mobiles/iphone-16-plus-ornexa-shop2.webp",
  ],

  description:
    "iPhone 16 Plus med stor skärm, snabb prestanda och avancerad kamera för arbete, underhållning och vardag.",

  price: 11990,
  tag: "Ny",
  discount: null,

  categories: ["mobiler"],
  filter: "mobiler",
  productType: "phone",

  brand: "Apple",
  model: "iPhone 16 Plus",
  storage: "256 GB",
  color: "Ultramarine",
  display: "6.7-tums Super Retina XDR OLED",
  processor: "Apple A18",
  camera: "48 MP huvudkamera + 12 MP ultravidvinkel",
  battery: "Upp till 27 timmars videouppspelning",
  os: "iOS 26",

  warranty: "2 års garanti",
  availability: "Finns i lager",

  specifications: [
    {
      label: "Lagring",
      value: "256 GB",
    },
    {
      label: "Färg",
      value: "Ultramarine",
    },
    {
      label: "Skärm",
      value: "6.7-tums Super Retina XDR OLED",
    },
    {
      label: "Processor",
      value: "Apple A18",
    },
    {
      label: "Kamera",
      value: "48 MP huvudkamera + 12 MP ultravidvinkel",
    },
    {
      label: "Batteri",
      value: "Upp till 27 timmars videouppspelning",
    },
    {
      label: "Operativsystem",
      value: "iOS 26",
    },
    {
      label: "Lagerstatus",
      value: "Finns i lager",
    },
    {
      label: "Garanti",
      value: "2 års garanti",
    },
  ],

  backgroundColor: "#ECF2F9",

  features: [
    {
      icon: "battery",
      title: "Lång batteritid",
      text: "Upp till 27 timmars videouppspelning.",
    },
    {
      icon: "display",
      title: "Stor OLED-skärm",
      text: "6.7-tums Super Retina XDR OLED.",
    },
    {
      icon: "camera",
      title: "48 MP kamera",
      text: "Huvudkamera med 12 MP ultravidvinkel.",
    },
    {
      icon: "chip",
      title: "Apple A18",
      text: "Snabb prestanda för appar, spel och foto.",
    },
  ],
};

const iphone17Pro: ProductType = {
  id: 2,
  title: "iPhone 17 Pro",
  thumbnail: "/images/mobiles/iphone17pro-3-ornexa-shop.webp",

  gallery: [
    "/images/mobiles/iphone17pro-3-ornexa-shop.webp",
  ],

  description:
    "iPhone 17 Pro med premiumdesign, kraftfull prestanda och avancerat kamerasystem för professionell fotografering, video, arbete och spel.",

  price: 14990,
  tag: "Ny",
  discount: null,

  categories: ["mobiler"],
  filter: "mobiler",
  productType: "phone",


  brand: "Apple",
  model: "iPhone 17 Pro",
  storage: "256 GB",
  color: "Svart / Orange",
  display: "6.3-tums ProMotion OLED",
  processor: "Apple A19 Pro",
  camera: "Pro-kamerasystem med 48 MP",
  battery: "Batteri för hela dagen",
  os: "iOS 26",

  warranty: "2 års garanti",
  availability: "Finns i lager",

  specifications: [
    {
      label: "Lagring",
      value: "256 GB",
    },
    {
      label: "Färg",
      value: "Svart / Orange",
    },
    {
      label: "Skärm",
      value: "6.3-tums ProMotion OLED",
    },
    {
      label: "Processor",
      value: "Apple A19 Pro",
    },
    {
      label: "Kamera",
      value: "Pro-kamerasystem med 48 MP",
    },
    {
      label: "Batteri",
      value: "Batteri för hela dagen",
    },
    {
      label: "Operativsystem",
      value: "iOS 26",
    },
    {
      label: "Lagerstatus",
      value: "Finns i lager",
    },
    {
      label: "Garanti",
      value: "2 års garanti",
    },
  ],
  overview:
  "iPhone 17 Pro är utvecklad för användare som vill kombinera hög prestanda, avancerad fotografering och en premiumupplevelse i vardagen. Den passar både professionellt arbete, kreativt innehåll och krävande appar.",

whyChoose: [
  "Apple A19 Pro för snabb och stabil prestanda",
  "48 MP Pro-kamerasystem för foto och video",
  "6.3-tums ProMotion OLED-skärm",
  "Lång batteritid för arbete och underhållning",
],

perfectFor: [
  "Professionellt arbete",
  "Fotografering och video",
  "Gaming och krävande appar",
  "Daglig användning och underhållning",
],

inTheBox: [
  "iPhone 17 Pro",
  "USB-C-kabel",
  "Dokumentation",
  "Garantiinformation",
],


  backgroundColor: "#ECF2F9",

  features: [
    {
      icon: "battery",
      title: "Lång batteritid",
      text: "Optimerad för arbete, video och spel hela dagen.",
    },
    {
      icon: "display",
      title: "ProMotion-skärm",
      text: "6.3-tums OLED med hög uppdateringsfrekvens.",
    },
    {
      icon: "camera",
      title: "Pro-kamera",
      text: "48 MP kamerasystem för professionella bilder.",
    },
  ],
};

const xiaomi17TPro: ProductType = {
  id: 5,
  title: "Xiaomi 17T Pro",
  thumbnail: "/images/mobiles/xiaomi 17t pro1.webp",

  gallery: [
    "/images/mobiles/xiaomi 17t pro1.webp",
    "/images/mobiles/xiaomi 17tpro2.webp",
  ],

  description:
    "Xiaomi 17T Pro med snabb prestanda, stilren design och kraftfull kamera till ett konkurrenskraftigt pris för vardag, foto och spel.",

  price: 8990,
  tag: null,
  discount: null,

  categories: ["mobiler"],
  filter: "mobiler",
  productType: "phone",

  brand: "Xiaomi",
  model: "17T Pro",
  storage: "256 GB",
  color: "Svart",
  display: "6.7-tums AMOLED",
  processor: "MediaTek Dimensity / Snapdragon Pro",
  camera: "50 MP huvudkamera",
  battery: "Snabbladdning och lång batteritid",
  os: "Android 16",

  warranty: "2 års garanti",
  availability: "Finns i lager",

  specifications: [
    {
      label: "Lagring",
      value: "256 GB",
    },
    {
      label: "Färg",
      value: "Svart",
    },
    {
      label: "Skärm",
      value: "6.7-tums AMOLED",
    },
    {
      label: "Processor",
      value: "MediaTek Dimensity / Snapdragon Pro",
    },
    {
      label: "Kamera",
      value: "50 MP huvudkamera",
    },
    {
      label: "Batteri",
      value: "Snabbladdning och lång batteritid",
    },
    {
      label: "Operativsystem",
      value: "Android 16",
    },
    {
      label: "Lagerstatus",
      value: "Finns i lager",
    },
    {
      label: "Garanti",
      value: "2 års garanti",
    },
  ],

  backgroundColor: "#ECF2F9",

  features: [
    {
      icon: "performance",
      title: "Snabb prestanda",
      text: "Byggd för appar, spel och daglig multitasking.",
    },
    {
      icon: "camera",
      title: "Kraftfull kamera",
      text: "50 MP kamera för skarpa bilder och video.",
    },
    {
      icon: "battery",
      title: "Snabbladdning",
      text: "Lång batteritid med snabb laddning för vardagen.",
    },
  ],
};

const airPods4: ProductType = {
  id: 9,
  title: "AirPods 4",
  thumbnail: "/images/headphones/airpods-4-shop-ornexa1.webp",

  gallery: [
    "/images/headphones/airpods-4-shop-ornexa1.webp",
  ],

  description:
    "AirPods 4 ger en lätt och bekväm lyssningsupplevelse med klart ljud, stabil anslutning och smidig användning tillsammans med Apple-enheter.",

  price: 1790,
  tag: "Ny",
  discount: null,

  categories: ["headphones", "accessories"],
  filter: "headphones",
  productType: "headphones",


  brand: "Apple",
  model: "AirPods 4",
  color: "Vit",

  battery: "Upp till 30 timmar med laddningsetuiet",
  os: "iOS, iPadOS och macOS",

  warranty: "1 års garanti",
  availability: "Finns i lager",

  specifications: [
    {
      label: "Typ",
      value: "Trådlösa in-ear-hörlurar",
    },
    {
      label: "Anslutning",
      value: "Bluetooth",
    },
    {
      label: "Batteritid",
      value: "Upp till 30 timmar med laddningsetuiet",
    },
    {
      label: "Laddning",
      value: "USB-C",
    },
    {
      label: "Mikrofon",
      value: "Integrerade mikrofoner",
    },
    {
      label: "Färg",
      value: "Vit",
    },
    {
      label: "Kompatibilitet",
      value: "iOS, iPadOS och macOS",
    },
    {
      label: "Lagerstatus",
      value: "Finns i lager",
    },
    {
      label: "Garanti",
      value: "1 års garanti",
    },
  ],

  backgroundColor: "#F2EEF8",

  features: [
    {
      icon: "check",
      title: "Klart ljud",
      text: "Förbättrad ljudkvalitet för musik, samtal och vardagsanvändning.",
    },
    {
      icon: "check",
      title: "Lång batteritid",
      text: "Upp till 30 timmars lyssning med laddningsetuiet.",
    },
    {
      icon: "check",
      title: "Bekväm passform",
      text: "Lätt design som sitter bekvämt under längre användning.",
    },
  ],
};

const airPodsPro3: ProductType = {
  id: 11,
  title: "AirPods Pro 3",
  thumbnail: "/images/headphones/airpods-pro-3-shop-ornexa1.webp",

  gallery: [
    "/images/headphones/airpods-pro-3-shop-ornexa1.webp",
  ],

  description:
    "AirPods Pro 3 erbjuder aktiv brusreducering, tydligt ljud och bekväm passform för arbete, träning, samtal och musik.",

  price: 2790,
  tag: "Ny",
  discount: null,

  categories: ["headphones", "accessories"],
  filter: "headphones",
  productType: "headphones",


  brand: "Apple",
  model: "AirPods Pro 3",
  color: "Vit",

  battery: "Upp till 30 timmar med laddningsetuiet",
  os: "iOS, iPadOS och macOS",

  warranty: "1 års garanti",
  availability: "Finns i lager",

  specifications: [
    {
      label: "Typ",
      value: "Trådlösa in-ear-hörlurar",
    },
    {
      label: "Anslutning",
      value: "Bluetooth",
    },
    {
      label: "Brusreducering",
      value: "Aktiv brusreducering",
    },
    {
      label: "Batteritid",
      value: "Upp till 30 timmar med laddningsetuiet",
    },
    {
      label: "Laddning",
      value: "USB-C och trådlös laddning",
    },
    {
      label: "Mikrofon",
      value: "Integrerade mikrofoner",
    },
    {
      label: "Färg",
      value: "Vit",
    },
    {
      label: "Kompatibilitet",
      value: "iOS, iPadOS och macOS",
    },
    {
      label: "Lagerstatus",
      value: "Finns i lager",
    },
    {
      label: "Garanti",
      value: "1 års garanti",
    },
  ],

  backgroundColor: "#ECF2F9",

  features: [
    {
      icon: "check",
      title: "Aktiv brusreducering",
      text: "Minskar störande ljud så att musik och samtal hörs tydligare.",
    },
    {
      icon: "check",
      title: "Tydligt ljud",
      text: "Balanserat ljud för musik, samtal och daglig användning.",
    },
    {
      icon: "check",
      title: "Bekväm passform",
      text: "Lätt design som sitter stabilt under längre användning.",
    },
  ],
};

const samsungGalaxyBuds3: ProductType = {
  id: 13,
  title: "Samsung Galaxy Buds3",
  thumbnail: "/images/headphones/galaxy-buds3-shop-ornexa.avif",

  gallery: [
    "/images/headphones/galaxy-buds3-shop-ornexa.avif",
  ],

  description:
    "Samsung Galaxy Buds3 erbjuder klart ljud, bekväm passform och lång batteritid för musik, samtal och vardagsanvändning.",

  price: 1990,
  tag: "Ny",
  discount: null,

  categories: ["headphones", "accessories"],
  filter: "headphones",
  productType: "headphones",


  brand: "Samsung",
  model: "Galaxy Buds3",
  color: "Vit",

  battery: "Upp till 24 timmar med laddningsetuiet",
  os: "Android",

  warranty: "2 års garanti",
  availability: "Finns i lager",

  specifications: [
    {
      label: "Typ",
      value: "Trådlösa in-ear-hörlurar",
    },
    {
      label: "Anslutning",
      value: "Bluetooth",
    },
    {
      label: "Batteritid",
      value: "Upp till 24 timmar med laddningsetuiet",
    },
    {
      label: "Laddning",
      value: "USB-C",
    },
    {
      label: "Mikrofon",
      value: "Integrerade mikrofoner",
    },
    {
      label: "Färg",
      value: "Vit",
    },
    {
      label: "Kompatibilitet",
      value: "Android-enheter",
    },
    {
      label: "Lagerstatus",
      value: "Finns i lager",
    },
    {
      label: "Garanti",
      value: "2 års garanti",
    },
  ],

  backgroundColor: "#ECF2F9",

  features: [
    {
      icon: "check",
      title: "Klart ljud",
      text: "Detaljerat och balanserat ljud för musik och samtal.",
    },
    {
      icon: "check",
      title: "Bekväm passform",
      text: "Ergonomisk design för bekväm användning hela dagen.",
    },
    {
      icon: "check",
      title: "Lång batteritid",
      text: "Upp till 24 timmars användning med laddningsetuiet.",
    },
  ],
};

const appleWatchSeries11: ProductType = {
  id: 15,
  title: "Apple Watch Series 11",
  thumbnail: "/images/smarta-klockor/apple-watch-series11.webp",

  gallery: [
    "/images/smarta-klockor/apple-watch-series11.webp",
  ],

  description:
    "Apple Watch Series 11 kombinerar modern design, snabb prestanda och smarta hälsofunktioner för träning, vardag och arbete.",

  price: 4990,
  tag: "Ny",
  discount: null,

  categories: ["smartWatch"],
  filter: "smartWatch",
  productType: "smartwatch",


  brand: "Apple",
  model: "Watch Series 11",
  color: "Silver",

  battery: "Upp till 18 timmars batteritid",
  os: "watchOS",

  warranty: "2 års garanti",
  availability: "Finns i lager",

  specifications: [
    {
      label: "Typ",
      value: "Smartklocka",
    },
    {
      label: "Färg",
      value: "Silver",
    },
    {
      label: "Skärm",
      value: "Ljusstark digital skärm",
    },
    {
      label: "Anslutning",
      value: "Bluetooth och Wi-Fi",
    },
    {
      label: "Hälsofunktioner",
      value: "Puls, aktivitet, sömn och träningsspårning",
    },
    {
      label: "Batteritid",
      value: "Upp till 18 timmar",
    },
    {
      label: "Operativsystem",
      value: "watchOS",
    },
    {
      label: "Kompatibilitet",
      value: "iPhone",
    },
    {
      label: "Lagerstatus",
      value: "Finns i lager",
    },
    {
      label: "Garanti",
      value: "2 års garanti",
    },
  ],

  backgroundColor: "#ECF2F9",

  features: [
    {
      icon: "check",
      title: "Smarta hälsofunktioner",
      text: "Följ aktivitet, puls, sömn och träning direkt från handleden.",
    },
    {
      icon: "check",
      title: "Tydlig skärm",
      text: "Ljusstark skärm för smidig användning under dagen.",
    },
    {
      icon: "check",
      title: "Smidig anslutning",
      text: "Integreras med iPhone och andra Apple-tjänster.",
    },
  ],
};

const insta360AcePro: ProductType = {
  id: 7,
  title: "Insta360 ACE Pro",
  thumbnail: "/images/bestProducts/camera-7.png",

  gallery: [
    "/images/bestProducts/camera-7.png",
  ],

  description:
    "Kompakt actionkamera för video, resor, sport och kreativ innehållsproduktion.",

  price: 299,
  tag: null,
  discount: null,

  categories: ["cameras"],
  filter: "cameras",

  brand: "Insta360",
  model: "ACE Pro",
  color: "Svart",

  warranty: "2 års garanti",
  availability: "Finns i lager",

  specifications: [
    {
      label: "Typ",
      value: "Actionkamera",
    },
    {
      label: "Användning",
      value: "Sport, resor och videoinspelning",
    },
    {
      label: "Montering",
      value: "Stöd för kompatibla kamerafästen",
    },
    {
      label: "Färg",
      value: "Svart",
    },
    {
      label: "Lagerstatus",
      value: "Finns i lager",
    },
    {
      label: "Garanti",
      value: "2 års garanti",
    },
  ],

  backgroundColor: "#EDF8F0",

  features: [
    {
      icon: "camera",
      title: "Kompakt design",
      text: "Enkel att bära med sig för resor och aktiviteter.",
    },
    {
      icon: "check",
      title: "Actioninspelning",
      text: "Utformad för sport, rörelse och kreativa videor.",
    },
  ],
};

const xboxWirelessController: ProductType = {
  id: 8,
  title: "Xbox Wireless Controller",
  thumbnail: "/images/bestProducts/camera-8.png",

  gallery: [
    "/images/bestProducts/camera-8.png",
  ],

  description:
    "Trådlös Xbox-kontroll för spel med ergonomisk design och smidig anslutning.",

  price: 849,
  tag: null,
  discount: null,

  categories: ["accessories"],
  filter: "accessories",

  brand: "Microsoft",
  model: "Xbox Wireless Controller",

  warranty: "2 års garanti",
  availability: "Finns i lager",

  specifications: [
    {
      label: "Typ",
      value: "Trådlös spelkontroll",
    },
    {
      label: "Anslutning",
      value: "Trådlös anslutning och Bluetooth",
    },
    {
      label: "Kompatibilitet",
      value: "Xbox och Windows",
    },
    {
      label: "Lagerstatus",
      value: "Finns i lager",
    },
    {
      label: "Garanti",
      value: "2 års garanti",
    },
  ],

  backgroundColor: "#F8ECEC",

  features: [
    {
      icon: "check",
      title: "Ergonomisk design",
      text: "Bekväm utformning för längre spelsessioner.",
    },
    {
      icon: "check",
      title: "Trådlös anslutning",
      text: "Smidig anslutning till kompatibla enheter.",
    },
  ],
};

/* =========================================================
   PRODUCT COLLECTIONS
========================================================= */

export const products: Products = {
  hotDealProducts: [
    sonyWH1000XM6,
    samsungGalaxyBuds4Pro,
    appleWatchUltra3,
  ],

  newStockProducts: [
    sonyWH1000XM6,
    appleWatchUltra3,
    samsungGalaxyS25,
    samsungGalaxyWatchUltra,
  ],

  bestProductsData: [
  iphone16Plus,
  iphone17Pro,
  samsungGalaxyS25,
  xiaomi17TPro,

  airPods4,
  airPodsPro3,
  samsungGalaxyBuds4Pro,
  samsungGalaxyBuds3,

  appleWatchUltra3,
  samsungGalaxyWatchUltra,
  appleWatchSeries11,

  insta360AcePro,
  xboxWirelessController,
],



  headphonesData: [
    sonyWH1000XM6,
    airPods4,
    airPodsPro3,
    samsungGalaxyBuds4Pro,
    samsungGalaxyBuds3,
  ],
};
export const allProducts: ProductType[] = Array.from(
  new Map(
    [
      ...products.hotDealProducts,
      ...products.newStockProducts,
      ...products.bestProductsData,
      ...products.headphonesData,
    ].map((product) => [product.id, product])
  ).values()
);
