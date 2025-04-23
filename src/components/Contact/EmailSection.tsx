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
      .sendForm("service_fwq83rq", "template_5ks9aoo", form.current, {
        publicKey: "Myy576uynffnGZfw0",
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
          {/* Sekcja tekstowa */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-primary mb-4">Badania geologiczne Grójec</h2>
            <div className="space-y-4 text-textDark">
              <p>
                Specjalistyczne odwierty i analizy gruntu wykonywane zgodnie z normami budowlanymi.
              </p>
              <p>
                Oferujemy kompleksowe badania podłoża pod inwestycje budowlane wraz z wymaganą dokumentacją.
              </p>
              <p className="font-medium text-primary">
                Skontaktuj się w celu omówienia szczegółów Twojego projektu.
              </p>
            </div>
          </div>

          {/* Formularz */}
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
                    rows={3}
                    required
                    placeholder="Opis potrzebnych badań"
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