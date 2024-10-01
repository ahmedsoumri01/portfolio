import React, { useState, useEffect } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import PropTypes from "prop-types";

export default function LanguageButton({ openDirection = "bottom", extraClass = "" }) {
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "en";
    setSelectedLanguage(storedLanguage.toUpperCase());
  }, []);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    localStorage.setItem("language", language.toLowerCase());
    window.location.reload(); // Reload to apply language change
  };

  return (
    <div className="relative group">
      <button
        className={`bg-white flex items-center gap-2 min-w-[70px] text-black/80 px-4 py-2 rounded-lg group-hover:bg-blue-900 group-hover:border-white group-hover:text-white ${extraClass}`}
      >
        <div className="flex items-center gap-2">
          {selectedLanguage === "EN" ? (
            <span className="fi fi-gb"></span>
          ) : selectedLanguage === "AR" ? (
            <span className="fi fi-sa"></span>
          ) : (
            <span className="fi fi-fr"></span>
          )}
          {selectedLanguage}
        </div>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute ${openDirection}-10 left-0 w-full bg-white rounded-lg shadow-lg hidden group-hover:block`}
      >
        <button
          onClick={() => handleLanguageChange("EN")}
          className="w-full flex items-center gap-2 text-left py-2 px-2 rounded-t-lg hover:bg-gray-300"
        >
          <span className="fi fi-gb"></span>
          <span>EN</span>
        </button>
        <button
          onClick={() => handleLanguageChange("AR")}
          className="w-full flex items-center gap-2 text-left py-2 px-2 hover:bg-gray-300"
        >
          <span className="fi fi-sa"></span>
          <span>AR</span>
        </button>
        <button
          onClick={() => handleLanguageChange("FR")}
          className="w-full flex items-center gap-2 text-left py-2 px-2 rounded-b-lg hover:bg-gray-300"
        >
          <span className="fi fi-fr"></span>
          <span>FR</span>
        </button>
      </div>
    </div>
  );
}

LanguageButton.propTypes = {
  openDirection: PropTypes.string, // Defines if the dropdown opens upward or downward
  extraClass: PropTypes.string,    // Allows additional CSS class customization
};
