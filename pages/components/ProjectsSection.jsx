"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import { useIntl } from "react-intl";

const ProjectsSection = () => {
    const intl = useIntl();
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const projectsData = [
        {
            id: 1,
            title: `${intl.formatMessage({id: "offer.card1"})}`,
            description: `${intl.formatMessage({id: "offer.card1Desc"})}`,
            image: "/images/projects/1.png",
            tag: ["All", "Web"],
            gitUrl: "/architekture",
            previewUrl: "/architecture",
        },
        {
            id: 2,
            title: `${intl.formatMessage({id: "offer.card2"})}`,
            description: `${intl.formatMessage({id: "offer.card2Desc"})}`,
            image: "/images/projects/2.png",
            tag: ["All", "Web"],
            gitUrl: "/interior",
            previewUrl: "/interior",
        },
        {
            id: 3,
            title: `${intl.formatMessage({id: "offer.card3"})}`,
            description: `${intl.formatMessage({id: "offer.card3Desc"})}`,
            image: "/images/projects/3.png",
            tag: ["All", "Web"],
            gitUrl: "/consulting",
            previewUrl: "/consulting",
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
        <section className="flex flex-col justify-center gap-10 m-10 lg:py-16 max-w-screen-2xl" id="projects">
            <div className="flex flex-col lg:grid justify-center gap-8 lg:grid-cols-2 items-center py-8 px-4 lg:gap-16 lg:px-16 offer-me-section-wrapper">
                <div className="justify-center text-3xl md:text-5xl items-center lg:items-start text-center gap-4 mt-4  lg:text-left flex flex-col h-full">
                    <h2 className="offer-me-header mb-4">{intl.formatMessage({ id: "offer.header" })}</h2>
                </div>
            </div>
            <ul ref={ref} className="flex flex-col align-center	 lg:grid gap-8 lg:grid-cols-3 sm:grid sm:grid-cols-2    justify-center gap-8 md:gap-12">
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
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                            cardButtonTitle={intl.formatMessage({id: "offer.button"})}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;