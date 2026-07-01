interface PagesSubmenuListType {
  id: number;
  title: string;
  pages: {
    id: number;
    href: string;
    label: string;
  }[];
}
interface PageListType {
  id: number;
  href: string;
  label: string;
  dropdownMenu?: {
    id: number;
    href: string;
    label: string;
  }[];
  subMenu?: PagesSubmenuListType[];
}

export const pagesSubmenuList: PagesSubmenuListType[] = [
  {
    id: 0,
    title: "Information",
    pages: [
      {
        id: 1,
        href: "/about",
        label: "Om oss",
      },
      {
        id: 2,
        href: "/contact",
        label: "Kontakt",
      },
      {
        id: 3,
        href: "/faqs",
        label: "Vanliga frågor",
      },
      {
        id: 4,
        href: "/privacy-policy",
        label: "Integritetspolicy",
      },
      {
        id: 5,
        href: "/returns-refund-policy",
        label: "Retur & återbetalning",
      },
    ],
  },
  {
    id: 1,
    title: "Konto",
    pages: [
      {
        id: 1,
        href: "/login",
        label: "Logga in / Registrera",
      },
      {
        id: 2,
        href: "/account",
        label: "Mitt konto",
      },
      {
        id: 3,
        href: "/wishlist",
        label: "Önskelista",
      },
    ],
  },
  {
    id: 2,
    title: "Köp",
    pages: [
      {
        id: 1,
        href: "/cart",
        label: "Varukorg",
      },
      {
        id: 2,
        href: "/checkout",
        label: "Kassa",
      },
    ],
  },
];

export const pagesList: PageListType[] = [
  {
    id: 1,
    href: "#",
    label: "Information",
    subMenu: pagesSubmenuList,
  },
  {
    id: 2,
    href: "/contact",
    label: "Kundservice",
  },
];
