"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "../../../translations.config";
import emailjs from "@emailjs/browser";
import Heading from "../UI/Heading";
import SubHeading from "../UI/SubHeading";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const { tString } = useTranslation(namespaces.common);
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
    <section className="w-full bg-background py-12">
      <div className="max-w-screen-2xl mx-auto px-6">
        <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }}>
          <div className="text-center mb-12 flex flex-col gap-12 justify-center items-center">
            <Heading>{tString("email.header")}</Heading>
            <p className="text-body text-textDark max-w-[900px] text-center">{tString("email.info")}</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            <div className="flex-1 flex flex-col">
              <SubHeading>{tString("email.step0")}</SubHeading>
              <ul className="mt-4 space-y-3 text-textDark text-body">
                <li className="flex items-center">{tString("email.step1")}</li>
                <li className="flex items-center">{tString("email.step2")}</li>
                <li className="flex items-center">{tString("email.step3")}</li>
              </ul>
            </div>
            <div className="flex-1 p-0 rounded-lg flex flex-col">
              {emailSubmitted ? (
                <h3 className="text-subheading text-success font-semibold text-center flex-1 flex items-center justify-center">
                  {tString("email.sent-mail")}
                </h3>
              ) : (
                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 flex-1">
                  <input
                    name="user_name"
                    type="text"
                    required
                    placeholder={tString("email.name")}
                    className="p-3 bg-background text-textDark rounded-md border border-darkRed focus:outline-none  focus:ring-primary placeholder-darkRed placeholder:opacity-20"
                  />
                  <input
                    name="user_email"
                    type="email"
                    required
                    placeholder={tString("email.email")}
                    className="p-3 bg-background text-textDark rounded-md border border-darkRed focus:outline-none placeholder-darkRed placeholder:opacity-20"
                  />
                  <textarea
                    name="message"
                    placeholder={tString("email.text")}
                    className="p-3 h-28 bg-background text-textDark rounded-md border border-darkRed focus:outline-none placeholder-darkRed placeholder:opacity-20"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-primary text-white font-semibold rounded-md hover:bg-darkRed transition"
                  >
                    🚀 {tString("email.send")}
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailSection;
