import { Heart, User } from "@/lib/icons";
import Image from "next/image";
import Link from "next/link";
import CurrencySelect from "./currencySelect";
import MobileNavSidebarTwo from "./mobileNavSidebarTwo";
import MegaMenu from "./megaMenu";
import { pagesSubmenuList } from "@/mockData/pagesList";
import SearchModal from "./searchModal";
import CartSidebar from "@/components/header/cartSidebar";
import StickyHeader from "@/components/header/stickyHeader";

export const navMenu = [
  {
    id: 1,
    label: "Home",
    path: "#",
    dropdownMenu: [
      { id: 1, href: "/", label: "Home-1" },
      { id: 2, href: "/home-2", label: "Home-2" },
    ],
  },
  { id: 2, label: "Shop", path: "/shop", megaMenu: true },
  { id: 3, label: "Accessories", path: "#" },
  {
    id: 4,
    label: "Pages",
    path: "#",
    subMenu: pagesSubmenuList,
  },
  {
    id: 5,
    label: "Blog",
    path: "#",
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
  { id: 6, label: "Contact", path: "/contact" },
];

const Header = () => {
  return (
    <StickyHeader>
      <div className="lg:pt-[31px] lg:pb-7.5 pt-4 pb-4 bg-background">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="flex items-center lg:gap-[37px] gap-5">
              <div className="xl:hidden block">
                <MobileNavSidebarTwo />
              </div>
              <Link href={"/home-2"} className="shrink-0">
                <Image
                  width={120}
                  height={40}
                  src={"/images/logo.png"}
                  alt="logo"
                />
              </Link>
              <nav className="xl:block hidden">
                <ul className="flex items-center gap-7.5">
                  {navMenu.map(
                    ({ id, label, path, subMenu, megaMenu, dropdownMenu }) => (
                      <li key={id} className="group/pages">
                        <Link
                          href={path}
                          className="font-medium text-lg py-1 inline-flex hover:text-blue transition-all duration-500"
                        >
                          {label}
                        </Link>
                        {megaMenu && (
                          <div className="absolute top-full left-0 z-50 w-full hidden group-hover/pages:block">
                            <MegaMenu />
                          </div>
                        )}
                        {dropdownMenu?.length && (
                          <ul className="hidden group-hover/pages:block absolute top-full z-50 bg-background px-3 py-4 rounded-xl shadow-[0_7px_18px_0_rgba(0,0,0,0.09)] border border-[#F1F1F4]">
                            {dropdownMenu.map(({ id, href, label }) => (
                              <li key={id}>
                                <Link
                                  href={href}
                                  className="px-2.5 py-2.5 rounded-sm flex text-lg text-light-dark leading-6 hover:text-foreground hover:bg-[#F9F9F9] transition-all duration-500"
                                >
                                  {label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                        {subMenu?.length && (
                          <ul className="hidden group-hover/pages:grid grid-cols-5 gap-x-7.5 delay-500 min-w-max w-full absolute top-full left-0 z-50 bg-background px-[30px] pt-[30px] pb-5 rounded-xl shadow-[0_7px_18px_0_rgba(0,0,0,0.09)] border border-[#F1F1F4]">
                            {subMenu.map(({ id, title, pages }) => (
                              <li key={id}>
                                <span className="flex px-2.5 pb-5 font-medium leading-6">
                                  {title}
                                </span>
                                <ul>
                                  {pages.map(({ href, id, label }) => (
                                    <li key={id}>
                                      <Link
                                        href={href}
                                        className="px-2.5 py-2.5 rounded-sm flex text-lg text-light-dark leading-6 hover:text-foreground hover:bg-[#F9F9F9] transition-all duration-500"
                                      >
                                        {label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ),
                  )}
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-5">
              <SearchModal />
              <div className="md:block hidden">
                <CurrencySelect />
              </div>
              <span className="border-r border-r-[#B0B5BB] h-6 md:block hidden"></span>
              <Link href={"/login"} className="md:block hidden">
                <User className="size-6 [&>path]:stroke-3" />
              </Link>
              <Link href={"/wishlist"}>
                <Heart className="size-6 [&>path]:stroke-[1.7]" />
              </Link>
              <CartSidebar cartIconTwo={true} />
            </div>
          </div>
        </div>
      </div>
    </StickyHeader>
  );
};

export default Header;
