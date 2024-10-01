import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locales/en/translate.json';
import frTranslation from './locales/fr/translate.json';
import arTranslation from './locales/ar/translate.json';

// Translation resources
const resources = {
  en: {
    translation: enTranslation,
  },
  fr: {
    translation: frTranslation,
  },
  ar: {
    translation: arTranslation,
  }
};

// Initialize i18n
i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Passes i18n down to React components
  .init({
    resources,
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });

export default i18n;
