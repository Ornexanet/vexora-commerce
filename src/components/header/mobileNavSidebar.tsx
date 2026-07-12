"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categoriesList } from "@/mockData/categoriesList";
import { pagesList } from "@/mockData/pagesList";
import { Menu } from "lucide-react";
import Link from "next/link";
import HeaderExtraInfo from "./headerExtraInfo";
import { Plus } from "@/lib/icons";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";

const MobileNavSidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleDropdownClick = (id: number) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger aria-label="Öppna meny">
      <Menu />
      </SheetTrigger>

      <SheetContent side="left" className="justify-between">
        <SheetHeader className="hidden">
          <SheetTitle></SheetTitle>
        </SheetHeader>
        <Tabs defaultValue="pages" className="w-full mt-14">
          <TabsList className="w-full h-auto rounded-none">
            <TabsTrigger
              value="pages"
              className="data-[state=active]:shadow-none py-2 text-base rounded-none"
            >
              Pages
            </TabsTrigger>
            <TabsTrigger
              value="categories"
              className="data-[state=active]:shadow-none py-2 text-base rounded-none"
            >
              Categories
            </TabsTrigger>
          </TabsList>
          {/* pages links */}
          <TabsContent
            value="pages"
            className="px-7 py-3 max-h-[calc(100vh-17rem)] overflow-y-auto"
          >
            <ul className="flex flex-col mb-8">
              <li>
                <Link
                  href="/"
                  className="text-base font-medium py-2 hover:text-blue transition-all duration-500 flex items-center justify-between gap-2.5"
                >
                  Home-1
                </Link>
              </li>
              <li>
                <Link
                  href="/home-2"
                  className="text-base font-medium py-2 hover:text-blue transition-all duration-500 flex items-center justify-between gap-2.5"
                >
                  Home-2
                </Link>
              </li>
              {pagesList.map(({ href, id, label, subMenu, dropdownMenu }) => (
                <li key={id} className="relative">
                  <Link
                    href={href}
                    className="text-base font-medium py-2 hover:text-blue transition-all duration-500 flex items-center justify-between gap-2.5"
                  >
                    {label}
                    {subMenu?.length && (
                      <button
                        onClick={() => handleDropdownClick(id)}
                        className="flex items-center justify-center size-6 text-light-dark"
                      >
                        <motion.span
                          animate={{ rotate: openDropdown === id ? 45 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center justify-center"
                        >
                          <Plus />
                        </motion.span>
                      </button>
                    )}
                    {dropdownMenu?.length && (
                      <button
                        onClick={() => handleDropdownClick(id)}
                        className="flex items-center justify-center size-6 text-light-dark"
                      >
                        <motion.span
                          animate={{ rotate: openDropdown === id ? 45 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center justify-center"
                        >
                          <Plus />
                        </motion.span>
                      </button>
                    )}
                  </Link>
                  <AnimatePresence>
                    {dropdownMenu?.length && openDropdown === id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <ul className="grid grid-cols-1 px-2.5 py-2 mb-2">
                          {dropdownMenu.map(({ id, href, label }) => (
                            <li key={id}>
                              <Link
                                href={href}
                                className="px-4 py-2 flex text-light-dark leading-6 hover:text-foreground hover:bg-[#F9F9F9] transition-all duration-500"
                              >
                                {label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {subMenu?.length && openDropdown === id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <ul className="grid grid-cols-1 gap-y-4 px-2.5 py-2 mb-2">
                          {subMenu.map(({ id, title, pages }) => (
                            <li key={id}>
                              <span className="flex pb-1 font-medium leading-6">
                                {title}
                              </span>
                              <ul>
                                {pages?.map(({ href, id, label }) => (
                                  <li key={id}>
                                    <Link
                                      href={href}
                                      className="px-4 py-2 flex text-light-dark leading-6 hover:text-foreground hover:bg-[#F9F9F9] transition-all duration-500"
                                    >
                                      {label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </TabsContent>
          {/* categories links */}
          <TabsContent value="categories" className="px-7 py-3">
            <ul className="flex flex-col">
              {categoriesList.map(({ href, icon, id, label }) => (
                <li key={id} className="group">
                  <Link
                    href={href}
                    className="text-base font-medium flex items-center gap-2.5 py-2 hover:text-blue transition-all duration-500"
                  >
                    <span className="relative shrink-0 flex items-center justify-center">
                      {icon}
                    </span>

                    {label}
                    {/* <div className="absolute top-full left-0 z-50 w-full hidden group-hover:block">
                    <MegaMenu />
                  </div> */}
                  </Link>
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
        <div className="space-y-5 px-7 pb-6 pt-4">
          <HeaderExtraInfo />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavSidebar;
