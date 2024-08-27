import React from 'react';
import { useRouter } from 'next/router';

const TextArrow = ({ buttonText, iconName, path }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(path);
  };

  return (
    <div className="textButtonWrapper cursor-pointer flex items-center justify-center gap-4">
      <button onClick={handleClick} className="textButton mundial-font font-semibold">
        {buttonText}
      </button>
      <span className="material-symbols-outlined" onClick={handleClick}>
        {iconName}
      </span>
    </div>
  );
};

export default TextArrow;
