export interface ProductType {
  id: number;
  title: string;
  thumbnail: string;
  gallery?: string[];
  description: string;
  price: number;
  tag: null | string;
  discount: null | number;
  categories: string[];
  backgroundColor?: string;
  filter?: string;
  brand?: string;
model?: string;
storage?: string;
color?: string;
display?: string;
processor?: string;
camera?: string;
battery?: string;
os?: string;
warranty?: string;
availability?: string;
features?: {
  icon: string;
  title: string;
  text: string;
}[];


}

export interface Products {
  hotDealProducts: ProductType[];
  newStockProducts: ProductType[];
  bestProductsData: ProductType[];
  headphonesData: ProductType[];
}


export const products: Products = {
  hotDealProducts: [
    {
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
  backgroundColor: "#FFF9F5",
  features: [
    {
      icon: "check",
      title: "Brusreducering",
      text: "Avancerad aktiv brusreducering för arbete, resor och fokus.",
    },
    {
      icon: "check",
      title: "Premiumljud",
      text: "Kraftfullt och balanserat ljud för musik, samtal och media.",
    },
    {
      icon: "check",
      title: "Lång batteritid",
      text: "Upp till 30 timmars användning med snabb laddning.",
    },
  ],
},

    {
      id: 12,
      title: "Samsung Galaxy Buds4 Pro",
      thumbnail: "/images/headphones/galaxy buds4 pro-shop-ornexa1.webp",
      description: "Galaxy Buds4 Pro erbjuder kristallklart ljud, aktiv brusreducering och bekväm passform för vardag och träning.",
      price: 2490,
      brand: "Samsung",
      model: "Galaxy Buds4 Pro",
      tag: null,
      discount: null,
      categories: [""],
      backgroundColor: "#F4FCFC",
    },
    {
      id: 16,
      title: "Apple Watch Ultra 3",
      thumbnail: "/images/smarta-klockor/apple-watch-ultra3.webp",
      description: "Apple Watch Ultra 3 är en robust och avancerad smartklocka för träning, äventyr och vardag med stark prestanda och tydlig skärm.",
      price: 9990,
      tag: "Ny",
      brand: "Apple",
      model: "Watch Ultra 3",
      discount: null,
      categories: [""],
      backgroundColor: "#F6F9FF",
    },
  ],
  newStockProducts: [
    {
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
  backgroundColor: "#FFF9F5",
  features: [
    {
      icon: "check",
      title: "Brusreducering",
      text: "Avancerad aktiv brusreducering för arbete, resor och fokus.",
    },
    {
      icon: "check",
      title: "Premiumljud",
      text: "Kraftfullt och balanserat ljud för musik, samtal och media.",
    },
    {
      icon: "check",
      title: "Lång batteritid",
      text: "Upp till 30 timmars användning med snabb laddning.",
    },
  ],
},
     {
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
  brand: "Apple",
  model: "Watch Ultra 3",
  color: "Titan",
  battery: "Upp till 36 timmars batteritid",
  os: "watchOS",
  warranty: "2 års garanti",
  availability: "Finns i lager",
  backgroundColor: "#ECF2F9",
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
},
    {
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
},


      {
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
  brand: "Samsung",
  model: "Galaxy Watch Ultra",
  color: "Orange",
  battery: "Upp till 48 timmars batteritid",
  os: "Wear OS",
  warranty: "2 års garanti",
  availability: "Finns i lager",
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
},

  ],
  bestProductsData: [
    {
  id: 1,
  title: "iPhone 16 Plus",
thumbnail: "/images/mobiles/iphone-16-plus-ornexa-shop2.webp",
gallery: [
  "/images/mobiles/iphone-16-plus-ornexa-shop2.webp",
  "/images/mobiles/iphone-16-plus-ornexa-shop2.webp",
],


price: 11990,
description: "iPhone 16 Plus med stor skärm, snabb prestanda och avancerad kamera för arbete, underhållning och vardag.",
  tag: "Ny",
  discount: null,
  categories: ["mobiler"],
  filter: "mobiler",
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
  backgroundColor: "#ECF2F9",
  features: [
  {
    icon: "battery",
    title: "Lång batteritid",
    text: "Upp till 27 timmars videouppspelning."
  },
  {
    icon: "display",
    title: "Stor OLED-skärm",
    text: "6,7-tums Super Retina XDR OLED."
  },
  {
    icon: "camera",
    title: "48 MP kamera",
    text: "Huvudkamera med 12 MP ultravidvinkel."
  },
  {
    icon: "chip",
    title: "Apple A18",
    text: "Snabb prestanda för appar, spel och foto."
  }
],

},

   {
  id: 2,
  title: "iPhone 17 Pro",
  thumbnail: "/images/mobiles/iphone17pro-3-ornexa-shop.webp",
  gallery: [
    "/images/mobiles/iphone17pro-3-ornexa-shop.webp",
    "/images/mobiles/iphone17pro-3-ornexa-shop.webp",
  ],
  description:
    "iPhone 17 Pro med premiumdesign, kraftfull prestanda och avancerat kamerasystem för professionell fotografering, video, arbete och spel.",
  price: 14990,
  tag: "Ny",
  discount: null,
  categories: ["mobiler"],
  filter: "mobiler",
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
},


{
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
},


  {
      id: 9,
       title: "AirPods 4",
  thumbnail: "/images/headphones/airpods-4-shop-ornexa1.webp",
  gallery: [
    "/images/headphones/airpods-4-shop-ornexa1.webp",
  ],
  description: "AirPods 4 ger en lätt och bekväm lyssningsupplevelse med klart ljud, stabil anslutning och smidig användning tillsammans med Apple-enheter.",
  price: 1790,
  tag: "Ny",
      discount: null,
      categories: ["cameras", "accessories"],
      filter: "cameras",
      backgroundColor: "#F2EEF8",
    },
    {
      id: 7,
      title: "Insta360 ACE Pro",
      thumbnail: "/images/bestProducts/camera-7.png",
      description: "Compact action camera with mounting dock",
      price: 299,
      tag: null,
      discount: null,
      categories: ["cameras", "virtualReality"],
      filter: "cameras",
      backgroundColor: "#EDF8F0",
    },
    {
      id: 8,
      title: "Xbox Wireless Controller",
      thumbnail: "/images/bestProducts/camera-8.png",
      description: "360-degree camera controller",
      price: 849,
      tag: null,
      discount: null,
      categories: ["accessories"],
      filter: "cameras",
      backgroundColor: "#F8ECEC",
    },

  
{
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
},


    {
      id: 9,
       title: "AirPods 4",
  thumbnail: "/images/headphones/airpods-4-shop-ornexa1.webp",
  gallery: [
    "/images/headphones/airpods-4-shop-ornexa1.webp",
  ],
  description: "AirPods 4 ger en lätt och bekväm lyssningsupplevelse med klart ljud, stabil anslutning och smidig användning tillsammans med Apple-enheter.",
  price: 1790,
  tag: "Ny",
      discount: null,
      categories: ["cameras", "accessories"],
      filter: "cameras",
      backgroundColor: "#F2EEF8",
    },
    {
      id: 7,
      title: "Insta360 ACE Pro",
      thumbnail: "/images/bestProducts/camera-7.png",
      description: "Compact action camera with mounting dock",
      price: 299,
      tag: null,
      discount: null,
      categories: ["cameras", "virtualReality"],
      filter: "cameras",
      backgroundColor: "#EDF8F0",
    },
    {
      id: 8,
      title: "Xbox Wireless Controller",
      thumbnail: "/images/bestProducts/camera-8.png",
      description: "360-degree camera controller",
      price: 849,
      tag: null,
      discount: null,
      categories: ["accessories"],
      filter: "cameras",
      backgroundColor: "#F8ECEC",
    },
    {
  id: 9,
  title: "AirPods 4",
  thumbnail: "/images/headphones/airpods-4-shop-ornexa1.webp",
  gallery: [
    "/images/headphones/airpods-4-shop-ornexa1.webp",
  ],
  description: "AirPods 4 ger en lätt och bekväm lyssningsupplevelse med klart ljud, stabil anslutning och smidig användning tillsammans med Apple-enheter.",
  price: 1790,
  tag: "Ny",
  discount: null,
  categories: ["headphones", "accessories"],
  filter: "headphones",
  brand: "Apple",
  model: "AirPods 4",
  color: "Vit",
  battery: "Upp till 30 timmar med laddningsetuiet",
  os: "iOS, iPadOS, macOS",
  warranty: "1 års garanti",
  availability: "Finns i lager",
  backgroundColor: "#ECF2F9",
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
},

    {
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
  brand: "Apple",
  model: "AirPods Pro 3",
  color: "Vit",
  battery: "Upp till 30 timmar med laddningsetuiet",
  os: "iOS, iPadOS, macOS",
  warranty: "1 års garanti",
  availability: "Finns i lager",
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
},

    {
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
  brand: "Samsung",
  model: "Galaxy Buds4 Pro",
  color: "Vit",
  battery: "Upp till 30 timmar med laddningsetuiet",
  os: "Android",
  warranty: "2 års garanti",
  availability: "Finns i lager",
  backgroundColor: "#ECF2F9",
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
},

   {
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
  brand: "Samsung",
  model: "Galaxy Buds3",
  color: "Vit",
  battery: "Upp till 24 timmar med laddningsetuiet",
  os: "Android",
  warranty: "2 års garanti",
  availability: "Finns i lager",
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
},

    {
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
  brand: "Apple",
  model: "Watch Series 11",
  color: "Silver",
  battery: "Upp till 18 timmars batteritid",
  os: "watchOS",
  warranty: "2 års garanti",
  availability: "Finns i lager",
  backgroundColor: "#ECF2F9",
  features: [
    {
      icon: "check",
      title: "Hälsa & träning",
      text: "Följ aktivitet, puls och träning direkt från handleden.",
    },
    {
      icon: "check",
      title: "Smart vardag",
      text: "Notiser, samtal och appar samlade i en smidig klocka.",
    },
    {
      icon: "check",
      title: "Modern design",
      text: "Tunn och stilren design som passar både arbete och fritid.",
    },
  ],
},

    {
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
  brand: "Apple",
  model: "Watch Ultra 3",
  color: "Titan",
  battery: "Upp till 36 timmars batteritid",
  os: "watchOS",
  warranty: "2 års garanti",
  availability: "Finns i lager",
  backgroundColor: "#ECF2F9",
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
},

    {
  id: 17,
  title: "Samsung Galaxy Watch 8 Classic",
  thumbnail: "/images/smarta-klockor/galaxy-watch8-classic-with-black2.webp",
  gallery: [
    "/images/smarta-klockor/galaxy-watch8-classic-with-black2.webp",
  ],
  description:
    "Samsung Galaxy Watch 8 Classic kombinerar klassisk design, tydlig AMOLED-skärm och smarta hälsofunktioner för träning och vardag.",
  price: 4490,
  tag: "Ny",
  discount: null,
  categories: ["smartWatch"],
  filter: "smartWatch",
  brand: "Samsung",
  model: "Galaxy Watch 8 Classic",
  color: "Svart",
  battery: "Upp till 40 timmars batteritid",
  os: "Wear OS",
  warranty: "2 års garanti",
  availability: "Finns i lager",
  backgroundColor: "#ECF2F9",
  features: [
    {
      icon: "check",
      title: "Klassisk design",
      text: "Elegant klockdesign som passar både arbete och vardag.",
    },
    {
      icon: "check",
      title: "AMOLED-skärm",
      text: "Tydlig och ljusstark skärm för enkel användning.",
    },
    {
      icon: "check",
      title: "Hälsa & träning",
      text: "Följ aktivitet, puls och dagliga hälsomätningar.",
    },
  ],
},

    {
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
  brand: "Samsung",
  model: "Galaxy Watch Ultra",
  color: "Orange",
  battery: "Upp till 48 timmars batteritid",
  os: "Wear OS",
  warranty: "2 års garanti",
  availability: "Finns i lager",
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
},

    {
      id: 19,
      title: "Apple Watch Series 9",
      thumbnail: "/images/smarta-klockor/smart-watch-5.png",
      gallery: [
  "/images/smarta-klockor/smart-watch-5.png",
],

      description: "Compact wireless earbuds with smart features",
      price: 180,
      tag: null,
      discount: null,
      categories: ["smartWatch"],
      filter: "smartWatch",
      backgroundColor: "#ECF2F9",
    },
    {
      id: 20,
      title: "Apple Watch Series 5",
      thumbnail: "/images/smarta-klockor/smart-watch-6.png",
      gallery: [
  "/images/smarta-klockor/smarta-watch-6.png",
],

      description: "Compact wireless earbuds with smart features",
      price: 120,
      tag: null,
      discount: null,
      categories: ["smartWatch"],
      filter: "smartWatch",
      backgroundColor: "#ECF2F9",
    },
    {
      id: 20.1,
      title: "Samsung Watch",
      thumbnail: "/images/smarta-klockor/smart-watch-7.png",
      gallery: [
  "/images/smarta-klockor/smart-watch-7.png",
],

      description: "Compact wireless earbuds with smart features",
      price: 90,
      tag: null,
      discount: null,
      categories: ["smartWatch"],
      filter: "smartWatch",
      backgroundColor: "#ECF2F9",
    },
    {
      id: 21,
      title: "Dji Drone",
      thumbnail: "/images/bestProducts/drone-1.png",
      description: "Compact wireless earbuds with smart features",
      price: 90,
      tag: null,
      discount: null,
      categories: ["drone", "accessories"],
      filter: "drone",
      backgroundColor: "#ECF2F9",
    },
    {
      id: 22,
      title: "Dji 505 Drone",
      thumbnail: "/images/bestProducts/drone-2.png",
      description: "Compact wireless earbuds with smart features",
      price: 120,
      tag: null,
      discount: null,
      categories: ["drone", "accessories"],
      filter: "drone",
      backgroundColor: "#ECF2F9",
    },
    {
      id: 23,
      title: "Dji Small Drone",
      thumbnail: "/images/bestProducts/drone-3.png",
      description: "Compact wireless earbuds with smart features",
      price: 170,
      tag: null,
      discount: null,
      categories: ["drone"],
      filter: "drone",
      backgroundColor: "#ECF2F9",
    },
    {
      id: 24,
      title: "Sony Night Vision Drone",
      thumbnail: "/images/bestProducts/drone-4.png",
      description: "Compact wireless earbuds with smart features",
      price: 230,
      tag: null,
      discount: null,
      categories: ["drone"],
      filter: "drone",
      backgroundColor: "#ECF2F9",
    },
    {
      id: 25,
      title: "Sony White Drone",
      thumbnail: "/images/bestProducts/drone-5.png",
      description: "Compact wireless earbuds with smart features",
      price: 250,
      tag: null,
      discount: null,
      categories: ["drone", "virtualReality"],
      filter: "drone",
      backgroundColor: "#ECF2F9",
    },
    {
      id: 26,
      title: "Xiaomi Drone",
      thumbnail: "/images/bestProducts/drone-6.png",
      description: "Compact wireless earbuds with smart features",
      price: 150,
      tag: null,
      discount: null,
      categories: ["drone"],
      filter: "drone",
      backgroundColor: "#ECF2F9",
    },
  ],
  headphonesData: [
    {
      id: 101,
title: "Sony WH-1000XM6",
thumbnail: "/images/headphones/WH1000XM6-shop-ornexa.webp",

      description: "Premium wireless earbuds with adaptive noise cancellation",
      price: 3000,
      tag: "New",
      discount: null,
      categories: ["headphones", "earbuds"],
      filter: "headphones",
      backgroundColor: "#ffffff",
    },
    
    {
  id: 102,
  title: "1000X SERIES",
  thumbnail: "/images/headphones/1000X SERIES-hörlurar-shop-ornexa.webp",
  gallery: [
    "/images/headphones/1000X SERIES-hörlurar-shop-ornexa.webp",
    "/images/headphones/1000X SERIES-hörlurar-shop-ornexa1.webp",
    "/images/headphones/1000X SERIES-hörlurar-shop-ornexa2.webp",
  ],
  description:
    "1000X SERIES är premiumhörlurar med kraftfullt ljud, effektiv brusreducering och bekväm passform för musik, arbete och resor.",
  price: 2999,
  tag: "Ny",
  discount: null,
  categories: ["headphones"],
  filter: "headphones",
  brand: "Sony",
  model: "1000X SERIES",
  color: "Silver",
  battery: "Upp till 30 timmars batteritid",
  os: "Bluetooth",
  warranty: "2 års garanti",
  availability: "Finns i lager",
  backgroundColor: "#ffffff",
  features: [
  {
    icon: "check",
    title: "Brusreducering",
    text: "Minskar störande ljud och ger bättre fokus.",
  },
  {
    icon: "check",
    title: "Lång batteritid",
    text: "Upp till 30 timmars användning.",
  },
  {
    icon: "check",
    title: "Bekväm passform",
    text: "Lätta hörlurar för musik, arbete och resor.",
  },
],

},

 {
  id: 9,
  title: "AirPods 4",
  thumbnail: "/images/headphones/airpods-4-shop-ornexa1.webp",
  gallery: [
    "/images/headphones/airpods-4-shop-ornexa1.webp",
  ],
  description: "AirPods 4 ger en lätt och bekväm lyssningsupplevelse med klart ljud, stabil anslutning och smidig användning tillsammans med Apple-enheter.",
  price: 1790,
  tag: "Ny",
  discount: null,
  categories: ["headphones", "accessories"],
  filter: "headphones",
  brand: "Apple",
  model: "AirPods 4",
  color: "Vit",
  battery: "Upp till 30 timmar med laddningsetuiet",
  os: "iOS, iPadOS, macOS",
  warranty: "1 års garanti",
  availability: "Finns i lager",
  backgroundColor: "#ECF2F9",
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
},


    {
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
  brand: "Samsung",
  model: "Galaxy Buds4 Pro",
  color: "Vit",
  battery: "Upp till 30 timmar med laddningsetuiet",
  os: "Android",
  warranty: "2 års garanti",
  availability: "Finns i lager",
  backgroundColor: "#ECF2F9",
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
},
    {
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
  brand: "Samsung",
  model: "Galaxy Buds3",
  color: "Vit",
  battery: "Upp till 24 timmar med laddningsetuiet",
  os: "Android",
  warranty: "2 års garanti",
  availability: "Finns i lager",
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
},


 {
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
  brand: "Apple",
  model: "AirPods Pro 3",
  color: "Vit",
  battery: "Upp till 30 timmar med laddningsetuiet",
  os: "iOS, iPadOS, macOS",
  warranty: "1 års garanti",
  availability: "Finns i lager",
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
},

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
