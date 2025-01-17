import React from "react";
import Wave from "react-wavify";

const SecondSection: React.FC = () => {
  return (
    <div className="relative w-ful bottom-32">
      <div className="absolute top-0 left-0 w-full">
        <Wave
          fill="#EC4613"
          paused={false}
          options={{
            height: 50,
            amplitude: 40,
            speed: 0.2,
            points: 4,
          }}
        />
      </div>
      <div className="relative w-full h-[500px] top-32 flex flex-col justify-center items-center z-1 bg-orange">
      </div>
    </div>
  );
};

export default SecondSection;
