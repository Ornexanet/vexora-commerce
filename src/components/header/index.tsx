import { categoriesList } from "@/mockData/categoriesList";
import { pagesList } from "@/mockData/pagesList";
import Link from "next/link";
import MegaMenu from "./megaMenu";
import TopHeader from "./topHeader";
import StickyHeader from "./stickyHeader";

const Header = () => {
  return (
    <StickyHeader>
      <div className="container lg:pt-[26px] lg:pb-6 pb-3 pt-3">
        <TopHeader />
      </div>
      <div className="w-full h-px bg-light-gray"></div>
      <div className="container xl:block hidden">
        <div className="flex items-center justify-between relative max-h-[60px]">
          <ul className="flex items-center gap-7.5">
            {categoriesList.map(({ href, icon, id, label }) => (
              <li key={id} className="group/category ">
                <Link
                  href={href}
                  prefetch={false}
                  className="text-lg font-medium flex items-center gap-2.5 py-3 group-hover/category:text-blue transition-all duration-500"
                >
                  <span className="shrink-0 flex items-center">{icon}</span>
                  {label}
                </Link>
                <div className="absolute top-full left-0 z-50 w-full hidden group-hover/category:block">
                 {/* <MegaMenu category={label.toLocaleLowerCase()} /> */}
                </div>
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-x-10">
            {pagesList.map(({ href, id, label, subMenu, dropdownMenu }) => (
              <li key={id} className="group/pages">
                <Link
                  href={href}
                  className="text-lg font-medium group-hover/pages:text-blue transition-all duration-500 py-3"
                >
                  <span className="h-[57px] flex items-center"> {label}</span>
                </Link>
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
                  <ul className="max-w-[1585px] overflow-hidden hidden group-hover/pages:flex justify-between delay-500 w-full absolute top-full left-0 z-50 bg-background rounded-xl shadow-[0_7px_18px_0_rgba(0,0,0,0.09)] border border-[#F1F1F4]">
                    <li className="border-r border-[#F1F1F4] bg-[#FCFCFC] pt-7.5 pb-5 px-7.5 w-full max-w-[343px]">
                      <span className="flex px-2.5 pb-5 font-medium text-lg leading-6">
                        Pre-Built Demos
                      </span>
                      <ul>
                        <li>
                          <Link
                            href={"#"}
                            className="flex items-center gap-2.5 p-2.5 text-lg text-light-dark border border-transparent rounded-md hover:text-foreground hover:border-[#F1F1F4] hover:bg-background transition-all duration-500"
                          >
                            Consumer Electronics
                          </Link>
                        </li>
                        <li>
                          <div className="flex items-center gap-2.5 p-2.5 text-lg text-light-dark border border-transparent rounded-md cursor-not-allowed transition-all duration-500 opacity-70">
                            Fashion & Clothing
                            <span className="rounded-sm text-xs font-medium leading-2.5 px-1.5 py-1 block bg-[#F1F1F4]">
                              Soon
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center gap-2.5 p-2.5 text-lg text-light-dark border border-transparent rounded-md cursor-not-allowed transition-all duration-500 opacity-70">
                            Jewellery
                            <span className="rounded-sm text-xs font-medium leading-2.5 px-1.5 py-1 block bg-[#F1F1F4]">
                              Soon
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center gap-2.5 p-2.5 text-lg text-light-dark border border-transparent rounded-md cursor-not-allowed transition-all duration-500 opacity-70">
                            Sports
                            <span className="rounded-sm text-xs font-medium leading-2.5 px-1.5 py-1 block bg-[#F1F1F4]">
                              Soon
                            </span>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="w-full overflow-x-auto">
                      <ul className="flex justify-between min-w-[1200px]">
                        {subMenu.map(({ id, title, pages }) => (
                          <li key={id} className="pt-7.5 pb-5 px-4">
                            <span className="flex px-2.5 pb-5 font-medium text-lg leading-6">
                              {title}
                            </span>
                            <ul>
                              {pages?.map(({ href, id, label }) => (
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
                    </li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StickyHeader>
  );
};

export default Header;
