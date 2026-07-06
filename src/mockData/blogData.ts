export interface AuthorType {
  name: string;
  image: string;
}

export interface DateType {
  day: string;
  month: string;
  year: number;
}

export interface BlogSectionType {
  heading: string;
  body: string;
}

export interface BlogFaqType {
  question: string;
  answer: string;
}

export interface BlogSpecType {
  label: string;
  value: string;
}

export interface BlogType {
  id: number;
  slug: string;
  title: string;
  thumbnail: string;
  secondImage?: string;
  description: string;
  intro?: string;
  sections?: BlogSectionType[];
  features?: string[];
  specs?: BlogSpecType[];
  faq?: BlogFaqType[];
  author: AuthorType;
  date: DateType;
  size: "large" | "medium" | "small";
  productHref?: string;
  ctaText?: string;
}

export const blogData: BlogType[] = [
  {
  id: 1,
  slug: "samsung-galaxy-watch-ultra",

  title:
    "Samsung Galaxy Watch Ultra – komplett guide för träning, hälsa och smart teknik",

  thumbnail: "/images/blogs/ornexa-shop-her1.webp",

  secondImage: "/images/blogs/ornexa-shop-her2.webp",

  description:
    "Samsung Galaxy Watch Ultra kombinerar avancerad hälsospårning, kraftfull GPS, lång batteritid och premiumdesign. Den här guiden hjälper dig att förstå varför modellen är ett av de bästa valen för både träning och vardagsanvändning.",

  intro:
    "Samsung Galaxy Watch Ultra är utvecklad för användare som vill ha en smartklocka med hög prestanda, exakt aktivitetsmätning och premiumkvalitet. Guiden går igenom funktioner, fördelar, specifikationer och vem produkten passar bäst för.",

  sections: [
    {
      heading: "Varför välja Samsung Galaxy Watch Ultra?",
      body:
        "Galaxy Watch Ultra kombinerar avancerad hårdvara, elegant design och smarta funktioner för hälsa, träning och produktivitet. Den passar både aktiva användare och personer som vill ha en komplett smartklocka i vardagen.",
    },
    {
      heading: "Hälsa och träning",
      body:
        "Klockan erbjuder pulsmätning, sömnanalys, träningsspårning, GPS och flera smarta funktioner som hjälper dig att följa din utveckling och skapa bättre träningsrutiner.",
    },
    {
      heading: "Design och batteritid",
      body:
        "Samsung Galaxy Watch Ultra är byggd med premiumkänsla och robust konstruktion. Batteriet räcker länge och gör klockan till ett bra val för både arbete, resor och intensiv träning.",
    },
  ],

  features: [
    "Avancerad GPS och träningsspårning",
    "Pulsmätning och sömnanalys",
    "Premiumdesign för vardag och sport",
    "Lång batteritid",
    "Snabb prestanda med Wear OS",
    "Notifikationer, samtal och appar direkt på handleden",
  ],

  specs: [
    {
      label: "Produkt",
      value: "Samsung Galaxy Watch Ultra",
    },
    {
      label: "Kategori",
      value: "Premium Smartwatch",
    },
    {
      label: "Operativsystem",
      value: "Wear OS",
    },
    {
      label: "Passar för",
      value: "Träning, hälsa, arbete och vardag",
    },
    {
      label: "Styrkor",
      value: "GPS, batteri, hälsospårning och premiumdesign",
    },
  ],

  faq: [
    {
      question: "Är Samsung Galaxy Watch Ultra bra för träning?",
      answer:
        "Ja. Den erbjuder avancerad GPS, pulsmätning, träningsspårning och detaljerad hälsodata för både motionärer och professionella användare.",
    },
    {
      question: "Passar klockan till vardagsanvändning?",
      answer:
        "Ja. Du kan hantera notiser, samtal, kalender, appar och hälsodata direkt från handleden vilket gör den idealisk även utanför träningen.",
    },
    {
      question: "Vem bör köpa Galaxy Watch Ultra?",
      answer:
        "Den passar användare som söker en premiumsmartklocka med hög prestanda, lång batteritid och avancerade funktioner för både hälsa och produktivitet.",
    },
  ],

  author: {
    name: "Ornexa team",
    image: "/images/blogs/ornexa-avatar.webp",
  },

  date: {
    day: "04",
    month: "Juli",
    year: 2026,
  },

  size: "large",

  productHref: "/product-details/18",

  ctaText: "Köp Samsung Galaxy Watch Ultra",
},


  {
    id: 2,
    slug: "iphone-17-pro-guide",
    title:
      "iPhone 17 Pro – komplett guide för kamera, prestanda och premiumkänsla",
    thumbnail: "/images/blogs/iphone17pro-ornexa-blog-bild1.webp",
    secondImage: "/images/blogs/iphone17pro-ornexa-blogbild2.webp",
    description:
      "Upptäck iPhone 17 Pro med avancerad kamera, stark prestanda, elegant design och en premiumupplevelse för arbete, foto, video och vardagsanvändning.",
    intro:
      "iPhone 17 Pro är ett premiumval för dig som vill ha en kraftfull mobil med hög prestanda, avancerad kamera och en smidig Apple-upplevelse i vardagen.",
    sections: [
      {
        heading: "Varför välja iPhone 17 Pro?",
        body:
          "iPhone 17 Pro passar användare som vill kombinera snabb prestanda, hög byggkvalitet och en kamera som fungerar bra för både foto, video och sociala medier.",
      },
      {
        heading: "Kamera och video",
        body:
          "Kamerasystemet är en av de största anledningarna att välja iPhone 17 Pro. Den passar särskilt bra för porträtt, produktbilder, video, resor och innehållsskapande.",
      },
      {
        heading: "Prestanda i vardagen",
        body:
          "Med stark processor, snabb respons och effektiv mjukvara är iPhone 17 Pro byggd för multitasking, appar, foto, video och långsiktig användning.",
      },
    ],
    features: [
      "Avancerad kamera för foto och video",
      "Stark prestanda för arbete och vardag",
      "Premiumdesign med elegant känsla",
      "Passar content creators och professionella användare",
      "Smidig upplevelse med Apple-ekosystemet",
    ],
    specs: [
      { label: "Produkt", value: "iPhone 17 Pro" },
      { label: "Kategori", value: "Premium smartphone" },
      { label: "Passar för", value: "Foto, video, arbete och vardag" },
      { label: "Design", value: "Premiumkänsla och modern finish" },
      { label: "Användning", value: "Privat, professionellt och kreativt bruk" },
    ],
    faq: [
      {
        question: "Är iPhone 17 Pro ett bra val för foto och video?",
        answer:
          "Ja, iPhone 17 Pro är ett starkt val för användare som vill skapa bilder och video med hög kvalitet i vardagen.",
      },
      {
        question: "Passar iPhone 17 Pro för arbete?",
        answer:
          "Ja, modellen passar bra för produktivitet, kommunikation, foto, video och dagliga digitala uppgifter.",
      },
      {
        question: "Vem bör köpa iPhone 17 Pro?",
        answer:
          "Den passar dig som vill ha en premiumtelefon med stark prestanda, bra kamera och långsiktig användning.",
      },
    ],
    author: {
      name: "Ornexa team",
      image: "/images/blogs/ornexa-avatar.webp",
    },
    date: {
      day: "05",
      month: "Juli",
      year: 2026,
    },
    size: "small",
    productHref: "/product-details/2",
    ctaText: "Köp iPhone 17 Pro nu",
  },

  {
  id: 3,
  slug: "sony-wh1000x-series-guide",
  title:
    "Sony WH-1000X Series – komplett guide för ljud, brusreducering och komfort",
  thumbnail: "/images/blogs/ornexa-shop-sony1.webp",
  secondImage: "/images/blogs/ornexa-shop-sony2.webp",
  description:
    "Upptäck Sony WH-1000X Series med premiumljud, avancerad brusreducering, lång batteritid och bekväm design för musik, arbete, resor och vardagsanvändning.",
  intro:
    "Sony WH-1000X Series är ett premiumval för dig som vill ha hörlurar med kraftfullt ljud, smart brusreducering och hög komfort under hela dagen.",
  sections: [
    {
      heading: "Varför välja Sony WH-1000X Series?",
      body:
        "Sony WH-1000X Series passar användare som vill kombinera hög ljudkvalitet, bekväm passform och effektiv brusreducering för arbete, resor och daglig användning.",
    },
    {
      heading: "Brusreducering och fokus",
      body:
        "Den aktiva brusreduceringen minskar störande ljud från omgivningen och gör hörlurarna särskilt användbara på kontor, i kollektivtrafik, på flyg och vid koncentrerat arbete.",
    },
    {
      heading: "Ljudkvalitet i vardagen",
      body:
        "Med balanserat ljud, tydlig bas och klara detaljer passar Sony WH-1000X Series både för musik, podcasts, filmer, videosamtal och längre lyssningssessioner.",
    },
  ],
  features: [
    "Avancerad aktiv brusreducering",
    "Premiumljud för musik, film och samtal",
    "Bekväm design för lång användning",
    "Lång batteritid för resor och vardag",
    "Passar arbete, studier och pendling",
    "Trådlös anslutning med smidig användning",
  ],
  specs: [
    { label: "Produkt", value: "Sony WH-1000X Series" },
    { label: "Kategori", value: "Premiumhörlurar" },
    { label: "Passar för", value: "Musik, arbete, resor och vardag" },
    { label: "Funktion", value: "Aktiv brusreducering och trådlöst ljud" },
    { label: "Användning", value: "Privat, professionellt och kreativt bruk" },
  ],
  faq: [
    {
      question: "Är Sony WH-1000X Series bra för brusreducering?",
      answer:
        "Ja, Sony WH-1000X Series är ett starkt val för användare som vill minska störande ljud och få bättre fokus i vardagen.",
    },
    {
      question: "Passar Sony WH-1000X Series för arbete?",
      answer:
        "Ja, hörlurarna passar bra för distansarbete, kontor, videosamtal, koncentration och dagliga digitala uppgifter.",
    },
    {
      question: "Vem bör köpa Sony WH-1000X Series?",
      answer:
        "Den passar dig som vill ha premiumhörlurar med hög ljudkvalitet, bekväm design och effektiv brusreducering.",
    },
  ],
  author: {
    name: "Ornexa team",
    image: "/images/blogs/ornexa-avatar.webp",
  },
  date: {
    day: "06",
    month: "Juli",
    year: 2026,
  },
  size: "small",
  productHref: "/product-details/102",
  ctaText: "Köp Sony WH-1000X nu",
},

];
