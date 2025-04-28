import React from "react";
import Link from "next/link";
import PizzaHamburgerMenu from "./PizzaHamburgerMenu";

const Navbar = () => {
  const navLinks = [
    { title: 'Oferta', path: `/#offer` },
    { title: 'Kontakt', path: `/#contact` },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full font-bold backdrop-blur-md bg-white/30 shadow-sm border-b border-white/20">
      <div className="flex items-center max-w-7xl mx-auto px-6 py-4 justify-between">
        <div className="flex-1 flex justify-start">
          <Link 
            href="/" 
            className="text-primary text-2xl font-serif font-bold hover:text-darkRed transition-colors duration-300"
          >
            Arch Geo
          </Link>
        </div>
        
        <div className="flex flex-1 justify-end items-center">
          <div className="hidden xl:flex font-bold gap-8 text-lg flex-nowrap items-center">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="font-sans link text-textDark hover:text-primary transition-colors duration-300 whitespace-nowrap relative group"
              >
                {link.title}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
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