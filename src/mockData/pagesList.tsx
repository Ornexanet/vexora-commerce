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
    title: "Utility & Legal Pages",
    pages: [
      {
        id: 1,
        href: "/",
        label: "Home-1",
      },
      {
        id: 2,
        href: "/home-2",
        label: "Home-2",
      },
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
      {
        id: 6,
        href: "/dashboard",
        label: "Dashboard",
      },
    ],
  },
  {
    id: 1,
    title: "Shop & Product Pages",
    pages: [
      {
        id: 1,
        href: "/shop",
        label: "Shop",
      },
      {
        id: 2,
        href: "/shop-with-sidebar",
        label: "Shop With Sidebar",
      },
      {
        id: 3,
        href: "/shop-list",
        label: "Shop List",
      },
      {
        id: 4,
        href: "/product-details",
        label: "Product Details",
      },
      {
        id: 5,
        href: "/product-details-2",
        label: "Product Details Two",
      },
      {
        id: 6,
        href: "/compare",
        label: "Compare",
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
        href: "/account",
        label: "My Account",
      },
      {
        id: 3,
        href: "/orders",
        label: "My Orders",
      },
      {
        id: 4,
        href: "#",
        label: "Track Order",
      },
      {
        id: 5,
        href: "#",
        label: "Order Details",
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
        id: 3,
        href: "#",
        label: "Shipping Information",
      },
      {
        id: 4,
        href: "#",
        label: "Payment",
      },
      {
        id: 5,
        href: "#",
        label: "Order Completed",
      },
      {
        id: 6,
        href: "/not-found",
        label: "404 Page",
      },
    ],
  },
  {
    id: 4,
    title: "Engagement Pages",
    pages: [
      {
        id: 1,
        href: "/blog-details",
        label: "Blog Details",
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
    href: "#",
    label: "Pages",
    subMenu: pagesSubmenuList,
  },
  {
    id: 3,
    href: "/contact",
    label: "Get help",
  },
];
