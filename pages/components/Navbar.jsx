"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { locale, push } = useRouter();
  const intl = useIntl();

  const toggleLanguage = () => {
    const newLocale = locale === "pl" ? "en" : "pl";
    push("/", undefined, { locale: newLocale });
  };

  const navLinks = [
    {
      title: intl.formatMessage({ id: "navbar.about" }),
      path: "#about",
    },
    {
      title: intl.formatMessage({ id: "navbar.architecture" }),
      path: "#projects",
    },
    {
      title: intl.formatMessage({ id: "navbar.interior" }),
      path: "#projects",
    },
    {
      title: intl.formatMessage({ id: "navbar.consulting" }),
      path: "#projects",
    },
    {
      title: intl.formatMessage({ id: "navbar.contact" }),
      path: "#contact",
    },
  ];

  return (
    <nav className="navbar absolute mx-auto top-0 left-0 right-1 z-10">
      <div>
      </div>
      <div className="flex max-w-screen-2xl min-w-72	flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-2xl font-semibold"
        >
          JOFI STUDIO
        </Link>
        <div className="mobile-menu block lg:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2   rounded  text-slate-200 navbar-button"
            >
              <Bars3Icon className="h-10 w-10 z-10" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 rounded text-slate-200 navbar-button navbar-button-close"
            >
              <XMarkIcon className="h-10 w-10 z-10"/>
            </button>
          )}
        </div>
        <div className="menu hidden lg:block lg:w-auto" id="navbar">
          <ul className="navbar-link-wrapper flex p-4 md:p-0 md:flex-row mt-0 uppercase">
            {navLinks.map((link, index) => (
              <li key={index} className="navbar-single-link">
                < NavLink path={link.path} href={link.path} title={link.title} onClick={() => setActiveLink(true)} />
              </li>
            ))}
            <li className="navbar-language" onClick={toggleLanguage}>
              {locale === "en" ? "PL" : "EN"}
            </li>
          </ul>
        </div>
      </div>
      <MenuOverlay links={navLinks} navbarOpen={navbarOpen} toggleLanguage={toggleLanguage} locale={locale}/>
    </nav >
  );
};

export default Navbar;
