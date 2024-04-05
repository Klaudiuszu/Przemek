import React from "react";
import NavLink from "./NavLink";
import { useLanguage } from "../hooks/useLanguage";

const MenuOverlay = ({ links, navbarOpen, locale }) => {
  const {language, handleChangeLanguage} = useLanguage();  

  return (
    <ul className={`nav-bar ${navbarOpen ? 'nav-toggle' : ''}`}>
    {(links || []).map((link, index) => (
      <li key={index} className="menu-overlay-li">
        <NavLink href={link.path} title={link.title} />
      </li>
    ))}
    <a className="navbar-language overlay" onClick={ () => {handleChangeLanguage(language === 'en' ? 'pl' : 'en')}}>
      {locale === "en" ? "PL" : "EN"}
    </a>
    </ul>
  );
};

export default MenuOverlay;
