"use client";
import React from "react";
import { GiPhone, GiEnvelope, GiEarthAmerica } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="w-full bg-footerBg text-primary py-12 border-t border-stone-300">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4 gap-2">
              <span className="text-2xl font-bold font-serif">Arch-Geo</span>
            </div>
            <p className="text-textDark text-center md:text-left">
              Pracownia Geologiczna oferująca kompleksowe usługi z zakresu geologii inżynierskiej i złożowej, geotechniki oraz ochrony środowiska
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4 font-serif">Kontakt</h3>
            <ul className="space-y-3 text-textDark">
              <li className="flex items-center">
                <GiPhone className="mr-2 text-accent" />
                <a href="tel:+48733437507" className="hover:text-accent transition">+48 733 437 507</a>
              </li>
              <li className="flex items-center">
                <GiEnvelope className="mr-2 text-accent" />
                <a href="mailto:arch.geo2@gmail.com" className="hover:text-accent transition">arch.geo2@gmail.com</a>
              </li>
              <li className="flex items-center">
                <GiEarthAmerica className="mr-2 text-accent" />
                Grójec i okolice
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-4 font-serif">Godziny pracy</h3>
            <ul className="text-textDark space-y-2">
              <li className="flex justify-between gap-4">
                <span>Pon-Pt:</span>
                <span>8:00-16:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sobota:</span>
                <span>9:00-13:00</span>
              </li>
              <li className="pt-2 text-sm text-stone-500">
                Pilne zlecenia poza godzinami pracy po wcześniejszym kontakcie
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-stone-300 mt-12 pt-6 text-center text-textDark">
          <div className="flex justify-center gap-4 mt-3 text-xs text-stone-500">
            <a href="/privacy-policy" className="hover:text-accent transition-colors">
              Polityka Prywatności
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;