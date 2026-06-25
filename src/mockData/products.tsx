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
      id: 1,
      title: "B&W McLaren",
      thumbnail: "/images/hot-deal/product-1.png",
      description: "Special-edition over-ear noise cancelling headphones",
      price: 50,
      tag: null,
      discount: null,
      categories: [""],
      backgroundColor: "#FFF9F5",
    },
    {
      id: 2,
      title: "Lavic 3 PRO",
      thumbnail: "/images/hot-deal/product-2.png",
      description: "Fly Longer, Sense More Industry-Leading Performance",
      price: 50,
      tag: null,
      discount: null,
      categories: [""],
      backgroundColor: "#F4FCFC",
    },
    {
      id: 3,
      title: "Smart Watch",
      thumbnail: "/images/hot-deal/product-3.png",
      description: "Experience the biggest screen ever on the Smart Watch",
      price: 50,
      tag: null,
      discount: null,
      categories: [""],
      backgroundColor: "#F6F9FF",
    },
  ],
  newStockProducts: [
    {
      id: 1,
      title: "Go360 4Pro",
      thumbnail: "/images/new-stock/product-1.png",
      description:
        "Celebrating the long-standing, award-winning partnership between Bowers & Wilkins and McLaren Automotive and the McLaren supercars and hypercars in which Bowers & Wilkins has been integrated.",
      price: 449,
      tag: "Featured",
      discount: null,
      categories: ["Electronics", "Camera"],
      backgroundColor: "#F4EEE9",
    },
    {
      id: 2,
      title: "Sony WH-1000XM6",
      thumbnail: "/images/products/sony-wh-1000xm6-main.webp",
      description:
        "Trådlösa premiumhörlurar med avancerad brusreducering, klart ljud och upp till 30 timmars batteritid.",
      price: 3990,
      tag: null,
      discount: null,
      categories: ["Hörlurar"],
      backgroundColor: "#F3F5F8",
    },
    {
      id: 3,
      title: "Insta360 ACE Pro",
      thumbnail: "/images/new-stock/product-3.png",
      description:
        "Celebrating the long-standing, award-winning partnership between Bowers & Wilkins and McLaren Automotive and the McLaren supercars and hypercars in which Bowers & Wilkins has been integrated.",
      price: 399,
      tag: null,
      discount: 30,
      categories: ["Electronics", "Camera"],
      backgroundColor: "#FFF6F6",
    },
    {
      id: 4,
      title: "Xbox Wireless Controller",
      thumbnail: "/images/new-stock/product-4.png",
      description:
        "Celebrating the long-standing, award-winning partnership between Bowers & Wilkins and McLaren Automotive and the McLaren supercars and hypercars in which Bowers & Wilkins has been integrated.",
      price: 849,
      tag: null,
      discount: null,
      categories: ["Electronics", "Gaming"],
      backgroundColor: "#F6F3FD",
    },
  ],
  bestProductsData: [
    {
  id: 1,
  title: "iPhone 16 Plus",
thumbnail: "/images/mobiles/iphone-16-plus.webp",
gallery: [
  "/images/mobiles/iphone-16-plus.webp",
  "/images/mobiles/iphone-16-plus-2.webp",
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
  thumbnail: "/images/mobiles/iphone-17-pro-orange.webp",
  gallery: [
    "/images/mobiles/iphone-17-pro-orange.webp",
    "/images/mobiles/iphone-17-pro-orange1.webp",
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
  id: 4,
  title: "Samsung Galaxy S26 Ultra",
  thumbnail: "/images/mobiles/samsung-galaxy-s26-ultra-1.png",
  gallery: [
    "/images/mobiles/samsung-galaxy-s26-ultra-1.png",
    "/images/mobiles/samsung-galaxy-s26-ultra-2.png",
  ],
  description:
    "Samsung Galaxy S26 Ultra med avancerad kamera, stor AMOLED-skärm och prestanda i toppklass för foto, video, arbete och krävande appar.",
  price: 13990,
  tag: "Ny",
  discount: null,
  categories: ["mobiler"],
  filter: "mobiler",
  brand: "Samsung",
  model: "Galaxy S26 Ultra",
  storage: "256 GB",
  color: "Titanium Black",
  display: "6.8-tums Dynamic AMOLED",
  processor: "Snapdragon / Exynos Ultra",
  camera: "200 MP huvudkamera",
  battery: "Batteri för hela dagen",
  os: "Android 16",
  warranty: "2 års garanti",
  availability: "Finns i lager",
  backgroundColor: "#ECF2F9",
  features: [
    {
      icon: "camera",
      title: "200 MP kamera",
      text: "Avancerat kamerasystem för skarpa bilder och video.",
    },
    {
      icon: "display",
      title: "Stor AMOLED-skärm",
      text: "6.8-tums skärm för arbete, film och multitasking.",
    },
    {
      icon: "performance",
      title: "Ultra-prestanda",
      text: "Byggd för krävande appar, spel och produktivitet.",
    },
  ],
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
      id: 6,
      title: "GoPro MAX",
      thumbnail: "/images/bestProducts/camera-6.png",
      description: "360-degree action camera with dual lens",
      price: 399.99,
      tag: null,
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
  thumbnail: "/images/headphones/airpods-4-shop-ornexa.jpg",
  gallery: [
    "/images/headphones/airpods-4-shop-ornexa.jpg",
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
  thumbnail: "/images/headphones/airpods-pro-3-shop-ornexa.jpg",
  gallery: [
    "/images/headphones/airpods-pro-3-shop-ornexa.jpg",
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
  thumbnail: "/images/headphones/galaxy buds4 pro-shop-ornexa.png",
  gallery: [
    "/images/headphones/galaxy buds4 pro-shop-ornexa.png",
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
      title: "WH-1000XM4",
      thumbnail: "/images/headphones/product-5.png",
      description: "Industry-leading noise cancelling headphones",
      price: 249,
      tag: null,
      discount: null,
      categories: ["headphones"],
      filter: "headphones",
      backgroundColor: "#ECF2F9",
    },
    {
      id: 14,
      title: "LinkBuds S Earbuds",
      thumbnail: "/images/headphones/product-6.png",
      description: "Compact wireless earbuds with smart features",
      price: 149,
      tag: null,
      discount: null,
      categories: ["headphones", "earbuds"],
      filter: "headphones",
      backgroundColor: "#ECF2F9",
    },
    {
      id: 15,
      title: "Apple Watch Series 8",
      thumbnail: "/images/bestProducts/smart-watch-1.png",
      description: "Compact wireless earbuds with smart features",
      price: 149,
      tag: null,
      discount: null,
      categories: ["smartWatch"],
      filter: "smartWatch",
      backgroundColor: "#ECF2F9",
    },
    {
      id: 16,
      title: "Samsung Galaxy Watch 5",
      thumbnail: "/images/bestProducts/smart-watch-2.png",
      description: "Compact wireless earbuds with smart features",
      price: 200,
      tag: null,
      discount: null,
      categories: ["smartWatch", "virtualReality"],
      filter: "smartWatch",
      backgroundColor: "#ECF2F9",
    },
    {
      id: 17,
      title: "Pixel Watch",
      thumbnail: "/images/bestProducts/smart-watch-3.png",
      description: "Compact wireless earbuds with smart features",
      price: 150,
      tag: null,
      discount: null,
      categories: ["smartWatch"],
      filter: "smartWatch",
      backgroundColor: "#ECF2F9",
    },
    {
      id: 18,
      title: "Xiaomi Watch",
      thumbnail: "/images/bestProducts/smart-watch-4.png",
      description: "Compact wireless earbuds with smart features",
      price: 150,
      tag: null,
      discount: null,
      categories: ["smartWatch"],
      filter: "smartWatch",
      backgroundColor: "#ECF2F9",
    },
    {
      id: 19,
      title: "Apple Watch Series 9",
      thumbnail: "/images/bestProducts/smart-watch-5.png",
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
      thumbnail: "/images/bestProducts/smart-watch-6.png",
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
      thumbnail: "/images/bestProducts/smart-watch-7.png",
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
      id: 1,
      title: "B&W Pi7 S2",
      thumbnail: "/images/headphones/product-1.png",
      description: "Premium wireless earbuds with adaptive noise cancellation",
      price: 319,
      tag: "New",
      discount: null,
      categories: ["headphones", "earbuds"],
      filter: "headphones",
      backgroundColor: "#ffffff",
    },
    {
      id: 2,
      title: "aBEAT",
      thumbnail: "/images/headphones/product-2.png",
      description: "Over-ear wireless headphones with premium sound",
      price: 149.9,
      tag: null,
      discount: null,
      categories: ["headphones"],
      filter: "headphones",
      backgroundColor: "#ffffff",
    },
    {
      id: 3,
      title: "B&W Px7 S2e",
      thumbnail: "/images/headphones/product-3.png",
      description: "Noise-cancelling over-ear headphones",
      price: 319,
      tag: null,
      discount: null,
      categories: ["headphones"],
      filter: "headphones",
      backgroundColor: "#ffffff",
    },
    {
      id: 4,
      title: "SoundPods",
      thumbnail: "/images/headphones/product-4.png",
      description: "Premium wireless over-ear headphones",
      price: 459,
      tag: "New",
      discount: null,
      categories: ["headphones"],
      filter: "headphones",
      backgroundColor: "#ffffff",
    },
    {
      id: 5,
      title: "WH-1000XM4",
      thumbnail: "/images/headphones/product-5.png",
      description: "Industry-leading noise cancelling headphones",
      price: 249,
      tag: null,
      discount: null,
      categories: ["headphones"],
      filter: "headphones",
      backgroundColor: "#ffffff",
    },
    {
      id: 6,
      title: "LinkBuds S Earbuds",
      thumbnail: "/images/headphones/product-6.png",
      description: "Compact wireless earbuds with smart features",
      price: 149,
      tag: null,
      discount: null,
      categories: ["headphones", "earbuds"],
      filter: "headphones",
      backgroundColor: "#ffffff",
    },
  ],
};
