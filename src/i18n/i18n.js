import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import translationUz from './locales/uz.json';
import translationEn from './locales/en.json';
import translationRu from './locales/ru.json';

// the translations
const resources = {
  uz: {
    translation: translationUz
  },
  en: {
    translation: translationEn
  },
  ru: {
    translation: translationRu
  }
};

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  // init i18next
  .init({
    resources,
    fallbackLng: 'uz',
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;
