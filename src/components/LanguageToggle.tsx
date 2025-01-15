import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface LanguageToggleProps {
  isHidden: boolean;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ isHidden }) => {
  const { language, handleChangeLanguage } = useLanguage();

  return (
    <button
      onClick={() => handleChangeLanguage(language === 'en' ? 'pl' : 'en')}
      className={`xl:flex text-gray-700 font-semibold uppercase text-2xl relative top-2 mundial-Bold ${isHidden ? 'hidden' : ''}`}
    >
      {language === 'en' ? 'EN' : 'PL'}
    </button>
  );
};

export default LanguageToggle;
