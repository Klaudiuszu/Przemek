import React from "react";
import Link from "next/link";
import PizzaHamburgerMenu from "./PizzaHamburgerMenu";

const Navbar = () => {

  const navLinks = [
    { title: 'Oferta', path: `/#offer` },
    { title: 'Kontakt', path: `/#contact` },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-10 w-full font-bold bg-[#F6EBE7]">
      <div className="flex items-center max-w-7xl mx-auto px-4 py-2 justify-between">
        <div className="flex-1 flex justify-start">
        </div>
        <div className="flex-grow-0 flex-shrink-0 md:w-auto flex justify-center">
          <Link href={`/`}>
          <img src="/images/logo.png" alt="Logo" className="h-20 max-w-full" />
          </Link>
        </div>
        <div className="flex flex-1 justify-end">
          <div className="hidden xl:flex font-bold gap-6 text-2xl flex-nowrap items-center justify-end relative top-2">
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
          <div className="xl:hidden">
            <PizzaHamburgerMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
