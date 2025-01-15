import React from "react";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "@constants/namespaces";
import { useLanguage } from "../../hooks/useLanguage";
import Link from "next/link";
import PizzaHamburgerMenu from "./PizzaHamburgerMenu";
import LanguageToggle from "../LanguageToggle";

const Navbar = () => {
  const { tString } = useTranslation(namespaces.common);
  const { language } = useLanguage();

  const navLinks = [
    { title: tString("navbar.navA"), path: `/${language}/#whoWeAre` },
    { title: tString("navbar.navB"), path: `/${language}/#offer` },
    { title: tString("navbar.navC"), path: `/${language}/#contact` },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-10 w-full bg-[#F6EBE7]">
      <div className="flex items-center max-w-7xl mx-auto px-4 py-2 justify-between">
        {/* Left side: Language Toggle */}
        <div className="flex-1 flex justify-start">
        <LanguageToggle  isHidden={true}/>
        </div>
        {/* Center: Logo - with flex-grow */}
        <div className="flex-grow-0 flex-shrink-0 md:w-auto flex justify-center">
          <Link href={`/${language}/`}>
            <img src="/images/Navbar/logo.png" alt="Logo" className="h-20 max-w-full" />
          </Link>
        </div>

        {/* Right side: Links */}
        <div className="flex flex-1 justify-end">
          <div className="hidden xl:flex gap-6 text-2xl flex-nowrap items-center justify-end relative top-2 mundial-Bold">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="font-bold  link text-gray-700 rammetto-one-regular text-base whitespace-nowrap"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden fixed top-0 right-0 bg-white h-screen">
            <PizzaHamburgerMenu />
          </div>
        </div>
      </div>
    </nav>


  );
};

export default Navbar;
