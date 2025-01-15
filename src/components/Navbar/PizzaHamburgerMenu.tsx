import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "@constants/namespaces";
import LanguageToggle from "../LanguageToggle";

const PizzaHamburgerMenu = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { tString } = useTranslation(namespaces.common);

  return (
    <div className="relative">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setNavbarOpen(!navbarOpen)}
        className="fixed top-8 right-4 z-50 flex items-center text-2xl transition-transform transform hover:rotate-12"
      >
        {navbarOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
      </button>

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-yellow-100 shadow-lg transition-transform duration-300 ease-in-out ${navbarOpen ? "translate-x-0" : "translate-x-full"
          } w-full sm:w-2/4 xl:w-1/5 z-40`}
      >
        <ul className="flex flex-col items-center justify-around h-full rammetto-one-regular text-base">
          <li className="hover:bg-yellow-200 transition-colors duration-500 h-full w-full flex justify-center items-center opacity-30 hover:opacity-80">
            <a href="#whoWeAre">{tString("pizzaHamburgerMenu.navA")}</a>
          </li>
          <li className="hover:bg-orange-200 transition-colors duration-500 h-full w-full flex justify-center items-center opacity-30 hover:opacity-80">
            <a href="#offer">{tString("pizzaHamburgerMenu.navB")}</a>
          </li>
          <li className="hover:bg-red-200 transition-colors duration-500 h-full w-full flex justify-center items-center opacity-30 hover:opacity-80">
            <a href="#contact">{tString("pizzaHamburgerMenu.navC")}</a>
          </li>
          <li className="hover:bg-red-200 transition-colors duration-500 h-full w-full flex justify-center items-center opacity-30 hover:opacity-80">
            <LanguageToggle isHidden={false} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PizzaHamburgerMenu;
