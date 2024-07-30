import { createI18n } from "vue-i18n";
import en from "./en";
import ja from "./ja";

const messages = {
  en,
  ja,
};

const getBrowserLanguage = () => {
  const lang = navigator.language || navigator.userLanguage;
  return lang.startsWith("ja") ? "ja" : "en";
};

const i18n = createI18n({
  locale: getBrowserLanguage(),
  fallbackLocale: "en",
  messages,
});

export default i18n;
