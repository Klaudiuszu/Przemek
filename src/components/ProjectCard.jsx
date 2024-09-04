import React from "react";
import TextArrow from "../smallComponents/TextArrow";

const ProjectCard = ({ imgUrl, title, cardButtonTitle, path }) => {
  return (
    <div className="project-card-wrapper flex flex-col justify-center xl:gap-16 pb-[64px]">
      <div className="relative rounded-t-xl flex overflow-hidden h-full w-full">
        <div
          className="xl:h-[420px] xl:w-[670px] xl:h-68 h-auto w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${imgUrl})`,
            paddingBottom: '60.25%'
          }}
        ></div>
      </div>
      <div className="rounded-b-xl mt-3 px-4 flex flex-col items-center">
        <h2 className="max-w-5xl md:text-[65px] text-4xl leading-normal">{title}</h2>
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
