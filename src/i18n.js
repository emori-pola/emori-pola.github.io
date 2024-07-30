import { createI18n } from "vue-i18n";

const messages = {
  en: {
    message: {
      hello: "This is an English text.",
    },
  },
  ja: {
    message: {
      hello: "これは日本語のテキストです。",
    },
  },
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
