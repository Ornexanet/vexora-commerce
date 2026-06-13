"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Plus, User } from "@/lib/icons";
import { Menu } from "lucide-react";
import Link from "next/link";
import { navMenu } from ".";
import CurrencySelect from "./currencySelect";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const MobileNavSidebarTwo = () => {
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
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="px-6 pt-10 pb-5 flex flex-col justify-between gap-10"
      >
        <nav>
          <ul className="flex flex-col gap-4">
            {navMenu.map(({ id, label, path, subMenu, dropdownMenu }) => (
              <li key={id}>
                <Link
                  href={path}
                  className="font-medium lg:text-lg hover:text-blue transition-all duration-500 flex items-center justify-between gap-2.5"
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
                      <ul className="grid grid-cols-1 gap-y-4 px-2.5 py-2 rounded-lg mb-2">
                        {subMenu.map(({ id, title, pages }) => (
                          <li key={id}>
                            <span className="flex pb-1 font-medium leading-6">
                              {title}
                            </span>
                            <ul>
                              {pages.map(({ href, id, label }) => (
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
        </nav>
        <div className="flex items-center gap-5">
          <CurrencySelect />
          <span className="border-r border-r-[#B0B5BB] h-6"></span>
          <button className="flex items-center gap-1">
            <User className="lg:size-6 size-5 [&>path]:stroke-3" />
            <p>Account</p>
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavSidebarTwo;
