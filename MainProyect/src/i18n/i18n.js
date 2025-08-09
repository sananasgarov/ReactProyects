import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import az from "./locales/az.json";
import ru from "./locales/ru.json";

i18n
  .use(LanguageDetector) // brauzerdən/localStorage-dən dili tapmaq üçün
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      az: { translation: az },
      ru: { translation: ru },
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"],
    },
  });

export default i18n;
