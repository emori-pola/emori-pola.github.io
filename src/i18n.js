import { createI18n } from "vue-i18n";
import en from "./locales/en";
import ja from "./locales/ja";

const getBrowserLocale = () => {
  const navigatorLocale =
    navigator.languages !== undefined
      ? navigator.languages[0]
      : navigator.language;

  if (!navigatorLocale) {
    return undefined;
  }

  const trimmedLocale = navigatorLocale.trim().split(/-|_/)[0];
  return trimmedLocale;
};

const i18n = createI18n({
  legacy: false,
  locale: getBrowserLocale() || "en",
  fallbackLocale: "en",
  messages: { en, ja },
});

export default i18n;

// const messages = {
//   en,
//   ja,
// };

// const getBrowserLanguage = () => {
//   const lang = navigator.language || navigator.userLanguage;
//   return lang.startsWith("ja") ? "ja" : "en";
// };

// const i18n = createI18n({
//   locale: getBrowserLanguage(),
//   fallbackLocale: "en",
//   messages,
// });

// export default i18n;
