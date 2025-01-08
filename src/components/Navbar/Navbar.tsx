import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "@constants/namespaces";
import { useLanguage } from "../../hooks/useLanguage";
import Link from "next/link";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { tString } = useTranslation(namespaces.common);
  const { language, handleChangeLanguage } = useLanguage();

  const navLinks = [
    { title: tString("navbar.navA"), path: `/${language}/#whoWeAre` },
    { title: tString("navbar.navB"), path: `/${language}/#offer` },
    { title: tString("navbar.navC"), path: `/${language}/#contact` },
  ];

  return (
<nav className="absolute top-0 left-0 right-0 z-10 w-full bg-[#ffe2e1]">
  <div className="flex items-center max-w-7xl mx-auto px-4 py-2 justify-between">
    {/* Left side: Language Toggle */}
    <div className="flex-1 flex justify-start">
      <button
        onClick={() => handleChangeLanguage(language === 'en' ? 'pl' : 'en')}
        className="hidden xl:flex text-gray-700 font-semibold uppercase text-2xl relative top-2 mundial-Bold"
      >
        {language === 'en' ? 'EN' : 'PL'}
      </button>
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
            className="font-bold link text-gray-700 uppercase whitespace-nowrap text-2xl"
          >
            {link.title}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setNavbarOpen(true)}
        className="flex xl:hidden items-center text-gray-700 gap-2 py-2 text-2xl"
      >
        <Bars3Icon className="h-8 w-8" />
      </button>
    </div>
  </div>

  {/* MenuOverlay - only on small screens */}
  {navbarOpen && (
    <div className="xl:hidden fixed top-0 right-0 bg-white h-screen w-2/3">
      <MenuOverlay
        setNavbarOpenClose={setNavbarOpen}
        links={navLinks}
        navbarOpen={navbarOpen}
        locale={language}
      />
    </div>
  )}
</nav>


  );
};

export default Navbar;
