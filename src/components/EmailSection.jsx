"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "../../translations.config";
import { useRef } from "react";

import emailjs from '@emailjs/browser';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const { tString } = useTranslation(namespaces.common);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      setEmailSubmitted(true);
    }
  };

  //----------------------------------------
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fwq83rq', 'template_5ks9aoo', form.current, {
        publicKey: 'v2omZvWvuxAy8tssx',
      })
      .then(
        () => {
          setEmailSubmitted(true);
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
//----------
  return (
    <section
      id="contact"
      className="flex justify-center align-center lg:py-16 max-w-screen-2xl relative"
    >
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col lg:grid gap-8 lg:grid-cols-2 items-center py-8 px-4 lg:gap-16 lg:px-16">
          <div className="text-center justify-center gap-4 mt-4 items-center lg:items-start lg:text-left flex flex-col ">
            <h5 className="font-bold md:text-5xl text-3xl">
              {tString('email.header')}
            </h5>
            <h3 className="font-bold md:text-2xl my-3 text-1xl">
              {tString('email.info')}
            </h3>
            <p className="text-sm md:text-xl">1.{" "}
              {tString('email.step1')}
            </p>
            <p className="text-sm md:text-xl">2.{" "}
              {tString('email.step2')}
            </p>
            <p className="text-sm md:text-xl">3.{" "}
              {tString('email.step3')}
            </p>
            <p className="text-sm md:text-xl">4.{" "}
              {tString('email.step4')}
            </p>
          </div>
          <div className="flex justify-end">
            <img alt="emailImage" src="/images/aboutMe03.png" className="w-413 h-550" />
          </div>
        </div>
        <div className=" grid gap-8  items-center py-8 px-4 lg:gap-16 lg:px-16">
          {emailSubmitted ? (
            <h1 className="text-[#C1E1C1] text-md mt-2">
              {tString('email.sent-mail')}
            </h1>
          ) : (
            <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
              <div className="mb-6">
                <input
                  name="user_email"
                  type="email"
                  id="to"
                  required
                  className="border border-[#A6A6A6] placeholder-[#171717] text-[#171717] text-sm rounded-lg block w-full p-2.5"
                  placeholder={tString('email.email')}

                />
              </div>
              <div className="mb-6">
                <input
                  name="user_name"
                  type="text"
                  id="senderName"
                  required
                  className="border border-[#A6A6A6] placeholder-[#171717] text-[#171717] text-sm rounded-lg block w-full p-2.5"
                  placeholder={tString('email.name')}
                />
              </div>
              <div className="mb-6">
                <textarea
                  name="message"
                  id="subject"
                  className="border border-[#A6A6A6] placeholder-[#171717] text-[#171717] h-40 text-sm rounded-lg block w-full p-2.5"
                  placeholder={tString('email.text')}
                />
              </div>
              <div className="flex justify-center items-center">
              <button
                type="submit"
                value="Send"
                className="bg-primary-500 focus:ring-4 focus:ring-gray-100 hover:bg-gray-100 border border-[#A6A6A6] max-w-40 text-dark font-medium py-2.5 px-5 rounded-lg w-full"
              >
                {tString('email.send')}
              </button>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default EmailSection;