import { Instagram, Logo, Twitter, Whatsapp, Youtube } from "@/lib/icons";
import Link from "next/link";
import Title from "../ui/title";

export interface FooterLinkType {
  id: number;
  label: string;
  href: string;
}

export const categories: FooterLinkType[] = [
  {
    id: 1,
    label: "All Products",
    href: "/shop",
  },
  {
    id: 2,
    label: "Bluetooth Speakers",
    href: "/shop",
  },
  {
    id: 3,
    label: "Headphones",
    href: "/shop"
  },
  {
    id: 4,
    label: "Drones",
    href: "/shop",
  },
  {
    id: 5,
    label: "Cameras",
    href: "/shop",
  },
];

export const pagesOne: FooterLinkType[] = [
  {
    id: 1,
    label: "Track Order",
    href: "/dashboard/orders",
  },
  {
    id: 2,
    label: "Shipping Info",
    href: "/dashboard/orders",
  },
  {
    id: 3,
    label: "Help",
    href: "/contact",
  },
  {
    id: 4,
    label: "privacy policy",
    href: "/Privacy-policy",
  },
  {
    id: 5,
    label: "Returns & Refund Policy",
    href: "/returns-refund-policy",
  },
];

export const pagesTwo: FooterLinkType[] = [
  {
    id: 1,
    label: "Cart",
    href: "/cart",
  },
  {
    id: 2,
    label: "My account",
    href: "/login",
  },
  {
    id: 3,
    label: "My Orders",
    href: "/dashboard/orders",
  },
  {
    id: 4,
    label: "Wishlist",
    href: "/wishlist",
  },
  {
    id: 5,
    label: "Affiliate Program",
    href: "/affiliate",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F7] pt-25 mt-25">
      <div
        className="bg-no-repeat max-xl:bg-contain bg-right-bottom"
        style={{ backgroundImage: `url('/images/logo-whit-big.png')` }}
      >
        <div className="container">
          <Title
            asChild
            size="28"
            className="text-light-dark font-medium mb-2.5"
          >
            <h5>Let’s get this started</h5>
          </Title>
          <Title asChild>
            <Link href={"mail:info@Vexora.com"}>info@Vexora.com</Link>
          </Title>
          <div className="pt-[70px] max-w-[717px] flex sm:flex-row flex-col gap-y-10 justify-between">
            <div>
              <ul className="space-y-3">
                {categories.map(({ href, id, label }) => (
                  <li key={id}>
                    <Link
                      href={href}
                      className="md:text-lg md:leading-normal hover:text-blue transition-all duration-500"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                {pagesOne.map(({ href, id, label }) => (
                  <li key={id}>
                    <Link
                      href={href}
                      className="md:text-lg md:leading-normal hover:text-blue transition-all duration-500"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                {pagesTwo.map(({ href, id, label }) => (
                  <li key={id}>
                    <Link
                      href={href}
                      className="md:text-lg md:leading-normal hover:text-blue transition-all duration-500"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-[120px] pb-1 flex lg:flex-row flex-col lg:items-center justify-between gap-y-5">
            <div className="flex sm:flex-row flex-col sm:items-center gap-x-10 gap-y-5">
              <Link href={"/"} className="text-light-dark">
                <Logo />
              </Link>
              <ul className="flex sm:items-center sm:flex-row flex-col gap-x-10 gap-y-5">
                <li>
                  <Link
                    href={"#"}
                    className="text-light-dark md:text-lg md:leading-normal hover:text-blue transition-all duration-500"
                  >
                    Who we are
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="text-light-dark md:text-lg md:leading-normal hover:text-blue transition-all duration-500"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="text-light-dark md:text-lg md:leading-normal hover:text-blue transition-all duration-500"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="text-light-dark md:text-lg md:leading-normal hover:text-blue transition-all duration-500"
                  >
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex items-center gap-9">
                <li>
                  <Link
                    href={"#"}
                    className="w-[30px] h-[30px] flex items-center justify-center hover:text-blue transition-all duration-500"
                  >
                    <Whatsapp />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="w-[30px] h-[30px] flex items-center justify-center hover:text-blue transition-all duration-500"
                  >
                    <Twitter />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="w-[30px] h-[30px] flex items-center justify-center hover:text-blue transition-all duration-500"
                  >
                    <Instagram />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="w-[30px] h-[30px] flex items-center justify-center hover:text-blue transition-all duration-500"
                  >
                    <Youtube />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="pt-9 xl:pb-10.5 pb-20">
        <div className="container flex sm:flex-row flex-col justify-between sm:items-center gap-y-5">
          <p className="md:text-lg font-medium md:leading-normal text-light-dark">
            © {new Date().getFullYear()} Vexora Electronic Ltd. All Rights
            Reserved
          </p>
          <div className="flex items-center gap-2.5">
            <Glob />
            <span className="md:text-lg font-medium md:leading-normal text-light-dark">
              Other Regions / English
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

function Glob() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3 12H8M3 12C3 16.9706 7.02944 21 12 21M3 12C3 7.02944 7.02944 3 12 3M8 12H16M8 12C8 16.9706 9.79086 21 12 21M8 12C8 7.02944 9.79086 3 12 3M16 12H21M16 12C16 7.02944 14.2091 3 12 3M16 12C16 16.9706 14.2091 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12C21 16.9706 16.9706 21 12 21"
        stroke="#65717E"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
