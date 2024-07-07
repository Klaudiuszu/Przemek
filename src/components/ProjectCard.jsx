import React from "react";
import TextArrow from "../smallComponents/TextArrow";

const ProjectCard = ({ imgUrl, title, cardButtonTitle, path }) => {
  return (
    <div className="project-card-wrapper flex flex-col justify-center xl:gap-16">
      <div className="relative rounded-t-xl flex overflow-hidden h-full w-full">
        <div
          className="xl:h-[420px] xl:w-[670px] xl:h-68 h-auto w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${imgUrl})`,
            paddingBottom: '60.25%'
          }}
        ></div>
      </div>
      <div className="rounded-b-xl mt-3 px-4 py-2 flex flex-col items-center xl:gap-7 gap-3">
        <h2 className="max-w-5xl md:text-5xl text-4xl xl:mb-4 leading-normal">{title}</h2>
        <TextArrow 
          buttonText={cardButtonTitle}
          iconName={''}
          path={path}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
