import React from "react";

const FirstSection = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/firstSection/firstSection.jpg')`,
      }}
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-white text-4xl">Serdecznie witamy!</h1>
      </div>
    </div>
  );
};

export default FirstSection;
