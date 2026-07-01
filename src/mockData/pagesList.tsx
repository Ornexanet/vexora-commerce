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
        id: 3,
        href: "/about",
        label: "About Us",
      },
      {
        id: 4,
        href: "/contact",
        label: "Contact Us",
      },
      {
        id: 5,
        href: "/faqs",
        label: "FAQs",
      },
      
    ],
  },
  
  {
    id: 2,
    title: "User Account",
    pages: [
      {
        id: 1,
        href: "/login",
        label: "Login / Register",
      },
      {
        id: 2,
        href: "/login",
        label: " account",
      },
     
      {
        id: 6,
        href: "/wishlist",
        label: "Wishlist",
      },
    ],
  },
  {
    id: 3,
    title: "Cart & Checkout",
    pages: [
      {
        id: 1,
        href: "/cart",
        label: "Cart",
      },
      {
        id: 2,
        href: "/checkout",
        label: "Checkout",
      },
      
      {
        id: 2,
        href: "/blog",
        label: "Blog",
      },
    ],
  },
];

export const pagesList: PageListType[] = [
  {
    id: 1,
    href: "#",
    label: "Blog",
    dropdownMenu: [
      {
        id: 0,
        label: "Blog Modern",
        href: "/blog",
      },
      {
        id: 1,
        label: "Blog Classic",
        href: "/blog-classic",
      },
      {
        id: 2,
        label: "Blog Details",
        href: "/blog-details",
      },
      {
        id: 3,
        label: "Blog Details Two",
        href: "/blog-details-two",
      },
    ],
  },
  {
    id: 2,
    href: "/dashboard/orders",
    label: "Information",
    subMenu: pagesSubmenuList,
  },
  {
    id: 3,
    href: "/contact",
    label: "Get help",
  },
];
