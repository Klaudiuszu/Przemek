import React from "react";
import NavLink from "./NavLink";
import { useLanguage } from "../hooks/useLanguage";

const MenuOverlay = ({ links, navbarOpen, locale, setNavbarOpenClose }) => {
  const { language, handleChangeLanguage } = useLanguage();

  return (
    <ul className={`nav-bar ${navbarOpen ? 'nav-toggle' : ''}`}>
      <button
        onClick={() => setNavbarOpenClose(false)}
        className={`flex items-center fixed px-3 py-2 rounded text-slate-200 navbar-button ${navbarOpen ? 'navbar-button-close' : ''}`}
      >
        <img className={` w-5 z-10 ${navbarOpen ? '' : 'hidden'}`} src="/images/closeIcon.svg"></img>
      </button>
      {(links || []).map((link, index) => (
        <li key={index} className="menu-overlay-li">
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
      <a className="navbar-language overlay" onClick={() => { handleChangeLanguage(language === 'en' ? 'pl' : 'en') }}>
        {locale === "en" ? "PL" : "EN"}
      </a>
    </ul>
  );
};

export default MenuOverlay;
