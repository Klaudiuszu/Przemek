import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, navbarOpen, toggleLanguage, locale }) => {

  return (
    <ul className={`nav-bar ${navbarOpen ? 'nav-toggle' : ''}`}>
    {links.map((link, index) => (
      <li key={index} className="menu-overlay-li">
        <NavLink href={link.path} title={link.title} />
      </li>
    ))}
        <a className="navbar-language overlay" onClick={toggleLanguage}>
              {locale === "en" ? "PL" : "EN"}
            </a>
  </ul>
  );
};

export default MenuOverlay;
