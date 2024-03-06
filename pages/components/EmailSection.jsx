"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useIntl } from "react-intl";
import { motion } from "framer-motion";


const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const intl = useIntl();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
      console.log('work')
    }
  };

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
              {intl.formatMessage({ id: "email.header" })}
            </h5>
            <h3 className="font-bold md:text-2xl my-3 text-1xl">
              {intl.formatMessage({ id: "email.info" })}
            </h3>
            <p className="text-sm md:text-xl">1.{" "}
              {intl.formatMessage({ id: "email.step1" })}
            </p>
            <p className="text-sm md:text-xl">2.{" "}
              {intl.formatMessage({ id: "email.step2" })}
            </p>
            <p className="text-sm md:text-xl">3.{" "}
              {intl.formatMessage({ id: "email.step3" })}
            </p>
            <p className="text-sm md:text-xl">4.{" "}
              {intl.formatMessage({ id: "email.step4" })}
            </p>
          </div>
          <div className="flex justify-end">
            <Image alt="emailImage" src="/images/aboutMe03.png" width={413} height={550} />
          </div>
        </div>
          <div className=" grid gap-8  items-center py-8 px-4 lg:gap-16 lg:px-16">
            {emailSubmitted ? (
              <p className="text-green-500 text-sm mt-2">
                Email sent successfully!
              </p>
            ) : (
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    className="border border-[#A6A6A6] placeholder-[#171717] text-[#171717] text-sm rounded-lg block w-full p-2.5"
                    placeholder={intl.formatMessage({ id: "email.name" })}

                  />
                </div>
                <div className="mb-6">
                  <input
                    name="subject"
                    type="text"
                    id="subject"
                    required
                    className="border border-[#A6A6A6] placeholder-[#171717] text-[#171717] text-sm rounded-lg block w-full p-2.5"
                    placeholder={intl.formatMessage({ id: "email.email" })}
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    name="message"
                    id="message"
                    className="border border-[#A6A6A6] placeholder-[#171717] text-[#171717] h-40 text-sm rounded-lg block w-full p-2.5"
                    placeholder={intl.formatMessage({ id: "email.text" })}
                  />
                </div>
                <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="bg-primary-500 focus:ring-4 focus:ring-gray-100 hover:bg-gray-100 border border-[#A6A6A6] max-w-40 text-dark font-medium py-2.5 px-5 rounded-lg w-full"
                >
                  {intl.formatMessage({ id: "email.send" })}
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