"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "../../../translations.config";
import Heading from "../UI/Heading";
import Image from "next/image";

const GallerySection = () => {
  const { tString } = useTranslation(namespaces.common);

  const photos = Array.from({ length: 10 }, (_, i) => `/images/p${i + 1}.jpg`);

  const aspectRatios = [
    "aspect-square",
    "aspect-[4/5]",
    "aspect-[3/4]",
    "aspect-square",
    "aspect-[3/4]",
    "aspect-[3/4]",
    "aspect-square",
    "aspect-[4/5]",
    "aspect-[3/2]",
    "aspect-[3/2]"
  ];

  return (
    <div>
      <section className="flex justify-center w-full bg-orange bg-opacity-20 pb-24 pt-20" id="gallery">
        <div className="max-w-screen-2xl px-4 w-full">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading>{tString("gallery.header")}</Heading>
            <p className="text-textDark text-lg mt-4 max-w-2xl mx-auto">
              {tString("gallery.subtitle")}
            </p>
          </motion.div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                className={`relative break-inside-avoid rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${aspectRatios[index]}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Image
                  src={photo}
                  alt={`Gallery photo ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-medium">
                    {tString(`gallery.photo${index + 1}`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full relative bg-darkRed">
      </div>
    </div>
  );
};

export default GallerySection;