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
      "Samsung Galaxy Watch Ultra – Den ultimata smartklockan för träning och vardag",
    thumbnail: "/images/blogs/blogg-shop-ornexa1.webp",
    description:
      "Upptäck varför Samsung Galaxy Watch Ultra är ett av marknadens mest avancerade smarta klockor med kraftfull batteritid, GPS och avancerade hälsofunktioner.",
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
    slug: "wave-speaker-review",
    title: "Experience Immersive Sound Anywhere with Wave Speaker",
    thumbnail: "/images/blogs/blog-3.png",
    description:
      "Smart thermostats aren’t just a fancier way to control your home’s temperature. Contemporary smart thermostats allow",
    author: {
      name: "Kathryn Murphy",
      image: "/images/blogs/user-3.png",
    },
    date: {
      day: "12",
      month: "June",
      year: 2024,
    },
    size: "small",
    productHref: "/shop",
    ctaText: "Köp produkten nu",
  },
];
