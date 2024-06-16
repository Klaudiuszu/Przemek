import React from "react";
import { useLanguage } from '../hooks/useLanguage';

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, cardButtonTitle }) => {

  const {language} = useLanguage();  

  return (
    <div className="project-card-wrapper w-64">
      <div
        className="h-52 md:h-68 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
      </div>
      <div className="md:h-40 rounded-b-xl mt-3 px-4 py-2 flex gap-1 flex-col">
        <h5 className="project-card-text text-xl font-semibold">{title}</h5>
        <p className="text-sm">{description}</p>
        <a href={previewUrl} className="font-semibold project-card-button flex align-center">{cardButtonTitle}&nbsp;
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;