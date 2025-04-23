"use client";
import React from "react";
import { GiPhone, GiEnvelope, GiEarthAmerica } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="w-full bg-footerBg text-primary py-12 border-t border-stone-300">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">GeoBadania</span>
            </div>
            <p className="text-textDark text-center md:text-left">
              Profesjonalne usługi geologiczne w Grójcu i okolicach
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-textDark">
              <li className="flex items-center">
                <GiPhone className="mr-2 text-accent" />
                +48 733 437 507
              </li>
              <li className="flex items-center">
                <GiEnvelope className="mr-2 text-accent" />
                kontakt@geobadania.pl
              </li>
              <li className="flex items-center">
                <GiEarthAmerica className="mr-2 text-accent" />
                Grójec, ul. Geologiczna 15
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-4">Godziny pracy</h3>
            <ul className="text-textDark space-y-2">
              <li>Pon-Pt: 8:00-16:00</li>
              <li>Sobota: 9:00-13:00</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-stone-300 mt-12 pt-6 text-center text-textDark">
          <p>© {new Date().getFullYear()} GeoBadania. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;