"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_3o2brtv", "template_4sxuphf", form.current, {
        publicKey: "ca-t_X-CXra-WgDAI",
      })
      .then(() => setEmailSubmitted(true))
      .catch((error) => console.log("FAILED...", error.text));
  };

  return (
    <section className="w-full py-20 bg-background" id="contact">
      <div className="max-w-screen-lg mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row gap-8 items-center"
        >
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-primary mb-4">
              <span className="whitespace-nowrap">Pracownia Geologiczna</span>
              <span className="whitespace-nowrap block">Arch-Geo</span>
            </h2>
            <div className="space-y-4 text-textDark">
              <p>
                Oferujemy usługi z zakresu geologii inżynierskiej i złożowej, geotechniki oraz ochrony środowiska.
              </p>
              
              <div className="space-y-2">
                <p className="font-medium">Nasze usługi obejmują między innymi:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Opinie geotechniczne</li>
                  <li>Projekty robót geologicznych</li>
                  <li>Dokumentacje geologiczno-inżynierskie</li>
                  <li>Dokumentacje geologiczne złóż</li>
                  <li>Projekty zagospodarowania złoża</li>
                  <li>Programy badań geotechnicznych</li>
                  <li>Nadzory geotechniczne na budowach</li>
                  <li>Operaty wodnoprawne</li>
                </ul>
              </div>

              <p>
                Posiadamy uprawnienia Ministra Środowiska z zakresu geologii inżynierskiej (kat. VII) 
                oraz geologii złożowej (kat. II).
              </p>

              <p className="font-medium text-primary">
                Zapraszamy do kontaktu - odpowiemy na wszystkie pytania dotyczące Twojego projektu.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-md border border-stone-200 w-full">
            {emailSubmitted ? (
              <div className="text-center py-8">
                <h3 className="text-2xl font-bold text-success mb-2">Dziękujemy!</h3>
                <p className="text-textDark">
                  Odezwiemy się w ciągu 24 godzin.
                </p>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Formularz kontaktowy</h3>
                
                <div>
                  <input
                    name="user_name"
                    type="text"
                    required
                    placeholder="Imię i nazwisko"
                    className="w-full p-3 bg-background text-textDark border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <input
                    name="user_email"
                    type="email"
                    required
                    placeholder="Adres e-mail"
                    className="w-full p-3 bg-background text-textDark border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <input
                    name="user_phone"
                    type="tel"
                    placeholder="Telefon (opcjonalnie)"
                    className="w-full p-3 bg-background text-textDark border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Opis potrzebnych usług geologicznych"
                    className="w-full p-3 bg-background text-textDark border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-primary hover:bg-darkRed text-white font-medium rounded transition"
                >
                  Wyślij zapytanie
                </button>

                <p className="text-sm text-textDark text-center">
                  Możesz również kontaktować się bezpośrednio pod numerem: 
                  <span className="font-medium"> 733 437 507</span>
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailSection;