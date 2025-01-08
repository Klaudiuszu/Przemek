import React from "react";
import NavLink from "./NavLink";
import { useLanguage } from "../../hooks/useLanguage";
import { namespaces } from "@constants/namespaces";
import { useTranslation } from "next-translations/hooks";
import { useState } from "react";

const MenuOverlay = ({ links, navbarOpen, locale, setNavbarOpenClose }) => {
  const { language, handleChangeLanguage } = useLanguage();
  const [isOfferOpen, setIsOfferOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const toggleOfferSubMenu = () => {
    setIsOfferOpen(!isOfferOpen);
  };

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const { tString } = useTranslation(namespaces.common);

  return (
    <nav className={`nav-bar ${navbarOpen ? 'nav-toggle -z-50' : 'nav-close'}`}>
      <button
        onClick={() => setNavbarOpenClose(false)}
        className={`flex items-center fixed px-3 py-2 rounded text-slate-200 navbar-button transition-transform transform hover:rotate-1 ${navbarOpen ? 'navbar-button-close' : ''}`}
      >
        <img className={`w-5 z-10 ${navbarOpen ? '' : 'hidden'}`} src="/images/closeIcon.svg" alt="Close Icon" />
      </button>
      <ul className="menu-list text-left" style={{ fontSize: "22px" }}>
        {(links || []).map((link, index) => (
          <li key={index} className="menu-overlay-li my-2">
            <button
              onClick={() => handleLinkClick(index)}
              className="cursor-pointer focus:outline-none menu-link textButtonWrapper"
            >
              {activeLink === index && <img className="inline mr-2" />}
              <NavLink href={link.path} title={link.title} />
            </button>
          </li>
        ))}
      </ul>
      <button
        className="navbar-language overlay"
        onClick={() => handleChangeLanguage(language === 'en' ? 'pl' : 'en')}
      >
        {locale === "en" ? "PL" : "EN"}
      </button>

    </nav>

  );
};

export default MenuOverlay;
