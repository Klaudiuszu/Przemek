"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "../../translations.config";
import { useLanguage } from '../hooks/useLanguage';

const ProjectsSection = () => {
    const [tag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const { tString } = useTranslation(namespaces.common);

    const { language } = useLanguage();

    const projectsData = [
        {
            id: 1,
            title: tString('card.card1'),
            image: "/images/architektura.png",
            tag: ["All", "Web"],
            path:`/${language}/architecture`,
            previewUrl: 'architecture',
            cardButtonTittle: tString('card.button'),

        },
        {
            id: 2,
            title: tString('card.card2'),
            image: "/images/wnetrza.png",
            tag: ["All", "Web"],
            path:`/${language}/interior`,
            previewUrl: 'interior',
            cardButtonTittle: tString('card.button'),
        },
        {
            id: 3,
            title: tString('card.card3'),
            image: "/images/meble.png",
            tag: ["All", "Web"],
            path:`/${language}/furniture`,
            previewUrl: 'furniture',
            cardButtonTittle: tString('card.button3'),
        },
        {
            id: 4,
            title: tString('card.card4'),
            image: "/images/doradztwo.png",
            tag: ["All", "Web"],
            path:`/${language}/consulting`,
            previewUrl: 'consulting',
            cardButtonTittle: tString('card.button4'),
        },
    ];

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section className="flex flex-col justify-center gap-10 m-12 3xl:m-0 3xl:pb-[240px] max-w-screen-2xl pb-[64px]" id="projects">
            <ul ref={ref} className="flex flex-col align-center	lg:grid lg:grid-cols-2 sm:grid sm:grid-cols-1 justify-center gap-8 md:gap-[100px]">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        className="flex justify-center"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            path={project.path}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                            cardButtonTitle={project.cardButtonTittle}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;