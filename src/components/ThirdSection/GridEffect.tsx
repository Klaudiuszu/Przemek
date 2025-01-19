import React, { useEffect, useState } from "react";

const GridEffect = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const numOfSquares = Math.ceil(window.innerWidth / 32);

  const squares = Array.from({ length: numOfSquares }, (_, index) => (
    <div
      key={index}
      className={`w-8 h-8 bg-orange ${
        index % 2 === 1 ? "relative bottom-8" : ""
      }`}
    ></div>
  ));

  return (
    <div className="relative w-full bg-orange">
      <div className="absolute top-0 left-0 w-full flex items-center justify-center">
        <div className="w-full h-[1px] bg-transparent"></div>
      </div>
      <div className="absolute top-1/2 left-0 w-full flex">
        <div className="flex w-full">{squares}</div>
      </div>
    </div>
  );
};

export default GridEffect;
