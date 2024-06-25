import React from 'react';

const TextArrow = ({ buttonText, iconName }) => {
  return (
    <div className="textButtonWrapper cursor-pointer flex items-center justify-center gap-4">
      <button className="textButton">
        {buttonText}
      </button>
      <span className="material-symbols-outlined">
        {iconName}
      </span>
    </div>
  );
};

export default TextArrow;
