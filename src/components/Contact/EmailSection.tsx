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
              <div className="space-y-2">
                <p className="font-medium">Zakres naszych usług obejmuje wykonanie m.in.:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>opinii geotechnicznych,</li>
                  <li>projektów robót geologicznych w celu udokumentowania warunków geologiczno-inżynierskich,</li>
                  <li>dokumentacji geologiczno-inżynierskich,</li>
                  <li>projektów robót geologicznych w celu udokumentowania złóż,</li>
                  <li>dokumentacji geologicznych złóż,</li>
                  <li>projektów zagospodarowania złoża,</li>
                  <li>projektów geotechnicznych,</li>
                  <li>programów badań geotechnicznych,</li>
                  <li>dokumentacji badań podłoża gruntowego,</li>
                  <li>nadzorów geotechnicznych na budowach,</li>
                  <li>operatów wodnoprawnych.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <p className="font-bold text-primary">
                  Posiadamy uprawnienia Ministra Środowiska z zakresu geologii inżynierskiej (kat. VII) oraz geologii złożowej (kat. II).
                </p>
                <div className="w-full h-px bg-stone-300 my-6"></div>
              </div>
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
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailSection;