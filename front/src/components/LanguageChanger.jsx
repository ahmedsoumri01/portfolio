import React, { useState, useEffect } from 'react';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useTranslation } from 'react-i18next';
import PropTypes from "prop-types";

const LanguageButton = ({ openDirection = "bottom", extraClass = "" }) => {
  const { i18n } = useTranslation();

  const languages = [
    { value: 'en', label: 'EN', flagIcon: 'fi-gb' },
    { value: 'fr', label: 'FR', flagIcon: 'fi-fr' },
    { value: 'ar', label: 'AR', flagIcon: 'fi-sa' }
  ];

  const [lang, setLang] = useState(localStorage.getItem('selectedLanguage') || 'en');
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    localStorage.setItem('selectedLanguage', lang);
    i18n.changeLanguage(lang);
    document.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang, i18n]);

  const handleChange = (value) => {
    setLang(value);
    setShowDropdown(false);
  };

  const selectedLanguageData = languages.find((item) => item.value === lang);

  return (
    <div className="relative inline-block mx-2">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className={`bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 pr-10 cursor-pointer flex items-center ${extraClass}`}
      >
        <span className={`fi ${selectedLanguageData.flagIcon} mr-2`}></span>
        {selectedLanguageData.label}
      </button>

      {/* Dropdown Menu */}
      <div className={`absolute z-10 mt-1 w-full bg-white border border-gray-500 rounded-lg transition-opacity duration-300 ease-out ${showDropdown ? 'opacity-100' : 'opacity-0 pointer-events-none'} transform ${showDropdown ? 'translate-y-0' : '-translate-y-1'}`}>
        {languages.map((language) => (
          <div
            key={language.value}
            className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
            onClick={() => handleChange(language.value)}
          >
            <span className={`fi ${language.flagIcon} mr-2`}></span>
            <span className='text-black'>
            {language.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

LanguageButton.propTypes = {
  openDirection: PropTypes.string, // Defines if the dropdown opens upward or downward
  extraClass: PropTypes.string,    // Allows additional CSS class customization
};

export default LanguageButton;
